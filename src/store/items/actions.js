export const ITEM_ADDED = 'ITEM_ADDED';
export const ITEM_REMOVED = 'ITEM_REMOVED';
export const ITEM_PRICE_UPDATED = 'ITEM_PRICE_UPDATED';

export const addNewItem = (name, price) => {
  return {
    type: ITEM_ADDED,
    payload: {
      name,
      price
    }
  };
};

export const removeItem = (uuid) => {
  return {
    type: ITEM_REMOVED,
    payload: {
      uuid
    }
  };
};

export const updatePrice = (uuid, price) => {
  return {
    type: ITEM_PRICE_UPDATED,
    payload: {
      uuid,
      price
    }
  };
};
