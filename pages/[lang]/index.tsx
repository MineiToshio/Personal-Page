import React from 'react';
import { NextPage } from 'next';
import withLocale from '@/hocs/withLocale';
import useTranslation from '@/hooks/useTranslation';
import { MainLayout as Layout } from '@/components/layout';
import { Hero, ContactForm, AboutMe, Projects } from '@/components/pages/home';
import { Parallax, Section } from '@/components/shared';

const Index: NextPage = () => {
  const { t } = useTranslation('Index');
  return (
    <div>
      <Hero id="hero" />
      <Layout>
        <Section id="about-me" title={t('aboutMeTitle')} subtitle={t('aboutMeSubtitle')}>
          <AboutMe />
        </Section>

        <Parallax
          quote={t('parallax1Quote')}
          author={t('parallax1Author')}
          image="/img/parallax/parallax1.jpg"
        />

        <Section id="portfolio" title={t('portfolioTitle')} subtitle={t('portfolioSubtitle')}>
          <Projects />
        </Section>

        <Parallax
          quote={t('parallax2Quote')}
          author={t('parallax2Author')}
          image="/img/parallax/parallax2.jpg"
        />

        <Section id="contacto" title={t('contactTitle')} subtitle={t('contactSubtitle')}>
          <ContactForm />
        </Section>
      </Layout>
    </div>
  );
};

export default withLocale(Index);
