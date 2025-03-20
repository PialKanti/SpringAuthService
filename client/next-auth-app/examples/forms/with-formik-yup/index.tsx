'use client';

import { Typography } from '@/components/typography';
import { CustomButton } from '@/components/custom-button';
import { InputControl } from '@/components/inputs/input-control';
import { SelectControl } from '@/components/inputs/select-control';
import { InputHeading } from '@/components/inputs/common/input-heading';
import { RadioControl } from '@/components/inputs/radio-control';
import { ConditionalTextDisplay } from '@/components/inputs/common/conditional-text-display';
import { CheckboxControl } from '@/components/inputs/checkbox-control';
import { SwitchControl } from '@/components/inputs/switch-control';
import { cn } from '@/lib/shadcn/utils';
import { formSchema, initialFormFieldValues } from './interface';
import { toast } from 'sonner';
import { formSubmit } from './actions';
import { Formik } from 'formik';

// Styles
const inlineWrapperClasses = cn('flex flex-wrap gap-x-4 gap-y-2');
const inputItemParentClasses = cn('flex flex-row items-center gap-2 text-base');
const inputGroupParentClasses = cn('grid gap-1');

/**
 * `Form` is a React functional component that renders a form with various input fields and controls.
 * It utilizes the `Formik` library for form state management,
 * including handling form submission and displaying form validation errors.
 *
 * @remarks
 * This component integrates with Yup schema validation for form validation.
 *
 * @see {@link IFormFields} - The interface defining the structure of form fields.
 */
export default function Form() {
  return (
    <div className="bg-yellow-100 py-7 lg:py-10">
      <div className="container">
        <div className="mx-auto max-w-[450px] rounded-lg bg-white p-6 shadow-lg lg:p-10">
          <Typography
            size="h3"
            tagName="h2"
            className="mb-3 text-center font-bold"
          >
            Form submission with formik and yup
          </Typography>
          <Formik
            validationSchema={formSchema}
            initialValues={initialFormFieldValues}
            onSubmit={async (data, { resetForm }) => {
              try {
                const res = await formSubmit(data);
                if (res.data) {
                  toast.success(res.message);
                  resetForm();
                } else {
                  toast.error(res.message);
                }
              } catch (error) {
                console.error(error);
                toast.error('An error occurred. Please try again.');
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isSubmitting,
              handleReset,
              handleSubmit,
              setFieldValue,
            }) => (
              <form className="grid gap-4" onSubmit={handleSubmit}>
                {/* First name */}
                <InputControl
                  name="fname"
                  label="First Name"
                  type="text"
                  placeholder="Enter your first name"
                  helperText="Min. 3 characters"
                  autoComplete="on"
                  required={true}
                  value={values.fname}
                  onInputChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.fname ? errors.fname : undefined}
                  showErrorMsg={touched.fname}
                  showSuccessIcon={touched.fname && !errors.fname}
                  disabled={isSubmitting}
                />

                {/* Last name  */}
                <InputControl
                  name="lname"
                  label="Last Name"
                  type="text"
                  placeholder="Enter your last name"
                  autoComplete="on"
                  value={values.lname || ''}
                  onInputChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lname ? errors.lname : undefined}
                  showErrorMsg={touched.lname}
                  showSuccessIcon={
                    touched.lname && !errors.lname && values.lname !== ''
                  }
                  disabled={isSubmitting}
                />

                {/* Email  */}
                <InputControl
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  helperText="Please enter a valid email"
                  autoComplete="on"
                  required={true}
                  value={values.email || ''}
                  onInputChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email ? errors.email : undefined}
                  showErrorMsg={touched.email}
                  showSuccessIcon={touched.email && !errors.email}
                  disabled={isSubmitting}
                />

                {/* TODO: Add a confirm password field and support it with a password matcher */}
                <InputControl
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter a Password"
                  helperText="Min. 8 characters, contain at least one digit, one lowercase letter, and one uppercase letter"
                  autoComplete="on"
                  required={true}
                  value={values.password || ''}
                  onInputChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password ? errors.password : undefined}
                  showErrorMsg={touched.password}
                  showSuccessIcon={touched.password && !errors.password}
                  disabled={isSubmitting}
                />

                {/* Phone  */}
                <InputControl
                  name="phone"
                  label="Phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  helperText="Enter a valid phone number"
                  required={true}
                  value={values.phone || ''}
                  onInputChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone ? errors.phone : undefined}
                  showErrorMsg={touched.phone}
                  showSuccessIcon={touched.phone && !errors.phone}
                  disabled={isSubmitting}
                />

                {/* Job role  */}
                <SelectControl
                  name="jobRole"
                  required={true}
                  items={[
                    {
                      label: 'Select job Role',
                      value: '',
                    },
                    {
                      label: 'Frontend',
                      value: 'frontend',
                    },
                    {
                      label: 'Backend',
                      value: 'backend',
                    },
                    {
                      label: 'FullStack',
                      value: 'fullstack',
                    },
                  ]}
                  label="Job Role"
                  helperText="Please select a job role"
                  value={values.jobRole || ''}
                  onSelectChange={(value) => setFieldValue('jobRole', value)}
                  onBlur={handleBlur}
                  error={touched.jobRole ? errors.jobRole : undefined}
                  showErrorMsg={touched.jobRole}
                  disabled={isSubmitting}
                />

                {/* Job location  */}
                <fieldset className={inputGroupParentClasses}>
                  <InputHeading
                    label={'Preferred Job Location'}
                    required={true}
                    disabled={isSubmitting}
                    tagName="legend"
                  />

                  <div className={inlineWrapperClasses}>
                    <label className={inputItemParentClasses}>
                      <RadioControl
                        name="jobLocation"
                        value="remote"
                        disabled={isSubmitting}
                        onRadioChange={handleChange}
                        checked={values.jobLocation === 'remote' ? true : false}
                      />
                      Remote
                    </label>
                    <label className={inputItemParentClasses}>
                      <RadioControl
                        name="jobLocation"
                        value="in-office"
                        disabled={isSubmitting}
                        onRadioChange={handleChange}
                        checked={
                          values.jobLocation === 'in-office' ? true : false
                        }
                      />
                      In-office
                    </label>
                  </div>

                  {/* TODO: error message doesn't show properly  */}
                  {touched.jobLocation && errors.jobLocation && (
                    <ConditionalTextDisplay
                      error={errors.jobLocation}
                      showErrorMsg
                    />
                  )}
                </fieldset>

                {/* Languages  */}
                <fieldset className={inputGroupParentClasses}>
                  <InputHeading
                    label={'Languages'}
                    required={true}
                    disabled={isSubmitting}
                    tagName="legend"
                  />

                  <div className={inlineWrapperClasses}>
                    <label className={inputItemParentClasses}>
                      <CheckboxControl
                        name="languages"
                        value="javascript"
                        checked={
                          values.languages &&
                          values.languages.includes('javascript')
                            ? true
                            : false
                        }
                        onCheckboxChange={handleChange}
                        disabled={isSubmitting}
                      />
                      Javascript
                    </label>

                    <label className={inputItemParentClasses}>
                      <CheckboxControl
                        name="languages"
                        value="python"
                        checked={
                          values.languages &&
                          values.languages.includes('python')
                            ? true
                            : false
                        }
                        onCheckboxChange={handleChange}
                        disabled={isSubmitting}
                      />
                      Python
                    </label>
                  </div>

                  {touched.languages &&
                    errors.languages &&
                    typeof errors.languages === 'string' && (
                      <ConditionalTextDisplay
                        error={errors.languages}
                        showErrorMsg
                      />
                    )}
                </fieldset>

                {/* Interest  */}
                <div className={inputGroupParentClasses}>
                  <label className={inputItemParentClasses}>
                    <SwitchControl
                      name="interest"
                      checked={values.interest ? true : false}
                      onSwitchChange={(currValue) =>
                        setFieldValue('interest', currValue)
                      }
                      disabled={isSubmitting}
                      required={false}
                    />
                    Are you interested?
                  </label>

                  {touched.interest && errors.interest && (
                    <ConditionalTextDisplay
                      error={errors.interest}
                      showErrorMsg={true}
                      disabled={isSubmitting}
                    />
                  )}
                </div>

                {/* Terms  */}
                <fieldset className={inputGroupParentClasses}>
                  <div className={inlineWrapperClasses}>
                    <label className={inputItemParentClasses}>
                      <CheckboxControl
                        name="terms"
                        value={values.terms ? 'true' : 'false'}
                        onCheckboxChange={handleChange}
                        disabled={isSubmitting}
                        checked={values.terms ? true : false}
                      />
                      <span>I agree to the terms & condition</span>
                    </label>
                  </div>

                  {touched.terms && errors?.terms && (
                    <ConditionalTextDisplay error={errors.terms} showErrorMsg />
                  )}
                </fieldset>

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
                      handleReset();
                    }}
                  >
                    Reset
                  </CustomButton>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
