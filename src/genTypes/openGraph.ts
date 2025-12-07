import { Media } from "./media";

export interface OpenGraph {
  id?: number;
  ogTitle: string;
  ogDescription: string;
  ogImage?: Media | null;
  ogUrl?: string;
  ogType?: string;
}
