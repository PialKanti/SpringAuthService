import { ChangeEvent, useEffect, useState } from 'react';
import { IFormElements, IFormFields, IFormState } from './interface';
import { useFormStatus } from 'react-dom';
import { InputControl } from '@/components/inputs/input-control';
import { SelectControl } from '@/components/inputs/select-control';
import { InputHeading } from '@/components/inputs/common/input-heading';
import { RadioControl } from '@/components/inputs/radio-control';
import { CheckboxControl } from '@/components/inputs/checkbox-control';
import { ConditionalTextDisplay } from '@/components/inputs/common/conditional-text-display';
import { SwitchControl } from '@/components/inputs/switch-control';
import { Typography } from '@/components/typography';
import { CustomButton } from '@/components/custom-button';
import { cn } from '@/lib/shadcn/utils';
import { getCheckBoxValues } from './utils';
import { toast } from 'sonner';

// Styles
const inlineWrapperClasses = cn('flex flex-wrap gap-x-4 gap-y-2');
const inputItemParentClasses = cn('flex flex-row items-center gap-2 text-base');
const inputGroupParentClasses = cn('grid gap-1');

const initialFormFieldsValue: IFormFields = {
  fname: '',
  lname: '',
  email: '',
  phone: '',
  password: '',
  jobLocation: '',
  jobRole: '',
  languages: [],
  interest: false,
  terms: false,
};

export function FormElements({ formState: initialFormState }: IFormElements) {
  const [formFields, setFormFields] = useState<IFormFields>(
    initialFormFieldsValue
  );

  const [formSubmitState, setFormSubmitState] = useState<IFormState | null>(
    initialFormState
  );
  /**
   * This useEffect hook is used to synchronize the formSubmitState with the
   * provided state prop. It ensures that the formSubmitState is always
   * up-to-date with the latest state changes. This is particularly important
   * for resetting the form state, as the useFormState hook from react-dom does
   * not provide an option to reset the state directly. When a user clicks the
   * reset button, this hook ensures that all state values, including form
   * success or error states, are cleared.
   */
  useEffect(() => {
    setFormSubmitState(initialFormState);
  }, [initialFormState]);

  const { pending } = useFormStatus();

  const handleFormElementChange = (event: ChangeEvent<HTMLInputElement>) => {
    const element = event.target;

    setFormFields((prevValue) => {
      let newStateValue: IFormFields = { ...prevValue };

      // Check if the element is a checkbox for "languages"
      if (element.name === 'languages') {
        newStateValue = {
          ...newStateValue,
          languages: getCheckBoxValues(
            prevValue[element.name as keyof IFormFields] as string[],
            element.value,
            element.checked
          ),
        };
      }
      // Check if the element is a checkbox for "terms"
      else if (element.name === 'terms') {
        newStateValue = {
          ...newStateValue,
          terms: element.checked,
        };
      }
      // For other input types
      else {
        newStateValue = { ...newStateValue, [element.name]: element.value };
      }

      return newStateValue;
    });
  };

  useEffect(() => {
    if (formSubmitState && formSubmitState.success) {
      toast.success(formSubmitState.message);
      setFormFields({
        ...initialFormFieldsValue,
      });
    }
    if (
      formSubmitState &&
      formSubmitState.success === false &&
      formSubmitState.message
    ) {
      toast.error(formSubmitState.message);
    }
  }, [formSubmitState]);

  return (
    <>
      {/* Default variant  */}

      {/* First name  */}
      <InputControl
        label="First Name"
        name="fname"
        type="text"
        placeholder="Enter your first name"
        helperText="Min. 3 characters"
        required={true}
        value={formFields.fname}
        error={formSubmitState?.error?.fname}
        showErrorMsg={!!formSubmitState?.error?.fname}
        disabled={pending}
        autoComplete="on"
        onInputChange={handleFormElementChange}
      />

      {/* Last name  */}
      <InputControl
        label="Last Name"
        name="lname"
        type="text"
        placeholder="Enter your last name"
        value={formFields.lname}
        error={formSubmitState?.error?.lname}
        showErrorMsg={!!formSubmitState?.error?.lname}
        disabled={pending}
        autoComplete="on"
        onInputChange={handleFormElementChange}
      />

      {/* Email  */}
      <InputControl
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        helperText="Please enter a valid email"
        required={true}
        value={formFields.email}
        error={formSubmitState?.error?.email}
        showErrorMsg={!!formSubmitState?.error?.email}
        disabled={pending}
        autoComplete="on"
        onInputChange={handleFormElementChange}
      />

      {/* Password  */}
      <InputControl
        label="Password"
        name="password"
        type="password"
        placeholder="Enter a Password"
        helperText="Min. 8 characters, contain at least one digit, one lowercase letter, and one uppercase letter"
        required={true}
        value={formFields.password}
        error={formSubmitState?.error?.password}
        showErrorMsg={!!formSubmitState?.error?.password}
        disabled={pending}
        autoComplete="on"
        onInputChange={handleFormElementChange}
      />

      {/* Phone number  */}
      <InputControl
        label="Phone"
        name="phone"
        type="tel"
        placeholder="Enter your phone number"
        helperText="Enter a valid phone number"
        required={true}
        value={formFields.phone}
        error={formSubmitState?.error?.phone}
        showErrorMsg={!!formSubmitState?.error?.phone}
        disabled={pending}
        autoComplete="on"
        onInputChange={handleFormElementChange}
      />

      {/* Job role  */}
      <SelectControl
        label="Job Role"
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
        onSelectChange={(value) => {
          setFormFields((prevValue) => ({ ...prevValue, jobRole: value }));
        }}
        value={formFields.jobRole}
        error={formSubmitState?.error?.jobRole}
        showErrorMsg={!!formSubmitState?.error?.jobRole}
        disabled={pending}
        helperText="Please select a job role"
      />

      {/* Job location  */}
      <fieldset className={inputGroupParentClasses}>
        <InputHeading
          label={'Preferred Job Location'}
          required={true}
          disabled={pending}
          tagName="legend"
        />

        <div className={inlineWrapperClasses}>
          <label className={inputItemParentClasses}>
            <RadioControl
              name="jobLocation"
              value="remote"
              checked={formFields.jobLocation === 'remote'}
              error={!!formSubmitState?.error?.jobLocation}
              disabled={pending}
              onRadioChange={handleFormElementChange}
            />
            Remote
          </label>
          <label className={inputItemParentClasses}>
            <RadioControl
              name="jobLocation"
              value="in-office"
              checked={formFields.jobLocation === 'in-office'}
              error={!!formSubmitState?.error?.jobLocation}
              disabled={pending}
              onRadioChange={handleFormElementChange}
            />
            In-office
          </label>
        </div>

        {formSubmitState?.error?.jobLocation && (
          <ConditionalTextDisplay
            error={formSubmitState?.error?.jobLocation}
            showErrorMsg
          />
        )}
      </fieldset>

      {/* Languages  */}
      <fieldset className={inputGroupParentClasses}>
        <InputHeading
          label={'Languages'}
          required={true}
          disabled={pending}
          tagName="legend"
        />

        <div className={inlineWrapperClasses}>
          <label className={inputItemParentClasses}>
            <CheckboxControl
              name="languages"
              value="javascript"
              disabled={pending}
              onCheckboxChange={handleFormElementChange}
              error={!!formSubmitState?.error?.languages}
              checked={formFields.languages.includes('javascript')}
            />
            Javascript
          </label>

          <label className={inputItemParentClasses}>
            <CheckboxControl
              name="languages"
              value="python"
              disabled={pending}
              onCheckboxChange={handleFormElementChange}
              error={!!formSubmitState?.error?.languages}
              checked={formFields.languages.includes('python')}
            />
            Python
          </label>
        </div>

        {formSubmitState?.error?.languages && (
          <ConditionalTextDisplay
            error={formSubmitState?.error?.languages}
            showErrorMsg
          />
        )}
      </fieldset>

      {/* Interested  */}
      <div className={inputGroupParentClasses}>
        <label className={inputItemParentClasses}>
          <SwitchControl
            name="interested"
            onSwitchChange={(value) => {
              setFormFields((prevValue) => ({ ...prevValue, interest: value }));
            }}
            checked={formFields.interest}
            error={!!formSubmitState?.error?.interest}
            disabled={pending}
            required={false}
          />
          Are you interested?
        </label>
        {formSubmitState?.error?.interest && (
          <ConditionalTextDisplay
            error={formSubmitState?.error?.interest}
            showErrorMsg={true}
            disabled={pending}
          />
        )}
      </div>

      {/* Terms   */}
      <fieldset className={inputGroupParentClasses}>
        <div className={inlineWrapperClasses}>
          <label className={inputItemParentClasses}>
            <CheckboxControl
              name="terms"
              value={formFields.terms ? 'true' : 'false'}
              onCheckboxChange={handleFormElementChange}
              disabled={pending}
              error={!!formSubmitState?.error?.terms}
              checked={formFields.terms ? true : false}
            />
            <span>I agree to the terms & condition</span>
          </label>
        </div>

        {formSubmitState?.error?.terms && (
          <ConditionalTextDisplay
            error={formSubmitState?.error?.terms}
            showErrorMsg
          />
        )}
      </fieldset>

      {/* Buttons  */}
      <div className="flex flex-wrap items-center gap-2">
        <CustomButton
          colorScheme="primary"
          variant="fill"
          loading={pending}
          disabled={false}
          type="submit"
        >
          Submit
        </CustomButton>
        <CustomButton
          loading={pending}
          disabled={false}
          colorScheme="primary"
          variant="fill"
          className="!bg-red-500"
          type="action"
          onButtonClick={() => {
            setFormFields(initialFormFieldsValue);
            setFormSubmitState(null);
          }}
        >
          Reset
        </CustomButton>
      </div>

      {/* Render the form submit success and error message */}
      {!pending && formSubmitState?.message && (
        <Typography
          size="c1"
          className={cn(
            formSubmitState?.success ? 'text-green-500' : 'text-red-500'
          )}
        >
          {formSubmitState?.message}
        </Typography>
      )}
    </>
  );
}
