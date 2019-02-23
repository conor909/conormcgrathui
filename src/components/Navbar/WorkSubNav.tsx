import React, { useEffect, useRef } from 'react';
import { matchPath } from 'react-router-dom';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { TimelineLite, Power4 } from "gsap";
import styled from 'styled-components';
import { Wrapper } from '../Navbar';
import { NavItem } from './index';

function WorkSubNav (props:any) {

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
    <Wrapper as={ SubNavWrapper } ref={ subNavRef }>
      <Container fluid={ true }>
        <Row>
          <Col offset={{ lg: 9 }}>
            <NavItem
              active={ !!matchPath(props.location.pathname, { path: '/work/design', exact: false }) }
              onClick={ () => clickNav('/work/design')}>
                design
            </NavItem>
          </Col>
          <Col>
            <NavItem
              active={ !!matchPath(props.location.pathname, { path: '/work/code', exact: false }) }
              onClick={ () => clickNav('/work/code')}>
                code
            </NavItem>
          </Col>
          <Col>
            <NavItem
              active={ !!matchPath(props.location.pathname, { path: '/work/development', exact: false }) }
              onClick={ () => clickNav('/work/development')}>
                development
            </NavItem>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}

const SubNavWrapper = styled.nav`
  background: #efefef !important;
  z-index: 1 !important;
`;

export default WorkSubNav;