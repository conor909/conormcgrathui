import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import './flex-box.css';
import './global.css';
import { About, Work, Contact, Blog, Clients } from './pages';
import { Navbar } from './components';
import getWork from './data/work';
import me from './data/images/me.svg';

export default (props:any) => {

  // const circle = useRef<any>(null);

  // useEffect(() => {
  //   window.addEventListener('click', playCircle);
  //   return () => { window.removeEventListener('click', playCircle) }
  // }, []);
  
  // function playCircle(e:any) {
  //   new TimelineLite()
  //     .fromTo(circle.current, .5, { x: e.clientX, y: e.clientY, scale: 0 }, { x: e.clientX, y: e.clientY, scale: 5, transformOrigin: "center center"  }, 0)
  //     .fromTo(circle.current, .5, { fill: '#ffce00' }, { fill: 'transparent' }, 0)
  // }

  // const svgStyle = {
  //   position: 'absolute' as 'absolute',
  //   zIndex: 999999,
  //   pointerEvents: 'none' as 'none'
  // }

  // <svg viewBox={`0 0 ${ window.innerWidth } ${ window.innerHeight }`} style={ svgStyle }>
  //   <circle r={ 10 } ref={ circle } />
  // </svg>

  useEffect(() => {
    const meImg = new Image();
    meImg.src = me;
    getWork().forEach((work:any) => {
        const img = new Image();
        img.src = work.feature;
    });
  }, [])

  return (
    <>
      <AppWrap>
        <Router>
          <>
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
