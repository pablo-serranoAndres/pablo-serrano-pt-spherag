import { ReactNode } from "react";

interface ButtonProps {
  variant: "filled" | "outlined";
  type: "button" | "submit";
  value: string;
  loading: boolean;
  onClick?: () => void;
}

export default ButtonProps;
