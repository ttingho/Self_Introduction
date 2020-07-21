import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import OG_IMG from './assets/images/open_graph.jpg';

interface AppProps {}

const App: React.FC<AppProps> = props => {
  return (
    <>
      <Helmet>
        <title>ttingho</title>
        <meta name='description' content='열정적인 웹 개발자의 자기소개 사이트.' />
        <meta property='og:title' content='Self Introduction' />
        <meta property='og:description' content='self-introduction page of ttingho' />
        <meta property='og:image' content={OG_IMG} />
      </Helmet>
      <Switch>
        <Route path='/Self_Introduction' component={HomePage} />
        <Route path='/Self_Introduction/myinfo' />
        <Route path='/Self_Introduction/portfolio' />
        <Route path='/Self_Introduction/portfolio/@:projectname' />
        <Redirect path='*' to='/Self_Introduction' />
      </Switch>
    </>
  );
};

export default App;
