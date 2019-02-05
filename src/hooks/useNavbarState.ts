import { useState, useEffect } from 'react';

export default function useNavbarState():INavbarState {
  
  const [ isOpenSubMenu, setToggleSubMenu ] = useState(false);
  const [ navBarHeight, setNavBarHeight ] = useState(50);
  
  function toggleSubMenu() {
    setToggleSubMenu(!!isOpenSubMenu);
    if (isOpenSubMenu) {
      setNavBarHeight(100);
    } else {
      setNavBarHeight(50);
    }
  }
  
  return {
    toggleSubMenu,
    navBarHeight
  };

};

export interface INavbarState {
  toggleSubMenu():void;
  navBarHeight: number
};