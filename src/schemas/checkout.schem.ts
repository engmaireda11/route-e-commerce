
 import * as z from "zod";

 export const checkShema = z
  .object({
   
    phone: z
      .string()
      .nonempty("*Please enter your phone number").regex(/^(\+20|0)1[0-2,5][0-9]{8}$/, "*Only Egyptian phone numbers are allowed"),
    city: z
      .string()
      .nonempty("*Please enter your city").min(2,"City name must be at least 2 characters"),
    details: z
      .string()
      .nonempty("*Please enter your details").min(10,"*Details must be at least 10 characters"),
   
      
    
  })
  

   export type checkoutObject = z.infer<typeof checkShema >