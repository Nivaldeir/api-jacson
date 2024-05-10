import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z
    .string()
    .min(8, "A Senha deve conter um mínimo de 8 caracteres")
});