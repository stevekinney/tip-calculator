import { Card, Stack } from '@twilio-paste/core';

import { MenuItems } from './MenuItems';
import { NewItemForm } from './NewItemForm';
import { Summary } from './Summary';
import { TipSelect } from './TipSelect';

const items = [
  { uuid: 1, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: 2, name: 'Vegan Ham', price: 12, quantity: 1 }
];

const Calculator = () => {
  return (
    <Card>
      <NewItemForm />
      <MenuItems items={items} />
      <TipSelect />
      <Summary />
    </Card>
  );
};

export default Calculator;
