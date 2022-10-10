import { connect } from 'react-redux';
import { Summary } from '../components/Summary';

const mapStateToProps = (state) => {
  const subtotal = state.items.reduce((sum, item)=> sum + item.price * item.quantity,0);
  const tipAmount = (state.tipPercentage * subtotal) / 100;
  const total = subtotal + tipAmount;
  return {
    subtotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
