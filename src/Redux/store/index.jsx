import { createStore } from "redux";
import { CounterReducer } from "../Reducers/CounterReducer";

const store = createStore(CounterReducer);
store.subscribe(() => {
    console.log(store.getState())
})

export default store