import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { IGridItem } from './GridItem';
import styled from 'styled-components';
import { useLockBodyScroll, useNavbarState } from '../../hooks';

export default (props:{ item:IGridItem, onClose():void  }) => {
  
  useLockBodyScroll();
  
  const navbarHeight = useNavbarState().navBarHeight;
  
  return (
    <Wrapper navbarHeight={ navbarHeight * 2 }>
      <Container fluid>
        <Row>
          <Col lg={ 4 } md={ 4 } sm={ 12 } xs={ 12 }>
            <Row>
              <h1>{ props.item.title }</h1>
            </Row>
            <Row>
              <p>{ props.item.desc }</p>
            </Row>
            <Row>
              <h2 onClick={ props.onClose }>
                ←	back
              </h2>
            </Row>
          </Col>
          <Col lg={ 8 } md={ 8 } sm={ 12 } xs={ 12 } style={{ padding: 'rem' }}>
            <img src={ props.item.feature } style={{ width: '100%', height: 'auto' }} />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ navbarHeight:number }>`
  display: block;
  position: fixed;
  top: ${ p => p.navbarHeight };
  left: 0;
  right: 0;
  height: ${ window.innerHeight }px;
  width: 100%;
  background: #f6f6f6;
  z-index: 1;
  overflow-y: scroll;
  padding: 1rem;
`;