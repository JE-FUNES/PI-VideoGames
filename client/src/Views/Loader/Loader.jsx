import React from 'react'
import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.loader}>
            <img 
                className={styles.loader} 
                src="https://i.gifer.com/ZKZg.gif" 
                alt="Loader" 
            />
        </div>
    )
}

export default Loader