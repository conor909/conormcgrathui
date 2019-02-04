import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Visible, Hidden, Container, Row, Col } from 'react-grid-system';
import styled, { StyledFunction } from 'styled-components';
import { useNavbarState } from '../containers';

export default withRouter(
  (props) => {
    
    const height = useNavbarState(useState).navBarHeight;
    
    return(
    <Wrapper height={ height }>
      <Container fluid style={{ width: '100%' }}>
        <Row>
          <LeftNav onClick={ () => props.history.push('/' )}>
            conor mcgrath ui | ux
          </LeftNav>
          <RightNav>
            <Hidden md sm xs>
              <Col>
                <Row>
                  <Col onClick={ () => props.history.push('/about/' )}>
                    about
                  </Col>
                  <Col onClick={ () => props.history.push('/work/' )}>
                    work
                  </Col>
                  <Col onClick={ () => props.history.push('/contact/' )}>
                    contact
                  </Col>
                  <Col onClick={ () => props.history.push('/blog/' )}>
                    blog
                  </Col>
                </Row>
              </Col>
            </Hidden>
            <Visible md sm xs>
              menu
            </Visible>
          </RightNav>
        </Row>
      </Container>
    </Wrapper>
  )
  }
);

const Div: StyledFunction<any & React.HTMLProps<HTMLInputElement>> = styled.div;

const Wrapper = Div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top:0;
  width: 100%;
  height: ${ p => p.height }px;
  color: black;
  font-size: 1em;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #e1e1e1;
  padding: 0 1rem;
  background: #f6f6f6;
  z-index: 2
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