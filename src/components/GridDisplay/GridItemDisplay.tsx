import React from 'react';
import { IGridItem } from './GridItem';
import styled from 'styled-components';

export default (props:{ item:IGridItem | null, onClose():void  }) => (
  <Wrapper>
    <span
      style={{ float: 'right' }}
      onClick={ props.onClose }>
        close
    </span>
    {
      props.item &&
        props.item.title
    }
  </Wrapper>
)

const Wrapper = styled.div`
  display: block;
  position: absolute;
  top: 50px;
  height: ${ window.innerHeight - 50 }px;
  width: 100%;
  background: yellow;
  z-index: 1;
  overflow-y: scroll;
  padding: 1rem;
`;