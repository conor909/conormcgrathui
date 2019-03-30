import React, { useEffect, useRef } from 'react';
import { Row, Col } from 'react-awesome-styled-grid';
import { Page } from '../components';
import baeLogo from '../data/clients/bae/logo.svg';
import { TimelineLite } from "gsap";

const clients = [
    {
        name: 'BAE Systems Applied Intelligence',
        desc: ['A world leader in cyber security and crime prevention. In their Applied Intelligence Labs in Dublin I led the front end development of a POC revamp of their software used by top tier financial institutions worldwide.', 'The UI focuses on making millions of rows of data accessible at peak performance.'],
        logo: baeLogo,
        timeframe: '3 month contract',
        url: 'https://www.baesystems.com/en/cybersecurity/about-us/ai-labs'
    }
];

export default (props:any) => {

  return(
    <Page style={{ width: '100%' }}>
        {
            clients.map(client => (
                <Client title={ client.name } desc={ client.desc } dates={[ new Date(), new Date() ]} timeframe={ client.timeframe } logo={ client.logo } />
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
        <Row style={{ borderBottom: '1px solid #e1e1e1', padding: '1rem 0px' }}>
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
                    { props.desc.map((p:string) => <p>{ p }</p>) }
                </div>
            </Col>
        </Row>
)}