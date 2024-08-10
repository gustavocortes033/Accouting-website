import React from 'react';
import { homeObjFive, homeObjFour, } from './Data';
import { InfoSection } from '../../components/indes';
import {Pricing} from '../../components/indes';

const Home = () => {
  return (
    <>
     
      <Pricing />
      <InfoSection  {...homeObjFour} />
      <InfoSection  {...homeObjFive} />
    </>
  )
}

export default Home;
