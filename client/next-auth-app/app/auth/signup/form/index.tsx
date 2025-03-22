'use client';

import { Typography } from '@/components/typography';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomButton } from '@/components/custom-button';
import { InputControl } from '@/components/inputs/input-control';
import { defaultValues, IFormFields } from './types';
import { formSchema } from './schema';
import { toast } from 'sonner';
import { formSubmit } from './actions';
import * as z from 'zod';
import { DateTimePicker } from '@/components/ui/date-time-picker';

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
  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting, errors },
  } = useForm<IFormFields>({
    resolver: zodResolver(formSchema),
    mode: 'all',
    defaultValues: defaultValues,
  });

  /**
   * Handles form submission.
   * @param data - The form data submitted by the user.
   */
  const onSubmit: SubmitHandler<IFormFields> = async (data) => {
    try {
      // Validate form data using Zod schema
      const result = formSchema.safeParse(data);

      // If validation succeeds, proceed with form submission
      if (result.success) {
        const res = await formSubmit(data);

        if (res.data) {
          toast.success(res.message);
          reset();
        } else {
          toast.error(res.message);
        }
      }
    } catch (error) {
      // If validation fails, handle Zod validation error
      if (error instanceof z.ZodError) {
        // Extract error messages from Zod error
        const validationErrors = error.errors.map((err) => err.message);
        // Display the first validation error to the user
        toast.error(validationErrors[0]);
      } else {
        // Handle non-validation errors
        console.error(error);
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="bg-yellow-100 py-7 lg:py-10">
      <div className="container">
        <div className="mx-auto max-w-[450px] rounded-lg bg-white p-6 shadow-lg lg:p-10">
          <Typography
            size="h3"
            tagName="h2"
            className="mb-3 text-center font-bold"
          >
            Signup form
          </Typography>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            {/* First name */}
            <Controller
              name="fname"
              control={control}
              render={({ field: { name, value, onChange, onBlur } }) => (
                <InputControl
                  name={name}
                  value={value || ''}
                  onInputChange={onChange}
                  onBlur={onBlur}
                  label="First Name"
                  type="text"
                  placeholder="Enter your first name"
                  helperText="Min. 3 characters"
                  error={errors.fname?.message || undefined}
                  showErrorMsg={!!errors.fname?.message}
                  disabled={isSubmitting}
                  autoComplete="on"
                />
              )}
            />

            {/* Last name  */}
            <Controller
              name="lname"
              control={control}
              render={({ field: { name, value, onChange, onBlur } }) => (
                <InputControl
                  name={name}
                  value={value || ''}
                  onInputChange={onChange}
                  onBlur={onBlur}
                  label="Last Name"
                  type="text"
                  placeholder="Enter your last name"
                  error={errors.lname?.message || undefined}
                  showErrorMsg={!!errors.lname?.message}
                  disabled={isSubmitting}
                  autoComplete="on"
                />
              )}
            />

            {/* User name  */}
            <Controller
              name="userName"
              control={control}
              render={({ field: { name, value, onChange, onBlur } }) => (
                <InputControl
                  name={name}
                  value={value || ''}
                  onInputChange={onChange}
                  onBlur={onBlur}
                  label="User Name"
                  type="text"
                  placeholder="Enter your user name"
                  helperText="Min. 3 characters, Max. 10 characters"
                  error={errors.userName?.message || undefined}
                  showErrorMsg={!!errors.userName?.message}
                  disabled={isSubmitting}
                  autoComplete="on"
                />
              )}
            />

            {/* Email  */}
            <Controller
              name="email"
              control={control}
              render={({ field: { name, value, onChange, onBlur } }) => (
                <InputControl
                  name={name}
                  value={value || ''}
                  onInputChange={onChange}
                  onBlur={onBlur}
                  label="Email"
                  type="text"
                  placeholder="Enter your email"
                  helperText="Please enter a valid email"
                  error={errors.email?.message || undefined}
                  showErrorMsg={!!errors.email?.message}
                  disabled={isSubmitting}
                  autoComplete="on"
                />
              )}
            />

            {/* Password  */}
            <Controller
              name="password"
              control={control}
              render={({ field: { name, value, onChange, onBlur } }) => (
                <InputControl
                  name={name}
                  value={value || ''}
                  onInputChange={onChange}
                  onBlur={onBlur}
                  label="Password"
                  type="password"
                  placeholder="Enter a Password"
                  helperText="Min. 8 characters, contain at least one digit, one lowercase letter, and one uppercase letter"
                  error={errors.password?.message || undefined}
                  showErrorMsg={!!errors.password?.message}
                  disabled={isSubmitting}
                  autoComplete="on"
                />
              )}
            />

            {/* Phone  */}
            <Controller
              name="phone"
              control={control}
              render={({ field: { name, value, onChange, onBlur } }) => (
                <InputControl
                  name={name}
                  value={value || ''}
                  onInputChange={onChange}
                  onBlur={onBlur}
                  label="Phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  helperText="Enter a valid phone number"
                  error={errors.phone?.message || undefined}
                  showErrorMsg={!!errors.phone?.message}
                  disabled={isSubmitting}
                  autoComplete="on"
                />
              )}
            />

            {/* DOB: Must need add date input */}
            <Controller
              name="dob"
              control={control}
              render={({
                field: { value, onChange },
                formState: { isSubmitting },
              }) => (
                <>
                  <DateTimePicker
                    disabled={isSubmitting}
                    value={new Date(value)}
                    onChange={onChange}
                    granularity="day"
                  />
                </>
              )}
            />

            {/* Buttons  */}
            <div className="flex flex-wrap items-center gap-2">
              <CustomButton
                colorScheme="primary"
                variant="fill"
                loading={isSubmitting}
                disabled={false}
                type="submit"
              >
                Submit
              </CustomButton>
              <CustomButton
                loading={isSubmitting}
                disabled={false}
                colorScheme="primary"
                variant="fill"
                className="!bg-red-500"
                type="reset"
                onButtonClick={() => {
                  reset();
                }}
              >
                Reset
              </CustomButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
