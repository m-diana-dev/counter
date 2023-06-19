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
    // const [countSetting, setCountSetting] = useState(false);

    const setMaxValue = (value: number) => {
        setCount({...count, maxValue: value})
    }

    const setStartValue = (value: number) => {
        setCount({...count, minValue: value})
        if (value < 0) setCount({...count, error: {...count.error, start: 'negative value is invalid'}})
    }
    const setSetting = (value: boolean) => {
        // setCountSetting(value)
        setCount({...count, setting: value})
    }
    return (
        <div className={s.Flex}>
            <CounterSettings maxValue={count.maxValue}
                             minValue={count.minValue}
                             count={count}
                             setCount={setCount}
                             setMaxValue={setMaxValue}
                             setStartValue={setStartValue}
                             setSetting={setSetting}
                             countSetting={count.setting}/>
            <CounterView maxValue={count.maxValue}
                         minValue={count.minValue}
                         count={count}
                         setCount={setCount}
                         countSetting={count.setting}/>
        </div>
    );
}

export default Counter;
