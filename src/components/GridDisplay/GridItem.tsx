import React from 'react';
import { LoadingImage } from '../../components';

export default class extends React.Component<IProps, any> {
  
  state = {
    imageStatus: 'loading'
  }
  
  handleImageLoaded = () => {
    this.setState({ imageStatus: "loaded" });
  }

  handleImageErrored = () => {
    this.setState({ imageStatus: "failed to load" });
  }
  
  render() {
    const { imageStatus } = this.state;
    return (
      <section onClick={ () => this.props.onClickedItem(this.props.item) }>
        <img
          src={ this.props.item.feature }
          onLoad={ this.handleImageLoaded }
          onError={ this.handleImageErrored }
          style={{
            width: '100%',
            height: 'auto',
            display: imageStatus === 'loading' ? 'none' : 'block',
            padding: '3rem'
          }} />
        {
          imageStatus === 'loading' && 
            <LoadingImage />
        }
      </section>
    )
  }
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
  onClickedItem(item:IGridItem):void;
  item:IGridItem;
}