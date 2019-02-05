import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { Container, Row, Col } from 'react-grid-system';
import GridItem, { IGridItem } from './GridItem';
import GridItemDisplay from './GridItemDisplay';
import getWork from '../../data/work';

export default withRouter((props:any) => {
    
  const [ selectedItem, setItem ] = useState<IGridItem | null>(null);
  
  useEffect(() => { setItem(null) }, [ props.category ]);

  return (
    <>
      <Container fluid style={ styles.container }>
        <Col>
          <Row>
            {
              getWork()
                .filter(item => (props.category === 'all' || item.categories.some(cat => cat === props.category)))
                .map((item:IGridItem) => {
                  return (
                    <Col
                      key={ Math.random() }
                      lg={ 4 } md={ 6 } sm={ 12 } xs={ 12 }
                      onClick={ () => props.history.push(`/work/${ props.category }` )}>
                        <GridItem
                          item={ item }
                          onClickedItem={ () => setItem(item) } />
                    </Col>
                  )
                })
            }
          </Row>
        </Col>
      </Container>
      {
        selectedItem &&
          <GridItemDisplay
            onClose={ () => setItem(null) }
            item={ selectedItem } />
      }
    </>
  )
})

const styles = {
  container: {
    width: '100%',
    padding: 0,
    margin: 0
  }
}