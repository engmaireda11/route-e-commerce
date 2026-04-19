"use server"



import { registerObject } from "@/schemas/auth.schema";
interface CleanData {
    name: string;
    email: string;
    password: string;
    rePassword: string;
    phone: string;
}

export async  function UserRegister(cleanData:CleanData){
      try {
          const res = await fetch(
            `https://ecommerce.routemisr.com/api/v1/auth/signup`,
            {
              method: "POST",
              body: JSON.stringify(cleanData),
              headers: { "content-type": "application/json" },
            },
          );
    
       return res.ok
        } 
        
        catch (err) {
         // console.log(err);
          
        }
}