import React, {ChangeEvent, useState} from 'react';
import s from "../Counter.module.css";
import {Button} from "../../Button/Button";
import {countType} from "../Counter";

type CounterSettingsPropsType = {
    maxValue: number
    minValue: number
    count: countType
    setCount: (count: countType) => void
    countSetting: boolean
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setSetting: (value: boolean) => void
}
export const CounterSettings: React.FC<CounterSettingsPropsType> = (props) => {
    const {
        maxValue,
        minValue,
        count,
        setCount,
        countSetting,
        setMaxValue,
        setStartValue,
        setSetting
    } = props;

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // setSetting(true);
        // setMaxValue((+(e.currentTarget.value)));

        setCount({...count, maxValue: +(e.currentTarget.value), setting: true})

        setCount((count.maxValue < 0 || count.maxValue === count.minValue)
            ? {...count, maxValue: +(e.currentTarget.value), setting: true, error: {...count.error, max: 'incorrect value'}}
            : {...count, maxValue: +(e.currentTarget.value), setting: true, error: {...count.error, max: ''}})
    }
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // setSetting(true)
        // setStartValue((+(e.currentTarget.value)));

        setCount((count.minValue < 0)
            ? {...count, minValue: +(e.currentTarget.value), setting: true, error: {...count.error, start: 'negative value is invalid'}}
            : {...count, minValue: +(e.currentTarget.value), setting: true, error: {...count.error, start: ''}})
        // if (count.value < 0) setCount({...count, error: 'negative value is invalid'})
console.log(count.minValue)
    }


    const onSetHandler = () => {
        // setSetting(false);
        setCount({...count, setting: false, value: count.minValue})
        console.log(count.value)
    }

    const InputErrorMax = count.error.max ? s.InputError : '';
    const InputErrorStart = count.error.start ? s.InputError : '';
    const disabledBtn = !countSetting || !!count.error.max || !!count.error.start
    return (
        <div className={s.Counter}>
            <div className={s.CounterTop}>
                <div className={s.CounterTopItem}>
                    <span>max value:</span>
                    <input className={InputErrorMax} type="number" value={maxValue} onChange={onChangeMaxHandler}/>
                </div>
                <div className={s.CounterTopItem}>
                    <span>start value:</span>
                    <input className={InputErrorStart} type="number" value={minValue} onChange={onChangeStartHandler}/>
                </div>
            </div>
            <div className={s.CounterBottom}>
                <Button name={'set'} callback={() => onSetHandler()} disabled={disabledBtn}/>
            </div>
        </div>
    );
};
