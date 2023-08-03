import React, {ComponentProps} from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    name: string
} & ComponentProps<'button'>

export const Button: React.FC<ButtonPropsType> = (props) => {
    const{name, onClick, ...restProps} = props;

    return (
        <button {...restProps} className={s.button} onClick={onClick}>{name}</button>
    );
};
