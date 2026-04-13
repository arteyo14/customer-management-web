"use client";

import { FormLabel } from "../../form";

type IProps = {
  label: string;
  required?: boolean;
};

const FormLabelRequied = ({ label, required = false }: IProps) => {
  return (
    <FormLabel className="gap-1">
      {label}
      {required && <span className="text-red-500 text-xl">*</span>}
    </FormLabel>
  );
};

export default FormLabelRequied;
