import React from 'react';
import { Row, Col } from 'react-awesome-styled-grid';
import { Page, TechLogosRow } from '../components';
import me from '../data/images/me.svg';

export default (props:any) => (
  <Page>
    <Row style={{ marginTop: '1rem' }}>
      <Col lg={ 2 } md={ 2 } sm={ 12 } xs={ 12 }>
        <img src={ me } style={{ alignSelf: 'start', width: '100%', maxWidth: '200px', opacity: .8 }} />
      </Col>
      <Col lg={ 10 } md={ 10 } sm={ 12 } xs={ 12 }>
        <h1 style={{ marginTop: 0 }}>Hello! I'm Conor</h1>
        <h3 style={{ marginTop: 0 }}>A contract user interface developer with a focus in React and React Native.</h3>
        <h4 style={{ marginTop: 0 }}>My expertise is in web and mobile app development, UI / UX design, data visualisation, web animations, wireframing and prototyping.</h4>
        <TechLogosRow />
      </Col>
    </Row>
    <Row style={{ marginTop: '1rem' }}>
      {
        blurbs.map(b => (<BlurbBox title={ b.title } blurb={ b.blurb } key={ Math.random() }/>))
      }
    </Row>
  </Page>
)

const BlurbBox = (props:{ title:string, blurb:string }) => (
  <Col lg={ 6 } md={ 12 } sm={ 12 } xs={ 12 }>
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', background: '#fff', padding: '1rem', marginBottom: '2em'}}>
      <h3 style={{ margin: 0 }}>
        { props.title }
      </h3>
      <p>
        { props.blurb }
      </p>
    </div>
  </Col>
)

const blurbs = [
  {
    title: 'Tech',
    blurb: "React, React-Native, Typescript, Redux, Node.. There's definitly too many frameworks and tools to list here, but I've enjoyed building, refactoring, testing, integrating and maintaining apps from the ground up, solving problems in all aspects of planning and development."
  },
  {
    title: 'Design',
    blurb: "I designed for print, web and UX for many years before becoming a developer. It's easy for developers to over compromise the design in favour of functionality, but my design experience won't allow me to be satisfied until the look and feel is polished and complete."
  },
  {
    title: 'UX',
    blurb: "Engineering and sales are no longer the main concern for tech companies. Good design and user experience is crucial to conversions. My background in design & UX has helped me communicate ideas for user journeys and functionality throughout the UI."
  },
  {
    title: 'Architecture',
    blurb: "Coming from vanilla javacript, old and modern frameworks. I've learned to understand basic principals of clean architecture. The data model might be constructed or stored differently, and the view rendered differently, or actions and contollers might tigger state changes and events differently, my expereince in different frameworks and understanding basic principles has taught me good structure and maintainability of code."
  },
  {
    title: 'Clean Code',
    blurb: "Over the years I've picked up some skills that I believe only experience can teach you. Extracting chunks of code into sperate classes or functions before the overall feature has matured, or imagining a project file/folder system prematurly can lead to spaghetti code and unhappy developers. Keeping code simple, easy to read, and written for the immediate use case, helps to keep refactors easy, and new features quick to deliver and keeps happy programmers."
  },
]