import React from 'react';
import s from "../Counter.module.css";
import {TopCounter} from "../TopCounter/TopCounter";
import {Button} from "../../Button/Button";
import {countType} from "../Counter";

type CounterViewPropsType = {
    maxValue: number
    minValue: number
    count: countType
    setCount: (count: countType)=>void
    countSetting: boolean
}
export const CounterView: React.FC<CounterViewPropsType> = (props) => {
    const{maxValue, minValue, count, countSetting,setCount} = props;
    const onClickPlusHandler = () => {
        if(count.value < count.maxValue){
            setCount({ ...count, value: count.value + 1});
        }
    }
    const onClickResetHandler = () => {
        setCount({ ...count, value: count.minValue});
    }
    return (
        <div className={s.Counter}>
            <div className={s.CounterTop}>
                <TopCounter count={count} maxValue={maxValue} countSetting={countSetting}/>
            </div>
            <div className={s.CounterBottom}>
                <Button disabled={count.value===count.maxValue || countSetting} name={'+'} callback={onClickPlusHandler}/>
                <Button disabled={count.value===count.minValue || countSetting} name={'reset'} callback={onClickResetHandler}/>
            </div>
        </div>
    );
};
