import { Media } from './media';
import { Compound } from './compound';
import { Developer } from './developer';

export interface Area {
  id?: number; // Using string type to support slug as ID
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  banner?: Media | null;
  name: string;
  about?: any;
  slug: string;
  compounds?: Compound[] | null;
  description?: string;
  developers?: Developer[] | null;
  isRecommended?: boolean;
};
