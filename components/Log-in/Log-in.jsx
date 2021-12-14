import React, { useState } from "react";
import styles from "./Login.module.css";
import { signin } from "../../pages/api/auth";
import { setAuthentication } from "../../helpers/auth";
import { useRouter } from "next/router";

import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const data = { email, password };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmpty(email) || isEmpty(password) || !isEmail(email)) {
      window.alert("There is a missing or invalid field");
    }

    else {
      signin(data)
        .then((response) => {
          setAuthentication(response.data.token, response.data.user);
          setEmail("");
          setPassword("");
          router.push("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <form className={styles.container}>
      <div className={styles.input__container}>
        <input
          className={styles.input}
          type="email"
          placeholder="E-mail *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className={styles.input__container}>
        <input
          className={styles.input}
          type="password"
          placeholder="Paswword *"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className={styles.input__container}>
        <button className={styles.submit__btn} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Login;
