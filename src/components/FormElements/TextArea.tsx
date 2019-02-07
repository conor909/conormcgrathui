import React from 'react';
import { InputWrapper, InputLabel, IInput } from './Input';

export default (props:IInput) => {
  return (
    <>
      <InputLabel>{ props.label }</InputLabel>
      <InputWrapper>
        <textarea rows={ 10 } value={ props.value } onChange={ (e) => props.onChange(e.target.value) } />
      </InputWrapper>
    </>
  )
}