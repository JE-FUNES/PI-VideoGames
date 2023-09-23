import { 
    SEARCH_GAMES,
    GET_GAMES,
    GET_GENRES,
    GET_DETAILS,
    CREATE_GAME,
    DELETE_GAME,
} from './actionTypes';

import axios from 'axios';


// search games
export const searchGames = (name) => {
    const url = `/videogames?name=${name}`;
    return async (dispatch) => {
        try {
            const games = await axios.get(url);
            return dispatch({
                type: SEARCH_GAMES,
                payload: games.data
            });
        } catch (error) {
            console.log(error);

        }
    };
};

// get games

export const getGames = () => {
    const url = `/videogames`;
    return async (dispatch) => {
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
    const url = `/genres`;
    return async (dispatch) => {
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
    const url = `/videogames/${id}`;
    return async (dispatch) => {
        try {
            const details = await axios.get(url);
            return dispatch({
                type: GET_DETAILS,
                payload: details.data
            });
        } catch (error) {
            console.log(error);

        }
    };
};

// create game

export const createGame = (game) => {
    const url = `/videogames`;
    return async (dispatch) => {
        try {
            const newGame = await axios.post(url, game);
            return dispatch({
                type: CREATE_GAME,
                payload: newGame.data
            });
        } catch (error) {
            console.log(error);
            alert(`The game ${game.name} already exists`)

        }
    };
}

// delete game

export const deleteGame = (id) => {
    const url = `/videogames/delete/${id}`;
    return async (dispatch) => {
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