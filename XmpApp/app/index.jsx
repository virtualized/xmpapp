﻿import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import App from './containers/App';

const store = configureStore();

render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(
      <AppContainer props={{ store }}>
        require('./containers/App').default
      </AppContainer>,
      document.getElementById('root')
    );
  });
}