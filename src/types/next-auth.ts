import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      name: String;
      email: string;
      
    };
    expires: string;
    id: string;
  }

  interface User {
    id: string;
    name: string;
    email: string;
    accessToken: string;
  }
}



declare module "next-auth/jwt" {
  
  interface JWT {
   
     name: string,
  email: string,
  sub: string,
  accesstoken: string,
  id: string,
  iat: number,
  exp: number,
  jti: string
  }
}
