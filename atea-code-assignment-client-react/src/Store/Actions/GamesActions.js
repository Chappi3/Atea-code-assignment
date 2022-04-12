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
