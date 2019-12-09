export const createBook = ({ title, category }) => {
  return {
    type: 'CREATE_BOOK',
    id: Math.floor(Math.random() * 100),
    title,
    category,
  };
};

export const removeBook = id => {
  return {
    type: 'REMOVE_BOOK',
    id,
  };
};
