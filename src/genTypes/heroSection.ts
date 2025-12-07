import { Media } from "./media";

export interface HeroSection {
  id?: number;
  heading?: string;
  subHeading?: string;
  image?: Media | null;
}
