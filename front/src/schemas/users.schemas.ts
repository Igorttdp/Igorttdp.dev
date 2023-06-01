import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export const registerSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8).max(128, "Tamanho máximo de 128 caracteres."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não coincidem.",
    path: ["confirmPassword"],
  });
