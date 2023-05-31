import { createStore } from "redux";
import loginReducer from "./loginreducer";

const store = createStore(loginReducer);

export default store;
