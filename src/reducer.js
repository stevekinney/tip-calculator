import { combineReducers } from 'redux';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const items = (state = initialItems, action) => {
  return state;
};

export const reducer = combineReducers({ items });
