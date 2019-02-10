import React, { useState } from 'react';
import { Page, TechLogosRow } from '../components';
import getWork from '../data/work';

export default () => {
  const works = getWork().map(work => (work));
  const [ loadedImageCount, setLoadedImageCount ] = useState<number>(0);
  return(
    <Page>
      <TechLogosRow />

      <h1>{ loadedImageCount }</h1>
      {
        loadedImageCount === works.length &&
        <h1>All images loaded!</h1>
      }
      {
        works.map(work => (<img src={ work.feature } style={{ display: 'none' }} key={ work.id } onLoad={ () => setLoadedImageCount(loadedImageCount + 1) } />))
      }
    </Page>
  )
}