import { z } from "zod";
import {
  emailSchema,
  passwordSchema,
  nameSchema,
  phoneSchema,
} from "@/schemas/auth";

export const registerFormSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    phone: phoneSchema,
    password: passwordSchema,
    confirmPassword: z
      .string({
        required_error: "Confirm password is required",
      })
      .min(1, { message: "Password harap diisi" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
