import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Page, ContactForm } from '../components';

export default () => {
  return(
    <Page>
      <Container fluid={ true }>
        <Row nogutter={ true }>
          <Col lg={ 3 } md={ 4 } sm={ 12 } xs={ 12 }>
            <Row justify='center' nogutter={ true }>
              <img src="https://cdn-images-1.medium.com/fit/c/150/150/1*qpYX-4I8X_4XTs5_tr7dJQ.jpeg" style={{ borderRadius: '50%' }} />
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