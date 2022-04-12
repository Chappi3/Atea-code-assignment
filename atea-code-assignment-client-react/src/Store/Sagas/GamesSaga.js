import { GamesActionTypes } from '../Reducers/GamesReducer'
import { call, put, takeEvery } from 'redux-saga/effects'
import { GetGamesFail, GetGamesSuccess } from '../Actions/GamesActions'
import axios from 'axios'

export default function* GamesSaga() {
  yield takeEvery(GamesActionTypes.GetGamesRequest, getWorker)
}

function* getWorker(request) {
  try {
    const response = yield call(getGamesRequest, request.payload)
    yield put(GetGamesSuccess(response.data))
  } catch (e) {
    yield put(GetGamesFail(e.message))
  }
}

async function getGamesRequest(payload) {
  console.log(payload)
  if (payload) {
    return axios({
      method: 'GET',
      url: `https://localhost:44368/api/GameObject?search=${payload}`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  return axios({
    method: 'GET',
    url: 'https://localhost:44368/api/GameObject',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
