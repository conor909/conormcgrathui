import { useLayoutEffect } from 'react';

export default function useLockBodyScroll () {
  
  const page:any = document.getElementById('page');
  
  function lockPageAndBody() {
    document.body.style.overflowY = 'hidden';
    page.style.overflowY  = 'hidden';
  }

  function unLockPageAndBody() {
    document.body.style.overflowY = 'scroll';
    page.style.overflowY  = 'inherit';
  }

  useLayoutEffect(() => {
    lockPageAndBody()
    return () => unLockPageAndBody()
   }, []);

}