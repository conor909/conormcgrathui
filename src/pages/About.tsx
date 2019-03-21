import React from 'react';
import { Row, Col, ScreenClass } from 'react-awesome-styled-grid';
import { Page, TechLogosRow } from '../components';
import me from '../data/images/me.svg';



export default (props:any) => (
  <Page>
    <Row style={{ padding: '1rem', marginLeft: '-30px', marginRight: "-30px", background: '#efefef', border: '1px solid #e1e1e1', borderTop: 'none' }}>
      <Col lg={ 2 } md={ 2 } sm={ 12 } xs={ 12 }>
        <ScreenClass render={(screen:any) => {
            const style = (screen === 'sm' || screen === 'xs') ?  { marginLeft: '-15px', marginRight: '-15px', marginTop: '-15px', background: '#ffce00' } : {}
            return (
              <div style={ style }>
                <img src={ me } style={{ width: '100%', maxWidth: '200px', margin: '0 auto' }} />
              </div>
            )
          }} />
      </Col>
      <Col lg={ 10 } md={ 9 } sm={ 12 } xs={ 12 }>
        <h1 style={{ marginTop: 0, color: '#1d1d1d' }}>Dia dhuit, Hey, Hola, Olá, Dzień dobry, नमस्ते, مرحبا, 你好 </h1> 
        <h3 style={{ marginTop: 0 }}>I'm Conor, a JavaScript developer with a focus on high performance apps for fin tech and data analytics companies.</h3>
        <h4 style={{ marginTop: 0 }}>I have 10 years front end experience in web and mobile app development, UI / UX design, data visualisation, wireframes and prototypes.</h4>
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
    <Col lg={ 6 } md={ 12 } sm={ 12 } xs={ 12 }>
      <ScreenClass render={(screen:any) => (
        <h3 style={{ color: '#1d1d1d' }}>{ props.title }</h3>
      )} />
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
    blurb: "Developers have left companies, and startups have shut down because of the insurmountable technical debt that unclean code has brought them.  This may only raise it's ugly head 2 years into a project and by then it's too late. My expereince in every day small things like knowing when it's time to extract chunks of code, or managing file systems can help keep this to a minimum."
  },
]
