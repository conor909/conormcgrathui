import React from 'react';
import { withRouter } from 'react-router';
import { Container, Row, Col } from 'react-grid-system';
import GridItem, { IGridItem } from './GridItem';
import GridItemDisplay from './GridItemDisplay';
import getWork from '../../data/work'

export default withRouter(
  class GridDisplay extends React.Component <any, any> {
    
    state = {
      displayItem: null
    }
    
    handleClickedItem = (item:IGridItem) => {
      this.setState({ displayItem: item });
    }
    
    render() {
      const { displayItem } = this.state;
      return (
        <React.Fragment>
        <Container fluid style={{ width: '100%', padding: 0, margin: 0, overflow: displayItem ? 'no-scroll' : 'auto' }}>
          <Row>
            <Col>
              <Row nogutter>
                {
                  getWork().map((item) => {
                    return (
                      <Col
                        key={ item.id }
                        md={ 4 }
                        onClick={ () => this.props.history.push('/work/' )}>
                          <GridItem
                            item={ item }
                            onClickedItem={ this.handleClickedItem } />
                      </Col>
                    )
                  })
                }
              </Row>
              </Col>
          </Row>
        </Container>
        {
          this.state.displayItem &&
            <GridItemDisplay
              onClose={ () => this.setState({ displayItem: null }) }
              item={ this.state.displayItem } />
        }
        </React.Fragment>
      )
    }
  }
);