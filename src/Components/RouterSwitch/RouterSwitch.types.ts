import { TestProps } from '../../Config/Tests/Test.types';

export interface RequiredRouterSwitchProps {}

export interface DefaultRouterSwitchProps {}

export interface OptionalRouterSwitchProps {}

export type RouterSwitchProps = RequiredRouterSwitchProps &
  DefaultRouterSwitchProps &
  OptionalRouterSwitchProps &
  TestProps;

export type RouterSwitchStyleProps = Required<DefaultRouterSwitchProps>;
