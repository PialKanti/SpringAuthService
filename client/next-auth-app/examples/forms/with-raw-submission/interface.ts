export interface IFormFields {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  password: string;
  jobLocation: string;
  languages: string[];
  interest: boolean;
  jobRole: string;
  terms: boolean;
}

export interface IFormState {
  success: boolean;
  message: string;
  error?: Partial<Record<keyof IFormFields, string>>;
}

export interface IFormElements {
  formState: IFormState;
}
