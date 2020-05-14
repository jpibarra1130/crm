/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/PeopleReducer';
import Navigation from './Navigation';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
