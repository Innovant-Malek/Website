import styles from "./Select.module.css";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import Link from "next/link";

function Select() {
  const [where, setWhere] = useState("Signin");

  const registerClick = () => {
    setWhere("Register");
  };

  const signinClick = () => {
    setWhere("Signin");
  };

  return (
    <div className={styles.container}>
      <Link href="/Register">
        <div
          className={`${styles.container__flex} ${styles.container__reg}`}
          onClick={registerClick}
        >
          <div className={styles.icons}>
            <PersonIcon />
            {where === "Register" && <CheckCircleIcon />}
          </div>

          <h3>Register</h3>
          <p className={styles.sub__title}>Browse and find what you need</p>
        </div>
      </Link>

      <Link href="/">
        <div
          className={`${styles.container__flex} ${styles.container__signin}`}
          onClick={signinClick}
        >
          <div className={styles.icons}>
            <LoginIcon />
            {where == "Signin" && <CheckCircleIcon />}
          </div>
          <h3>Sign in</h3>
          <p className={styles.sub__title}>
            Aleadrdy have an account, then welcome back
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Select;
