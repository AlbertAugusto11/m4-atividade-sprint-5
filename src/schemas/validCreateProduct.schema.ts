import { z } from "zod"

export const validCreateProduct = z.object({
    name: z.string().min(2),
    description: z.string().min(20).max(250),
    category: z.optional(z.string().min(2)),
    price: z.number().min(0.01)
})