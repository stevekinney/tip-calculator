import { Card, Stack } from '@twilio-paste/core';

import { MenuItem } from './MenuItem';
import { NewItemForm } from './NewItemForm';
import { SummaryLine } from './SummaryLine';
import { TipSelect } from './TipSelect';

const items = [
  { uuid: 1, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: 2, name: 'Vegan Ham', price: 12, quantity: 1 }
];

const Calculator = () => {
  return (
    <Card>
      <NewItemForm />
      <Stack orientation="vertical" spacing="space60">
        {items.map((item) => (
          <MenuItem {...item} key={item.uuid} />
        ))}
      </Stack>
      <TipSelect />
      <Stack orientation="vertical" spacing="space30">
        <SummaryLine title="Subtotal">$0.00</SummaryLine>
        <SummaryLine title="Tax">$0.00</SummaryLine>
        <SummaryLine title="Tip Amount">$0.00</SummaryLine>
        <SummaryLine title="Total">$0.00</SummaryLine>
      </Stack>
    </Card>
  );
};

export default Calculator;
