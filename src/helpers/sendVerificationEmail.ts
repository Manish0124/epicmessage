import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmail";
import { promises } from "dns";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode: string
):Promise<ApiResponse>{
      try {

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'email',
            subject: 'epicmessage | verification code',
            react: VerificationEmail({username,otp:verifyCode}),
          });
        
        return {success:true, message: 'verification email send successfully'}
        
      } catch(emailEror) {
        console.log("failed to send verification email", emailEror)
        return { success:false , message: 'failed to send verification email' }
        
      }
}