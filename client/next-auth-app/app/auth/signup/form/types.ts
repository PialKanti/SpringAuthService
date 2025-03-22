import { z } from 'zod';
import { formSchema } from './schema';

export type IFormFields = z.infer<typeof formSchema>;

export const defaultValues: Partial<IFormFields> = {
  fname: '',
  lname: '',
  userName: '',
  password: '',
  email: '',
  phone: '',
  dob: new Date(),
};

export type ApiResponse = {
  message: string;
  data: {
    username: string;
    email: string;
  };
};

export type Payload = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
};
