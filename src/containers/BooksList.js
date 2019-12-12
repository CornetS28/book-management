import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { setCategoryFilter } from '../actions';

const BookList = props => {
  const navbar = {
    width: '100%',
    height: '95px',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'space - around',
    alignItems: 'center',
    border: 'solid 1px #e8e8e8'
  };

  const pagesLogo = {
    width: '240px',
    height: '37px',
    fontFamily: 'Montserrat',
    fontSize: '30px',
    fontWeight: '800',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#0290ff',
    marginLeft: '16%'
  };

  const { books } = props;
  const handleBookByFilterCategotyChange = props.Filterchanged;
  return (
    <main>
      <nav style={navbar}>
        <h1 style={pagesLogo}>Bookstore CMS</h1>
        <CategoryFilter
          handleBookByFilterCategotyChange={handleBookByFilterCategotyChange}
        />
      </nav>
      <div />
      {books.map((book, bookID) => (
        <ul>
          <Book key={bookID} book={book} />
        </ul>
      ))}
    </main>
  );
};

const mapStateToProps = state => {
  const { books, filter } = state;
  return {
    books:
      filter === '' ? books : books.filter(book => filter === book.category)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    Filterchanged: filter => dispatch(setCategoryFilter(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
