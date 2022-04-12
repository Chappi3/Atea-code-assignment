export const GamesActionTypes = {
  GetGamesRequest: 'GetGamesRequest',
  GetGamesSuccess: 'GetGamesSuccess',
  GetGamesFail: 'GetGamesFail',
  AddGameRequest: 'AddGameRequest',
  AddGameSuccess: 'AddGameSuccess',
  AddGameFail: 'AddGameFail',
}

const initialState = {
  games: [],
  pending: false,
  error: '',
}

export const GamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GamesActionTypes.GetGamesRequest:
      return {
        ...state,
        pending: true,
        error: '',
      }
    case GamesActionTypes.GetGamesSuccess:
      return {
        ...state,
        games: action.payload,
        pending: false,
      }
    case GamesActionTypes.GetGamesFail:
      return {
        ...state,
        pending: false,
        error: action.payload,
      }
    case GamesActionTypes.AddGameRequest:
      return {
        ...state,
        pending: true,
        error: '',
      }
    case GamesActionTypes.AddGameSuccess:
      return {
        ...state,
        games: [...state.games, action.payload],
        pending: false,
      }
    case GamesActionTypes.AddGameFail:
      return {
        ...state,
        pending: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default GamesReducer
