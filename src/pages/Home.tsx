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
      <svg version="1.1" x="0px" y="0px" viewBox={ `0 0 ${ window.innerWidth } ${ window.innerHeight }` } width={ window.innerWidth }>
        <g>
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
</g>
      </svg>
  )
}

//<svg version="1.1" x="0px" y="0px" width={ window.innerWidth } height={ window.innerHeight } viewBox={`0 0 ${ window.innerWidth } ${ window.innerHeight }`}>