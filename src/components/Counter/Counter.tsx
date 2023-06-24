import React, {useState} from 'react';
import {CounterView} from "./CounterView/CounterView";
import {CounterSettings} from "./CounterSettings/CounterSettings";
import s from "../Counter/Counter.module.css";


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
    // const [count, setCount] = useState<number>(0);
    // const [maxValue, setmaxValue] = useState<number>(5);
    // let maxValue = 5;
    // const minValue = 0;
    const [count, setCount] = useState<countType>({
        value: 0,
        maxValue: 5,
        minValue: 0,
        setting: false,
        error: {
            max: '',
            start: ''
        }
    });

    return (
        <div className={s.Flex}>
            <CounterSettings maxValue={count.maxValue}
                             minValue={count.minValue}
                             count={count}
                             setCount={setCount}/>
            <CounterView maxValue={count.maxValue}
                         minValue={count.minValue}
                         count={count}
                         setCount={setCount}/>
        </div>
    );
}

export default Counter;
