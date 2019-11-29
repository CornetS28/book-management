import React from 'react';
import PropTypes from 'prop-types';


const Book = ({ book: {id, title, category} }) => (
  <li id={id}>
    <section>
      <p>{category}</p>
      <h3>{title}</h3>
    </section>
  </li>
);

Book.propTypes = {
  book: PropTypes.exact ({
    title: PropTypes.string,
    category: PropTypes.string,
    pages: PropTypes.integer,
    id: PropTypes.string,
  }).isRequired,
};

export default Book;
