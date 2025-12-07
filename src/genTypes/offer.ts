import { Compound } from "./compound";
import { Developer } from "./developer";

export interface Offer {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  compound?: Compound | null;
  developer?: Developer | null;
  name?: string;
  slug?: string;
}
