import { Media } from "./media";
import { Compound } from "./compound";

export interface Property {
  id?: number; // Using string type to support slug as ID
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  banner?: Media | null;
  imageGallery?: Media[] | null;
  floorPlanImage?: Media | null;
  masterPlanImage?: Media | null;
  name: string;
  description?: any;
  startPrice?: number;
  propertyType?:
    | "Apartment"
    | "Villa"
    | "Twinhouse"
    | "Townhouse"
    | "Duplex"
    | "Penthouse"
    | "Chalet"
    | "Studio"
    | "Cabin"
    | "Clinic"
    | "Office";
  bathrooms?: number;
  bedrooms?: number;
  squareMeters?: number;
  deliveryIn?: number;
  finishing?: "Not Finished" | "Semi Finished" | "Finished" | "Furnished";
  amenities?: any;
  slug: string;
  isSoldout?: boolean;
  isRecommended?: boolean;
  locationOnMap?: any;
  compound?: Compound | null;
  maxPrice?: number;
  IsReadyToMove?: boolean;
}
