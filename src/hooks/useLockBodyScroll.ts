import { useLayoutEffect } from 'react';

export default function useLockBodyScroll () {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden'; // on mount
    return () => document.body.style.overflow = 'visible'; // Re-enable scrolling when component unmounts
   }, []); // Empty array ensures effect is only run on mount and unmount
}