import * as Yup from 'yup';

export const formSchema = Yup.object({
  fname: Yup.string()
    .min(3, 'First name must be at least 3 characters long')
    .required('First name is required'),
  lname: Yup.string().optional(),
  email: Yup.string()
    .email('Please enter a valid gmail address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\+?[0-9]\d{1,11}$/, 'Please enter a valid phone number')
    .required('Phone is required'),
  password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      'Password must be at least 8 characters long, contain at least one digit, one lowercase letter, and one uppercase letter'
    )
    .required('Password is required'),
  jobLocation: Yup.string().oneOf(
    ['remote', 'in-office'],
    'Please select your preferred job location'
  ),
  jobRole: Yup.string().required('Job role is required'),
  languages: Yup.array()
    .of(Yup.string())
    .min(1, 'Please select at least one language'),
  interest: Yup.boolean().oneOf([true], 'Please enable your interest'),
  terms: Yup.boolean().oneOf(
    [true],
    'You must agree to the terms and conditions'
  ),
});

export type IFormFields = Yup.InferType<typeof formSchema>;

export const initialFormFieldValues: IFormFields = {
  fname: '',
  lname: '',
  email: '',
  phone: '',
  password: '',
  jobRole: '',
  jobLocation: '',
  languages: [],
  interest: false,
  terms: false,
};
