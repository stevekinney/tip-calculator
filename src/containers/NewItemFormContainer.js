import { connect } from 'react-redux';
import { NewItemForm } from '../components/NewItemForm';
import { addNewItem } from '../store/items/actions';

const mapDispatchToProps = {
  onSubmit: addNewItem
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
