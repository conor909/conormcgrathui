import React, { useEffect, useRef } from 'react';
import { TimelineLite } from "gsap";
import { Row, Col } from 'react-awesome-styled-grid';
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
        <Row reverse={ true }>
          <Col lg={ 4 } md={ 4 } sm={ 12 } xs={ 12 }>
            <h1 style={{ width: '100%', opacity: 0 }} ref={ titleRef }>
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
              style={{ width: '100%', opacity: 0 }}
              onClick={ props.onClose }>
                <p style={{ background: '#efefef', padding: '5px 3px', border: '1px solid #e1e1e1' }}>←	back</p>
            </div>
          </Col>
          <Col lg={ 8 } md={ 8 } sm={ 12 } xs={ 12 }>
            <img src={ props.item.feature } style={{ width: '100%', height: 'auto', opacity: 0 }} ref={ featureRef }/>
          </Col>
        </Row>
      </Wrapper>
    );
  }

const Wrapper = styled.div`
  display: block;
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${ window.innerHeight - 100 }px;
  width: ${ window.innerWidth }px;
  background: #f6f6f6;
  z-index: 1;
  overflow-y: scroll;
  padding: 1rem;
`;