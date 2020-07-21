import React from 'react';
import { Helmet } from 'react-helmet-async';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Helmet>
        <title>ttingho | Self Introduction</title>
        <meta name='robots' content='noindex' />
      </Helmet>
    </>
  );
};

export default HomePage;
