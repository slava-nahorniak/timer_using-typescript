import { takeEvery, put } from 'redux-saga/effects';
import { Actions, TICK } from "./actions";
import { SECOND } from "./constants";

function* timerTickSaga() {
  //TODO: check how it works
  const timerId = yield setTimeout(() => put(Actions.nextTimersTick()), SECOND);
  yield clearTimeout(timerId);
};

export function* watchTimersTicks() {
  yield takeEvery(TICK, timerTickSaga);
};
