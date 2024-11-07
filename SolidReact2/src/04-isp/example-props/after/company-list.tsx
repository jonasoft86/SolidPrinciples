import { Thumbnail } from './thumbnail';
import { useGetCompanies } from './use-get-companies';

export function CompanyList() {
  const { companies, isLoadingCompanies } = useGetCompanies();

  return isLoadingCompanies ?
    <>Loading Companies</> :
    companies.map((company) => (
    <div>
      <div>Company Name: {company.name}</div>
      <Thumbnail imageUrl={company.logoThumbnail} />
    </div>
    ))
}
