import { ChangeEventHandler } from "react";

interface InputProps {
  name: string;
  value: string;
  label: string;
  type: "text" | "textarea" | "password";
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default InputProps;
