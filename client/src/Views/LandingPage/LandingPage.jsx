import React from "react";
import styles from "./LandingPage.module.css";
import LoginForm from "./LoginForm";
import Titulo from "./Titulo";

export default function LandingPage() {
  return (
    <div className={styles.routeContainer}>
      <div className={styles.generalContainer}>
        <div className={styles.formContainer}>
          <LoginForm />
        </div>
        <div className={styles.tituloContainer}>
          <Titulo />
        </div>
        <div className={styles.footer}>
          <h3>🟠🧡🟧 © 2023 - P.I. Julia E. Funes 🟧🧡🟠</h3>
        </div>
      </div>
    </div>
  );
}
