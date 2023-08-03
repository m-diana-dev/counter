import React, {useEffect, useReducer} from 'react';
import {CounterView} from "./CounterView/CounterView";
import {CounterSettings} from "./CounterSettings/CounterSettings";
import s from "../Counter/Counter.module.css";
import {changingCounterValuesAC, counterReducer} from "../../state/counter-reducer";


export type countType = {
    value: number
    maxValue: number
    minValue: number
    setting: boolean
    error: {
        max: string
        start: string
    }
}

export const INITIAL_MIN_VALUE = 0;
export const INITIAL_MAX_VALUE = 5;

function Counter() {

    const [count, dispatch] = useReducer(counterReducer, {
        value: Number(localStorage.getItem('CounterStartValue')) || INITIAL_MIN_VALUE,
        maxValue: Number(localStorage.getItem('CounterMaxValue')) || INITIAL_MAX_VALUE,
        minValue: Number(localStorage.getItem('CounterStartValue')) || INITIAL_MIN_VALUE,
        setting: false,
        error: {
            max: '',
            start: ''
        }
    });

    useEffect(() => {
        const localStorageMaxItem = localStorage.getItem('CounterMaxValue');
        const localStorageStartItem = localStorage.getItem('CounterStartValue');

        if (localStorageStartItem && localStorageMaxItem) {
            dispatch(changingCounterValuesAC(+localStorageStartItem, +localStorageMaxItem))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('CounterMaxValue', JSON.stringify(count.maxValue))
    }, [count.maxValue])

    useEffect(() => {
        localStorage.setItem('CounterStartValue', JSON.stringify(count.minValue))
    }, [count.minValue])

    return (
        <div className={s.Flex}>
            <CounterSettings maxValue={count.maxValue}
                             minValue={count.minValue}
                             dispatch={dispatch}
                             count={count}/>
            <CounterView maxValue={count.maxValue}
                         count={count}
                         dispatch={dispatch}/>
        </div>
    );
}

export default Counter;
