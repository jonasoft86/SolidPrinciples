import { Address } from "./address";
import { Company } from "./company";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  company: Company;
  address: Address;
  phone: string;
  website: string;
  profileThumbnail: string;
}