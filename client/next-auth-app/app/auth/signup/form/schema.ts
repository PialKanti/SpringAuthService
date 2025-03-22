import { z } from 'zod';

export const formSchema = z.object({
  fname: z
    .string({
      required_error: 'First name is required',
    })
    .min(3, { message: 'First name must be at least 3 characters long' }),
  lname: z
    .string({
      required_error: 'Last name is required',
    })
    .min(3, { message: 'Last name must be at least 3 characters long' }),
  userName: z
    .string({
      required_error: 'User name is required',
    })
    .min(3, { message: 'User name must be at least 3 characters long' })
    .max(10, { message: 'User name must be at most 10 characters long' }),
  password: z
    .string({ required_error: 'Password is required' })
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
      message:
        'Password must be at least 8 characters long, contain at least one digit, one lowercase letter, and one uppercase letter',
    }),
  phone: z
    .string({ required_error: 'Phone is required' })
    .regex(/^\+?[0-9]\d{1,11}$/, {
      message: 'Please enter a valid phone number',
    }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Please enter a valid gmail address' }),
  dob: z.date({
    message: 'Invalid date',
  }),
});
