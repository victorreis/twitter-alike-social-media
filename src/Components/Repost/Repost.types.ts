import { TestProps } from '../../Config/Tests/Test.types';
import { RepostType } from '../../Models/Repost.types';
import { AvatarClickProps } from '../Avatar';
import { RequiredPostProps } from '../Post';

export interface RequiredRepostProps {}

export interface DefaultRepostProps {}

export interface OptionalRepostProps {}

export type RepostProps = RequiredRepostProps &
  DefaultRepostProps &
  OptionalRepostProps &
  TestProps &
  RepostType &
  RequiredPostProps &
  AvatarClickProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export type RepostStyleProps = Required<DefaultRepostProps>;
