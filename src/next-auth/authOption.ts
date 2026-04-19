import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import async from "./../app/brands/page";
import { jwtDecode } from "jwt-decode";

export const authOption: NextAuthOptions = {
  providers: [
    Credentials({
      name: "my login",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "enter your email",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "enter your password",
        },
      },

      async authorize(credentials, req) {
        try {
          const res = await fetch(
            `https://ecommerce.routemisr.com/api/v1/auth/signin`,
            {
              method: "POST",
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
              headers: { "content-type": "application/json" },
            },
          );

          const result = await res.json();

          console.log("ressssssssssss", result);
          if (!res.ok) {
            console.log(res.ok);

            throw new Error(result.message);
          }

          const jwt: { id: string } = await jwtDecode(result.token);
          // console.log("jhhhhhhhhhhhhhhh",jwt);

          return {
            id: jwt.id,
            name: result.user.name,
            email: result.user.email,
            accessToken: result.token,
          };
        } catch (err) {
          console.log("erorrrrr", err);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    jwt({ token, user }) {
      console.log("parrrrr" ,user ,token );

      if (user) {
        token.accesstoken = user.accessToken;
        token.id = user.id;
      }

      return token;
    },

    session({ token, session }) {
      console.log("ssssssssss", token, session);

      session.id = token.id;

      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};
