import React from 'react';
import { matchPath, withRouter } from 'react-router-dom';
import { Row, Col } from 'react-awesome-styled-grid';
import { NavItem } from './index';

export default withRouter((props:any) => {

  function clickNav(route:string) {
    if (route === props.location.pathname) {
      return;
    }
    else {
      props.history.push(route);
    }
  }

  return (
    <Col>
      <Row align='end'>
        
        {/*
        <NavItem
          active={ !!matchPath(props.location.pathname, { path: '/about' }) }
          onClick={ () => clickNav('/about' )}>
            about
        </NavItem>
        */}
        
          <NavItem
            active={ !!matchPath(props.location.pathname, { path: '/clients' }) }
            onClick={ () => clickNav('/clients' )}>
              clients
          </NavItem>
      
        <NavItem
          active={ !!matchPath(props.location.pathname, { path: '/work/:type' }) }
          onClick={ () => clickNav('/work/all' )}>
            work
        </NavItem>
    
        <NavItem
          onClick={ () => clickNav('/contact' )}
          active={ !!matchPath(props.location.pathname, { path: '/contact' }) }>
            contact
        </NavItem>
      
        <NavItem
          active={ !!matchPath(props.location.pathname, { path: '/blog' }) }
          onClick={ () => clickNav('/blog' )}>
            blog
        </NavItem>
      </Row>
    </Col>
  )
})