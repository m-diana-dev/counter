import React from 'react';
import s from './TopCounter.module.css'


type TopCounterPropsType = {
    maxValue: number
    count: number
}
export const TopCounter: React.FC<TopCounterPropsType> = (props) => {
    const {count, maxValue, ...restProps} = props;

    const StyleTopCounter = `${s.TopCounter} ${(count === maxValue) ? s.TopCounterLimit : ''}`

    return (
        <div className={StyleTopCounter}>{count}</div>
    );
};
