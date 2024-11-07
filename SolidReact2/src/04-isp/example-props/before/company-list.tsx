import { useGetCompanies } from './use-get-companies';

export function CompanyList() {
  const { companies, isLoadingCompanies } = useGetCompanies();

  return isLoadingCompanies ?
    <>Loading Companies</> :
    companies.map((company) => (
    <div>
      <div>Company Name: {company.name}</div>
      {/*
        Cannot use Thumbnail, company is not compatible with user
        <Thumbnail user={company} />
      */}
    </div>
    ))
}
