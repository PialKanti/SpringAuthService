'use client';

import { useFormState } from 'react-dom';
import { handleSubmit } from './actions';
import { FormElements } from './element';
import { IFormState } from './interface';
import { Typography } from '@/components/typography';

const initialFormStateValue: IFormState = {
  success: true,
  message: '',
};

/**
 * `Form` is a React functional component that renders a form with an email input field and a submit button.
 * It leverages the `useFormState` and `useFormStatus` hooks from `react-dom`
 * for form state management, including handling form submission and displaying
 * form status messages.
 *
 * @ResourceLink https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#pending-states
 * This component is designed to work with Next.js server actions and
 * mutations, handling pending states effectively.
 *
 * @see {@link handleSubmit} - The function used to handle form submission.
 * @see {@link IInitialFormStatusState} - The interface defining the initial
 * form status state.
 */
export default function Form() {
  const [formState, formAction] = useFormState(
    handleSubmit,
    initialFormStateValue
  );

  return (
    <div className="bg-gray-300 py-7 lg:py-10">
      <div className="container">
        <div className="mx-auto max-w-[450px] rounded-lg bg-white p-6 shadow-lg lg:p-10">
          <Typography
            size="h3"
            tagName="h2"
            className="mb-3 text-center font-bold"
          >
            Form submission with server action
          </Typography>
          <form className="grid gap-4" action={formAction}>
            <FormElements formState={formState} />
          </form>
        </div>
      </div>
    </div>
  );
}
