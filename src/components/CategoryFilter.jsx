import React from 'react';
import categories from '../containers/constantCategories';

const CategoryFilter = props => {
  return (
    <div>
      <h3>List Books By Categry</h3>
      <select onChange={e => props.handleBookByFilterCategotyChange(e.target.value)}>
        <option value=''>All</option>
        {categories.map((categorie, index) => (
          <option key={index}>{categorie}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
