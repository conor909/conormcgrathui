import React from 'react';
import { Row, Col, ScreenClass } from 'react-awesome-styled-grid';
import { Page, TechLogosRow } from '../components';
import me from '../data/images/me.svg';
import divider from '../data/images/divider.svg';

export default (props:any) => (
  <Page>
    <Row style={{ padding: '1rem', marginLeft: '-30px', marginRight: "-30px", background: '#333', color: '#fffd' }}>
      <Col lg={ 2 } md={ 2 } sm={ 12 } xs={ 12 }>
        <img src={ me } style={{ width: '100%', maxWidth: '200px', margin: '0 auto' }} />
      </Col>
      <Col lg={ 10 } md={ 10 } sm={ 12 } xs={ 12 }>
        <h1 style={{ marginTop: 0 }}>Hey! I'm Conor</h1>
        <h3 style={{ marginTop: 0 }}>A contract user interface developer with a focus in React and React Native.</h3>
        <h4 style={{ marginTop: 0 }}>My expertise is in web and mobile app development, UI / UX design, data visualisation, wireframes and prototypes.</h4>
        <TechLogosRow />
      </Col>
    </Row>
    <Row style={{ marginTop: '1rem' }}>
      {
        blurbs.map((b, index) => (
            <BlurbBox title={ b.title } blurb={ b.blurb } key={ Math.random() } index={ index } />
        ))
      }
    </Row>
  </Page>
)

const BlurbBox = (props:{ title:string, blurb:string, index:number }) => {
  return (
    <Col lg={ 6 } md={ 12 } sm={ 12 } xs={ 12 }>
      <ScreenClass render={(screen:any) => (
        <h3>{ props.title }</h3>
      )} />
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', background: '#fff', padding: '1rem', border: '1px solid #1b000e' }}>
        <p>
          { props.blurb }
        </p>
      </div>
    </Col>
  )
}

const blurbs = [
  {
    title: 'Tech',
    blurb: "React, React-Native, Typescript, Redux, Node.. There's too many frameworks and tools to mention here, but I've enjoyed building, refactoring, testing, integrating and maintaining apps from the ground up, solving problems in all aspects of planning and development."
  },
  {
    title: 'Design',
    blurb: "I designed graphics for print, websites and games before becoming a UI developer, and understanding design processes really helps me in the planning stages of building UIs."
  },
  {
    title: 'UX',
    blurb: "Engineering and sales are no longer the main concern for tech companies, a good user experience is crucial to conversions. My experience in design and development helps me communicate ideas for great user journeys and complex UI components."
  },
  {
    title: 'Architecture',
    blurb: "My background in vanilla javacript, object oriented & functional frameworks has given me solid principals of clean architecture. I favour simplicity, and readability over syntax or frameworks, which leads to quick turnarounds of new features or refactors."
  },
  {
    title: 'Clean Code',
    blurb: "Over the years I've picked up some skills that I believe only experience can teach you. Day to day things like knowing when it's time to extract chunks of code, or experiences with managing file systems can avoid spaghetti code, unhappy developers and keep project managers happy."
  },
]
