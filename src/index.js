import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import roots from './reducers';
import App from './components/App';

const INITIAL_STATE = {
  books: [
    {
      id: 0,
      title: 'The King And The Lamb',
      category: 'Sci-Fi',
    },
    {
      id: 1,
      title: 'Found The Need In The Boot',
      category: 'History',
    },
    {
      id: 2,
      title: 'The First Tom Boy',
      category: 'Horror',
    },
  ],
};

const store = createStore(roots, INITIAL_STATE);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
