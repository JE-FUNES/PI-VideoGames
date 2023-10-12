import React, { useState } from "react";
import styles from "./PrivateLogin.module.css";
import Validation from "./validation/validation";

function PrivateLogin({login})  {

    const [errors, setErrors] = useState({email: '', password: ''})


    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [shown, setShown] = useState(false);

    const switchShown = () => setShown(!shown);


    
        function handleChange (event){
        setUser({
        ...user,
        [event.target.name]: event.target.value
        })
        setErrors(Validation({
            ...user}))
    }
            
    

    function handleSubmit(event){
        event.preventDefault()
        if (errors.email || errors.password) {
            login(user)
        } else {
            alert('There are errors in the login');
            
            }
    }

    return (

        <div className={styles.routeContainer}>
        <div className={styles.contenedorForm}>

            <div className={styles.tituloForm} >

                <h1>Private Login</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className={styles.contenedorInput}>
                <label className={styles.textoLogin}> ✉ EMAIL </label>
                <br/>
                <input 
                type="text" 
                placeholder="put-here-your-@email.com"
                name="email"
                value={user.email}
                onChange={handleChange}
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
                </div>
            
                <div className={styles.contenedorInput}>
                <label className={styles.textoLogin}> 🗝 PASSWORD 
                    <span className={styles.mostrar} onClick={switchShown}>
                        {shown ? " ( ocultar )" : " ( mostrar )"}
                    </span>
                </label>
                <br/>
                <input 
                type={shown ? "text" : "password"} 
                name="password" 
                placeholder="Tu-clave123"                                                                   
                value={user.password} 
                onChange={handleChange}
                
                />
                {errors.password && <p className={styles.error}>{errors.password}</p>}
                </div>

                <button className={styles.botonSubmit} type="submit"> ENTER </button>
            </form>
        </div>
        </div> 
    )
}


export default PrivateLogin;