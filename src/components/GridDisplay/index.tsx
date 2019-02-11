import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router';
import { TweenLite } from "gsap";
import { Container, Row, Col } from 'react-grid-system';
import Display from './Display';
import getWork from '../../data/work';

export default withRouter((props:any) => {
    
  const [ loadedImageCount, setLoadedImageCount ] = useState<number>(0);
  const [ selectedItem, setSelectedItem ] = useState<IGridItem | null>(null);
  const [ items, setItems ] = useState<Array<IGridItem>>(getItems());

  useEffect(() => {
    setLoadedImageCount(0);
    setSelectedItem(null);
    setItems(getItems());
  }, [ props.category ]);

  function getItems() {
    return getWork().filter(item => (props.category === 'all' || item.categories.some(cat => cat === props.category)));
  }

  function handleSelectedItem(item:IGridItem) {
    setSelectedItem(item);
    props.history.push(`/work/${ props.category }/${ item.niceName}`);
  }

  function onClickBack() {
    setSelectedItem(null);
    props.history.goBack();
  }

  return (
    <>
      <div style={{ display: 'none' }} >
        {
          loadedImageCount !== items.length && items.map((work:IGridItem) => (
            <img src={ work.feature } key={ Math.random() } onLoad={ () => setLoadedImageCount(loadedImageCount + 1) } />
          ))
        }
      </div>
      <Container fluid style={{ width: '100%', padding: 0, margin: 0 }}>
        <Col>
          <Row>
            {
              loadedImageCount === items.length
                ? items.map((item:IGridItem, i:number) => <GridItem item={ item } onSelectedItem={ handleSelectedItem } index={ i } location={ props.history.location.pathname } />)
                : null
            }
          </Row>
        </Col>
      </Container>
      {
        selectedItem &&
          <Display
            onClose={ onClickBack }
            item={ selectedItem } />
      }
    </>
  )
});

const GridItem = React.memo(
  function (props:{ item:IGridItem, onSelectedItem:(item:IGridItem)=>void, index:number, location:string }) {
    const itemRef = useRef(null);
    
    useEffect(() => {
      console.log(props.location)
      TweenLite.to(itemRef.current, .5, { opacity: 1, paddingBottom: 0 }).delay( props.index / 10 );
    }, [ props.location ]);
    
    return(
      <Col
        key={ Math.random() }
        lg={ 4 } md={ 6 } sm={ 12 } xs={ 12 }>
          <section ref={ itemRef } onClick={ () => props.onSelectedItem(props.item) } style={{ opacity: 0 }}>
            <img
              src={ props.item.feature }
              style={{
                width: '100%',
                height: 'auto',
                padding: '2rem'
              }} />
          </section>
      </Col>
    )
  }
)

export interface IGridItem {
  id: number,
  ref: string;
  niceName: string;
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