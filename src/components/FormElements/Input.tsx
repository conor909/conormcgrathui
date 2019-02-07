import React from 'react';
import styled from 'styled-components';

export default (props:IInput) => {
  return (
    <>
      <InputLabel>{ props.label }</InputLabel>
      <InputWrapper>
        <input value={ props.value } onChange={ (e) => props.onChange(e.target.value) } />
      </InputWrapper>
    </>
  )
}

export const InputWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
    & >
      input,
      textarea {
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

export interface IInput {
  value:string,
  onChange:(value:string) => void;
  label:string
}