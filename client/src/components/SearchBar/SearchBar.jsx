import React, { useState } from 'react';
import styles from './SearchBar.module.css';



export default function SearchBar({onSearch}) {

   const [searchValue, setSearchValue] = useState('');

   const handleInputChange = (event) => {
      setSearchValue(event.target.value);
   };

   const handleSearchClick = () => {
      onSearch(searchValue);
   };

   return (
      <div className={styles.SearchBar}>
         <ul>
            <li>
               <input 
                  className={styles.inputS}
                  type='search'
                  placeholder='Find your game by name...'
                  value={searchValue}
                  onChange={handleInputChange}
               />
            </li>
            <li>
               <button className={styles.buttonS} onClick={handleSearchClick}> 🔍 </button> 
            </li>
         </ul>
      </div>
   );
}
