import { Card, Stack } from '@twilio-paste/core';
import { ConnectedMenuItems } from './ConnectedMenuItems';
import { NewItemForm } from './NewItemForm';
import { SummaryLine } from './SummaryLine';
import { TipSelect } from './TipSelect';

const Calculator = () => {
  return (
    <Card>
      <NewItemForm />
      <ConnectedMenuItems />
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
