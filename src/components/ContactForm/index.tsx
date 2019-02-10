import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Row } from 'react-grid-system';
import { FormElements } from '../../components';

export default (props:any) => {
  
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
    <Formik
      initialValues={{ email: '', name: '', phone: '', message: '' }}
      onSubmit={(values) => {
        setTimeout(() => {
          sendEmail(values);
          setEmailStatus('sending');
        }, 500);
      }}
      validationSchema={
        Yup.object().shape({
          name: Yup.string().required('Enter your name'),
          email: Yup.string().email().required('Enter a valid email'),
          phone: Yup.string(),
          message: Yup.string().required('Enter a message')
        })
      }>
      {
        (props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return(
            <form onSubmit={ handleSubmit }>
              <Row justify='center' nogutter={ true }>
                <FormElements.Input
                  id='name'
                  type='text'
                  label='Name'
                  value={ values.name }
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  error={ errors.name ? errors.name : null }
                />
                <FormElements.Input
                  id='email'
                  label='Email'
                  type='text'
                  value={ values.email }
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  error={ errors.email ? errors.email : null }
                />
                <FormElements.Input
                  id='phone'
                  label='Phone'
                  type='text'
                  value={ values.phone }
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  error={ errors.phone ? errors.phone : null }
                />
                <FormElements.TextArea
                  id='message'
                  label='Message'
                  type='text'
                  value={ values.message }
                  onChange={ handleChange }
                  onBlur={ handleBlur }
                  error={ errors.message ? errors.message : null }
                />
                <div style={{ paddingTop: '1rem' }}>
                  <FormElements.Button
                    type='submit'
                    onClick={ handleSubmit }
                    label='Send'
                    disabled={ emailStatus === 'sent' ? true : false }
                  />
                </div>
              </Row>
              <Row justify='center' nogutter={ true }>
                  { emailStatus === 'sent' && <p style={{ textAlign: 'center' }}>Sent!</p> }
              </Row>
            </form>
          )
        }
      }
    </Formik>
  )
}