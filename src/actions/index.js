export const CREATE_BOOK = (title, category) => {
  return {
    type: 'CREATE_BOOK',
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
