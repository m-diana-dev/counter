import React from 'react';
import s from './TopCounter.module.css'
import {countType} from "../Counter";


type TopCounterPropsType = {
    maxValue: number
    count: countType
    countSetting: boolean
}
export const TopCounter: React.FC<TopCounterPropsType> = (props) => {
    const {count, maxValue,countSetting, ...restProps} = props;

    const StyleTopCounter = `${s.TopCounter} ${(count.value === count.maxValue) ? s.TopCounterLimit : ''}`

    const informationDisplay = countSetting && (count.error.max || count.error.start)
        ? <div className={s.ErrorText}>{count.error.max || count.error.start}</div>
        : !countSetting ? count.value === maxValue ? <div>Max: {count.value}</div> : count.value : 'inter values and press "set"'

    return (
        <div className={StyleTopCounter}>
            {informationDisplay}
        </div>
    );
};
