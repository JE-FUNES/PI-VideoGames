import {
  CREATE_GAME,
  GET_GAMES,
  SEARCH_GAMES,
  GET_GENRES,
  GET_DETAILS,
  GET_DETAILS_NEWGAME,
  FILTER_GENRE,
  FILTER_PLATFORM,
  FILTER_CREATED,
  FILTER_ORDER,
  FILTER_RATING,
  SUBMIT_CONTACT_FORM,
  PRELOAD_CARDS,
  DELETE_GAME,
  GET_CONTACTS,
} from "./actionTypes";

const initialState = {
  gamesCopy: [],
  games: [],
  detailGame: [],

  genres: [],
  detailNewGame: null, // no necesita iniciar con datos porque los obtien cuando los necesita de la base de datos
  gamesFilter: [],
  genresFilter: [],
  contacts: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {

    case PRELOAD_CARDS:
      const gamesPreload = state.games;
      return {
        ...state,
        gamesCopy: gamesPreload,
      };

    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
        gamesCopy: action.payload,
      };
    case CREATE_GAME:
      return {
        ...state,
        games: [...state.games, action.payload],
      };


    case SEARCH_GAMES:
      return {
        ...state,
        games: action.payload, // aqui quedaran los juegos originalmente traidos
        gamesCopy: action.payload, // aqui se hara el filtrado
      };

    case GET_GENRES:
      return {
        ...state,
        genresFilter: action.payload,
      };

    case GET_DETAILS:
      return {
        ...state,
        detailGame: action.payload,
      };

    case GET_DETAILS_NEWGAME:
      return {
        ...state,
        detailNewGame: action.payload,
      };

    case FILTER_CREATED:
      const gamesCreatedFilter = state.games;
      const createdFilter =
        action.payload === "created"
          ? gamesCreatedFilter.filter((game) => game.created === true)
          : action.payload === "All" // Si es "All", muestra todos los juegos originales
          ? state.games // Usa los juegos originales almacenados en 'games'
          : gamesCreatedFilter.filter((game) => game.created === false);
      return {
        ...state,
        gamesCopy: createdFilter,
      };

    case FILTER_ORDER:
      const gamesNameFilter = state.gamesCopy;
      const nameFilter =
        action.payload === "asc"
          ? gamesNameFilter.slice().sort(function (a, b) {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              if (b.name.toLowerCase() < a.name.toLowerCase()) return 1;
              return 0;
            })
          : gamesNameFilter.slice().sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
              return 0;
            });
      return {
        ...state,
        gamesCopy: nameFilter,
      };

    case FILTER_RATING:
      const gamesRatingFilter = state.gamesCopy;
      const ratingFilter =
        action.payload === "rAsc"
          ? gamesRatingFilter.slice().sort(function (a, b) {
              if (a.rating > b.rating) return -1;
              if (b.rating > a.rating) return 1;
              return 0;
            })
          : gamesRatingFilter.slice().sort(function (a, b) {
              if (a.rating < b.rating) return -1;
              if (b.rating < a.rating) return 1;
              return 0;
            });
      return {
        ...state,
        gamesCopy: ratingFilter,
      };

    case FILTER_PLATFORM:
      const gamesPlatformFilter = state.games; // Utiliza los juegos originales
      const platformFilter =
        action.payload === "All"
          ? gamesPlatformFilter // Si es "All", usa los juegos originales
          : gamesPlatformFilter.filter((game) =>
              game.platforms
                .map((p) => p.toLowerCase())
                .includes(action.payload)
            );
      return {
        ...state,
        gamesCopy: platformFilter,
      };

    case FILTER_GENRE:
      const gamesGenreFilter = state.gamesCopy;
      const genresFilter =
        action.payload === "All"
          ? state.games // Restablece a los juegos originales
          : gamesGenreFilter.filter((game) =>
              game.genres.map((p) => p.name).includes(action.payload)
            );

      return {
        ...state,
        gamesCopy:
          genresFilter.length === 0
            ? `Not found games with the genre: ${action.payload}`
            : genresFilter,
      };

    case SUBMIT_CONTACT_FORM:
      return {
        ...state,
        contactFormSubmitted: true,
        contactFormData: action.payload,
      };

   case DELETE_GAME:
            return {
                        ...state,
                        games: state.games.filter(game => game.id !== action.payload)
                    };

    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };                

    default:
      return state;
  }
}
