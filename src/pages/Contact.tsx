import React from 'react';
import { Row, Col } from 'react-awesome-styled-grid';
import { Page, ContactForm } from '../components';

export default () => {
  return(
    <Page>
      <Row>
        <Col>
          <ContactForm />
        </Col>
      </Row>
    </Page>
  );
};