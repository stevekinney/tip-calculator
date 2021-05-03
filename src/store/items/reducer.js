import { ITEM_ADDED } from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  if (action.type === ITEM_ADDED) {
    const item = {
      uuid: id++,
      quantity: 1,
      name: action.payload.name,
      price: parseInt(action.payload.price, 10)
    };
    return [...state, item];
  }

  return state;
};

export default reducer;
