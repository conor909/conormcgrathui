import React from 'react';
import { Row, Col } from 'react-awesome-styled-grid';
import jsLogo from '../data/images/tech-logos/js.svg';
import reactLogo from '../data/images/tech-logos/react.svg';
import reduxLogo from '../data/images/tech-logos/redux.svg';
import nodeLogo from '../data/images/tech-logos/node.svg';
//import aiLogo from '../data/images/tech-logos/ai.svg';
//import psLogo from '../data/images/tech-logos/ps.svg';
import tsLogo from '../data/images/tech-logos/ts.svg';

export default () => (
  <Row align='center' justify='between' nogutter={ true }>
    <Col lg={ 1 } md={ 1 } sm={ 1 } xs={ 1 }>
      <img src={ jsLogo } className='tech-logo' />
    </Col>
    <Col lg={ 1 } md={ 1 } sm={ 1 } xs={ 1 }>
      <img src={ tsLogo } className='tech-logo' />
    </Col>
    <Col lg={ 1 } md={ 1 } sm={ 1 } xs={ 1 }>
      <img src={ reactLogo } className='tech-logo' />
    </Col>
    <Col lg={ 1 } md={ 1 } sm={ 1 } xs={ 1 }>
      <img src={ reduxLogo } className='tech-logo' />
    </Col>
    <Col lg={ 1 } md={ 1 } sm={ 1 } xs={ 1 }>
      <img src={ nodeLogo } className='tech-logo' />
    </Col>
    {/*
      <Col lg={ 1 } md={ 1 } sm={ 1 } xs={ 1 }>
        <img src={ aiLogo } className='tech-logo' />
      </Col>
      <Col lg={ 1 } md={ 1 } sm={ 1 } xs={ 1 }>
        <img src={ psLogo } className='tech-logo' />
      </Col>
    */}
  </Row>
);