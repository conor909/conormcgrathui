import React from 'react';
import { IGridItem } from './index';
import Design from './Design';
import Code from './Code';

export default (props:{ item:IGridItem, onClose():void  }) => {

  switch(props.item.category) {
    case 'code':
      return <Code { ...props } />
    case 'design':
    case 'development':
      return <Design { ...props } />
    default:
      return <Design { ...props } />
  }
    
}