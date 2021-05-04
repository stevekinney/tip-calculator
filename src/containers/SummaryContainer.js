import { connect } from 'react-redux';
import { Summary } from '../components/Summary';
import { selectSubtotal, selectTipAmount } from '../store/items/selectors';

const mapStateToProps = (state) => {
  const subtotal = selectSubtotal(state);
  const tipAmount = selectTipAmount(state);
  const total = selectTipAmount(state);

  return {
    subtotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
