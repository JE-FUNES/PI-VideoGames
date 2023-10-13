import {
  SEARCH_GAMES,
  GET_GAMES,
  GET_GENRES,
  GET_DETAILS,
  CREATE_GAME,
  GET_DETAILS_NEWGAME,
  FILTER_GENRE,
  FILTER_PLATFORM,
  FILTER_CREATED,
  FILTER_RATING,
  FILTER_ORDER,
  SUBMIT_CONTACT_FORM,
  PRELOAD_CARDS,
  DELETE_GAME,
  GET_CONTACTS,
  DELETE_CONTACTS,
} from "./actionTypes.js";

import axios from "axios";

// precarga de games en LandingPage

export const preloadCards = () => {
  return async function (dispatch) {
    try {
      await dispatch(getGames());
      dispatch({
        type: PRELOAD_CARDS,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// get games (getGamesHandler, getGamesByName controller y por defecto getAllGamesHandler)

export const getGames = () => {
  const url = "http://localhost:3001/games";
  return async function (dispatch) {
    try {
      const games = await axios.get(url);
      dispatch({
        type: GET_GAMES,
        payload: games.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// search games (getGamesHandler, getGamesByName + getAllGames controllers)
export const searchGames = (name) => {
  const url = `http://localhost:3001/games?name=${name}&limit=15`;
  return async function (dispatch) {
    try {
      const response = await axios.get(url);
      const games = response.data;

      dispatch({
        type: SEARCH_GAMES,
        payload: games,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// get details (getGameHandler, getGameById controller)

export const getDetails = (id) => {
  const url = `http://localhost:3001/games/${id}`;
  return async function (dispatch) {
    try {
      const detail = await axios.get(url);
      return dispatch({
        type: GET_DETAILS,
        payload: detail.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// getDetailsByUUID traera de la base de datos un juego por su id GET_DETAILS_NEWGAME (getGameByUIdHandler, getGameBuUId controller)

export const getDetailsByUUID = (id) => {
  const url = `http://localhost:3001/games/uuid/${id}`;
  return async function (dispatch) {
    try {
      const detailNewGame = await axios.get(url);

      return dispatch({
        type: GET_DETAILS_NEWGAME,
        payload: detailNewGame.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// create game (createGameHandler, createGame controller)

export const createGame = (input) => {
  const url = "http://localhost:3001/games";
  return async function (dispatch) {
    try {
      const response = await axios.post(url, input);
      dispatch({
        type: CREATE_GAME,
        payload: response.data,
      });

      return response.data;
    } catch (error) {
      console.log(error, "The game could not be created");
    }
  };
};

// FILTROS PARA GAMES

export const filterOrdered = (payload) => {
  return {
    type: FILTER_ORDER,
    payload,
  };
};

export const filterRating = (payload) => {
  return {
    type: FILTER_RATING,
    payload,
  };
};

export const filterCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload,
  };
};

export const filterPlatform = (payload) => {
  return {
    type: FILTER_PLATFORM,
    payload,
  };
};

// GENRES

// get genres ( getGenresHandler, getGenresByName controller y por defecto getAllGenres)

export const getGenres = () => {
  const url = `http://localhost:3001/genres`;
  return async function (dispatch) {
    try {
      const genres = await axios.get(url);
      return dispatch({
        type: GET_GENRES,
        payload: genres.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterGenre = (payload) => {
  return {
    type: FILTER_GENRE,
    payload,
  };
};

// Formulario de Contacto ( createContact controller, createContactHandler)

export const submitContactForm = (formData) => {
  const url = "http://localhost:3001/submit/contact";

  return async function (dispatch) {
    try {
      const response = await axios.post(url, formData);

      dispatch({
        type: SUBMIT_CONTACT_FORM,
        payload: response.data,
      });

      return response.data;
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };
};

// delete game

export const deleteGame = (id) => {
    const url = `http://localhost:3001/games/delete/${id}`;
    return async function (dispatch) {
        try {
            await axios.delete(url);
            return dispatch({
                type: DELETE_GAME,
            });
        } catch (error) {
            console.log(error);
            alert("The game could not be deleted")
            
        }
    }
}

// get contacts se comunicará con http:localhost:3001/submit/contact para traer toda la información de los contactos

export const getContacts = () => {
  const url = "http://localhost:3001/submit/contact";
  return async function (dispatch) {
    try {
      const contacts = await axios.get(url);
      dispatch({
        type: GET_CONTACTS,
        payload: contacts.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// delete contacts se comunicará con http:localhost:3001/submit/contact para borrar un contacto por su id

export const deleteContacts = (id) => {
  const url = `http://localhost:3001/submit/contact/${id}`;
  return async function (dispatch) {
    try {
      await axios.delete(url);
      return dispatch({
        type: DELETE_CONTACTS,
      });
    } catch (error) {
      console.log(error);
      alert("The contact could not be deleted");
    }
  };
};

// verifica si está disponible el nombre del juego. Será para no crear 2 juegos con el mismo nombre

export const checkGameName = async (name) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/games?name=${name}`
    );
    const games = response.data;
    const exactMatch = games.find((game) => game.name === name);
    return !exactMatch;
  } catch (error) {
    console.error("Error checking game name:", error);
    return false;
  }
};