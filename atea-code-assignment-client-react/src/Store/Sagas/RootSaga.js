import { all, fork } from '@redux-saga/core/effects'
import GamesSaga from './GamesSaga'

export function* RootSaga() {
  yield all([fork(GamesSaga)])
}
