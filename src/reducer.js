import { combineReducers } from 'redux';
import { ADD_NEW_ITEM, REMOVE_ITEM } from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const items = (state = initialItems, action) => {
  if (action.type === ADD_NEW_ITEM) {
    return [...state, action.payload];
  }

  if (action.type === REMOVE_ITEM) {
    return state.filter((item) => item.uuid !== action.payload.uuid);
  }

  return state;
};

export const reducer = combineReducers({ items });
