import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { StaggeredMotion, spring } from 'react-motion';
import { Container, Row, Col } from 'react-grid-system';
import GridItem, { IGridItem } from './GridItem';
import GridItemDisplay from './GridItemDisplay';
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
    props.history.push(`/work/${ props.category }`);
    setSelectedItem(item);
  }

  return (
    <>
      {
        loadedImageCount !== items.length && items.map((work:IGridItem) => (
          <img src={ work.feature } style={{ display: 'none' }} key={ Math.random() } onLoad={ () => setLoadedImageCount(loadedImageCount + 1) } />
        ))
      }
      <Container fluid style={{ width: '100%', padding: 0, margin: 0 }}>
        <Col>
          <Row>
          {
            loadedImageCount === items.length
              ? <AnimatedGrid items={ items } onSelectedItem={ handleSelectedItem } />
              : null
          }
          </Row>
        </Col>
      </Container>
      {
        selectedItem &&
          <GridItemDisplay
            onClose={ () => setSelectedItem(null) }
            item={ selectedItem } />
      }
    </>
  )
});

const AnimatedGrid = (props:{ items:Array<IGridItem>, onSelectedItem:(item:IGridItem)=>void }) => (
  <StaggeredMotion
    defaultStyles={ props.items.map((w:any) => ( { opacity: 0 } )) }
    styles={(prevInterpolatedStyles:any) => prevInterpolatedStyles.map((_:any, i:number) => {
      return i === 0
        ? { opacity: spring(1) }
        : { opacity: spring(prevInterpolatedStyles[i - 1].opacity) }
    })}>
    {
      (interpolatingStyles:any) =>
        <>
          {
            interpolatingStyles.map((style:{opacity:number}, i:number) =>
              <Col
                style={{ opacity: style.opacity }}
                key={ Math.random() }
                lg={ 4 } md={ 6 } sm={ 12 } xs={ 12 }>
                  <GridItem
                    item={ props.items[i] }
                    onSelectItem={ () => props.onSelectedItem(props.items[i]) } />
              </Col>
            )
          }
        </>
    }
  </StaggeredMotion>
)