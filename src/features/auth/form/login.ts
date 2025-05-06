import { z } from 'zod';

// Definisikan schema login menggunakan Zod
export const loginFormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
