import {z} from 'zod'


const VerifySchema= z.object({
    code:z.string().length(6,"atleast 6 character be there")
})
    