import React from 'react';
import { withRouter } from 'react-router';
import { GridDisplay } from '../components';

export default withRouter(
  (props) => (
    <GridDisplay tag={ props.match.params.tag } />
  )
);