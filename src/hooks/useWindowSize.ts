import { useState, useEffect } from 'react';

export default function useWindowSize() {
  
  const [ width, setWidth ] = useState(window.innerWidth);
  const [ height, setHeight ] = useState(window.innerWidth);
  
  useEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight)
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', () => updateSize);
  }, []);

  return {
    width,
    height
  }
}