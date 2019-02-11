import React from 'react';
import { Row, Col } from 'react-grid-system';
import styled from 'styled-components';

export default (props:any) => {

  function clickNav(route:string) {
    console.log(route, props.location.pathname)
    if (route === props.location.pathname) {
      return;
    }
    else {
      props.history.push(route);
    }
  }

  console.log(props.match)

  return (
    <Col>
      <Row>
        {/*
          <Col onClick={ () => clickNav('/clients' )}>
            clients
          </Col>
          <Col onClick={ () => clickNav('/about' )}>
            about
          </Col>
        */}
        <Col onClick={ () => clickNav('/work/all' )}>
          <NavItem active={ props.location.pathname === '/work/all'}>
            work
          </NavItem>
        </Col>
        <Col onClick={ () => clickNav('/contact' )}>
          <NavItem active={ props.location.pathname === '/contact'}>
            contact
          </NavItem>
        </Col>
        <Col onClick={ () => clickNav('/blog' )}>
          <NavItem active={ props.location.pathname === '/blog'}>
            blog
          </NavItem>
        </Col>
      </Row>
    </Col>
  )
}

const NavItem = styled.div<{ active:boolean }>`
  color: ${ p => p.active ? '#c1c1c1' : 'inherit'}
`;