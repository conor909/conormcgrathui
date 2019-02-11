import React, { useEffect, useRef } from 'react';
import { TimelineLite } from "gsap";
import { Container, Row, Col } from 'react-grid-system';
import { IGridItem } from './index';
import styled from 'styled-components';
import { useLockBodyScroll } from '../../hooks';

export default 
  (props:{ item:IGridItem, onClose():void  }) => {
    
    useLockBodyScroll();

    const titleRef = useRef<any>(null);
    const descriptionRef = useRef<any>(null);
    const actionBarRef = useRef<any>(null);
    const featureRef = useRef<any>(null);

    useEffect(() => {
      new TimelineLite()
      .fromTo(titleRef.current, .5, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, 0)
      .fromTo(descriptionRef.current, .5, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, .2)
      .fromTo(actionBarRef.current, .5, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, .4)
      .fromTo(featureRef.current, .5, { x: 100, opacity: 0 }, { x: 0, opacity: 1 }, 0)
    }, []);

    return (
      <Wrapper>
        <Container fluid>
          <Row>
            <Col lg={ 4 } md={ 4 } sm={ 12 } xs={ 12 }>
              <Row>
                <h1 style={{ opacity: 0, width: '100%' }} ref={ titleRef }>
                  { props.item.title }
                </h1>
                <div ref={ descriptionRef } style={{ opacity: 0 }}>
                  {
                    props.item.desc.map(paragraph => 
                      <p key={ Math.random() } style={{ width: '100%' }}>
                        { paragraph }
                      </p>
                    )
                  }
                </div>
                <div
                  ref={ actionBarRef }
                  style={{ width: '100%', padding: '5px', color: 'white', opacity: 0 }}
                  onClick={ props.onClose }>
                    <p style={{ background: 'grey', padding: '5px 3px' }}>←	back</p>
                </div>
              </Row>
            </Col>
            <Col lg={ 8 } md={ 8 } sm={ 12 } xs={ 12 } style={{ padding: 'rem' }}>
              <img src={ props.item.feature } style={{ width: '100%', height: 'auto', position: 'absolute', opacity: 0 }} ref={ featureRef }/>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }

const Wrapper = styled.div`
  display: block;
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  height: ${ window.innerHeight }px;
  width: 100%;
  background: #f6f6f6;
  z-index: 1;
  overflow-y: scroll;
  padding: 1rem;
`;