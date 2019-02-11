import React from 'react';
import styled from 'styled-components';

export default (props:IButton) => {
  
  function onClick() {
    if (!props.disabled && props.onClick) {
      props.onClick()
    } else {
      return;
    }
  }
  
  return (
    <Button
      type={ props.type }
      onClick={ onClick }
      disabled={ props.disabled || false }>
        { props.label }
    </Button>
  )
};

export const Button = styled.button<{ disabled:boolean }>`
  width: 100%;
  padding: 1rem;
  background: darkgrey;
  opacity: ${ p => p.disabled ? .2 : 1 };
  color: #fff;
  font-size: 1rem;
  border: 0;
  cursor: ${ p => p.disabled ? 'inherit' : 'pointer' };
    &:hover {
      background: ${ p => p.disabled ? '#03a5df' : '#7d7c7c' };
    }
    &:focus {
      outline: 0;
    }
`;

interface IButton  {
  type:string;
  label:string;
  onClick?:() => void;
  disabled?:boolean;
  style?:object;
}