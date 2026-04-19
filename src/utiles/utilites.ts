import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getToken(){
    const cookie = await cookies()
    const token =  cookie.get("__Secure-next-auth.session-token")?.value || cookie.get("next-auth.session-token")?.value;
    const decodedToken =await decode({token:token,secret:process.env.NEXTAUTH_SECRET!})
    return decodedToken?.accesstoken
}