import { connect } from 'react-redux';
import { NewItemForm } from '../components/NewItemForm';
import { addNewItem } from '../store/items/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (name, price) => dispatch(addNewItem(name, price))
  };
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
