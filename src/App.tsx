import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import './global.css';
import { Home, About, Work, Contact, Blog } from './pages';
import { Navbar } from './components';

export default () => {

  return (
    <AppWrap>
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route path="/" exact component={ About } />
            <Route path="/about" exact component={ About } />
            <Route path="/work/:category" component={ Work } />
            <Route path="/contact" exact component={ Contact } />
            <Route path="/blog" exact component={ Blog } />
          </Switch>
        </React.Fragment>
      </Router>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  flex: 1;
`;
