import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Page, TechLogosRow } from '../components';

export default (props:any) => (
  <Page>
    <Container>
      <Row nogutter={ true }>
        <Col lg={ 3 } md={ 4 } sm={ 12 } xs={ 12 }>
          <Row justify='center' nogutter={ true }>
            <img src="https://cdn-images-1.medium.com/fit/c/150/150/1*qpYX-4I8X_4XTs5_tr7dJQ.jpeg" style={{ borderRadius: '50%' }} />
          </Row>
          <Row justify='center' nogutter={ true }>
            <p style={{ fontSize: '0.8rem', textAlign: 'center', paddingTop: '1rem' }}>
              <a href='http://www.github.com/conor909' target='_blank'>github.com/conor909</a>
            </p>
          </Row>
        </Col>
        <Col lg={ 9 } md={ 8 } sm={ 12 } xs={ 12 }>
          <Row justify='center' nogutter={ true }>
            <Col>
              <h1>Hi, I'm Conor McGrath</h1>
              <h3>I'm a contract UI developer with a focus in React and React Native.</h3>
              <h4>My expertise is in web and mobile app development, UI / UX design, data visualisation, web animations, wireframing and prototyping.</h4>
            </Col>
          </Row>
          <TechLogosRow />
          <Row>
            {
              blurbs.map(b => (<BlurbBox title={ b.title } blurb={ b.blurb } color={ b.color } />))
            }
          </Row>
        </Col>
      </Row>
    </Container>
  </Page>
)

const BlurbBox = (props:{ title:string, blurb:string, color:string }) => (
  <Col lg={ 6 } md={ 12 } sm={ 12 } xs={ 12 } style={{ borderBottom: '1px solid #e5e4e5' }}>
    <h3 style={{ color: props.color }}>{ props.title }</h3>
    <p>
      { props.blurb }
    </p>
  </Col>
)

const blurbs = [
  {
    color: '#8153c3',
    title: 'Tech',
    blurb: "React, React-Native, Typescript, Redux, Node.. There's definitly too many frameworks and tools to list here, but I've enjoyed building, refactoring, testing, integrating and maintaining apps from the ground up, solving problems in all aspects of planning and development."
  },
  {
    color: '#ff8600',
    title: 'Design',
    blurb: "I designed for print, web and UX for many years before becoming a developer. It's easy for developers to over compromise the design in favour of functionality, but my design experience won't allow me to be satisfied until the look and feel is polished and complete."
  },
  {
    color: '#03cfff',
    title: 'UX',
    blurb: "Engineering and sales are no longer the main concern for tech companies. Good design and user experience is crucial to conversions. My background in design & UX has helped me communicate ideas for user journeys and functionality throughout the UI."
  },
  {
    color: '#0385d2',
    title: 'Architecture',
    blurb: "Coming from vanilla javacript, and different frameworks from jQuery, backbone, react and redux. I've learned to understand basic principals of clean architecture. The data model might be constructed or stored differently, and the view rendered differently, or actions and contollers might tigger state changes and events differently, my expereince in different frameworks and understanding basic principles has taught me good structure and maintainability of code."
  },
  {
    color: '#6cdffc',
    title: 'Clean Code',
    blurb: "Over the years I've picked up some skills that I believe only experience can teach you. Extracting chunks of code into sperate classes or functions before the overall feature has matured, or imagining a project file/folder system prematurly can lead to spaghetti code and unhappy developers. Keeping code simple, easy to read, and written for the immediate use case, helps to keep refactors easy, and new features quick to deliver and keeps happy programmers."
  },
]