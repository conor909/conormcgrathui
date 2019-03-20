import React from 'react';
import { Row } from 'react-awesome-styled-grid';
import { NavItem } from '../components/Navbar';
import { withRouter, matchPath } from 'react-router';

export default withRouter((props:any) => (
    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', padding: '0px 15px', minHeight: '100vh', ...props.style }}>
        <div style={{ flexGrow: 1 }}>
          { props.children }
        </div>
        <footer  style={{ flexShrink: 0 }}>
            <Row style={{ marginTop: '2rem', padding: '1rem', marginLeft: '-30px', marginRight: "-30px", minHeight: '300px', background: '#efefef', borderTop: '1px solid #e1e1e1', alignSelf: 'flex-end' }}>
              {/*
              <NavItem
                active={ !!matchPath(props.location.pathname, { path: '/clients' }) }
                onClick={ () => props.history.push('/clients' )}>
                  clients
              </NavItem>
          
              <NavItem
                active={ !!matchPath(props.location.pathname, { path: '/work/:type' }) }
                onClick={ () => props.history.push('/work/all' )}>
                  work
              </NavItem>
          
              <NavItem
                onClick={ () => props.history.push('/contact' )}
                active={ !!matchPath(props.location.pathname, { path: '/contact' }) }>
                  contact
              </NavItem>
            
              <NavItem
                active={ !!matchPath(props.location.pathname, { path: '/blog' }) }
                onClick={ () => props.history.push('/blog' )}>
                  blog
              </NavItem>
              */}
            </Row>
          </footer>
    </div>
));