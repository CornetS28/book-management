import React from "react";
import { connect } from "react-redux";
import { createBook } from "../actions";
import categories from "./constantCategories";

const insertNewBook = {
  width: "174px",
  height: "24px",
  fontFamily: "Montserrat",
  fontSize: "20px",
  fontWeight: "bold",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "normal",
  letterSpacing: "-0.18px",
  color: "#888888",
  marginLeft: "17%",
  marginBottom: "-2%",
  marginTop: "3%"
};

const inputStyle = {
  width: "664px",
  height: "45px",
  borderRadius: "4px",
  border: "solid 1px #e8e8e8",
  backgroundColor: "#ffffff"
};

const categorySelection = {
  fontFamily: "Montserrat",
  fontSize: "16px",
  width: "162px",
  height: "19px",
  borderRadius: "4px",
  boxShadow: "0 0 60px 0 var(--black - 5)",
  backgroundColor: "#fafafa",
  marginTop: "4%"
};
const categoryWrapper = {
  width: "25%",
  height: "45px",
  borderRadius: "4px",
  border: "solid 1px #e8e8e8",
  backgroundColor: "#ffffff",
  textAlign: "center",
  fontSize: "15px"
};

const formWrapper = {
  width: "70%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-around",
  padding: " 50px 0",
  borderTop: "solid 1px #e8e8e8"
};

const bookBtnWrapper = {
  width: "184px",
  height: "45px",
  borderRadius: "3px",
  backgroundColor: "#0290ff",
  color: "#ffffff",
  fontFamily: "RobotoSlab",
  fontWeight: "bold",
  fontStretch: "normal",
  letterSpacing: "0.5px",
  textAlign: "center",
  fontSize: "13px"
};
const ChooseACategory = ({ value, handleChange }) => {
  const options = categories.map(cat => (
    <option key={cat} value={cat}>
      {cat}
    </option>
  ));

  return (
    <select
      style={categorySelection}
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
        title: "",
        category: categories[0]
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBookSubmit = this.handleBookSubmit.bind(this);
  }

  handleChange({ target: { value, name } }) {
    const { book } = this.state;
    this.setState({
      book: {
        ...book,
        [name]: value
      }
    });
  }

  handleBookSubmit(event) {
    const {
      state: { book },
      props: { createBook }
    } = this;

    event.preventDefault();
    createBook(book);
    this.setState({
      book: {
        title: "",
        category: categories[0]
      }
    });
  }

  render() {
    const {
      book: { title, category }
    } = this.state;

    return (
      <div>
        <span>
          <h2 style={insertNewBook}>Insert new book</h2>
        </span>

        <div style={formWrapper}>
          <input
            style={inputStyle}
            placeholder="Enter Book Title"
            type="text"
            name="title"
            id="booo--title"
            minLength="4"
            value={title}
            onChange={this.handleChange}
            required
          />

          <div style={categoryWrapper}>
            <ChooseACategory
              handleChange={this.handleChange}
              value={category}
            />
          </div>

          <button
            style={bookBtnWrapper}
            type="button"
            id="add-a-book"
            onClick={this.handleBookSubmit}
          >
            Add This Book
          </button>
        </div>
      </div>
    );
  }
}

export default connect(({ book }) => ({ book }), { createBook })(BooksForm);
