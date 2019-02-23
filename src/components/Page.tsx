import React from 'react';
import { Container } from 'react-awesome-styled-grid';

export default (props:any) => (
  <Container
    style={{ ...props.style, position: 'relative', overflowY: 'scroll', overflowScrolling: 'touch' }}
    fluid={ true }>
      { props.children }
  </Container>
);