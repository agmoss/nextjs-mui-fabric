import React from 'react';
import Main from '../../layouts/main';
import Section from 'components/organisms/Section';
import Hero from './components/Hero';

const HomeView = (): JSX.Element => {
  return (
    <Main>
      <Section>
        <Hero variant="primary" />
      </Section>
      <Section>
        <Hero variant="secondary" />
      </Section>
      <Section>
        <Hero variant="primary" />
      </Section>
    </Main>
  );
};

export default HomeView;
