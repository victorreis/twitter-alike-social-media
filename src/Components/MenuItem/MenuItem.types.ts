import { TestProps } from '../../Config/Tests/Test.types';

export interface RequiredMenuItemProps {
  /**
   * Component's children.
   */
  children: React.ReactNode;

  /**
   * Path that will be used to redirect the user to another page.
   */
  to: string;
}

export interface DefaultMenuItemProps {}

export interface OptionalMenuItemProps {}

export type MenuItemProps = RequiredMenuItemProps &
  DefaultMenuItemProps &
  OptionalMenuItemProps &
  TestProps &
  Omit<React.HTMLAttributes<HTMLAnchorElement>, 'children'>;

export type MenuItemStyleProps = Required<DefaultMenuItemProps>;
