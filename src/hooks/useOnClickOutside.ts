import { useEffect } from 'react';

export default function useOnClickOutside(ref:{ current:any }, handler: (event:any) => void) {
  useEffect(() => {
    const listener = (event:any) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
}