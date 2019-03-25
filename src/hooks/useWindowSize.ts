import { useState, useEffect } from 'react';
import Dimensions from 'react-dimensions';

export default Dimensions()(function useWindowSize(props:any) {
  
  const [ width, setWidth ] = useState<number>(window.innerWidth);
  const [ height, setHeight ] = useState<number>(window.innerHeight);
  
  function onResize() { setWidth(props.containerWidth); setHeight(props.containerHeight); }
    
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('resize', onResize) }
  }, []);

  return {
    width,
    height
  }

})