import { z } from 'zod'
import { v7 as uuidv7 } from 'uuid'

export const userSchema = z.object({
  id: z.string().nullish().default(uuidv7()),
  firstName: z.string(),
  lastName: z.string().nullish(),
  email: z.string().email(),
  avatar: z.string().nullish(),
  location: z.string().nullish(),
  createdAt: z.date().nullish(),
  updatedAt: z.date().nullish(),
  me: z.boolean().nullish(),
})
