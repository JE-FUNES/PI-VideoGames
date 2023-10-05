import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css';
import { useSelector } from 'react-redux';


function Cards() { 
   
   const games = useSelector((state) => state.gamesCopy);   
     
   return(
       <div className={styles.Cards_component}>
           <div className={styles.Cards}>
             
               { games?.map((element) => (
                         <Card 
                            key={ element.id }
                            game={element}
                         /> 
                      ))
                   } 
                       
            </div>
         </div>
   );
};

export default Cards;
