import * as React from 'react';

export default function useNavbarState(useState:any):INavbarState {
  
  const [ navBarHeight, setNavBarHeight ] = useState(50);
  
  function adjustNavbarHeight() {
    setNavBarHeight(50);
  };
  
  return {
    adjustNavbarHeight,
    navBarHeight
  };

};

export interface INavbarState {
  adjustNavbarHeight():void;
  navBarHeight: number
};