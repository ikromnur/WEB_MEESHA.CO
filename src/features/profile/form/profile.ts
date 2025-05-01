import { z } from "zod";
import { nameSchema, emailSchema, phoneSchema } from "@/schemas/auth";

export const profileSchema = z.object({
  username: z.string(),
  name: nameSchema,
  email: emailSchema,
  nohp: phoneSchema,
  photo_profile: z.any().optional(),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
