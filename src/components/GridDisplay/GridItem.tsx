import React from 'react';

export default (props:IProps) => {
  return(
    <section onClick={ () => props.onSelectItem(props.item) }>
      <img
        src={ props.item.feature }
        style={{
          width: '100%',
          height: 'auto',
          padding: '2rem'
        }} />
    </section>
  )
}

export interface IGridItem {
  id: number,
  ref: string;
  route: string;
  title: string;
  client: string | null;
  skills: Array<string>;
  desc: Array<string>;
  color: string;
  fontColor: string;
  feature: string;
  images: Array<string>;
  url: null | string;
  categories: Array<string>;
}

interface IProps {
  onSelectItem:(item:IGridItem)=>void;
  item:IGridItem;
}