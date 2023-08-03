import React, {Dispatch} from 'react';
import s from "../Counter.module.css";
import {TopCounter} from "../TopCounter/TopCounter";
import {Button} from "../../Button/Button";
import {countType} from "../Counter";
import {ActionType, incrementCounterAC, resetCounterAC, settingsModeCounterAC} from "../../../state/counter-reducer";

type CounterViewPropsType = {
    maxValue: number
    count: countType
    dispatch: React.Dispatch<ActionType>
}
export const CounterView: React.FC<CounterViewPropsType> = (props) => {
    const{maxValue, count,dispatch} = props;
    const onClickPlusHandler = () => {
        if(count.value < count.maxValue){
            dispatch(incrementCounterAC())
        }
    }
    const onClickResetHandler = () => {
        dispatch(resetCounterAC())
    }
    return (
        <div className={s.Counter}>
            <div className={s.CounterTop}>
                <TopCounter count={count} maxValue={maxValue} countSetting={count.setting}/>
            </div>
            <div className={s.CounterBottom}>
                <Button disabled={count.value===count.maxValue || count.setting} name={'+'} onClick={onClickPlusHandler} />
                <Button disabled={count.value===count.minValue || count.setting} name={'reset'} onClick={onClickResetHandler}/>
                {/*for version 2.2*/}
                <Button disabled={count.setting} name={'set'} onClick={()=>{dispatch(settingsModeCounterAC())}}/>
            </div>
        </div>
    );
};
