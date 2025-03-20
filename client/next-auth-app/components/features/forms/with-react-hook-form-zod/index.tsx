'use client';

import { Typography } from '@/components/typography';
import { CustomButton } from '@/components/custom-button';
import { formSchema, IFormFields, initialValues } from './interface';
import { toast } from 'sonner';
// import { formSubmit } from './actions';
import * as z from 'zod';
import { GenericForm, GenericFormRef } from '@/components/form/GenericForm';
import { useRef } from 'react';
import { TextField } from '@/components/form/fields/TextField';
import { PasswordField } from '@/components/form/fields/PasswordField';
import { SelectField } from '@/components/form/fields/SelectField';
import { RadioGroupField } from '@/components/form/fields/RadioGroupField';
import { CheckboxGroupField } from '@/components/form/fields/CheckboxGroupField';
import { CheckboxField } from '@/components/form/fields/CheckboxField';

const jobRoleOptions = [
  {
    text: 'Frontend',
    value: 'frontend',
  },
  {
    text: 'Backend',
    value: 'backend',
  },
  {
    text: 'Full Stack',
    value: 'fullstack',
  },
];

const jobLocationOptions = [
  {
    text: 'Remote',
    value: 'remote',
  },
  {
    text: 'In office',
    value: 'in-office',
  },
];

const languagesOptions = [
  {
    text: 'Javascript',
    value: 'Javascript',
  },
  {
    text: 'TypeScript',
    value: 'TypeScript',
  },
  {
    text: 'Python',
    value: 'Python',
  },
];

/**
 * TODO:
 * 1. Missing helper text
 * 2. Expose the isSubmitting state
 */

/**
 * `Form` is a React functional component that renders a form with various input fields and controls.
 * It utilizes the `useForm` hook from `react-hook-form` for form state management,
 * including handling form submission and displaying form validation errors.
 *
 * @remarks
 * This component integrates with Zod schema validation for form validation.
 *
 * @see {@link IFormFields} - The interface defining the structure of form fields.
 */
export default function Form() {
  const formRef = useRef<GenericFormRef<IFormFields>>(null);

  return (
    <div className="bg-yellow-100 py-7 lg:py-10">
      <div className="container">
        <div className="mx-auto max-w-[450px] rounded-lg bg-white p-6 shadow-lg lg:p-10">
          <Typography
            size="h3"
            tagName="h2"
            className="mb-3 text-center font-bold"
          >
            Form submission with generic form
          </Typography>

          <GenericForm
            schema={formSchema}
            initialValues={initialValues}
            onSubmit={async (data) => {
              try {
                // Validate form data using Zod schema
                const result = formSchema.safeParse(data);

                // If validation succeeds, proceed with form submission
                if (result.success) {
                  console.log(result.data);
                  alert(JSON.stringify(result.data, undefined, 2));
                  // const res = await formSubmit(data);
                  // if (res.data) {
                  //   toast.success(res.message);
                  //   formRef.current?.reset();
                  // } else {
                  //   toast.error(res.message);
                  // }
                }
              } catch (error) {
                // If validation fails, handle Zod validation error
                if (error instanceof z.ZodError) {
                  // Extract error messages from Zod error
                  const validationErrors = error.errors.map(
                    (err) => err.message
                  );
                  // Display the first validation error to the user
                  toast.error(validationErrors[0]);
                } else {
                  // Handle non-validation errors
                  console.error(error);
                  toast.error('An error occurred. Please try again.');
                }
              }
            }}
            ref={formRef}
          >
            <div className="space-y-4">
              {/* First name */}
              <TextField<IFormFields>
                name="fname"
                label="First Name"
                type="text"
                placeholder="Enter your first name"
                required
              />

              {/* Last name  */}
              <TextField<IFormFields>
                name="lname"
                label="Last Name"
                type="text"
                placeholder="Enter your last name"
              />

              {/* Email  */}
              <TextField<IFormFields>
                name="email"
                label="Email"
                type="text"
                placeholder="Enter your email"
                required
              />

              {/* TODO: Add a confirm password field and support it with a password matcher */}
              <PasswordField<IFormFields>
                name="password"
                label="Password"
                placeholder="Enter a Password"
                required
              />

              {/* Phone  */}
              <TextField<IFormFields>
                name="phone"
                label="Phone"
                placeholder="Enter your phone number"
              />

              {/* Job role  */}
              <SelectField<IFormFields>
                name="jobRole"
                options={jobRoleOptions}
                label="Job Role"
                // required
              />

              {/* Job location  */}
              <RadioGroupField<IFormFields>
                name="jobLocation"
                options={jobLocationOptions}
                label="Job Location"
              />

              {/* Languages  */}
              <CheckboxGroupField<IFormFields>
                name="languages"
                options={languagesOptions}
                label="Languages"
              />

              {/* TODO: Need to create SwitchField  */}
              {/* Interest  */}
              <CheckboxField<IFormFields>
                name="interest"
                required
                label="Are you interested?"
              />

              {/* Terms  */}
              <CheckboxField<IFormFields>
                name="terms"
                required
                label="I agree to the terms & condition"
              />

              {/* Buttons  */}
              <div className="flex flex-wrap items-center gap-2">
                <CustomButton
                  colorScheme="primary"
                  variant="fill"
                  loading={false}
                  disabled={false}
                  type="submit"
                >
                  Submit
                </CustomButton>
                <CustomButton
                  loading={false}
                  disabled={false}
                  colorScheme="primary"
                  variant="fill"
                  className="!bg-red-500"
                  type="reset"
                  onButtonClick={() => {
                    formRef.current?.reset();
                  }}
                >
                  Reset
                </CustomButton>
              </div>
            </div>
          </GenericForm>
        </div>
      </div>
    </div>
  );
}
