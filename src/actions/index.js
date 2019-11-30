export const CREATE_BOOK = (title, category) => {
  return {
    type: 'CREATE_BOOK',
    book,
    title,
    category,
  };
};

export const REMOVE_BOOK = id => {
  return {
    type: 'REMOVE_BOOK',
    id,
  };
};
