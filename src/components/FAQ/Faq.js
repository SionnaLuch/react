import React from 'react';
import Container from '../Container/Container';
import { faqData } from '../../data/dataStore';
import Hero from '../Hero/Hero.js';

const Faq = () => (
  <Container>
    <Hero titleText={faqData.title} imageHero={faqData.image} />

    <p>{faqData.description}</p>
  </Container>
);

export default Faq;