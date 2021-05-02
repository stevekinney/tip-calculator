export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

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

export const removeItem = (uuid) => {
  return {
    type: REMOVE_ITEM,
    payload: {
      uuid
    }
  };
};
