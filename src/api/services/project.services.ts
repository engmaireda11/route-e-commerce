import { Brand, Category, Product, SingleProduct, Subcategory } from "../types/types";

   export async function getAllCategoris() : Promise<Category[]| undefined>  {
    try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/categories",
        {
           
        }
      );

      if (!res.ok) {
        throw new Error("bwjkkfwffwkb");
      }
      const data = await res.json();
        return data.data
    } catch (err) {
      console.log(err);
      return undefined
    }
  }
   export async function getBrand(id:string) : Promise<Brand| undefined>  {
    try {
      const res = await fetch(
       `https://ecommerce.routemisr.com/api/v1/brands/${id}`,
        {
           cache:"force-cache"
        }
      );

      if (!res.ok) {
        throw new Error("bwjkkfwffwkb");
      }
      const data = await res.json();
        return data.data
    } catch (err) {
      console.log(err);
      return undefined
    }
  }
   export async function getSupCategory(id:string) : Promise<Subcategory| undefined>  {
    try {
      const res = await fetch(
       ` https://ecommerce.routemisr.com/api/v1/subcategories/${id}`,
        {
           cache:"force-cache"
        }
      );

      if (!res.ok) {
        throw new Error("bwjkkfwffwkb");
      }
      const data = await res.json();
        return data.data
    } catch (err) {
      console.log(err);
      return undefined
    }
  }
   export async function getCategory(id:string) : Promise<Category| undefined>  {
    try {
      const res = await fetch(
       ` https://ecommerce.routemisr.com/api/v1/categories/${id}`,
        {
           cache:"force-cache"
        }
      );

      if (!res.ok) {
        throw new Error("bwjkkfwffwkb");
      }
      const data = await res.json();
        return data.data
    } catch (err) {
      console.log(err);
      return undefined
    }
  }
   export async function getProduct(id:string) : Promise<SingleProduct| undefined>  {
    try {
      const res = await fetch(
       ` https://ecommerce.routemisr.com/api/v1/products/${id}`,
       
      );

      if (!res.ok) {
        throw new Error("bwjkkfwffwkb");
      }
      const data = await res.json();
        return data.data
    } catch (err) {
      console.log(err);
      return undefined
    }
  }
   export async function getSubCategories(id:string) : Promise<Category[]| undefined>  {
    try {
      const res = await fetch(
       ` https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`,
      
      );

      if (!res.ok) {
        throw new Error("bwjkkfwffwkb");
      }
      const data = await res.json();
        return data.data
    } catch (err) {
      console.log(err);
      return undefined
    }
  }
   export async function getAllProducts() : Promise<Product[]| undefined>  {
    try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/products",
      );

      if (!res.ok) {
        throw new Error("bwjkkfwffwkb");
      }
      const data = await res.json();
        return data.data
    } catch (err) {
      console.log(err);
      return undefined
    }
  }
   export async function getcategoryProducts(id:string) : Promise<Product[]| undefined>  {
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/products?category[in]=${id}`,
      );

      if (!res.ok) {
        throw new Error("bwjkkfwffwkb");
      }
      const data = await res.json();
        return data.data
    } catch (err) {
      console.log(err);
      return undefined
    }
  }
   export async function getSubcategoryProducts(id:string) : Promise<Product[]| undefined>  {
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/products?subcategory[in]=${id}`,
      );

      if (!res.ok) {
        throw new Error("bwjkkfwffwkb");
      }
      const data = await res.json();
        return data.data
    } catch (err) {
      console.log(err);
      return undefined
    }
  }
   export async function getbrandProducts(id:string) : Promise<Product[]| undefined>  {
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/products?brand=${id}`,
      );

      if (!res.ok) {
        throw new Error("bwjkkfwffwkb");
      }
      const data = await res.json();
        return data.data
    } catch (err) {
      console.log(err);
      return undefined
    }
  }
   export async function getAllBrands() : Promise<Brand[]| undefined>  {
    try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/brands",
      );

      if (!res.ok) {
        throw new Error("bwjkkfwffwkb");
      }
      const data = await res.json();
        return data.data
    } catch (err) {
      console.log(err);
      return undefined
    }
  }