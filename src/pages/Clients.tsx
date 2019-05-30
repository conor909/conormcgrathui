import React, { useEffect, useRef } from 'react';
import { Row, Col } from 'react-awesome-styled-grid';
import { Page } from '../components';
import baeLogo from '../data/clients/bae/logo.svg';
import { TimelineLite } from "gsap";

const clients = [
    {
        name: 'BAE Systems Applied Intelligence',
        desc: ['A world leader in cyber security and crime prevention. In their Applied Intelligence Labs in Dublin I led the front end development of a POC, involving the re-development of their crime prevention software used by top tier banks in 50 countries worldwide.  I helped shape the API services to be consumed by the client, and wrote a scalable, highly configurable front end in React & Redux.  The UI gives access to millions of rows of data at peak performance and includes data visualisations with Highcharts, Vis.js, D3.js / DC.js, accessiblity standards and internationalisation including right to left language orientations.'],
        logo: baeLogo,
        timeframe: '3 month contract',
        url: 'https://www.baesystems.com/en/cybersecurity/about-us/ai-labs',
        references: [
            {
                quote: 'I would highly recommend Conor for any UI development role, particularly one that involves React/Redux. He is very technically skilled and highly motivated. This strong work ethic coupled with his skills as an Engineer leads to him delivering a large quantity of UI design and functionality based on the business requirements. We have all been very impressed with him during his time at BAE Systems.',
                person: 'Andrew Redmond, Architect'
            }
        ]
    }
];

export default (props:any) => {

  return(
    <Page style={{ width: '100%' }}>
        {
            clients.map(client => (
                <Client title={ client.name } desc={ client.desc } dates={[ new Date(), new Date() ]} timeframe={ client.timeframe } logo={ client.logo } references={ client.references } />
            ))
        }
    </Page>
  )
}

const Client = (props:any) => {

    const logo = useRef<any>(null);
    const title = useRef<any>(null);
    const timeframe = useRef<any>(null);
    const desc = useRef<any>(null);
    const link = useRef<any>(null);

    useEffect(() => {
        new TimelineLite()
            .fromTo(logo.current, .5, { x: -50, opacity: 0 }, { x: 0, opacity: 1 }, 0)
            .fromTo(link.current, .5, { x: -50, opacity: 0 }, { x: 0, opacity: 1 }, .5)
            .fromTo(title.current, .5, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, .0)
            .fromTo(timeframe.current, .5, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, .3)
            .fromTo(desc.current, .5, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, .5)
      }, [ ]);

    return (
        <Row style={{ padding: '1rem 0px' }}>
            <Col md={ 2 } sm={ 4 } xs={ 8 }>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <img ref={ logo } src={ props.logo }  style={{ marginBottom: '1rem', width: '50%', opacity: 0 }}/>
                    <div>
                        <a ref={ link } style={{ opacity: 0  }} href='https://www.baesystems.com/en/cybersecurity/about-us/ai-labs' target='_BLANK'>
                            www.baesystems.com
                        </a>
                    </div>
                </div>
            </Col>
            <Col md={ 4 } sm={ 4 } xs={ 8 }>
                <h1 ref={ title } style={{ opacity: 0  }}>{ props.title }</h1>
                <small ref={ timeframe } style={{ opacity: 0  }}>{ props.timeframe }</small>
                <div ref={ desc } style={{ opacity: 0  }}>
                    { props.desc.map((p:string) => <p style={{ paddingBottom: '1rem', borderBottom: '1px solid #e1e1e1' }}>{ p }</p>) }
                    {
                        props.references.map((reference:any) => {
                            return(
                                <>
                                    <p style={{ fontStyle: 'italic' }}>{ reference.quote }</p>
                                    <p style={{ fontStyle: 'italic', textAlign: 'right' }}>{ reference.person }</p>
                                </>
                            )
                        })
                    }
                </div>
            </Col>
        </Row>
)}