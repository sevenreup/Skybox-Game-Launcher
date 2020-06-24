import React from 'react';
import { InputFieldStyled } from "./inputs.styled";

export function InputField (props) {
    const {title} = props;
    return (
        <InputFieldStyled>
            <label>{title}</label>
            <input />
        </InputFieldStyled>
    )
}