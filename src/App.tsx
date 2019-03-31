import React, { useEffect, useRef } from 'react';
import { TimelineLite } from "gsap";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import styled from 'styled-components';
import './flex-box.css';
import './global.css';
import { About, Work, Contact, Blog, Clients } from './pages';
import { Navbar } from './components';

export default (props:any) => {

  const circle = useRef<any>(null);

  useEffect(() => {
    window.addEventListener('click', playCircle);
    return () => { window.removeEventListener('click', playCircle) }
  }, []);
  
  function playCircle(e:any) {
    const xPosition = e.clientX;
    const yPosition = e.clientY;
    new TimelineLite()
      .fromTo(circle.current, .2, { x: xPosition, y: yPosition, width: '0px', height: '0px', transformOrigin:"center center" }, { width: '100px', height: '100px', transformOrigin:"center center"  })
  }

  const circleStyles = {
    position: 'absolute' as 'absolute',
    zIndex: 99,
    width: '0px',
    height: '0px',
    borderRadius: '50%',
    backgroundColor: 'red'
  }

  return (
    <>
      <AppWrap>
        <Router>
          <>
            <svg viewBox="0 0 100 100"> 
              <circle fill="#000" id="lingin" cx="150" cy="125" r="100" ref={ circle } style={ circleStyles }/>
            </svg>
            <Navbar />
            <Switch>
              <Route path="/" exact component={ About } />
              <Route path="/clients" exact component={ Clients } />
              <Route path="/about" exact component={ About } />
              <Route path="/work/:category" component={ Work } />
              <Route path="/contact" exact component={ Contact } />
              <Route path="/blog" exact component={ Blog } />
            </Switch>
          </>
        </Router>
      </AppWrap>
    </>
  );
}

const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  flex: 1;
`;
