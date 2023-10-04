import { 
    SEARCH_GAMES,
    GET_GAMES,
    GET_GENRES,
    GET_DETAILS,
    CREATE_GAME,
    DELETE_GAME,
    UPGRADE_GAME,
    GET_DETAILS_NEWGAME,
    FILTER_GENRE,
    FILTER_PLATFORM,
    FILTER_CREATED,
    FILTER_RATING,
    FILTER_ORDER,
} from './actionTypes.js';

import axios from 'axios';





// MODIFICAR GAME
export const upgradeGame = (id, name, description, image, released, rating, platforms, genres) => {
    const url = `http://localhost:3001/games/${id}`;
    return async function (dispatch) {
        try {
            await axios.put(url, {name, description, image, released, rating, platforms, genres});
            return dispatch({
                type: UPGRADE_GAME,
            });
        } catch (error) {
            console.log(error);
            alert(`The game ${name} could not be updated`)
        }
    }
}


// search games
export const searchGames = (name) => {
    const url = `http://localhost:3001/games?name=${name}&limit=15`;
    return async function (dispatch) {
        try {
            const response = await axios.get(url);
            const games = response.data; // Extrae data de la respuesta
            console.log("Respuesta de API en action:", games);
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
            return dispatch({
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
    const url = "http://localhost:3001/genres";
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



