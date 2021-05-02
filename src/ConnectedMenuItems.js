import { connect } from 'react-redux';
import { removeItem, updatePrice, updateQuantity } from './actions';
import { MenuItems } from './MenuItems';

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeItem(uuid) {
    return dispatch(removeItem(uuid));
  },
  updateItemPrice(uuid) {
    return (price) => dispatch(updatePrice(uuid, price));
  },
  updateItemQuantity(uuid) {
    return (quantity) => dispatch(updateQuantity(uuid, quantity));
  }
});

export const ConnectedMenuItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItems);
