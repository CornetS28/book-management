import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { setCategoryFilter } from '../actions';

const BookList = props => {
  const { books } = props;
  const handleBookByFilterCategotyChange = props.Filterchanged;
  return (
    <div>
      <CategoryFilter
        handleBookByFilterCategotyChange={handleBookByFilterCategotyChange}
      />
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, bookID) => (
            <Book key={bookID} book={book} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  const { books, filter } = state;
  return {
    books:
      filter === "" ? books : books.filter(book => filter === book.category)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Filterchanged: filter => dispatch(setCategoryFilter(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
