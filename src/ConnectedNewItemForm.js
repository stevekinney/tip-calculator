import { connect } from 'react-redux';
import { NewItemForm } from './NewItemForm';
import { addNewItem } from './reducer';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (name, price) => dispatch(addNewItem(name, price))
  };
};

export const ConnectedNewItemForm = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
