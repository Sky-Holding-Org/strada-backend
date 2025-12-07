export interface AboutUs {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  blocks?: any;
  title?: string;
  description?: string;
}
