import { createAction } from "./action-helpers";
import { ActionUnion } from "./types";

export const TICK = '[timer] tick';
export const STOP = '[timer] stop';
export const START = '[timer] start';

export const Actions = {
  nextTimersTick: () => createAction(TICK),
  stopTimer: () => createAction(STOP),
  startTimer: () => createAction(START)
};

export type Actions = ActionUnion<typeof Actions>;
