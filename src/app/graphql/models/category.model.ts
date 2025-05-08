export interface Category {
  id: string;
  key: string;
  version: number;
  name: string;
  slug: string;
  description?: string;
  createdAt: string;
  lastModifiedAt: string;
}

export interface CategoryResponse {
  category: {
    id: string;
    key: string;
    version: number;
    name: {
      en: string;
    };
    slug: {
      en: string;
    };
    description?: {
      en: string;
    };
    createdAt: string;
    lastModifiedAt: string;
  };
} 

