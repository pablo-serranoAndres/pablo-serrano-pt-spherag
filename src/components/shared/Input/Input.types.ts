import { ChangeEventHandler, ReactNode } from "react";

interface InputProps {
  type: "text" | "select" | "password";
  name?: string;
  value?: string;
  label?: string;
  options?: ReactNode[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default InputProps;
