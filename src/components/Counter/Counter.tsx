import React from 'react';
import {CounterView} from "./CounterView/CounterView";
import {CounterSettings} from "./CounterSettings/CounterSettings";
import s from "../Counter/Counter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../state/store";


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

function Counter() {

    const dispatch = useDispatch()
    const count = useSelector<RootStateType, countType>(state => state.counter)

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
