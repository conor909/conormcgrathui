import React from 'react';
import styled from 'styled-components';

export default (props:IButton) => {
  return (
    <Button
      onClick={ () => !props.disabled && props.onClick() }
      disabled={ props.disabled || false }>
        { props.label }
    </Button>
  )
};

export const Button = styled.button<{ disabled:boolean }>`
  padding: 1rem;
  background: #03a5df;
  opacity: ${ p => p.disabled ? .2 : 1 };
  color: #fff;
  font-size: 1rem;
  border: 0;
  cursor: ${ p => p.disabled ? 'inherit' : 'pointer' };
    &:hover {
      background: ${ p => p.disabled ? '#03a5df' : '#0283b1' };
    }
    &:focus {
      outline: 0;
    }
`;

interface IButton  {
  label:string;
  onClick:() => void;
  disabled?:boolean
}