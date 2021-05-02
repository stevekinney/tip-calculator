export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_PRICE = 'UPDATE_PRICE';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

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

export const updatePrice = (uuid, price) => {
  return {
    type: UPDATE_PRICE,
    payload: {
      uuid,
      price
    }
  };
};

export const updateQuantity = (uuid, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    payload: {
      uuid,
      quantity
    }
  };
};
