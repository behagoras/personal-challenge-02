import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import AppLayout from './layouts/AppLayout';

const store = createStore(reducers, {
  countries: [],
  dark: false,
  region: '',
  search: '',
  filtered: [],

});

const App = () => {

  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
};

export default App;
