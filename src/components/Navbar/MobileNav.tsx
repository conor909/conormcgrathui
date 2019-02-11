import React, { useEffect, useRef } from 'react';
import { TweenLite, Power4 } from "gsap";
import { Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import { useWindowSize } from '../../hooks';

export default (props:any) => {

  const mobileSideMenu = useRef(null);
  const { width } = useWindowSize();

  useEffect(() => {
    if (props.isOpen) {
      new TweenLite(mobileSideMenu.current, .4, { right: 0, ease: Power4.easeOut });
    } else {
      new TweenLite(mobileSideMenu.current, .4, { right: -window.innerWidth, ease: Power4.easeOut });
    }
  }, [ props.isOpen ]);

  function clickNav(route:string) {
    props.history.push(route);
    props.onClose();
  }

  return (
    <Wrapper ref={ mobileSideMenu } width={ width }>
      <Col>
        {/*
          <Row onClick={ () => props.history.push('/clients' )}>
            clients
          </Row>
          <Row onClick={ () => props.history.push('/about' )}>
            about
          </Row>
        */}
        <Row onClick={ () => clickNav('/work/all' )}>
          <MobileNavItem>
            work
          </MobileNavItem>
        </Row>
        <Row onClick={ () => clickNav('/contact' )}>
          <MobileNavItem>
            contact
          </MobileNavItem>
        </Row>
        <Row onClick={ () => clickNav('/blog' )}>
          <MobileNavItem>
            blog
          </MobileNavItem>
        </Row>
      </Col>
    </Wrapper>
  )
}

const Wrapper = styled.nav<{ width:number }>`
  font-size: 2rem;
  display: block;
  position: absolute;
  top: 50px;
  right: ${ p => -p.width }px;
  height: ${ window.innerHeight }px;
  border-left: 1px solid #e1e1e1;
  width: ${ p => p.width }px;
  background: #f6f6f6;
  z-index: 3;
  overflow-y: scroll;
`;

const MobileNavItem = styled.div`
  cursor: pointer;
  font-size: 2rem;
  padding: 1rem;
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
  &:active {
    background: #fff
  }
`;