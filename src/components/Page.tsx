import React from 'react';
import { Container } from 'react-awesome-styled-grid';

export default (props:any) => (
  <Container
    style={ props.style }
    fluid={ true }>
      { props.children }
  </Container>
);