import { Loader } from "@/components";
import ButtonProps from "./Button.types";
import styles from "./Button.module.scss";

const Button = ({ type, onClick, variant, loading, value }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles[`button__${variant}`]}
      disabled={loading}
    >
      {loading ? <Loader /> : value}
    </button>
  );
};

export { Button };
