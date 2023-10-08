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
    SUBMIT_CONTACT_FORM
} from './actionTypes.js';

import axios from 'axios';




// search games
export const searchGames = (name) => {
    const url = `http://localhost:3001/games?name=${name}&limit=15`;
    return async function (dispatch) {
        try {
            const response = await axios.get(url);
            const games = response.data; // Extrae data de la respuesta
            
            dispatch({
                type: SEARCH_GAMES,
                payload: games
            });

        } catch (error) {
            console.log(error);

        }
    }
}

// get games

export const getGames = () => {
    const url = "http://localhost:3001/games";
    return async function (dispatch) {
        try {
            const games = await axios.get(url);
            dispatch({
                type: GET_GAMES,
                payload: games.data
            });
        } catch (error) {
            console.log(error);

        }
    };
};

// get genres

export const getGenres = () => {
    const url = `http://localhost:3001/genres`;
    return async function (dispatch) {
        try {
            const genres = await axios.get(url);
            return dispatch({
                type: GET_GENRES,
                payload: genres.data
            });
        } catch (error) {
            console.log(error);
        }
    };
};


// get details

export const getDetails = (id) => {
    const url = `http://localhost:3001/games/${id}`;
    return async function (dispatch) {
        try {
            const detail = await axios.get(url);
            return dispatch({
                type: GET_DETAILS,
                payload: detail.data
            });
        } catch (error) {
            console.log(error);

        }
    };
};

// getDetailsByUUID traera de la base de datos un juego por su id GET_DETAILS_NEWGAME


export const getDetailsByUUID = (id) => {
    const url = `http://localhost:3001/games/uuid/${id}`;
    return async function (dispatch) {
        try {
            const detailNewGame = await axios.get(url);
            
            return dispatch({
                type: GET_DETAILS_NEWGAME,
                payload: detailNewGame.data
            });
        } catch (error) {
            console.log(error);

        }
    };
}




// create game

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
}

// delete game
/*
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
*/

export const filterGenre = ( payload ) => {
    return {
        type: FILTER_GENRE,
        payload
    }
};

export const filterOrdered = ( payload ) => {
    return {
        type: FILTER_ORDER,
        payload
    }
};

export const filterRating = ( payload ) => {
    return {
        type: FILTER_RATING,
        payload
    }
};

export const filterCreated = ( payload ) => {
    return {
        type: FILTER_CREATED,
        payload
    }
};

export const filterPlatform = ( payload ) => {
    return {
        type: FILTER_PLATFORM,
        payload
    }
};

export const submitContactForm = (formData) => {
    const url = "http://localhost:3001/submitContactForm"; 
  
    return async function (dispatch) {
      try {
        // Realiza una solicitud POST al servidor para enviar el formulario
        const response = await axios.post(url, formData);
  
        // Despacha una acción con el tipo SUBMIT_CONTACT_FORM y la respuesta del servidor
        dispatch({
          type: SUBMIT_CONTACT_FORM,
          payload: response.data, // Puedes ajustar esto según lo que esperes en la respuesta del servidor
        });
  
        // Retorna la respuesta del servidor si es necesario
        return response.data;
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        // Puedes agregar una acción adicional para manejar errores si lo deseas
      }
    };
  };
  
  
  
  
  
  
  

