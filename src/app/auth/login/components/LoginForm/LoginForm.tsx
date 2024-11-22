"use client";

import Image from "next/image";
import UserModel from "@/models/User";
import { Input, Button, Loader } from "@/components";
import { useState } from "react";
import useLoginForm from "./useLoginForm";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const { handleSubmit, loading, feedback } = useLoginForm();

  const [credentials, setCredentials] = useState<UserModel>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <div className={styles.container}>
      <form
        action=""
        className={styles.form}
        onSubmit={(e) => handleSubmit(e, credentials)}
      >
        <Image src={"/images/logo.png"} alt={""} width={300} height={100} />
        <h2 className={styles.form__title}>Bienvenido de nuevo</h2>
        <Input
          type="text"
          label={"Username"}
          name={"username"}
          value={credentials.username}
          onChange={(e) => handleChange(e)}
        />
        <Input
          type="password"
          label={"Password"}
          name={"password"}
          value={""}
          onChange={(e) => handleChange(e)}
        />
        <Button
          variant={"outlined"}
          type="submit"
          loading={loading}
          value={"Acceder"}
        />

        <p
          className={styles.form__recover}
          onClick={() => alert("Póngase en contacto con su administrador")}
        >
          ¿Has olvidado tu contraseña?
        </p>
        <p className={styles.form__feedback}>{feedback}</p>
      </form>
    </div>
  );
};

export { LoginForm };
