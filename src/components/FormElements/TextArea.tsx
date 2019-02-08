import React from 'react';
import { InputWrapper, Validation, InputLabel, IInput } from './Input';

export default (props:IInput) => {
  const { id, label, error, value, onChange } = props;
  return (
    <>
      <InputLabel>
      { label }
      {
        error && <Validation>{ error }</Validation>
      }
      </InputLabel>
      <InputWrapper error={ error }>
        <textarea id={ id } rows={ 10 } value={ value } onChange={ onChange } />
      </InputWrapper>
    </>
  )
}