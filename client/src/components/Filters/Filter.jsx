import React, { useState, useEffect } from "react";
import OrderFilter from "./OrderFilter";
import CreatedFilter from "./OriginFilter";
import PlatformFilter from "./PlatformFilter";
import GenreFilter from "./GenreFilter";
import styles from "./Css/Filter.module.css";

function Filter({ setCurrentPage }) {
  const [activeFilter, setActiveFilter] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // para que aparezca el navbar despues de 2 segundos

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      clearTimeout(timer); // Limpia el temporizador al desmontar el componente
    };
  }, []);

  const divStyles = {
    opacity: isVisible ? 1 : 0,
    transform: `translateY(${isVisible ? 0 : "-20px"})`, // Desplazamiento vertical
    transition: "opacity 1s, transform 1s", // Agrega una transición de 1 segundos a la opacidad y la transformación
  };

  const handleFilterClick = (filterName) => {
    setActiveFilter(filterName === activeFilter ? null : filterName);
    setCurrentPage(1);
  };

  return (
    <div className={styles.Filtro}>
      <div style={divStyles}>
        <div
          className={`OrderFilter ${
            activeFilter === "OrderFilter" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("OrderFilter")}
        ></div>
        <div
          className={`CreatedFilter ${
            activeFilter === "CreatedFilter" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("CreatedFilter")}
        ></div>
        <div
          className={`PlatformFilter ${
            activeFilter === "PlatformFilter" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("PlatformFilter")}
        ></div>
        <div
          className={`GenreFilter ${
            activeFilter === "GenreFilter" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("GenreFilter")}
        ></div>
        <div
          className={`OrderFilterOptions ${
            activeFilter === "OrderFilter" ? "active" : ""
          }`}
        >
          <OrderFilter setCurrentPage={setCurrentPage} />
        </div>
        <div
          className={`CreatedFilterOptions ${
            activeFilter === "CreatedFilter" ? "active" : ""
          }`}
        >
          <CreatedFilter setCurrentPage={setCurrentPage} />
        </div>
        <div
          className={`PlatformFilterOptions ${
            activeFilter === "PlatformFilter" ? "active" : ""
          }`}
        >
          <PlatformFilter setCurrentPage={setCurrentPage} />
        </div>
        <div
          className={`GenreFilterOptions ${
            activeFilter === "GenreFilter" ? "active" : ""
          }`}
        >
          <GenreFilter setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </div>
  );
}

export default Filter;
