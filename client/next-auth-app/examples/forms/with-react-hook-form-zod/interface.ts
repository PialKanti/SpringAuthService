import * as z from 'zod';

export const formSchema = z.object({
  fname: z
    .string({
      required_error: 'First name is required',
    })
    .min(3, { message: 'First name must be at least 3 characters long' }),
  lname: z.string().optional(),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Please enter a valid gmail address' }),
  phone: z
    .string({ required_error: 'Phone is required' })
    .regex(/^\+?[0-9]\d{1,11}$/, {
      message: 'Please enter a valid phone number',
    }),
  password: z
    .string({ required_error: 'Password is required' })
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
      message:
        'Password must be at least 8 characters long, contain at least one digit, one lowercase letter, and one uppercase letter',
    }),
  jobLocation: z.enum(['remote', 'in-office'], {
    required_error: 'Please select your preferred job location',
  }),
  jobRole: z.string({
    required_error: 'Job role is required',
    invalid_type_error: 'Please select your job role',
  }),
  languages: z
    .array(z.string())
    .min(1, { message: 'Please select at least one language' }),
  interest: z.boolean().refine((value) => value === true, {
    message: 'Please enable your interest',
  }),
  terms: z.boolean().refine((value) => value === true, {
    message: 'You must agree to the terms and conditions',
  }),
});

export type IFormFields = z.infer<typeof formSchema>;
