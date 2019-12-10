import React from "react";
import categories from "../containers/constantCategories";

const CategoryFilter = props => {
  return (
    <div>
      <h3>List Books By Categry</h3>
      <select
        onChange={e => props.handleBookByFilterCategotyChange(e.target.value)}
      >
        <option value="">All</option>
        {categories.map((category, index) => (
          <option key={index}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
