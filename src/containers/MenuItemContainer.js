import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuItem from '../components/MenuItem';
import {
  removeItem,
  updateItemPrice,
  updateItemQuantity
} from '../store/items/actions';

const mapStateToProps = (state, ownProps) => {
  return {
    total: parseInt(ownProps.price * ownProps.quantity)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      remove: () => removeItem(ownProps.uuid),
      updatePrice: (price) => updateItemPrice(ownProps.uuid, price),
      updateQuantity: (quantity) => updateItemQuantity(ownProps.uuid, quantity)
    },
    dispatch
  );
};

export const MenuItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
