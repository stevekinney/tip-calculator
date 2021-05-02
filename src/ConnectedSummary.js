import { connect } from 'react-redux';
import { Summary } from './Summary';

const mapStateToProps = (state) => {
  const subtotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const tipAmount = subtotal * (state.tipPercentage / 100);

  const total = subtotal + tipAmount;

  return {
    subtotal,
    tipAmount,
    total
  };
};

export const ConnectedSummary = connect(mapStateToProps)(Summary);
