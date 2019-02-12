import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Page, ContactForm } from '../components';

export default () => {
  return(
    <Page>
      <Container fluid={ true }>
        <Col>
          <ContactForm />
        </Col>
      </Container>
    </Page>
  );
};