import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import { Wrapper } from '../Navbar';

export default (props:any) => {
  return (
    <SubNavWrapper>
      <Container fluid style={{ width: '100%' }}>
        <Row>
          <Col onClick={ () => props.history.push('/work/development' )}>
            development
          </Col>
          <Col onClick={ () => props.history.push('/work/design' )}>
            design
          </Col>
          <Col onClick={ () => props.history.push('/work/javascript' )}>
            javascript
          </Col>
        </Row>
      </Container>
    </SubNavWrapper>
  )
}

const SubNavWrapper = styled(props => <Wrapper { ...props } />)`
  top: 50px !important;
`;