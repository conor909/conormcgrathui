import React from 'react';
import { Row, Col } from 'react-grid-system';

export default (props:any) => {
  return (
    <Col>
      <Row>
        {/*
          <Col onClick={ () => props.history.push('/clients' )}>
            clients
          </Col>
          <Col onClick={ () => props.history.push('/about' )}>
            about
          </Col>
        */}
        <Col onClick={ () => props.history.push('/work/all' )}>
          work
        </Col>
        <Col onClick={ () => props.history.push('/contact' )}>
          contact
        </Col>
        <Col onClick={ () => props.history.push('/blog' )}>
          blog
        </Col>
      </Row>
    </Col>
  )
}