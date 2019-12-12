import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';

const bookItemWrapper = {
  width: '1200px',
  height: '170px',
  borderRadius: '4px',
  border: 'solid 1px #e8e8e8',
  margin: '1% auto',
};

const bookTitle = {
  width: '397px',
  height: '29px',
  fontFamily: 'RobotoSlab',
  fontSize: '25px',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: '-0.2px',
  color: '#121212',
  display: 'block',
  paddingTop: '1rem',
  paddingLeft: '2rem',
};

const bookCategory = {
  width: '190px',
  height: '17px',
  backgroundColor: '#ffffff',
  color: '#888888',
  border: ' solid 0 #e8e8e8',
  paddingTop: '1.40rem',
  paddingLeft: '17%',
  fontFamily: 'RobotoSlab',
  fontSize: '20px',
  fontWeight: 'bold',
};

const line = {
  width: '2px',
  height: '70px',
  border: 'solid 1px #e8e8e8',
  marginLeft: '230%',
};

const removeBtn = {
  width: '184px',
  height: '33px',
  borderRadius: '3px',
  color: '#fff',
  backgroundColor: '#0290ff',
  float: 'right',
  margin: '-4% 4.5% 5% 10%',
  textAlign: 'center',
  fontFamily: 'RobotoSlab',
  fontWeight: 'bold',
  fontStretch: 'normal',
  letterSpacing: '0.5px',
  fontSize: '13px',
};

const Book = ({ book: { id, title, category }, dispatch }) => (
  <div style={bookItemWrapper}>
    <tr id={id}>
      <div>
        <td style={bookCategory}>{category}</td>
      </div>
      <div>
        <td style={bookTitle}>{title}</td>
      </div>
      <div style={line}></div>
    </tr>
    <span>
      <button
        onClick={() => dispatch(removeBook(id))}
        title={`Remove ${title}`}
        style={removeBtn}
        type="button"
      >
        Remove
      </button>
    </span>
  </div>
);

Book.propTypes = {
  book: PropTypes.exact({
    title: PropTypes.string,
    category: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default connect()(Book);
