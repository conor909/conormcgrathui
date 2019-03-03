import React from 'react';
import { Container } from 'react-awesome-styled-grid';
import { Page, ContactForm } from '../components';

export default () => {
  return(
    <Page style={{ background: '#333', width: '100%', color: 'white' }}>
      <ContactForm />
    </Page>
  );
};