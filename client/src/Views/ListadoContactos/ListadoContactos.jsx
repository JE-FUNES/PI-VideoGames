import React from "react";
import styles from "./ListadoContactos.module.css";

const ListadoContactos = (logOut) => {
    return <div className={styles.container}>
        <h2>Lista de Contactos Base de Datos</h2>


    <button className={styles.boton} onClick={() => logOut()}>Log Out</button>
    </div>;
    };

export default ListadoContactos;