import { 
    SEARCH_GAMES,
    GET_GAMES,
    GET_GENRES,
    GET_DETAILS,
    CREATE_GAME,
    DELETE_GAME,
    UPGRADE_GAME,
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
    const url = `http://localhost:3001/games?name=${name}`;
    return async function (dispatch) {
        try {
            const games = await axios.get(url);
            return dispatch({
                type: SEARCH_GAMES,
                payload: games.data
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

// create game

export const createGame = (game) => {
    const url = "http://localhost:3001/games";
    return async function (dispatch) {
        try {
            await axios.post(url, game);
            return dispatch({
                type: CREATE_GAME,
            });
        } catch (error) {
            console.log(error);
            alert(`The game ${game.name} already exists`)

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