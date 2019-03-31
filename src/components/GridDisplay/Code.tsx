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
    
    //useLockBodyScroll();

    const descriptionRef = useRef<any>(null);
    const actionBarRef = useRef<any>(null);
    const featureRef = useRef<any>(null);

    useEffect(() => {
      new TimelineLite()
      .fromTo(descriptionRef.current, .5, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, .2)
      .fromTo(actionBarRef.current, .5, { x: 20, opacity: 0 }, { x: 0, opacity: 1 }, .4)
      .fromTo(featureRef.current, .5, { opacity: 0 }, { opacity: 1 }, 0)
    }, []);

    function getComponent(item:any) {
      switch(item.niceName) {
        case 'orbs':
          return (
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }} ref={ featureRef } >
              <Orbs />
            </div>
            );
        case 'webcomponents':
          return <img width='100%' height='auto' src={ item.feature } ref={ featureRef } />;
        default: <img width='100%' height='auto' src={ item.feature } ref={ featureRef } />;
      }
    }

    return (
      <Wrapper width={ width } height={ height }>
        <Row reverse={['sm', 'md']} style={{ minHeight: '100%' }}>
          <Col xl={ 4 } lg={ 4 } sm={ 8 } xs={ 8 }>
            <p
              ref={ actionBarRef }
              style={{ opacity: 0, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: 0 }}
              onClick={ props.onClose }>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: '#efefef',
                  padding: '5px 3px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  border: '1px solid #e1e1e1',
                  textAlign: 'center'
                }}>
                  ←
                </div>
              </p>
              <h1 style={{ margin: 0 }}>{ props.item.title }</h1>
              {
                props.item.desc.map(paragraph => 
                  <p key={ Math.random() } style={{ width: '100%' }}>
                    { paragraph }
                  </p>
                )
              }
              {
                props.item.url &&
                  <p>
                    <a href={ props.item.url } target='_blank'>
                      { props.item.displayLink }
                    </a>
                  </p>
              }
              { getComponent(props.item) }
              <div ref={ descriptionRef } style={{ opacity: 0 }}>
            </div>
          </Col>
          <Col xl={ 8 } lg={ 8 } sm={ 8 } xs={ 8 }>
            <EmbeddedGist gist={ props.item.gist }></EmbeddedGist>
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