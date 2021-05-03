import { Card } from '@twilio-paste/core';
import { MenuItemsContainer } from '../containers/MenuItemsContainer';
import { TipSelectContainer } from '../containers/TipSelectContainer';

import { NewItemForm } from './NewItemForm';
import { Summary } from './Summary';

const Calculator = () => {
  return (
    <Card>
      <NewItemForm />
      <MenuItemsContainer />
      <TipSelectContainer />
      <Summary />
    </Card>
  );
};

export default Calculator;
