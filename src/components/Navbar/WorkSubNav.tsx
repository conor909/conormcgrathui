import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import { Wrapper } from '../Navbar';

export default (props:any) => {
  return (
    <SubNavWrapper topPosition={ props.style.top }>
      <Container fluid style={{ width: '100%', padding: 0 }}>
        <Row justify='end'>
          <Col
            lg={ 2 } sm={ 4 } xs={ 4 }
            onClick={ () => props.history.push('/work/development' )}>
              development
          </Col>
          <Col
            lg={ 2 } sm={ 4 } xs={ 4 }
            onClick={ () => props.history.push('/work/design' )}>
              design
          </Col>
          <Col
            lg={ 2 } sm={ 4 } xs={ 4 }
            onClick={ () => props.history.push('/work/javascript' )}>
              javascript
          </Col>
        </Row>
      </Container>
    </SubNavWrapper>
  )
}

const SubNavWrapper = styled(props => <Wrapper { ...props } />)`
  z-index: 1 !important;
  top: ${ p => p.topPosition }px !important;
  background: grey !important;
  color: #fff !important;
`;