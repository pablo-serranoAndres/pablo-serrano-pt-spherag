import { FormEvent, useState } from "react";
import UserModel from "@/models/User";

// federico.front.test@spherag.com
// d1KKaI6*1LCTF(=]£y?u

const useLoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleLogin = async (values: UserModel) => {
    try {
      const response = await fetch("/api/Authentication/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const credential = await response.json();
      console.log(credential);
      sessionStorage.setItem("key", credential);
      return true;
    } catch (error) {
      return false;
    }
  };
  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    values: UserModel
  ) => {
    e.preventDefault();
    setLoading(true);
    const response = await handleLogin(values);
    // if (response) window.location.href = "/admin";
    if (!response) {
      setLoading(false);
      setFeedback("Credenciales incorrectas");
    }
  };
  return { handleSubmit, loading, feedback };
};
export default useLoginForm;
