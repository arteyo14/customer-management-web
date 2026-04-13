import z from "zod";

export const loginSchema = z.object({
  email: z.string().nonempty("This field is required"),
  password: z.string().nonempty("This field is required"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
