import { connect } from 'react-redux';
import { removeItem, updatePrice, updateQuantity } from './actions';
import { MenuItems } from './MenuItems';

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = {
  removeItem(uuid) {
    return removeItem(uuid);
  },
  updateItemPrice(uuid) {
    return updatePrice(uuid);
  },
  updateItemQuantity(uuid) {
    return updateQuantity(uuid);
  }
};

export const ConnectedMenuItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItems);
