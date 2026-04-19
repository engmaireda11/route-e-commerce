 export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt?: string; 
  updatedAt?: string; 
  __v?:number;
}
 export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt?: string; 
  updatedAt?: string; 
}







export interface Product {
  _id: string;
  id: string; 
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  priceAfterDiscount?: number; 
  sold: number | null;
  ratingsQuantity: number;
  ratingsAverage: number;
  images: string[];
  imageCover: string;
  category: Category;
  subcategory: Subcategory[];
  brand: Brand;
  createdAt: string; 
  updatedAt: string; 
}

interface User {
  _id: string;
  name: string;
}

interface Review {
  _id: string;
  review: string;
  rating: number;
  product: string;
  user: User;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
  image:string
}


export interface SingleProduct {
  sold: number;
  images: string[];
  subcategory: Subcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  priceAfterDiscount: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  reviews: Review[];
  id: string;
}