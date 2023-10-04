import {
    CREATE_GAME,
    DELETE_GAME,
    GET_GAMES,
    SEARCH_GAMES,
    GET_GENRES,
    GET_DETAILS,
    UPGRADE_GAME,
    GET_DETAILS_NEWGAME,
    FILTER_GENRE,
    FILTER_PLATFORM,
    FILTER_CREATED,
    FILTER_ORDER,
    FILTER_RATING,
} from "./actionTypes";

const initialState = {
    
    games: [],
    detailGame: [],
    genres: [],
    detailNewGame: null, // no necesita iniciar con datos porque los obtien cuando los necesita de la base de datos
    gamesFilter: [],
    genresFilter: [],
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
                    genresFilter: action.payload,
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
                
            case FILTER_CREATED:
                const gamesCreatedFilter = state.gamesFilter;
                const createdFilter = action.payload === "created"  
                    ? gamesCreatedFilter.filter( game => game.created === true ) 
                    : gamesCreatedFilter.filter( game => game.created === false );
                return{
                    ...state,
                    games: action.payload === "All" ? gamesCreatedFilter : createdFilter,
            };

            case FILTER_ORDER: 
            const gamesNameFilter = state.games;
            const nameFilter = action.payload === "asc"  
                ? gamesNameFilter.slice().sort( function(a, b) {
                    if( a.name.toLowerCase() < b.name.toLowerCase() ) return -1;
                    if( b.name.toLowerCase() < a.name.toLowerCase() )  return 1;
                    return 0;
                }) : 
                gamesNameFilter.slice().sort( function(a, b) {
                    if( a.name.toLowerCase() > b.name.toLowerCase() ) return -1;
                    if( b.name.toLowerCase() > a.name.toLowerCase() )  return 1;
                    return 0;
                })
            return{
                ...state,
                games: nameFilter,
            };

            case FILTER_RATING: 
            const gamesRatingFilter = state.games;
            const ratingFilter = action.payload === "rAsc"
                ? gamesRatingFilter.slice().sort( function(a, b) {
                    if( a.rating > b.rating ) return -1;
                    if( b.rating > a.rating ) return 1;
                    return 0;
                }) : 
                gamesRatingFilter.slice().sort( function(a, b) {
                    if( a.rating < b.rating ) return -1 ;
                    if( b.rating < a.rating ) return 1;
                    return 0;
                })
            return{
                ...state,
                games: ratingFilter,
            };

            case FILTER_PLATFORM: 
            const gamesPlatformFilter = state.gamesFilter;
            const platformFilter = gamesPlatformFilter
                .filter( game => game.parent_platforms
                .map( p => p.toLowerCase())
                .includes( action.payload ) );
            return{
                ...state,
                games: action.payload === "All" ? gamesPlatformFilter : platformFilter,
            };

            case FILTER_GENRE: 
                 const gamesGenreFilter = state.gamesFilter;
                 const genresFilter = action.payload === "All" 
                    ? gamesGenreFilter 
                    : gamesGenreFilter
                        .filter( game => game.genres
                        .map( p => p.name)
                        .includes( action.payload )
                       );
            return{
                ...state,
                games: genresFilter.length === 0  ? `Not found games with the genre: ${ action.payload }` : genresFilter,
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