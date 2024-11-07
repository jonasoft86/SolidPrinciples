import { GeoLocation } from "./geolocation";

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation;
};
