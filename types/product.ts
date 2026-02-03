export type ProductFormat =
  | 'Capsules'
  | 'Tablet'
  | 'Tablets'
  | 'Sachet'
  | 'Sachets'
  | 'Gummies'
  | 'Gummy'
  | 'Chewables'
  | 'Chewable Tablet'
  | 'Powder'
  | 'Liquid'
  | 'Syrup'
  | 'Suspension'
  | 'Drops'
  | 'Softgel'
  | 'Softgel Capsule'
  | 'Gel'
  | 'Oral rinse'
  | 'IV infusion'
  | 'Micro pellets'
  | 'Caplets';

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  images?: string[];
  benefits: string[];
  ingredients: string[];
  usage: string;
  format: ProductFormat;
  needs: string[];
  portfolio?: 'Herbal' | 'Nutraceutical' | 'Nutraceuticals'; // E.g. Herbal, Nutraceuticals
  ingredients_list?: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}
