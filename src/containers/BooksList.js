import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Book from "../components/Book";

const BookList = ({ books }) => {
  const showAllBooks = books.map(book => <Book key={book.id} book={book} />);

  return (
    <main className="">
      <h1 className="">Books Management</h1>
      <table className="">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{showAllBooks}</tbody>
      </table>
    </main>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string
    }).isRequired
  ).isRequired
};

const mapStateToProps = ({ books }) => ({ books });

export default connect(mapStateToProps)(BookList);
