import React, { useState } from "react";
import styles from "./RegisterBody.module.css";
import { register } from "../../pages/api/auth";

import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import equals from "validator/lib/equals";

function ResgisterBody() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOne, setPaswwordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

  const data = { firstName, lastName, email, passwordOne, passwordTwo };

  const handleSubmit = () => {
    if (
      isEmpty(firstName) ||
      isEmpty(lastName) ||
      isEmpty(email) ||
      isEmpty(passwordOne) ||
      isEmpty(passwordTwo) ||
      !equals(passwordOne, passwordTwo) ||
      !isEmail(email)
    ) {
      window.alert("There is a missing or invalid field");
    }

    else {
      register(data)
        .then(() => {
          setFirstName("");
          setLastName("");
          setEmail("");
          setPaswwordOne("");
          setPasswordTwo("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <form className={styles.container}>
      <div className={styles.input__container__name}>
        <input
          className={`${styles.input} ${styles.input__name}`}
          type="text"
          placeholder="First Name *"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <input
          className={`${styles.input} ${styles.input__name}`}
          type="text"
          placeholder="Last Name *"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>

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
          value={passwordOne}
          onChange={(e) => setPaswwordOne(e.target.value)}
          required
        />
      </div>

      <div className={styles.input__container}>
        <input
          className={styles.input}
          type="password"
          placeholder="Repeat Paswword *"
          value={passwordTwo}
          onChange={(e) => setPasswordTwo(e.target.value)}
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

export default ResgisterBody;
