import { z } from "zod";
import { messageSchema, nameSchema } from "@/schemas/contact";
import { emailSchema, phoneSchema } from "@/schemas/auth";

export const contactSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  message: messageSchema,
});

export type ContactFormValues = z.infer<typeof contactSchema>;
