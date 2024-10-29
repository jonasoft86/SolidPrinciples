
import {DropdownBad,DropdownGood, UserBad, UserGod} from "../principles/OCP";
import { ProductListBad, ProductListGod } from "../principles/SRP";

const routes = [
  { path: "/", component: ProductListBad },
  { path: "/srp", component: ProductListGod },
  { path: "/ocp", component: UserGod },
];

export default routes;