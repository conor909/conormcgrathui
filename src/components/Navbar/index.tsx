import React, { useState } from 'react';
import { withRouter, matchPath } from 'react-router';
import { Container, Row, ScreenClass } from 'react-awesome-styled-grid';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import WorkSubNav from './WorkSubNav';
import styled from 'styled-components';

export default withRouter((props:any):any => {

  const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState<boolean>(false);
  const isShowingWorkRoute = matchPath(props.location.pathname, { path: '/work/:category', exact: false });

  function goHome() {
    props.history.push('/')
    setIsMobileMenuOpen(false)
  }

  return(
    <>
      <Wrapper>
        <Container fluid={ true }>
          <Row>
            <Title onClick={ goHome }>
              conor mcgrath ui | ux
            </Title>
            <Nav>
              <ScreenClass render={(screen:any) => {
                if (!['sm', 'xs'].includes(screen)) {
                  return <DesktopNav />
                } else {
                  return (
                    <div style={{ width: '100%', textAlign: 'right', fontSize: 'x-large', fontWeight: 'bold' }}onClick={ () => setIsMobileMenuOpen(!isMobileMenuOpen) }>
                      =
                    </div>
                  )
                }
              }} />
            </Nav>
          </Row>
        </Container>
        <ScreenClass render={(screen:any) => {
          if (['sm', 'xs'].includes(screen) && isMobileMenuOpen) {
            return <MobileNav isOpen={ isMobileMenuOpen } { ...props } onClose={ () => setIsMobileMenuOpen(false) } />
          }
        }} />
      </Wrapper>
      <WorkSubNav isOpen={ isShowingWorkRoute } { ...props } />
    </>
  )
});

export const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e1e1e1;
  background: #f6f6f6;
  z-index: 2
`;

const Title = styled.div`
  display: flex;
  flex: 1;
  height: 50px;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const Nav = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
`;

export const NavItem = styled.div<{ active:boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 50px;
  cursor: pointer;
`;
