import {boolean, z} from 'zod'


const MessageSchema= z.object({
   content: z
     .string()
     .min(10,{message:"content minimum of atleast 10 character"})
     .max(300,{message:"content not exceed  of atleast 300 character"})
})
    