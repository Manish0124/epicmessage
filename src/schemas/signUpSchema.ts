import {z} from  'zod'


export const usernameValidation = z
     .string()
     .min(2,"username atlest contain  2 characters ")
     .max(20,"username doesnot contain beyond 20 characters")
     .regex( /^[A-Za-z0-9]*$/ ,"username must not contain special character")

export const signUpSchema = z.object({
    usename: usernameValidation,
    email: z.string().email({message: "invalid email adress"}),
    password:z.string().min(6,{message:"password must be atleast 6 character"})

})