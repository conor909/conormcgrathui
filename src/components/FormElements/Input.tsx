import React from 'react';
import styled from 'styled-components';

export default (props:IInput) => {
  const { type, id, label, error, value, onChange } = props;
  return (
    <>
      <InputLabel>
        { label } { error && <Validation>{ error }</Validation> }
      </InputLabel>
      <InputWrapper error={ error }>
        <input id={ id } type={ type } value={ value } onChange={ onChange } />
      </InputWrapper>
    </>
  )
}

export const InputWrapper = styled.div<{ error: string | null }>`
  width: 100%;
  padding: 0;
  margin: 0;
    & >
      input,
      textarea {
        font-size: .8rem;
        border: 1px solid #e1e1e1;
        padding: 0 10px;
        margin: 0;
        width: 100%;
        background: white;
        line-height: 2rem;
        &:focus {
          outline: 0;
        }
      }
`;

export const InputLabel = styled.label`
  width: 100%;
  padding-top: 1rem;
  padding-bottom: .5rem;
`;

export const Validation = styled.span`
  position: absolute;
  right: 15px;
  color: #820000;
`;

export interface IInput {
  type?:string;
  id:string;
  value:string;
  onChange:any;
  onBlur:any;
  label:string;
  error:string | null;
}