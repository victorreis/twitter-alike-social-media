import { TestProps } from '../../Config/Tests/Test.types';

export interface RequiredRouterSwitchProps {}

export interface DefaultRouterSwitchProps {}

export interface OptionalRouterSwitchProps {
  /**
   * Sets the component styles.
   */
  style?: React.CSSProperties;
}

export type RouterSwitchProps = RequiredRouterSwitchProps &
  DefaultRouterSwitchProps &
  OptionalRouterSwitchProps &
  TestProps;

export type RouterSwitchStyleProps = Required<DefaultRouterSwitchProps>;
