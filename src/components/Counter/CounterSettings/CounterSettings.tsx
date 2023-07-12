import React, {ChangeEvent, KeyboardEvent} from 'react';
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

    const onChangeHandler = (start = count.minValue, max = count.maxValue) => {
        const params = {...count, minValue: start, maxValue: max, setting: true}
        if(max < 0){
            setCount( {...params, error: {...count.error, max: 'incorrect value'}})
        }
        else if(start < 0 || start > max) {
            setCount({...params, error: {...count.error, start: 'incorrect value'}})
        }
        else if(max === start) {
            setCount({...params, error: {...count.error, max: 'incorrect value', start: 'incorrect value'}})
        }
        else{
            setCount({...params, error: {...count.error, max: '', start:''}})
        }
    }
    const onSetHandler = () => {
        setCount({...count, setting: false, value: count.minValue})
    }

    const InputErrorMax = count.error.max ? s.InputError : '';
    const InputErrorStart = count.error.start ? s.InputError : '';
    const disabledBtn = !count.setting || !!count.error.max || !!count.error.start
    /*for version 2.2*/
    const SettingsBlock = count.setting ? undefined : s.opacitySettings;

    return (
        <div className={s.Counter + ' ' + SettingsBlock}>
            <div className={s.CounterTop}>
                <div className={s.CounterTopItem}>
                    <span>max value:</span>
                    <input className={InputErrorMax} type="number"
                           value={maxValue}
                           onChange={(e)=>onChangeHandler(undefined,+e.currentTarget.value)}/>
                </div>
                <div className={s.CounterTopItem}>
                    <span>start value:</span>
                    <input className={InputErrorStart} type="number"
                           value={minValue}
                           onChange={(e)=>onChangeHandler(+e.currentTarget.value, undefined)}/>
                </div>
            </div>
            <div className={s.CounterBottom}>
                <Button name={'set'} callback={() => onSetHandler()} disabled={disabledBtn}/>
            </div>
        </div>
    );
};
