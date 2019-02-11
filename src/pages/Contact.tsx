import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Page, ContactForm } from '../components';

export default () => {
  return(
    <Page>
      <Container>
        <Row>
          <Col lg={ 3 } md={ 4 } sm={ 12 } xs={ 12 }>
            <Row justify='center' nogutter={ true }>
              <img src="https://cdn-images-1.medium.com/fit/c/150/150/1*qpYX-4I8X_4XTs5_tr7dJQ.jpeg" style={{ borderRadius: '50%' }} />
            </Row>
            <Row justify='center' nogutter={ true }>
              <p style={{ fontSize: '0.8rem', textAlign: 'center', width: '100%', marginBottom: '0rem' }}>
                conor909@gmail.com
              </p>
              <p style={{ fontSize: '0.8rem', textAlign: 'center', width: '100%', marginBottom: '0rem' }}>
                +44 74321 44686
              </p>
              <p style={{ fontSize: '0.8rem', textAlign: 'center', width: '100%', marginBottom: '0rem' }}>
                +353 87 2462972
              </p>
            </Row>
          </Col>
          <Col lg={ 9 } md={ 8 } sm={ 12 } xs={ 12 }>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </Page>
  );
};