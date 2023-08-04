import React, {ComponentProps} from 'react';

export type InputPropsType = {

} & ComponentProps<'input'>
export const Input: React.FC<InputPropsType> = (props) => {
    const {onChange, ...restProps} = props
    return (
        <input {...restProps} onChange={onChange}/>
    );
};
