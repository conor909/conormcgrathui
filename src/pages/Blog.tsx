import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-awesome-styled-grid';
import { Page } from '../components';
import { TimelineLite } from 'gsap';

export default () => {
  const [ hasGotData, setHasGotData ] = useState<boolean>(false);
  const [ articles, setArticles ] = useState<any>([]);
  const [ categories, setCategories ] = useState<any>([]);
  const [ feed, setFeed ] = useState<any>(null);
  
  useEffect(() => {
    getArticles();
    return () => { setFeed(null) };
  }, []);

  function getArticles() {
    const requestObject = {
      url: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@conor909&api_key=q1hi4ihgrufvqtyfbpsb2wjqfm0yr5vo5q64yqak'
    };
    axios(requestObject)
      .then((res) => {
        const articles = res.data.items.filter((item:IArticle) => (item.categories.length > 0)).reverse();
        const categories = new Set(articles
          .map((a:IArticle) => (a.categories.map(c => c)))
          .map((array:Array<string>) => array.map(i => i))
          .flat());
        setFeed(res.data.feed);
        setArticles(articles);
        setCategories(categories);
        setHasGotData(true);
      });
  }
  
  return(
    <Page>
      {
        hasGotData
          ? <Blog key={ Math.random() } articles={ articles } feed={ feed } categories={ categories } />
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

const Blog = (props:{ articles:Array<IArticle>, feed:any, categories:any }) => {

  useEffect(() => {
    new TimelineLite().fromTo(blog.current, 1, { opacity: 0 }, { opacity: 1 }, 0)
  }, []);
  
  const blog = useRef<any>(null);
  const categoriesArray:Array<string> = [];
  props.categories.forEach((c:string) => categoriesArray.push(c));

  return(
    <Row style={{ marginTop: '1rem', opacity: 0 }} ref={ blog }>
      <Col>
        {
          !!props.articles &&
            props.articles.map((article:any) => (
              <article key={ Math.random() } role="article" style={{ margin: '0 0 2rem', borderBottom: '1px solid #afafaf' }} id={ article.title }>
                <Row>
                  <Col>
                    <small style={{ color: '#727272', textAlign: 'right' }}>
                      <time>{ new Date(article.pubDate).toLocaleDateString() }</time>
                    </small>
                    <h3 style={{ marginTop: 0 }}>{ article.title }</h3>
                    <div key={ Math.random() } dangerouslySetInnerHTML={{ __html: article ? article.content : '' }} />
                  </Col>
                </Row>
              </article>
            ))
        }
      </Col>
    </Row>
  )
}
