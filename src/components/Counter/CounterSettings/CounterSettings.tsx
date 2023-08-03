import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from "../Counter.module.css";
import {Button} from "../../Button/Button";
import {countType} from "../Counter";
import {ActionType, changingCounterValuesAC, settingCounterAC} from "../../../state/counter-reducer";

type CounterSettingsPropsType = {
    maxValue: number
    minValue: number
    count: countType
    dispatch: React.Dispatch<ActionType>
}
export const CounterSettings: React.FC<CounterSettingsPropsType> = (props) => {
    const {
        maxValue,
        minValue,
        count,
        dispatch,
    } = props;

    const onChangeHandler = (start: number, max: number) => {
        dispatch(changingCounterValuesAC(start, max))
    }
    const onSetHandler = () => {
        dispatch(settingCounterAC())
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
                           onChange={(e)=>onChangeHandler(count.minValue,+e.currentTarget.value)}/>
                </div>
                <div className={s.CounterTopItem}>
                    <span>start value:</span>
                    <input className={InputErrorStart} type="number"
                           value={minValue}
                           onChange={(e)=>onChangeHandler(+e.currentTarget.value,  count.maxValue)}/>
                </div>
            </div>
            <div className={s.CounterBottom}>
                <Button name={'set'} onClick={() => onSetHandler()} disabled={disabledBtn}/>
            </div>
        </div>
    );
};
