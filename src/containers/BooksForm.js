import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const ChooseACategory = ({ value, handleChange }) => {
  const options = categories.map(cat => (
    <option key={cat} value={cat}>
      {cat}
    </option>
  ));

  return (
    <select
      value={value}
      onChange={handleChange}
      name="category"
      id="book-a-category"
    >
      <option key="placeholder" value="">
        Category
      </option>
      {options}
    </select>
  );
};

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        title: '',
        category: categories[0],
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBookSubmit = this.handleBookSubmit.bind(this);
  }

  handleChange({ target: { value, name } }) {
    const { book } = this.state;
    this.setState({
      book: {
        ...book,
        [name]: value,
      },
    });
  }

  handleBookSubmit(event) {
    const {
      state: { book },
      props: { createBook },
    } = this;

    event.preventDefault();
    if (!event.target.value) {
      alert('Book title can not be empty.');
    } else {
      createBook(book);
      this.setState({
        book: {
          title: '',
          category: '',
        }
      });
    }
  }

  render() {
    const {
      book: { title, category },
    } = this.state;

    return (
      <form action="">
        <h2>Insert new book</h2>
        <input
          placeholder="Enter Book Title"
          type="text"
          name="title"
          id="booo--title"
          minLength="4"
          value={title}
          onChange={this.handleChange}
          required
        />

        <div className="">
          <ChooseACategory handleChange={this.handleChange} value={category} />
        </div>

        <button type="button" id="add-a-book" onClick={this.handleBookSubmit}>
          Add This Book
        </button>
      </form>
    );
  }
}

export default connect(({ book }) => ({ book }), { createBook })(BooksForm);
