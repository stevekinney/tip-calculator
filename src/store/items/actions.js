export const ITEM_ADDED = 'ITEM_ADDED';

export const addNewItem = (name, price) => {
  return {
    type: ITEM_ADDED,
    payload: {
      name,
      price
    }
  };
};
