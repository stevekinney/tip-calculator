import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';
import { removeItem, updatePrice } from '../store/items/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price))
  };
};

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
