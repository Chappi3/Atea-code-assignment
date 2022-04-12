import { GamesActionTypes } from '../Reducers/GamesReducer'

export const GetGamesRequest = (payload) => ({
  type: GamesActionTypes.GetGamesRequest,
  payload,
})

export const GetGamesSuccess = (payload) => ({
  type: GamesActionTypes.GetGamesSuccess,
  payload,
})

export const GetGamesFail = (payload) => ({
  type: GamesActionTypes.GetGamesFail,
  payload,
})

export const AddGameRequest = (payload) => ({
  type: GamesActionTypes.AddGameRequest,
  payload,
})

export const AddGameSuccess = (payload) => ({
  type: GamesActionTypes.AddGameSuccess,
  payload,
})

export const AddGameFail = (payload) => ({
  type: GamesActionTypes.AddGameFail,
  payload,
})
