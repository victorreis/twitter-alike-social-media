import { TestProps } from '../../Config/Tests/Test.types';
import { MenuItemContainer } from './MenuItem.styles';
import { MenuItemProps, DefaultMenuItemProps } from './MenuItem.types';

export const menuItemDefaults: Required<DefaultMenuItemProps> &
  Required<TestProps> = {
  testID: 'MenuItem',
};

export const MenuItem: React.FC<MenuItemProps> = (props): JSX.Element => {
  const {
    testID = menuItemDefaults.testID,
    children,
    to,
    style,
    ...others
  } = props;

  return (
    <MenuItemContainer data-testid={testID} style={style} to={to} {...others}>
      {children}
    </MenuItemContainer>
  );
};
