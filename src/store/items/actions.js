export const ITEM_ADDED = 'ITEM_ADDED';
export const ITEM_REMOVED = 'ITEM_REMOVED';
export const ITEM_PRICE_UPDATED = 'ITEM_PRICE_UPDATED';
export const ITEM_QUANTIY_UPDATED = 'ITEM_QUANTIY_UPDATED'

export const addNewItem = (name, price) => ({
  type: ITEM_ADDED,
  payload: {
    name,
    price
  }
});

export const removeItem = (uuid) => ({
  type: ITEM_REMOVED,
  payload: {
    uuid
  }
});

export const updateItemPrice = (uuid, price) => ({
  type: ITEM_PRICE_UPDATED,
  payload: {
    uuid,
    price
  }
});

export const updateItemQuantity = (uuid, quantity) => ({
    type: ITEM_QUANTIY_UPDATED,
    payload: {
      uuid,
      quantity
    }
  });
  