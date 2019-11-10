import React from 'react';
import { Row, Col, ScreenClass, ScreenBadge } from 'react-awesome-styled-grid';
import { Page, TechLogosRow } from '../components';
import me from '../data/images/me.svg';
import bknd from '../data/images/bknd.png';
import { clients } from './Clients';


export default (props: any) => (
  <Page>
    <Row
      style={{
        marginLeft: '-30px',
        marginRight: "-30px",
        border: '1px solid #e1e1e1',
        borderTop: 'none',
        color: '#1d1d1d',
        background: 'linear-gradient(to right, #fff, #f6f6f6)',
        //background: `url(${ bknd }), linear-gradient(to right, #fff, #f6f6f6)`,
        //backgroundPosition: 'right top',
        //backgroundRepeat: 'no-repeat'
      }}>
      <Col sm={1} xs={8}>
        <div style={{ display: 'flex', flexDirection: 'column', margin: 0, background: '#dee5e8', flex: 1, justifyContent: 'flex-end' }}>
          <img src={me} style={{ width: '100%', maxWidth: '200px', margin: '0 auto' }} />
        </div>
      </Col>
      <Col sm={7} xs={8}>
        <div>
          <h1 style={{ padding: '1rem', background: 'linear-gradient(to right, #f6f6f6, #fff)', marginBottom: 0, display: 'inline-block' }}>Dia dhuit, Hi, Hola, Olá, Bonjour, नमस्ते, مرحبا, 你好</h1>
          <br />
          <TechLogosRow />
          <h3 style={{ padding: '.5rem', paddingLeft: '1rem', background: 'linear-gradient(to right, #f6f6f6, #fff)', marginBottom: 0, display: 'inline-block' }}>
          I'm a contract full stack developer with a focus in React, Redux, React-Native, Node.js and GraphQL. Providing expertise in building apps for startups, global corporations and governments.
          </h3>
          <br />
          <h4 style={{ padding: '.5rem', paddingLeft: '1rem', background: 'linear-gradient(to right, #f6f6f6, #fff)', display: 'inline-block' }}>
            I have 10+ years experience in front end architecture, web and mobile app development, UI / UX design, data visualisations, continuous integration, testing, wireframes and prototypes.
          </h4>
        </div>
      </Col>
    </Row>
    {/* <Row style={{ marginTop: '2rem', display: 'flex', flex: 1, flexDirection: 'row', background: '#fff', borderBottom: '1px solid #e1e1e1', borderTop: '1px solid #e1e1e1', padding: '1rem', justifyContent: 'space-around' }}>
      {
        clients.map((c, i) => <img src={ c.logo } style={{ maxWidth: '100px' }}/>)
      }
    </Row> */}
    <Row style={{ paddingTop: '1rem' }}>
      {
        blurbs.map((b, index) => (
          <BlurbBox title={b.title} blurb={b.blurb} key={Math.random()} index={index} />
        ))
      }
    </Row>
  </Page>
)

const BlurbBox = (props: { title: string, blurb: string, index: number }) => {
  return (
    <Col sm={4} xs={8}>
      <h3 style={{ color: '#1d1d1d' }}>{props.title}</h3>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', background: '#fff', padding: '1rem', border: '1px solid #e1e1e1' }}>
        <p>
          {props.blurb}
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
