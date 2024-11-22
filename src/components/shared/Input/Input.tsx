"use client";

import InputProps from "./Input.types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./Input.module.scss";
import { HTMLInputTypeAttribute, useState } from "react";

const Input = ({ type, label, name, value, onChange, options }: InputProps) => {
  switch (type) {
    case "text":
      return (
        <div className={styles.inputContainer}>
          <input
            type={type}
            className={styles.input}
            placeholder={label}
            name={name}
            value={value}
            onChange={onChange}
          />
        </div>
      );

    case "password":
      const [visibility, setVisibility] =
        useState<HTMLInputTypeAttribute>(type);
      return (
        <div className={styles.inputContainer}>
          <input
            type={visibility}
            className={styles.input}
            placeholder={label}
            name={name}
            // value={value}
            onChange={onChange}
          />
          {type === "password" && (
            <div
              onClick={() =>
                setVisibility(visibility === "text" ? "password" : "text")
              }
            >
              {visibility === "text" ? <FaEyeSlash /> : <FaEye />}
            </div>
          )}
        </div>
      );
    case "select":
      return (
        <div className={styles.inputContainer}>
          <select>
            <option>{label}</option>
            {options &&
              options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
          </select>
        </div>
      );

    default:
      break;
  }
};
export { Input };
