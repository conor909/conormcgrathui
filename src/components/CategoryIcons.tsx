import React from 'react';
import jsLogo from '../data/images/tech-logos/js.svg';
import reactLogo from '../data/images/tech-logos/react.svg';
import reduxLogo from '../data/images/tech-logos/redux.svg';
import nodeLogo from '../data/images/tech-logos/node.svg';
import aiLogo from '../data/images/tech-logos/ai.svg';
import psLogo from '../data/images/tech-logos/ps.svg';
import tsLogo from '../data/images/tech-logos/ts.svg';

export default function CategoryIcons(props:{ tools:Array<string> }) {
  return props.tools.map((tool:string) => {
    switch(tool) {
      case 'design':
        return [<img src={ aiLogo } />, <img src={ psLogo } />]
      case 'development':
        return [<img src={ jsLogo } />, <img src={ reactLogo } />, <img src={ reduxLogo } />, <img src={ nodeLogo } />, <img src={ tsLogo } />]
      case 'development':
        return [<img src={ jsLogo } />, <img src={ reactLogo } />, <img src={ reduxLogo } />, <img src={ nodeLogo } />, <img src={ tsLogo } />]
      default:
        return null;
    }
  })
}