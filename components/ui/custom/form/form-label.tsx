"use client";

import { FormLabel } from "../../form";

type IProps = {
  label: string;
  required?: boolean;
};

const FormLabelRequied = ({ label, required = false }: IProps) => {
  return (
    <FormLabel>
      {label}
      {required && <span className="text-red-500">*</span>}
    </FormLabel>
  );
};

export default FormLabelRequied;
