import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Hidden, Container, Row, Col } from 'react-grid-system';
import { Page } from '../components';
import loading from '../data/images/loading.svg';

export default () => {
  
  const [ mediumData, setMedium ] = useState<IMediumData | null>(null);
  
  //  siihee0otmc639idb8lzefltte4lkxqd5hljszzn
  
  useEffect(() => {
    const requestObject = {
      url: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@conor909&api_key=q1hi4ihgrufvqtyfbpsb2wjqfm0yr5vo5q64yqak'
    };
    axios(requestObject)
      .then((res) => {
        setMedium(res.data);
      });
    return () => setMedium(null);
  }, []);
  
  const articles = mediumData
    ? mediumData.items.filter((item:IArticle) => (item.categories.length > 0)).reverse()
    : [];
  
  return(
    <Page>
      {
        mediumData
          ? <BlogContent key={ Math.random() } articles={ articles } feed={ mediumData.feed }/>
          : <img src={ loading } />
      }
    </Page>
  )
}

interface IMediumData {
  items: Array<IArticle>;
  feed: object;
}

interface IArticle {
  title: string;
  content: string;
  categories: Array<string>;
}

const BlogContent = (props:{ articles:Array<IArticle> | null, feed:any }) => {

  const categoryArrays = props.articles &&
    props.articles.map((a:IArticle) => (a.categories.map(c => c)))
    .map((array:Array<string>) => array.map(i => i))
  // console.log(categoryArrays)
  
  return(
    <Container>
      <Row nogutter={ true }>
        <Hidden xs sm>
          <Col lg={ 3 } md={ 4 } sm={ 12 } xs={ 12 }>
            <Row nogutter={ true } justify='center'>
              <img src={ props.feed.image } style={{ borderRadius: '50%' }} />
            </Row>
            <Row nogutter={ true } justify='center'>
              <span style={{ fontSize: '0.8rem', textAlign: 'center', paddingTop: '1rem' }}>
                Conor McGrath <br />on <a href='https://medium.com/@conor909' target='_blank'>Medium</a>
              </span>
            </Row>
            {
              props.articles && props.articles.length > 0 &&
              <Row>
                <ul>
                  {/*
                    uniqueCategories.map(cat => (<li>{ cat }</li>))
                  */}
                </ul>
              </Row>
            }
          </Col>
        </Hidden>
        <Col lg={ 9 } md={ 8 } sm={ 12 } xs={ 12 }>
          <Row nogutter={ true }>
              {
                !!props.articles &&
                  props.articles.map((article:any) => (
                    <article role="article" style={{ margin: '0 0 2rem', borderBottom: '1px solid #afafaf' }} id={ article.title }>
                      <Row nogutter={ true }>
                        <Col>
                          <small style={{ color: '#727272', float: 'right' }}>
                          <time>{ new Date(article.pubDate).toLocaleDateString() }</time></small>
                          <h3 style={{ margin: 0 }}>{ article.title }</h3>
                        </Col>
                        <div key={ Math.random() } dangerouslySetInnerHTML={{ __html: article ? article.content : '' }} />
                      </Row>
                    </article>
                  ))
              }
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
