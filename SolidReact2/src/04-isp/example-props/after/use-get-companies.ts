import { Company } from "../../../types/company";

export function useGetCompanies() {
  const companies: Company[] = [];
  const isLoadingCompanies: boolean = false; 

  return {
    isLoadingCompanies,
    companies,
  }
}