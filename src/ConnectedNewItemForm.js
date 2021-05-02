import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NewItemForm } from './NewItemForm';
import { addNewItem } from './actions';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      onSubmit: addNewItem
    },
    dispatch
  );
};

export const ConnectedNewItemForm = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
