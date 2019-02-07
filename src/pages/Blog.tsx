import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-grid-system';
import { Page } from '../components';

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
          : null
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
  
  return(
    <Container>
      <Row nogutter={ true }>
        <Col lg={ 3 } md={ 4 } sm={ 12 } xs={ 12 }>
          <Row nogutter={ true } justify='center'>
            <img src={ props.feed.image } style={{ borderRadius: '50%' }} />
          </Row>
          <Row nogutter={ true } justify='center'>
            <span style={{ fontSize: '0.8rem', textAlign: 'center', paddingTop: '1rem' }}>
              Conor McGrath <br />on <a href='https://medium.com/@conor909' target='_blank'>Medium</a>
            </span>
          </Row>
        </Col>
        <Col lg={ 9 } md={ 8 } sm={ 12 } xs={ 12 }>
          <Row nogutter={ true }>
              {
                !!props.articles &&
                  props.articles.map((article:any) => (
                    <article role="article" style={{ padding: '1rem 0 2rem', borderBottom: '1px solid #e5e4e5' }}>
                      <Row nogutter={ true }>
                        <Col lg={ 10 } md={ 11 } sm={ 11 } xs={ 10 }>
                          <h3>{ article.title }</h3>
                        </Col>
                        <Col lg={ 2 } md={ 1 } sm={ 1 } xs={ 2 }>
                          <time>{ new Date(article.pubDate).toLocaleDateString() }</time>
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
