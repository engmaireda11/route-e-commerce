 import * as z from "zod";
 
 export const registerShema = z
  .object({
    name: z
      .string()
      .nonempty("*Please enter your name")
      .min(2, "*Name is too short")
      .max(30, "*Name is too long"),
    email: z
      .string()
      .nonempty("*Please enter your email")
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
        "*Invalid email address",
      ),
    password: z
      .string()
      .nonempty("*Please enter your password").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{8,}$/," "),
      
    rePassword: z.string().nonempty("*Please confirm your password"),
    phone: z
      .string()
      .nonempty("*Please enter your phone number")
      .regex(
        /^(\+20|0)1[0-2,5][0-9]{8}$/,
        "*Only Egyptian phone numbers are allowed",
      ),
    terms: z.boolean().refine((val) => val === true, {
  message: "*You must accept the terms and conditions",
}),
  })
  .refine(
    ({ rePassword, password }) => {
      return rePassword == password;
    },
    { error: "Passwords do not match.", path: ["rePassword"] },
  );

   export type registerObject = z.infer<typeof registerShema >

 export const loginShema = z
  .object({
   
    email: z
      .string()
      .nonempty("*Please enter your email")
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
        "*Invalid email address",
      ),
    password: z
      .string()
      .nonempty("*Please enter your password").min(8,"*Password must be at least 8 characters")
      // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{8,}$/," ")
      
    
  })
  

   export type loginObject = z.infer<typeof loginShema >