import React from "react";
import styles from "./PlayZuma.module.css";

export default function PlayZuma() {
    return (
        <div className={styles.routeContainer}>
            <div className={styles.generalContainer}>
        
        <iframe src='https://www.minijuegos.com/embed/zuma' className={styles.iFrame} ></iframe>
        </div>
        </div>
    );
    }