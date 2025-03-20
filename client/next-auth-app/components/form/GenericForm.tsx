import { zodResolver } from '@hookform/resolvers/zod';
import {
  forwardRef,
  ReactNode,
  // Ref,
  useImperativeHandle,
} from 'react';
import {
  Control,
  DefaultValues,
  FieldValues,
  FormState,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
  Mode,
} from 'react-hook-form';
import { z, ZodType } from 'zod';
import { Form } from '@/components/ui/form';

export type GenericFormRef<T extends FieldValues> = {
  getValues: () => T;
  reset: (values?: Partial<T>) => void;
  setValue: (name: keyof T, value: T[keyof T]) => void;
  formState: FormState<T>;
  control: Control<T>;
  form: UseFormReturn<T>;
};

export type GenericFormProps<TSchema extends ZodType> = {
  schema: TSchema;
  initialValues: Partial<z.infer<TSchema>>;
  onSubmit: SubmitHandler<z.infer<TSchema>>;
  children: ReactNode;
  // ref: Ref<GenericFormRef<z.infer<TSchema>>>;
  mode?: Mode;
} & React.ComponentPropsWithoutRef<'form'>;

/**
 * A generic form component.
 * @param schema The schema of the form.
 * @param initialValues The initial values of the form.
 * @param onSubmit The submit handler of the form.
 * @param children The children of the form.
 * @param ref The reference of the form.
 *
 * @returns The generic form component.
 */

// Ref as a prop
// export const GenericForm = <TSchema extends ZodType>({
//   ref,
//   initialValues,
//   schema,
//   onSubmit,
//   children,
//   mode = 'onChange',
// }: GenericFormProps<TSchema>) => {

// TODO: When update the react version, need to remove the legacy way
export const GenericForm = forwardRef(function GenericForm<
  TSchema extends ZodType,
>(
  {
    initialValues,
    schema,
    onSubmit,
    children,
    mode = 'onChange',
  }: GenericFormProps<TSchema>,
  ref: React.Ref<GenericFormRef<z.infer<TSchema>>>
) {
  const form = useForm<z.infer<TSchema>>({
    defaultValues: initialValues as DefaultValues<z.infer<TSchema>>,
    resolver: zodResolver(schema),
    mode,
  });

  useImperativeHandle(ref, () => ({
    getValues: form.getValues,
    reset: (values?: Partial<z.infer<TSchema>>) => form.reset(values),
    setValue: (
      name: keyof z.infer<TSchema>,
      value: z.infer<TSchema>[keyof z.infer<TSchema>]
    ) => form.setValue(name as Path<z.infer<TSchema>>, value),
    formState: form.formState,
    control: form.control,
    form: form,
  }));

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
});

GenericForm.displayName = 'GenericForm';
