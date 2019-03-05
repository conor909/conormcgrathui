import React, { useEffect, useRef } from 'react';
import { TimelineMax, Power4 } from 'gsap';
import '../gsap/DrawSVGPlugin';
import { Page } from '../components';

export default (props:any) => {

  const outterScreenRef = useRef(null);
  const innerScreenRef = useRef(null);
  const circleScreenRef = useRef(null);
  //const width = window.innerWidth;
  //const height = window.innerHeight - 55;

  useEffect(() => {
    ScreenScene(outterScreenRef, innerScreenRef);
    //OrbsScene(circleScreenRef);
  }, []);

  function ScreenScene(outterScreenRef:any, innerScreenRef:any) {
    const tl = new TimelineMax();
    tl
      .fromTo(outterScreenRef.current, 3, { drawSVG: '0%' }, { drawSVG: '100% 0%', ease: Power4.easeOut }, 0)
      .fromTo(innerScreenRef.current, 4, { drawSVG: '0%' }, { drawSVG: '100% 0%', ease: Power4.easeOut }, 0.5)
    return tl;
  }

  // function OrbsScene(circleScreenRef:any) {
  //   const tl = new TimelineMax();
  //   tl
  //     .fromTo(circleScreenRef.current, 1, { opacity: 0, y: 20 }, { opacity: 1, y: 0, ease: Power4.easeOut }, 2)
  //   return tl;
  // }

  return(
    <Page>
      <div className="svg-container">
        <svg viewBox="0 0 60 100"> 
            <path fill="#ABABAB" d="M59.717,50.177c0-13.252-3.631-25.945-10.495-36.82l2.998-1.873L39.891,0.667l4.318,15.823l3.1-1.937 c6.64,10.515,10.152,22.797,10.152,35.624c0,12.927-3.56,25.284-10.294,35.848l-2.959-1.849L39.891,100L52.22,89.183l-3.14-1.962 C56.037,76.298,59.717,63.529,59.717,50.177z"/> 
        </svg>    
      </div>
      <svg version="1.1" x="0px" y="0px" viewBox={`0 0 1000 1000`}>
        
        <path
          ref={ outterScreenRef }
          fill='transparent'
          stroke='grey'
          strokeWidth={ 3 }
          strokeMiterlimit={ 3 }
          d="M842,533c0,0-8,64,29,94c0,0,29,19,0,19s-184,0-184,0s-72,3-60-10s35-18,39-103H360c0,0-31.5,5-31.5-31.5
          s0-451.5,0-451.5s-4-35.25,35.25-35.25s784.25,0,784.25,0s33.62-0.38,33.62,40.25s0,453,0,453s0.38,24-25.62,24s-490,0.75-490,0.75" />
        
        <polyline
          ref={ innerScreenRef }
          fill='transparent'
          stroke='grey'
          strokeWidth={ 1 }
          strokeMiterlimit={ 10 }
          points="363,52 363,494 1145,494 1145,52 363,52" />

        <rect
          fill='transparent'
          stroke='none'
          strokeMiterlimit={ 10 } />
        
        <circle
          ref={ circleScreenRef }
          style={{ cursor: 'pointer' }}
          fill='#F7C90B'
          cx="739"
          cy="289"
          r="98"
          onClick={ () => props.history.push('/work/all') } />

      </svg>
      
    </Page>
  )
}

//<svg version="1.1" x="0px" y="0px" width={ window.innerWidth } height={ window.innerHeight } viewBox={`0 0 ${ window.innerWidth } ${ window.innerHeight }`}>