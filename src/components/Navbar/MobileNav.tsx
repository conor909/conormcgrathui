import React from 'react';
import { Row, Col } from 'react-grid-system';
import styled from 'styled-components';

export default (props:any) => (
  <Wrapper rightPosition={ props.style.right }>
    <Col>
      {/*
        <Row onClick={ () => props.history.push('/clients' )}>
          clients
        </Row>
        <Row onClick={ () => props.history.push('/about' )}>
          about
        </Row>
      */}
      <Row onClick={ () => props.history.push('/work/all' )}>
        work
      </Row>
      <Row onClick={ () => props.history.push('/contact' )}>
        contact
      </Row>
      <Row onClick={ () => props.history.push('/blog' )}>
        blog
      </Row>
    </Col>
  </Wrapper>
);

const Wrapper = styled.nav<{ rightPosition:number }>`
  display: block;
  position: absolute;
  top: 50px;
  left: 0;
  right: ${ p => p.rightPosition };
  height: ${ window.innerHeight }px;
  border: 1px solid red;
  width: ${ window.innerWidth / 1.2 }px;
  background: #f6f6f6;
  z-index: 3;
  overflow-y: scroll;
  padding: 1rem;
`;