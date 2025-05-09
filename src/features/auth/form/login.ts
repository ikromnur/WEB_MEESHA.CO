import { emailSchema, passwordSchema } from "@/schemas/auth";
import { z } from "zod";

// Definisikan schema login menggunakan Zod
export const loginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
