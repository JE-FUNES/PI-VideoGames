import {
    CREATE_GAME,
    DELETE_GAME,
    GET_GAMES,
    SEARCH_GAMES,
    GET_GENRES,
    GET_DETAILS,
    UPGRADE_GAME,
    GET_DETAILS_NEWGAME
} from "./actionTypes";

const initialState = {
    
    games: [],
    detailGame: [],
    //searchGames: [],
    genres: [],
    detailNewGame: null, // no necesita iniciar con datos porque los obtien cuando los necesita de la base de datos
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case CREATE_GAME:
            return {
                ...state,
               games: [...state.games, action.payload]
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
            case GET_DETAILS_NEWGAME:
                return {
                    ...state,
                    detailNewGame: action.payload
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