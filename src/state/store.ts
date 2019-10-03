import { createStore } from "redux";
import { TimerStore } from "./types";

const initialStore: TimerStore  = {
  time: 5,
};

export const store = createStore( , initialStore);
