import React from 'react';
import categories from '../containers/constantCategories';

const CategoryFilter = props => {
  return (
    <div>
      <select
        onChange={e => props.handleBookByFilterCategotyChange(e.target.value)}
      >
        <option value="">CATEGOTRIES</option>
        {categories.map((category, index) => (
          <option key={index}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
