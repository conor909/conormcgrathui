import React, { useState, useEffect } from 'react';
import { Motion, spring, presets } from 'react-motion';
import { withRouter, matchPath } from 'react-router';
import { Visible, Hidden, Container, Row, Col } from 'react-grid-system';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import WorkSubNav from './WorkSubNav';
import styled from 'styled-components';

export default withRouter((props:any):any => {

  const [ isSidebarOpen, setIsSidebarOpen ] = useState<boolean>(false);
  const isShowingWorkRoute = matchPath(props.location.pathname, { path: '/work/:category', exact: false });
  const subNavTopPosition = isShowingWorkRoute ? 50 : 0;

  console.log('isSidebarOpen: ',isSidebarOpen)
  
  return(
    <>
      <Wrapper>
        <Container fluid style={{ width: '100%' }}>
          <Row>
            <LeftNav onClick={ () => props.history.push('/' )}>
              conor mcgrath ui | ux
            </LeftNav>
            <RightNav>
              <Hidden md sm xs>
                <DesktopNav { ...props } />
              </Hidden>
              <Visible md sm xs>
              <Col>
                <div onClick={ () => setIsSidebarOpen(!isSidebarOpen) }>=</div>
              </Col>
              </Visible>
            </RightNav>
          </Row>
        </Container>
      </Wrapper>
      <Motion defaultStyle={{ top: 0 }} style={{ top: spring(subNavTopPosition, { stiffness: 500, damping: 50 }) }}>
        { interpolatingStyle => <WorkSubNav style={ interpolatingStyle } { ...props } /> }
      </Motion>
      {/*
        <Motion defaultStyle={{ right: setIsSidebarOpen ? window.innerWidth / 1.2 : 0 }} style={{ right: spring(isSidebarOpen ? window.innerWidth : 0, { stiffness: 500, damping: 50 }) }}>
          { interpolatingStyle => <MobileNav style={ interpolatingStyle } { ...props } /> }
        </Motion>
      */}
    </>
  )
});

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 50px;
  font-size: 1em;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #e1e1e1;
  padding: 0 1rem;
  background: #f6f6f6;
  z-index: 2;
`;

const LeftNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;