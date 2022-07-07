import React from 'react';
import Main from '../../layouts/main';
import Section from 'components/organisms/Section';
import Hero from './components/Hero';

const HomeView = (): JSX.Element => {
  return (
    <Main>
      <Section>
        <Hero />
      </Section>
      <Section variant="narrow">
        <Hero />
      </Section>
    </Main>
  );
};

export default HomeView;
