"use client";

import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { Button } from "../../button";
import { FormControl, FormField, FormItem, FormMessage } from "../../form";
import { Input } from "../../input";
import FormLabelRequied from "./form-label";

type IPasswordInput = Omit<React.ComponentProps<"input">, "name" | "form">;

type IProps<T extends FieldValues> = IPasswordInput & {
  className?: string;
  formMethods: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  required?: boolean;
};

const FormPasswordInput = <T extends FieldValues>({
  formMethods,
  name,
  label,
  required,
  ...props
}: IProps<T>) => {
  const [show, setShow] = useState(false);

  return (
    <FormField
      control={formMethods.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabelRequied label={label} required={required} />
          <div className="relative">
            <FormControl>
              <Input {...field} {...props} type={show ? "text" : "password"} />
            </FormControl>
            <Button
              type="button"
              className="absolute top-0 right-0 cursor-pointer bg-transparent hover:bg-transparent"
              onClick={() => setShow(!show)}
            >
              {!show ? <EyeClosed stroke="#000" /> : <Eye stroke="#000" />}
            </Button>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormPasswordInput;
