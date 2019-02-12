import React, { useEffect, useRef } from 'react';
import { matchPath } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import { TimelineLite, Power4 } from "gsap";
import styled from 'styled-components';
import { Wrapper } from '../Navbar';
import { NavItem } from './index';

function SubNav (props:any) {

  const subNavRef = useRef<any>(null);

  useEffect(() => {
    if (props.isOpen) {
      new TimelineLite()
        .set(subNavRef.current, { position: 'absolute' })
        .to(subNavRef.current, .4, { top: 50, ease: Power4.easeOut })
        .set(subNavRef.current, { position: 'fixed' })
    } else {
      new TimelineLite()
        .set(subNavRef.current, { position: 'absolute' })
        .to(subNavRef.current, .4, { top: 0, ease: Power4.easeOut })
        .set(subNavRef.current, { position: 'fixed' })
    }
  }, [ props.isOpen ]);

  function clickNav(route:string) {
    if (route === props.location.pathname) {
      return;
    }
    else {
      props.history.push(route);
    }
  }
  
  return (
    <div ref={ subNavRef } style={{ top: 0, width: '100%' }}>
      <SubNavWrapper>
        <Container fluid style={{ width: '100%', padding: 0 }}>
          <Row justify='end'>
            <Col
              lg={ 2 } sm={ 4 } xs={ 4 }
              onClick={ () => clickNav('/work/development')}>
                <SubNavItem active={ !!matchPath(props.location.pathname, { path: '/work/development', exact: false }) }>
                  development
                </SubNavItem>
            </Col>
            <Col
              lg={ 2 } sm={ 4 } xs={ 4 }
              onClick={ () => clickNav('/work/design')}>
                <SubNavItem active={ !!matchPath(props.location.pathname, { path: '/work/design', exact: false }) }>
                  design
                </SubNavItem>
            </Col>
            <Col
              lg={ 2 } sm={ 4 } xs={ 4 }
              onClick={ () => clickNav('/work/javascript')}>
                <SubNavItem active={ !!matchPath(props.location.pathname, { path: '/work/javascript', exact: false }) }>
                  javascript
                </SubNavItem>
            </Col>
          </Row>
        </Container>
      </SubNavWrapper>
    </div>
  )
}

const SubNavWrapper = styled(props => <Wrapper { ...props } />)`
  position: relative !important;
  z-index: 1 !important;
  background: grey !important;
  color: #fff !important;
  border-bottom: none !important;
`;

const SubNavItem = styled(props => <NavItem { ...props } />)`
  color: ${ p => p.active ? '#fffb00' : 'inherit' } !important;;
  &:hover {
    color: #fffb00 !important;
  }
`



export default SubNav;