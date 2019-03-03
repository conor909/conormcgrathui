import React from 'react';
import { Row, Col } from 'react-awesome-styled-grid';
import jsLogo from '../data/images/tech-logos/js.svg';
import reactLogo from '../data/images/tech-logos/react.svg';
import reduxLogo from '../data/images/tech-logos/redux.svg';
import nodeLogo from '../data/images/tech-logos/node.svg';
import aiLogo from '../data/images/tech-logos/ai.svg';
import psLogo from '../data/images/tech-logos/ps.svg';
import tsLogo from '../data/images/tech-logos/ts.svg';

export default () => (
  <Row style={{ justifyContent: 'space-between', flexWrap: 'nowrap' }}>
    <Col lg={ 1 } md={ 1 } sm={ 1 } xs={ 1 } style={{ justifyContent: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={ jsLogo } className='tech-logo' />
      </div>
    </Col>
    <Col lg={ 1 } md={ 1 } sm={ 1 } xs={ 1 }>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={ tsLogo } className='tech-logo' />
      </div>
    </Col>
    <Col lg={ 1 } md={ 1 } sm={ 1 } xs={ 1 }>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={ reactLogo } className='tech-logo' />
      </div>
    </Col>
    <Col lg={ 1 } md={ 1 } sm={ 1 } xs={ 1 }>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={ reduxLogo } className='tech-logo' />
      </div>
    </Col>
    <Col lg={ 1 } md={ 1 } sm={ 1 } xs={ 1 }>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={ nodeLogo } className='tech-logo' />
      </div>
    </Col>
      <Col lg={ 1 } md={ 1 } sm={ 1 } xs={ 1 }>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={ aiLogo } className='tech-logo' />
        </div>
      </Col>
      <Col lg={ 1 } md={ 1 } sm={ 1 } xs={ 1 }>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={ psLogo } className='tech-logo' />
        </div>
      </Col>
  </Row>
);