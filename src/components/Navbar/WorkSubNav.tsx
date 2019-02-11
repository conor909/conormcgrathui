import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { TimelineLite, Power4 } from "gsap";
import styled from 'styled-components';
import { Wrapper } from '../Navbar';

function SubNav (props:any) {

  const subNavRef = useRef<any>(null);

  useEffect(() => {
    if (props.isOpen) {
      new TimelineLite()
        .set(subNavRef.current, { position: 'absoulte' })
        .to(subNavRef.current, .4, { top: 50, ease: Power4.easeOut })
        .set(subNavRef.current, { position: 'fixed' })
    } else {
      new TimelineLite()
        .set(subNavRef.current, { position: 'absoulte' })
        .to(subNavRef.current, .4, { top: 0, ease: Power4.easeOut })
        .set(subNavRef.current, { position: 'fixed' })
    }
  }, [ props.isOpen ]);

  function clickNav(route:string) {
    console.log(route, props.location.pathname)
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
              onClick={ () => clickNav('/work/development' )}>
                development
            </Col>
            <Col
              lg={ 2 } sm={ 4 } xs={ 4 }
              onClick={ () => clickNav('/work/design' )}>
                design
            </Col>
            <Col
              lg={ 2 } sm={ 4 } xs={ 4 }
              onClick={ () => clickNav('/work/javascript' )}>
                javascript
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

export default SubNav;