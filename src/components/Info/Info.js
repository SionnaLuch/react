import React from 'react';
import Container from '../Container/Container';
import { infoData } from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero titleText={infoData.title} imageHero={infoData.image} />

    <p>{infoData.description}</p>
  </Container>
);

export default Info;