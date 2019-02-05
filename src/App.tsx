import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import './global.css';
import { Home, About, Work, Contact, Blog } from './pages';
import { Navbar } from './components';
import { useNavbarState } from './hooks';

export default () => {
  
  const navbarHeight = useNavbarState().navBarHeight;
  
  return (
    <AppWrap navbarHeight={ navbarHeight }>
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/about" exact component={ About } />
            <Route path="/work/:category" exact component={ Work } />
            <Route path="/contact" exact component={ Contact } />
            <Route path="/blog" exact component={ Blog } />
          </Switch>
        </React.Fragment>
      </Router>
    </AppWrap>
  );
}

const AppWrap = styled.div<{ navbarHeight:number }>`
  display: flex;
  flex-direction: column;
  padding-top: ${ p => p.navbarHeight }px;
  flex: 1;
`;
