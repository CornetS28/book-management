import React from 'react';
import PropTypes from 'prop-types';
import { removeBook } from '../actions/index';
import { connect } from 'react-redux';

const Book = ({ book: { id, title, category }, dispatch }) => (
  <li id={id}>
    <section>
      <p>{category}</p>
      <h3>{title}</h3>
    </section>
    <button
      onClick={() => dispatch(removeBook(id))}
      title={`Remove ${title}`}
      className=""
      type="button"
    >
      Remove
    </button>
  </li>
);

Book.propTypes = {
  book: PropTypes.exact({
    title: PropTypes.string,
    category: PropTypes.string,
    pages: PropTypes.integer,
    id: PropTypes.string,
  }).isRequired,
};

export default connect()(Book);
