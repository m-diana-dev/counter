import React, {useEffect, useState} from 'react';
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

    useEffect(() => {
        const localStorageMaxItem = localStorage.getItem('CounterMaxValue');
        const localStorageStartItem = localStorage.getItem('CounterStartValue');

        if (localStorageStartItem && localStorageMaxItem) {
            const params = {
                ...count,
                minValue: JSON.parse(localStorageStartItem),
                maxValue: JSON.parse(localStorageMaxItem),
                value: JSON.parse(localStorageStartItem),
            }
            setCount({...params})
            if (+localStorageStartItem < 0
                || +localStorageStartItem > +localStorageMaxItem) {
                setCount({
                    ...params,
                    error: {...count.error, start: 'incorrect value'},
                    setting: true
                })
            }
            if (+localStorageMaxItem < 0
                || +localStorageMaxItem < +localStorageStartItem) {
                setCount({
                    ...params,
                    error: {...count.error, max: 'incorrect value'},
                    setting: true
                })
            }
            if( +localStorageMaxItem === +localStorageStartItem){
                setCount({
                    ...params,
                    error: {...count.error, max: 'incorrect value', start: 'incorrect value'},
                    setting: true
                })
            }
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
