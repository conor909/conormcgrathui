import React from 'react';
import { Motion, StaggeredMotion, spring } from 'react-motion';
import { Container, Row, Col } from 'react-grid-system';
import { IGridItem } from './GridItem';
import styled from 'styled-components';
import { useLockBodyScroll, useNavbarState } from '../../hooks';

export default (props:{ item:IGridItem, onClose():void  }) => {
  
  useLockBodyScroll();
  
  const navbarHeight = useNavbarState().navBarHeight;
  const motion = { stiffness: 300, dampness: 50 };

  return (
    <Wrapper navbarHeight={ navbarHeight * 2 }>
      <Container fluid>
        <Row>
          <Col lg={ 4 } md={ 4 } sm={ 12 } xs={ 12 }>
            <Row>
              <StaggeredMotion
                defaultStyles={[ { paddingTop: 20 }, { paddingTop: 40 }, { paddingTop: 80 } ]}
                styles={(prevInterpolatedStyles:any) => prevInterpolatedStyles.map((_:any, i:number) => {
                  return i === 0
                    ? { paddingTop: spring(0, motion) }
                    : { paddingTop: spring(prevInterpolatedStyles[i - 1].paddingTop, motion) }
                })}>
                {
                  (interpolatingStyles:Array<{top:number}>) =>
                    <>
                      <h1 style={{ ...interpolatingStyles[0], width: '100%' }}>
                        { props.item.title }
                      </h1>
                      {
                        props.item.desc.map(paragraph => 
                          <p key={ Math.random() } style={{ ...interpolatingStyles[1], width: '100%' }}>
                            { paragraph }
                          </p>
                        )
                      }
                      <h2
                        style={{ ...interpolatingStyles[2], width: '100%', background: 'grey', padding: '5px', color: 'white' }}
                        onClick={ props.onClose }>
                        ←	back
                      </h2>
                    </>
                }
              </StaggeredMotion>
            </Row>
          </Col>
          <Col lg={ 8 } md={ 8 } sm={ 12 } xs={ 12 } style={{ padding: 'rem' }}>
            <Motion defaultStyle={{ right: -150, opacity: 0 }} style={{ opacity: spring(1), right: spring(0) }}>
              {
                interpolatingStyle =>
                <img src={ props.item.feature } style={{ width: '100%', height: 'auto', position: 'absolute', ...interpolatingStyle }} />
              }
            </Motion>
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