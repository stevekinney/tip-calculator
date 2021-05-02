export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';

export const addNewItem = (name, price) => {
  return {
    type: ADD_NEW_ITEM,
    payload: {
      uuid: Date.now(),
      name,
      price,
      quantity: 1
    }
  };
};
