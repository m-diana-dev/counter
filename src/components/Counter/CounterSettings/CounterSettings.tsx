import React, {ChangeEvent,KeyboardEvent} from 'react';
import s from "../Counter.module.css";
import {Button} from "../../Button/Button";
import {countType} from "../Counter";

type CounterSettingsPropsType = {
    maxValue: number
    minValue: number
    count: countType
    setCount: (count: countType) => void
}
export const CounterSettings: React.FC<CounterSettingsPropsType> = (props) => {
    const {
        maxValue,
        minValue,
        count,
        setCount,
    } = props;
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const carrentValue = +e.currentTarget.value;
        setCount((carrentValue < 0 || carrentValue === count.minValue || carrentValue < count.minValue)
            ? {...count, maxValue: carrentValue, setting: true, error: {...count.error, max: 'incorrect value'}}
            : {...count, maxValue: carrentValue, setting: true, error: {...count.error, max: ''}})
    }

    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const carrentValue = +e.currentTarget.value;
        setCount((carrentValue < 0 || carrentValue === count.maxValue)
            ? {...count, minValue: carrentValue, setting: true, error: {...count.error, start: 'incorrect value'}}
            : {...count, minValue: carrentValue, setting: true, error: {...count.error, start: ''}})
    }


    const onSetHandler = () => {
        setCount({...count, setting: false, value: count.minValue})
    }

    const InputErrorMax = count.error.max ? s.InputError : '';
    const InputErrorStart = count.error.start ? s.InputError : '';
    const disabledBtn = !count.setting || !!count.error.max || !!count.error.start
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
