import React from 'react';
import { homeObjFive, homeObjFour,  homeObjThree, homeObjTwo } from './Data';
import { InfoSection } from '../../components/indes';
import {Pricing} from '../../components/indes';

const Home = () => {
  return (
    <>
      
      <InfoSection  {...homeObjTwo} />
      <InfoSection  {...homeObjThree} />
      <Pricing />
      <InfoSection  {...homeObjFour} />
      <InfoSection  {...homeObjFive} />
    </>
  )
}

export default Home;
