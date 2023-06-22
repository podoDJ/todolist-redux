import { createStore } from "redux";
import { combineReducers } from "redux";

import todo from "./modules/todo";

const rootReducer = combineReducers({
  todo,
});
//console.log로 찍어보면 store는 dispatch함수, getState함수 등을 가진 객체다.
const store = createStore(rootReducer);

export default store;
