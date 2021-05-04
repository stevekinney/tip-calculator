import { createSelector } from 'reselect';

export const selectItem = (state, props) =>
  state.items.find((item) => item.uuid === props.uuid);
export const selectItemTotal = createSelector(
  [selectItem],
  (item) => item.price * item.quantity
);

export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tipPercentage;

export const selectSubtotal = createSelector([selectItems], (items) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

export const selectTipAmount = createSelector(
  [selectSubtotal, selectTipPercentage],
  (subtotal, tipPercentage) => {
    return subtotal * (tipPercentage / 100);
  }
);

export const selectTotal = createSelector(
  [selectSubtotal, selectTipAmount],
  (subtotal, tipAmount) => {
    return subtotal + tipAmount;
  }
);
