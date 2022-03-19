import { TestProps } from '../../Config/Tests/Test.types';

export interface RequiredTabProps {
  /**
   * Tab text.
   */
  text: string;
}

export interface DefaultTabProps {
  /**
   * Controls when the tab is active by showing a visual feedback.
   * @default 'false'.
   */
  active?: boolean;
}

export interface OptionalTabProps {}

export type TabProps = RequiredTabProps &
  DefaultTabProps &
  OptionalTabProps &
  TestProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export type TabStyleProps = Required<DefaultTabProps>;
