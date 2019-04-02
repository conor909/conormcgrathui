import React from 'react';
import { Row, Col, ScreenClass, ScreenBadge } from 'react-awesome-styled-grid';
import { Page, TechLogosRow } from '../components';
import me from '../data/images/me.svg';



export default (props:any) => (
  <Page>
    <Row
      style={{
        marginLeft: '-30px',
        marginRight: "-30px",
        border: '1px solid #e1e1e1',
        borderTop: 'none',
        color: '#fff',
        background: 'linear-gradient(to right, #000428, #004e92)'
      }}>
      <Col sm={ 1 } xs={ 8 }>
          <div style={{ display: 'flex', flexDirection: 'column', margin: 0, background: '#fcd100', flex:1, justifyContent: 'flex-end' }}>
            <img src={ me } style={{ width: '100%', maxWidth: '200px', margin: '0 auto' }} />
          </div>
      </Col>
      <Col sm={ 7 } xs={ 8 }>
            <h1 style={{ padding: '1rem', background: '#033771', marginBottom: 0 }}>Dia dhuit, Hi, Hola, Olá, Bonjour, नमस्ते, مرحبا, 你好</h1> 
            <h3 style={{ padding: '.5rem', paddingLeft: '1rem', background: '#033d79', marginBottom: 0 }}>I'm Conor, a contract JavaScript developer with a focus on high performance apps for startups, fintech and data analytics companies.</h3>
            <h4 style={{ padding: '.5rem', paddingLeft: '1rem', background: '#033d79' }}>I have 10 years experience in web and mobile app development, UI / UX design, data visualisation, wireframes and prototypes.</h4>
            <TechLogosRow />
      </Col>
    </Row>
    <Row style={{ paddingTop: '1rem' }}>
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
    <Col sm={ 4 } xs={ 8 }>
      <h3 style={{ color: '#1d1d1d' }}>{ props.title }</h3>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', background: '#fff', padding: '1rem', border: '1px solid #e1e1e1' }}>
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
    blurb: "React, React-Native, Typescript, Redux, Node.. There's too many frameworks and tools to mention here, but I've enjoyed building, refactoring, testing, integrating and maintaining apps from the ground up, solving problems from all aspects of planning and development."
  },
  {
    title: 'Design',
    blurb: "I was an illustrator and graphic designer for print, websites and game UIs before becoming a developer.  My experience with design processes really helps me in design and planning stages of building apps."
  },
  {
    title: 'UX',
    blurb: "Engineering and sales are no longer the main concern for tech companies, a good user experience is crucial to conversions. My experience in design and development helps me communicate my ideas for great user journeys and complex UI components."
  },
  {
    title: 'Architecture',
    blurb: "My background in vanilla javacript, object oriented & functional frameworks has given me solid principals of clean architecture. So rather then being too reliant on frameworks, I favour simplicity and readability, which leads to quick turnarounds of new features."
  },
  {
    title: 'Clean Code',
    blurb: "Developers have left companies and startups have shut down because of the insurmountable technical debt that unclean code has brought them.  This may only raise it's ugly head years into a project and by then it's too late. My experience in every day things like knowing when it's time to extract chunks of code, or managing classes and folder structures can help keep this to a minimum."
  },
]
