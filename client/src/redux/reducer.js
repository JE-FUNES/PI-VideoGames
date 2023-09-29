import {
    CREATE_GAME,
    DELETE_GAME,
    GET_GAMES,
    SEARCH_GAMES,
    GET_GENRES,
    GET_DETAILS,
    UPGRADE_GAME,
} from "./actionTypes";

const initialState = {
    // create Game
    games: [],
    detailGame: [],
    //searchGames: [],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case CREATE_GAME:
            return {
                ...state,
               // games: [...state.games, action.payload]
            };
        case DELETE_GAME:
            return {
                ...state,
                //games: state.games.filter(game => game.id !== action.payload)
            };
        case GET_GAMES:
            return {
                ...state,
                games: action.payload
            };
        case SEARCH_GAMES:
            
            return {
                ...state,
                games: action.payload
            };
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            };
        case GET_DETAILS:
            return {
                ...state,
                detailGame: action.payload
            };
        case UPGRADE_GAME:
            return {
                ...state,
               /* games: state.games.map(game => {
                    if (game.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return game;
                    }
                }) */
            };
        default:
            return state;
    }
}