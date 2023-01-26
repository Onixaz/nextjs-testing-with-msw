import { combineReducers } from "redux";

import navigation from "./slices/navigation";

import { store } from "./store";

const rootReducer = combineReducers({ navigation });

export type RootState = ReturnType<typeof store.getState>;

export default rootReducer;
