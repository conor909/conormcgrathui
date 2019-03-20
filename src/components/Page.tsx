import React from 'react';
import { Container, Row } from 'react-awesome-styled-grid';
import DesktopNav from './Navbar/DesktopNav';

export default (props:any) => (
  <>
    <Container
      style={{
        position: 'relative',
        ...props.style
      }}
      fluid={ true }>
        { props.children }
        {/*
          <Row align='flex-end' style={{ marginTop: '2rem', padding: '1rem', marginLeft: '-30px', marginRight: "-30px", minHeight: '300px', background: '#efefef', borderTop: '1px solid #e1e1e1', alignSelf: 'flex-end' }}>
            <DesktopNav  />
          </Row>
        */}
    </Container>
  </>
);