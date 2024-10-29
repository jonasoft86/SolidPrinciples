
import { FormWithDIP, FormWithoutDIP } from "../principles/DIP";
import {UserProfileBAD, UserProfileGOOD} from "../principles/ISP";
import { DialogBAD, DialogGOOD } from "../principles/LSP";
import {DropdownBad,DropdownGOOD, UsersBad, UsersGood} from "../principles/OCP";
import { ProductListBad, ProductListGod } from "../principles/SRP";

const routes = [
  { path: "/", component: ProductListBad },
  { path: "/srp", component: ProductListGod },
  { path: "/ocp", component: UsersBad },
  { path: "/lsp", component: DialogGOOD },
  { path: "/isp", component: UserProfileGOOD },
  { path: "/dip", component: FormWithDIP },
];

export default routes;