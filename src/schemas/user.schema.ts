import { z } from "zod"

export const userSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string(),
  password: z.string().min(6),
})
