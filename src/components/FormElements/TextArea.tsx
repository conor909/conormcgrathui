import React from 'react';
import { InputWrapper, Validation, InputLabel, IInput } from './Input';

export default (props:IInput) => {
  const { id, label, error, value, onChange, rowspan } = props;
  return (
    <>
      <InputLabel>
      { label }
      {
        error && <Validation>{ error }</Validation>
      }
      </InputLabel>
      <InputWrapper error={ error }>
        <textarea id={ id } rows={ rowspan } value={ value } onChange={ onChange } />
      </InputWrapper>
    </>
  )
}