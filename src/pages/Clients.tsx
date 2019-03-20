import React from 'react';
import { Row, Col } from 'react-awesome-styled-grid';
import { Page } from '../components';
import baeLogo from '../data/clients/bae/logo.svg';

const clients = [
    {
        name: 'BAE Systems Applied Inteligence',
        desc: ['Europes largest cyber security software providers.  Based in Dublin, in their Applied Inteligence Labs I lead the UI development of a POC re-development of their financial crime software used by top tier banks, insurance and trading companies worldwide.', 'The UI focused on rendering thousands of rows of data at peak performance.'],
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

const Client = (props:any) => (
    <Row style={{ borderBottom: '1px solid #e1e1e1', padding: '1rem 0px' }}>
        <Col lg={ 12  } md={ 6 } sm={ 12 } xs={ 12 }>
            <img src={ props.logo } width='200px' />
            <h1>{ props.title }</h1>
            <small>{ props.timeframe }</small>
            { props.desc.map((p:string) => <p>{ p }</p>) }
            <a href='https://www.baesystems.com/en/cybersecurity/about-us/ai-labs'>www.baesystems.com</a>
        </Col>
    </Row>
)