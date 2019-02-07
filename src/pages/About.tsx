import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Page } from '../components';

export default (props:any) => (
  <Page>
    <Container fluid={ true }>
      <Row>
        <Col lg={ 3 } md={ 4 } sm={ 12 } xs={ 12 }>
          <Row justify='center'>
           <img src="https://cdn-images-1.medium.com/fit/c/150/150/1*qpYX-4I8X_4XTs5_tr7dJQ.jpeg" style={{ borderRadius: '50%' }} />
          </Row>
        </Col>
        <Col lg={ 9 } md={ 8 } sm={ 12 } xs={ 12 }>
          <Row>
            <Col>
              <h1>Hi, I'm Conor McGrath</h1>
              <h3>I'm a contract UI developer with a focus in React and React Native.</h3>
              <h4>My expertise is in web and mobile app development, UI / UX design, data visualisation, web animations, wireframing and prototyping.</h4>
            </Col>
          </Row>
          <Row>
            <Col lg={ 6 } md={ 12 } sm={ 12 } xs={ 12 }>
              <h3>Tech</h3>
              <p>
                React, React-Native, Typescript, Redux, Node.. There's definitly too many frameworks and tools to list here, but I've enjoyed building, refactoring, testing, integrating and maintaining apps from the ground up, solving problems in all aspects of planning and development.
              </p>
            </Col>
            <Col lg={ 6 } md={ 12 } sm={ 12 } xs={ 12 }>
              <h3>Design</h3>
              <p>
                I designed for print, web and UX for many years before becoming a developer. It's easy for developers to over compromise the design in favour of functionality, but my design experience won't allow me to be satisfied until the look and feel is polished and complete.
              </p>
            </Col>
            <Col lg={ 6 } md={ 12 } sm={ 12 } xs={ 12 }>
              <h3>UX</h3>
              <p>
                Engineering and sales are no longer the main concern for tech companies. Good design and user experience is crucial to conversions. My background in design & UX has helped me communicate ideas for user journeys and functionality throughout the UI.
              </p>
            </Col>
            <Col lg={ 6 } md={ 12 } sm={ 12 } xs={ 12 }>
              <h3>Architecture</h3>
              <p>
                Coming from vanilla javacript, jQuery and object oriented programming, to React, ES6 and functional programming, I've learned to understand the underlying principals of clean app architecture. The data model might be constructed or stored differently, and the view rendered differently, or actions and contollers might tigger state changes and events differently, but understanding these basic principles leads to good structure and maintainability of code.
              </p>
            </Col>
            <Col lg={ 6 } md={ 12 } sm={ 12 } xs={ 12 }>
              <h3>Clean Code</h3>
              <p>
                Over the years I've picked up some skills that I believe only experience can teach you. Extracting chunks of code into sperate classes or functions before the overall feature has matured, or imagining a project file/folder system prematurly can lead to spaghetti code and unhappy developers. Keeping code simple, easy to read, and written for the immediate use case, helps to keep refactors easy, and new features quick to deliver and keeps happy programmers.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </Page>
);