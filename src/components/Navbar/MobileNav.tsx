import React, { useEffect, useRef, useState } from 'react';
import { TweenLite, Power4 } from "gsap";
import { Row, Col } from 'react-awesome-styled-grid';
import styled from 'styled-components';

export default (props:any) => {

  const [ width, setWidth ] = useState<number>(window.innerWidth);
  const [ height, setHeight ] = useState<number>(window.innerHeight);
  
  function onResize() { setWidth(window.innerWidth); setHeight(window.innerHeight) }
    
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('resize', onResize) }
  }, []);

  const mobileSideMenu = useRef(null);

  useEffect(() => {
    if (props.isOpen) {
      new TweenLite(mobileSideMenu.current, .4, { right: 0, ease: Power4.easeOut });
    } else {
      new TweenLite(mobileSideMenu.current, .4, { right: -width, ease: Power4.easeOut });
    }
  }, [ props.isOpen ]);

  function clickNav(route:string) {
    props.history.push(route);
    props.onClose();
  }

  return (
    <Wrapper width={ width } height={ height } ref={ mobileSideMenu }>
      <Col>
        <Row onClick={ () => clickNav('/clients' )}>
          <MobileNavItem>
            clients
          </MobileNavItem>
        </Row>
        {/*
        <Row onClick={ () => props.history.push('/about' )}>
          <MobileNavItem>
            about
          </MobileNavItem>
        </Row>*/
        }
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

const Wrapper = styled.nav<{ width:number, height:number }>`
  font-size: 2rem;
  display: block;
  position: absolute;
  top: 50px;
  right: ${ props => -props.width }px;
  height: ${ props => props.height }px;
  border-left: 1px solid #e1e1e1;
  width: ${ props => props.width }px;
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