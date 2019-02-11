import React from 'react';
import { withRouter } from 'react-router';
import { GridDisplay, Page } from '../components';

export default withRouter(
  (props) => (
    <Page style={{ paddingTop: '50px' }}>
      <GridDisplay category={ props.match.params.category } item={ props.match.params.item }/>
    </Page>
  )
)