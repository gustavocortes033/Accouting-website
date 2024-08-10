import React from 'react';
import { homeObjFive } from './Data';
import { InfoSection } from '../../components/indes';
import {Pricing} from '../../components/indes';

const Home = () => {
  return (
    <>
   
      <InfoSection  {...homeObjFive} />
    </>
  )
}

export default Home;
