import {boolean, z} from 'zod'


const acceptMessageSchema= z.object({
   acceptMessage: z.boolean(),
})
    