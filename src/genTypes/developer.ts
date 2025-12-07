import { Media } from "./media";
import { Compound } from "./compound";
import { Area } from "./area";
import { Offer } from "./offer";

export interface Developer {
  id?: number; // Using string type to support slug as ID
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  logo?: Media | null;
  name?: string;
  description?: any;
  startPrice?: number;
  slug: string;
  compounds?: Compound[] | null;
  areas?: Area[] | null;
  offers?: Offer[] | null;
}
