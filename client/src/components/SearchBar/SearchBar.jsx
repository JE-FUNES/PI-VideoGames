import React, { useState, useEffect, useRef } from 'react';
import styles from './SearchBar.module.css';
import { searchGames } from '../../redux/actions';
import { useDispatch } from 'react-redux';



export default function SearchBar() {

   const dispatch = useDispatch();
   const [searchValue, setSearchValue] = useState('');
   const inputRef = useRef(null);
   
   const handleInputChange = (event) => {
      setSearchValue(event.target.value);
   };
   
   const handleSearchClick = () => {
      dispatch (searchGames(searchValue));
   };

   const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
         handleSearchClick();
      }
   }
   
   useEffect(() => {
      inputRef.current.focus();
   }, []); 
   

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
                  onKeyDown={handleKeyPress}
                  ref={inputRef}
               />
            </li>
            <li>
               <button className={styles.buttonS} onClick={handleSearchClick}>🔍</button> 
            </li>
         </ul>
      </div>
   );
}
