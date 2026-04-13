"use client";

import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "../../form";
import { Input } from "../../input";
import FormLabelRequied from "./form-label";

type InputProps = Omit<React.ComponentProps<"input">, "name" | "form">;

type IProps<T extends FieldValues> = InputProps & {
  formMethods: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  required?: boolean;
};

function FormTextInput<T extends FieldValues>({
  formMethods,
  name,
  label,
  required,
  ...rest
}: IProps<T>) {
  return (
    <FormField
      control={formMethods.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabelRequied label={label} required={required} />
          <FormControl>
            <Input className="h-10" {...field} {...rest} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormTextInput;
