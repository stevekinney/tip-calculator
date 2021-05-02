import { Card } from '@twilio-paste/core';
import { ConnectedMenuItems } from './ConnectedMenuItems';
import { ConnectedNewItemForm } from './ConnectedNewItemForm';
import { ConnectedSummary } from './ConnectedSummary';
import { TipSelect } from './TipSelect';

const Calculator = () => {
  return (
    <Card>
      <ConnectedNewItemForm />
      <ConnectedMenuItems />
      <TipSelect />
      <ConnectedSummary />
    </Card>
  );
};

export default Calculator;
