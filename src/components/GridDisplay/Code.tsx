import React, { useState, useEffect, useRef } from 'react';
import EmbeddedGist from './EmbeddedGist';
import { TimelineLite } from "gsap";
import { Row, Col } from 'react-awesome-styled-grid';
import { IGridItem } from './index';
import styled from 'styled-components';
import { useLockBodyScroll } from '../../hooks';
import Orbs from './orbs';

export default (props:{ item:IGridItem, onClose():void  }) => {

    const [ width, setWidth ] = useState(window.innerWidth);
    const [ height, setHeight ] = useState(window.innerHeight);
    
    useEffect(() => {
      function onResize() { setWidth(window.innerWidth); setHeight(window.innerHeight) }
      window.addEventListener('resize', onResize);
      return () => { window.removeEventListener('resize', onResize) }
    }, []);
    
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
      <Wrapper width={ width } height={ height }>
        <Row reverse={ true } style={{ minHeight: '100%' }}>
          <Col lg={ 6 } md={ 6 } sm={ 12 } xs={ 12 }>
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
            <div
              ref={ actionBarRef }
              style={{ width: '100%', opacity: 0 }}
              onClick={ props.onClose }>
                <p style={{ background: '#efefef', padding: '5px 3px', border: '1px solid #e1e1e1' }}>←	back</p>
            </div>
              <EmbeddedGist gist="conor909/d18ea902c31367a672e0a87a6acf663c"></EmbeddedGist>
            </div>
          </Col>
          <Col lg={ 6 } md={ 6 } sm={ 12 } xs={ 12 }>
            <div ref={ featureRef } style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <Orbs />
            </div>
          </Col>
        </Row>
      </Wrapper>
    );
  }

const Wrapper = styled.div<{ height:number, width:number }>`
  display: block;
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${ props => props.height - 100 }px;
  width: ${ props => props.width }px;
  background: #f6f6f6;
  z-index: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 1rem;
`;