import React, { useEffect, useRef } from 'react';
import { matchPath } from 'react-router-dom';
import { Hidden, Container, Row, Col } from 'react-awesome-styled-grid';
import { TimelineLite, Power4 } from "gsap";
import styled from 'styled-components';
import { Wrapper } from '../Navbar';
import { NavItem } from './index';

function SubNav (props:any) {

  const subNavRef = useRef<any>(null);

  useEffect(() => {
    if (props.isOpen) {
      new TimelineLite().to(subNavRef.current, .4, { y: 50, ease: Power4.easeOut })
    } else {
      new TimelineLite().to(subNavRef.current, .4, { y: 0, ease: Power4.easeOut })
    }
  }, [ props.isOpen ]);

  function clickNav(route:string) {
    if (route === props.location.pathname) {
      return;
    } else {
      props.history.push(route);
    }
  }
  
  return (
    <Hidden xs sm md>
      <Wrapper as={ SubNavWrapper } ref={ subNavRef }>
        <Container fluid={ true }>
          <Row reverse={ true }>
            <Col lg={ 2 } sm={ 4 } xs={ 4 }>
              <NavItem
                as={ SubNavItem }
                active={ !!matchPath(props.location.pathname, { path: '/work/development', exact: false }) }
                onClick={ () => clickNav('/work/development')}>
                  development
              </NavItem>
            </Col>
            <Col lg={ 2 } sm={ 4 } xs={ 4 }>
              <NavItem
                as={ SubNavItem }
                active={ !!matchPath(props.location.pathname, { path: '/work/design', exact: false }) }
                onClick={ () => clickNav('/work/design')}>
                  design
              </NavItem>
            </Col>
            <Col lg={ 2 } sm={ 4 } xs={ 4 }>
              <NavItem
                as={ SubNavItem }
                active={ !!matchPath(props.location.pathname, { path: '/work/javascript', exact: false }) }
                onClick={ () => clickNav('/work/javascript')}>
                  javascript
              </NavItem>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </Hidden>
  )
}

const SubNavWrapper = styled.nav`
  background: grey !important;
  color: #fff !important;
  border-bottom: none !important;
  z-index: 1 !important;
`;

const SubNavItem = styled.div<{ active:boolean }>`
  color: ${ p => p.active ? '#fffb00' : 'inherit' } !important;;
  &:hover {
    color: #fffb00 !important;
  }
`
export default SubNav;