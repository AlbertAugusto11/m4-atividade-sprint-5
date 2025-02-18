import { z } from "zod";

export const validParams = z.object({
    id: z.string()
})