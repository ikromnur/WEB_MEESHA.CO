import { emailSchema } from "@/schemas/auth";
import { z } from "zod";

// Definisikan schema login menggunakan Zod
export const loginFormSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, { message: "Password required" }),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
