import React from 'react';
import Container from '../Container/Container';
import { faqData } from '../../data/dataStore';
import Hero from '../Hero/Hero.js';

const Faq = () => (
  <Container>
    <Hero titleText={faqData.navTitle} image={faqData.image} />

    <p>{faqData.content}</p>
  </Container>
);

export default Faq;