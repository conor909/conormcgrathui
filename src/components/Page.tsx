import React from 'react';
import styled from 'styled-components';

export default (props:any) => (
  <Page id='page'>
    { props.children }
  </Page>
)

const Page = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
`;