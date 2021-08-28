import todoReducer from "./todoReducer";
import {combineReducers } from "redux";

const rootRdeucer = combineReducers({
    todo: todoReducer,
});

export default rootRdeucer;