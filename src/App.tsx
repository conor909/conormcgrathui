import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import './global.css';
import { Home, About, Work, Contact, Blog } from './pages';
import { Navbar } from './components';
import { useNavbarState } from './containers';

class App extends Component <any, any> {
  render() {
    return (
      <AppWrap>
        <Router>
          <React.Fragment>
            <Navbar />
            <Switch>
              <Route path="/" exact component={ Home } />
              <Route path="/about/" component={ About } />
              <Route path="/work/" component={ Work } />
              <Route path="/work/:tag" component={ Work } />
              <Route path="/contact/" component={ Contact } />
              <Route path="/blog/" component={ Blog } />
            </Switch>
          </React.Fragment>
        </Router>
      </AppWrap>
    );
  }
}

export default App;

const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${ 50 }px;
  flex: 1;
`;
