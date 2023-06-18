import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    name: string
    callback: ()=>void
    disabled: boolean
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    const{name, callback, disabled, ...restProps} = props;
    const onClickHandler = () => {
        callback();
    }

    return (
        <button className={s.button} onClick={onClickHandler} disabled={disabled}>{name}</button>
    );
};
