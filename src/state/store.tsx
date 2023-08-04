import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

let preloadedState;
const persistedCounterString = localStorage.getItem('state')
if(persistedCounterString){
    preloadedState = JSON.parse(persistedCounterString)
}

export const RootReducer = combineReducers({counter: counterReducer})

export const store = createStore(RootReducer, preloadedState)

export type RootStateType = ReturnType<typeof RootReducer>

store.subscribe(()=>{
    localStorage.setItem('state', JSON.stringify(store.getState()))
    localStorage.setItem('CounterMaxValue', JSON.stringify(store.getState().counter.maxValue))
    localStorage.setItem('CounterStartValue', JSON.stringify(store.getState().counter.minValue))
})