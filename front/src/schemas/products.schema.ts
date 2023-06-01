import * as z from "zod";

const addEditProductSchema = z.object({
  bar_code: z
    .string()
    .refine(
      (v) => v.length > 3,
      "Código de barras deve ter pelo menos 3 caracteres."
    ),
  description: z.string().refine((v) => v.length > 10),
  gross_weight: z
    .string()
    .transform((v) => Number(v))
    .or(z.number().refine((v) => v > 0)),
  net_weight: z
    .string()
    .transform((v) => Number(v))
    .or(z.number().refine((v) => v > 0)),
  value: z
    .string()
    .transform((v) => Number(v))
    .or(z.number().refine((v) => v > 0)),
});

export default addEditProductSchema;
