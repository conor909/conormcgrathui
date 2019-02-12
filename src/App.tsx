import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TweenLite, Power4 } from "gsap";
import styled from 'styled-components';
import './global.css';
import { Home, About, Work, Contact, Blog } from './pages';
import { Navbar } from './components';

export default () => {

  const circleRef = useRef(null);

  useEffect(() => {
    function touchAnim () { new TweenLite(circleRef.current, .4, { right: 0, ease: Power4.easeOut }); }
    window.addEventListener('mouseup', touchAnim);
  });

  return (
    <AppWrap>
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route path="/" exact component={ Home } />
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
