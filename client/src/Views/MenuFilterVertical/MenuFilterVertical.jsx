import React, {useState} from 'react'
import styles from './MenuFilterVertical.module.css'
import Filter from '../../components/Filters/Filter'

const MenuFilterVertical = () => {
    const [ currentPage, setCurrentPage ] = useState( 1 );
    

   

          return (
            <div className={styles.box}>
                <Filter currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        );
        
}

export default MenuFilterVertical