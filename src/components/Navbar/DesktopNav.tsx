import React from 'react';
import { Row, Col } from 'react-grid-system';

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
          work
        </Col>
        <Col onClick={ () => clickNav('/contact' )}>
          contact
        </Col>
        <Col onClick={ () => clickNav('/blog' )}>
          blog
        </Col>
      </Row>
    </Col>
  )
}