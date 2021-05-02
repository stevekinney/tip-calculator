import { connect } from 'react-redux';
import { removeItem } from './actions';
import { MenuItems } from './MenuItems';

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = {
  removeItem(uuid) {
    return removeItem(uuid);
  }
};

export const ConnectedMenuItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItems);
