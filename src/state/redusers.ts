import { Reducer } from "redux";
import { Actions } from "./actions";
import { TimerStore } from "./types";

type ActionHandler = () => TimerStore;
type ActionHandlerWithPayloads = () => TimerStore
type ActionHandlers = {
  [typeof Actions]: ActionHanler | ActionHa,
}

export const timerReducer: Reducer<TimerStore, Actions> = (state, action) => {
  const { type } = action;
  return
};