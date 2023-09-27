import React, { useEffect, useState } from 'react';
import styles from "./Home.module.css";

const Home = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Obtener el nombre del localStorage o de un estado global si es necesario
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <div className={styles.general}>
        <div className={styles.Bienvenida}>
      <h2>Welcome {userName} ! I was waiting for you 🧡. 
      <p>Search for your favorite video game, or create your own!</p>
      </h2>
      </div>
    <div className={styles.overlay}>
    <div className={styles.container}>
      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg>  

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg>  

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg>  

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg>  

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg>  

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

    
      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 

      <svg className={styles.shape} viewBox="0 0 100 115" preserveAspectRatio='xMidYMin slice' >
        <polygon points="" fill='none' stroke='hsl(320,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="0s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(240,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="1s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(160,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="2s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
        <polygon points="" fill='none' stroke='hsl(80,100%,70%)' stroke-width="5" >
          <animate attributeName="points" dur="4s" repeatCount="indefinite" begin="3s" from="50 57.5, 50 57.5, 50 57,5" to="50 -75, 175 126, -75 126" >
          </animate>
        </polygon>
      </svg> 
      </div>
    </div>
    </div>
  );
};

export default Home;
