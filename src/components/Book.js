import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';


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
    id: PropTypes.number,
  }).isRequired,
};

export default connect()(Book);
