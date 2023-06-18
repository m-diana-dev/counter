import React, {useState} from 'react';
import s from './Counter.module.css';
import {Button} from "../Button/Button";
import {TopCounter} from "../TopCounter/TopCounter";

function Counter() {
    const [count, setCount] = useState<number>(0);
    const maxValue = 5;
    const minValue = 0;
    const onClickPlusHandler = () => {
        if(count < maxValue){
            setCount(count + 1);
        }
    }
    const onClickResetHandler = () => {
        setCount(minValue);
    }
    return (
        <div className={s.Counter}>
            <div className={s.CounterTop}>
                <TopCounter count={count} maxValue={maxValue}/>
            </div>
            <div className={s.CounterBottom}>
                <Button disabled={count===maxValue} name={'+'} callback={onClickPlusHandler}/>
                <Button disabled={count===minValue} name={'reset'} callback={onClickResetHandler}/>
            </div>
        </div>
    );
}

export default Counter;
