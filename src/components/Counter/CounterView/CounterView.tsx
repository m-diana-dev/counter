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
}
export const CounterView: React.FC<CounterViewPropsType> = (props) => {
    const{maxValue, minValue, count,setCount} = props;
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
                <TopCounter count={count} maxValue={maxValue} countSetting={count.setting}/>
            </div>
            <div className={s.CounterBottom}>
                <Button disabled={count.value===count.maxValue || count.setting} name={'+'} callback={onClickPlusHandler}/>
                <Button disabled={count.value===count.minValue || count.setting} name={'reset'} callback={onClickResetHandler}/>
                {/*for version 2.2*/}
                <Button disabled={count.setting} name={'set'} callback={()=>{setCount({...count, setting: true})}}/>
            </div>
        </div>
    );
};
