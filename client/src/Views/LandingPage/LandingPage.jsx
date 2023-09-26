import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./LandingPage.module.css";

import logo from '../../Images/Logo.png'
import name from '../../Images/icons/byName.png'
import gender from '../../Images/icons/Genres.png'
import platform from '../../Images/icons/plataformas.png'
import edit from '../../Images/icons/edit.png'
import deleteT from '../../Images/icons/delete.png'


export default function LandingPage() {

    return ( 

    <div id={ styles.landingPageBloquePpal }>
        <section className={ styles.info }>
            <div className={ styles.logo }>
                <img className={ styles.logoImg } src={ logo } alt="Logo" />
                <h1 className={ styles.logoTitle }> Henry Games </h1>
            </div>
        
            <div className={ styles.description } >
                <p className={ styles.description1 }> Looking for information about your favorite games? You've come to the right place! </p>
                <section className={ styles.infoList }> 
                Search and filter
                    <section className={ styles.infoList2 }>
                        <div className={ styles.infoCard }>
                            <img className={ styles.icons } src={name} alt="Icon name" />  
                            <p> By name </p>
                        </div>
                        <div className={ styles.infoCard }>
                            <img className={ styles.icons } src={gender} alt="Icon gender" />  
                            <p> By gender </p>
                        </div>
                        <div className={ styles.infoCard }>
                            <img className={ styles.icons } src={platform} alt="Icon platform" /> 
                            <p> By platform  </p>
                        </div>
                    </section>
                </section>
                <section className={ styles.infoList }> 
                Add games 
                <section className={ styles.infoList2 }>
                    <div className={ styles.infoCard }>
                        <img className={ styles.icons } src={edit} alt="Icon edit" /> 
                        <p> Edit them </p>
                    </div>
                    <div className={ styles.infoCard }>
                        <img className={ styles.icons } src={deleteT} alt="Icon delete" /> 
                        <p> Delete them </p>
                    </div>
                </section>
                </section>
            </div>
         </section>
         <section className={ styles.img_btn } >
        <img className={ styles.imgLanding } src="https://i.pinimg.com/originals/d0/e0/e2/d0e0e259bf0aba4da742bedff1d4b8a5.gif" alt="Kids playing" />
        <Link to={'/home'}> 
            <button className={ styles.btnLanding } > Search Games </button>
        </Link>
        </section>
    </div>
)
}