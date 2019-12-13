import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import '../css/index.css';

const App = () => (
  <div>
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
