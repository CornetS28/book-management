import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const chooseACategory = () => {
  const options = categories.map (cat => (
    <option key={cat} value={cat}>
      {cat}
    </option>
  ));

  return (
    <select name="categories">
      <option key="placeholder" value="">
        Category
      </option>
      {options}
    </select>
  );
};

const BooksForm = () => (
  <form action="">
    <h2>Insert new book</h2>
    <input
      placeholder="Enter Book Title"
      type="text"
      name="title"
    />

    <chooseACategory />
    <button type="button" id="add-a-book">
      Add Book
    </button>
  </form>
);


export default BooksForm;
