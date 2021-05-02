import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Summary } from './Summary';

const getItems = (state) => state.items;
const getTipPercentage = (state) => state.tipPercentage;

const getSubtotal = createSelector([getItems], (items) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

const getTipAmount = createSelector(
  [getSubtotal, getTipPercentage],
  (subtotal, tipPercentage) => {
    return subtotal * (tipPercentage / 100);
  }
);

const getTotal = createSelector(
  [getSubtotal, getTipAmount],
  (subtotal, tipAmount) => {
    return subtotal + tipAmount;
  }
);

const mapStateToProps = (state) => {
  const subtotal = getSubtotal(state);
  const tipAmount = getTipAmount(state);
  const total = getTotal(state);

  return {
    subtotal,
    tipAmount,
    total
  };
};

export const ConnectedSummary = connect(mapStateToProps)(Summary);
