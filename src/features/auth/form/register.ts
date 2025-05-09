import { z } from "zod";
import {
  emailSchema,
  passwordSchema,
  nameSchema,
  phoneSchema,
} from "@/schemas/auth";

// Menambahkan schema untuk konfirmasi password
export const registerFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  password: passwordSchema,
  confirmPassword: z.string().min(8, "Konfirmasi password minimal 8 karakter"),
}).superRefine((data, ctx) => {
  if (data.password !== data.confirmPassword) {
    ctx.addIssue({
      path: ['confirmPassword'],  // Perbaiki path untuk konfirmasi password
      message: 'Password dan konfirmasi password harus sama',
      code: z.ZodIssueCode.custom,
    });
  }
});

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
