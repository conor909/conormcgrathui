import { useLayoutEffect } from 'react';

export default function useLockBodyScroll () {
  useLayoutEffect(() => {
    document.body.style.overflowY = 'hidden'; // on mount
    document.getElementById("grid-items").style.overflowY = "hidden"; // on mount
    return () => document.body.style.overflowY = 'scroll'; // Re-enable scrolling when component unmounts
   }, []); // Empty array ensures effect is only run on mount and unmount
}