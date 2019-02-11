import React, { useState } from 'react';
import { withRouter, matchPath } from 'react-router';
import { Visible, Hidden, Container, Row, Col } from 'react-grid-system';
import { useWindowSize } from '../../hooks';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import WorkSubNav from './WorkSubNav';
import styled from 'styled-components';

export default withRouter((props:any):any => {

  const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState<boolean>(false);
  const isShowingWorkRoute = matchPath(props.location.pathname, { path: '/work/:category', exact: false });
  const { width } = useWindowSize();
  
  return(
    <>
      <Wrapper width={ width } >
        <Container fluid style={{ width: '100%' }}>
          <Row>
            <LeftNav style={{ cursor: 'pointer' }} onClick={ () => props.history.push('/' )}>
              conor mcgrath ui | ux
            </LeftNav>
            <RightNav>
              <Hidden md sm xs>
                <DesktopNav { ...props } />
              </Hidden>
              <Visible md sm xs>
              <Col>
                <div style={{ width: '100%', textAlign: 'right', fontSize: 'x-large', fontWeight: 'bold' }}onClick={ () => setIsMobileMenuOpen(!isMobileMenuOpen) }>=</div>
              </Col>
              </Visible>
            </RightNav>
          </Row>
        </Container>
      </Wrapper>
      <WorkSubNav isOpen={ isShowingWorkRoute } { ...props } />
      <Hidden xl lg>
        <MobileNav isOpen={ isMobileMenuOpen } { ...props } onClose={ () => setIsMobileMenuOpen(false) } />
      </Hidden>
    </>
  )
});

export const Wrapper = styled.nav<{ width:number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0px;
  width: ${ p => p.width }px;
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

export const NavItem = styled.div<{ active:boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 50px;
  cursor: pointer;
  color: ${ p => p.active ? 'lightgrey' : 'inherit' };
`;