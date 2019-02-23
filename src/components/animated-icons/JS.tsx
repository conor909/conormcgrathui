import React, { useEffect, useRef } from 'react';
import { TimelineMax, Power4 } from 'gsap';
import '../gsap/DrawSVGPlugin';

export default function () {

  const square = useRef(null);

  useEffect(() => {
    OutterScene(square);
  }, [ ]);

  function OutterScene(square:any) {
    const tl = new TimelineMax();
    tl
      .fromTo(square.current, 3, { drawSVG: '0%' }, { drawSVG: '100%', ease: Power4.easeOut }, 0)
    return tl;
  }

  return(
    <svg version="1.1" x="0px" y="0px" viewBox={`0 0 ${ 100 } ${ 100 }`}>

    </svg>
  )

}