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
  background: #fcd100;
  opacity: ${ p => p.disabled ? .2 : 1 };
  color: #b15400;
  font-size: 1rem;
  border: 0;
  cursor: ${ p => p.disabled ? 'inherit' : 'pointer' };
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