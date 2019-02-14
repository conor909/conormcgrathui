import React, { useState } from 'react';
import { withRouter, matchPath } from 'react-router';
import { Visible, Hidden, Container, Row, Col } from 'react-awesome-styled-grid';
import { useWindowSize } from '../../hooks';
import DesktopNav from './DesktopNav';
// import MobileNav from './MobileNav';
import WorkSubNav from './WorkSubNav';
import styled from 'styled-components';

export default withRouter((props:any):any => {

  const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState<boolean>(false);
  const isShowingWorkRoute = matchPath(props.location.pathname, { path: '/work/:category', exact: false });
  const { width } = useWindowSize();
  
  return(
    <>
      <Wrapper>
        <Container fluid={ true }>
          <Row>
            <Title onClick={ () => props.history.push('/' )}>
              conor mcgrath ui | ux
            </Title>
            <Nav>
              <Hidden md sm xs>
                <DesktopNav { ...props } />
              </Hidden>
              <Visible md sm xs>
                <div style={{ width: '100%', textAlign: 'right', fontSize: 'x-large', fontWeight: 'bold' }}onClick={ () => setIsMobileMenuOpen(!isMobileMenuOpen) }>
                  =
                </div>
              </Visible>
            </Nav>
          </Row>
        </Container>
        {/*
          <Hidden xl lg>
            <MobileNav isOpen={ isMobileMenuOpen } { ...props } onClose={ () => setIsMobileMenuOpen(false) } />
          </Hidden>
        */}
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

const Nav = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const NavItem = styled.div<{ active:boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 50px;
  cursor: pointer;
  color: ${ p => p.active ? '#c70082' : 'inherit' };
  &:hover {
    color: #c70082;
  }
`;