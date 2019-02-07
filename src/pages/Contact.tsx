import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-grid-system';
import { Page, FormElements } from '../components';

export default () => {
  
  const [ name, setName ] = useState<string>('');
  const [ email, setEmail ] = useState<string>('');
  const [ phone, setPhone ] = useState<string>('');
  const [ message, setMessage ] = useState<string>('');
  
  const [ emailStatus, setEmailStatus ] = useState<string>('idle');
  
  function sendEmail (formDetails:{ name:string, email:string, phone:string, message:string }) {
    setEmailStatus('sending');
    axios({
      url: '/api/send-email/',
      method: 'post',
      data: formDetails
    })
    .then((res) => {
      switch(res.data) {
        case 'sent':
          setEmailStatus('sent');
        break;
      }
    })
    .catch((err) => setEmailStatus('sent'));
  }
  
  return(
    <Page>
      <Container fluid={ true }>
        <Row>
          <FormElements.Input label='Name' value={ name } onChange={ (value) => setName(value) } />
          <FormElements.Input label='Email' value={ email } onChange={ (value) => setEmail(value) } />
          <FormElements.Input label='Phone' value={ phone } onChange={ (value) => setPhone(value) } />
          <FormElements.TextArea label='Message' value={ message } onChange={ (value) => setMessage(value) } />
          <FormElements.Button label='Send' onClick={ () => sendEmail({ name, email, phone, message }) } disabled={ emailStatus === 'sent' ? true : false } />
          { emailStatus === 'sent' && <p style={{ textAlign: 'center' }}>Sent!</p> }
        </Row>
      </Container>
    </Page>
  );
};