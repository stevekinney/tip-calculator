import { Stack } from '@twilio-paste/stack';
import MenuItem from './MenuItem';

export const MenuItems = ({
  items,
  removeItem,
  updateItemPrice,
  updateItemQuantity
}) => {
  return (
    <Stack orientation="vertical" spacing="space60">
      {items.map((item) => (
        <MenuItem
          {...item}
          key={item.uuid}
          remove={() => removeItem(item.uuid)}
          updatePrice={updateItemPrice(item.uuid)}
          updateQuantity={updateItemQuantity(item.uuid)}
        />
      ))}
    </Stack>
  );
};
