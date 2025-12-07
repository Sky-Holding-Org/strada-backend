import { Media } from "./media";
import { Area } from "./area";
import { Property } from "./property";
import { Developer } from "./developer";
import { Offer } from "./offer";

export interface Compound {
  id?: number; // Using string type to support slug as ID
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  banner?: Media | null;
  imageGallery?: Media[] | null;
  name: string;
  description?: any;
  startPrice?: number;
  masterPlanImage?: Media[] | null;
  locationOnMap?: any;
  slug: string;
  amenities?: any;
  isNewLaunch?: boolean;
  isRecommended: boolean;
  area?: Area | null;
  properties?: Property[] | null;
  isTrendingProject?: boolean;
  developer?: Developer | null;
  offer?: Offer | null;
}
