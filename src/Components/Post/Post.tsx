import { useMemo } from 'react';

import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

import { TestProps } from '../../Config/Tests/Test.types';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Typography } from '../Typography';
import {
  PostContainer,
  PostContent,
  PostContentButtonsContainer,
  PostContentHeader,
  PostContentTitle,
  PostText,
} from './Post.styles';
import { PostProps, DefaultPostProps } from './Post.types';

export const postDefaults: Required<DefaultPostProps> & Required<TestProps> = {
  testID: 'Post',
  compact: false,
};

export const Post: React.FC<PostProps> = (props): JSX.Element => {
  const {
    testID = postDefaults.testID,
    style,
    id,
    text,
    createdAt,
    createdBy,
    reposts,
    quotPosts,
    compact = postDefaults.compact,
    ...others
  } = props;

  const { name, nickname, thumbnailUrl } = createdBy;

  const formattedDate = dayjs(createdAt).format('MMMM D, YYYY');

  const renderText = useMemo(
    () => () => {
      return text.split('\n').map((line) => (
        <span key={nanoid()}>
          {line}
          <br />
        </span>
      ));
    },
    [text]
  );

  return (
    <PostContainer
      key={id}
      compact={compact}
      data-testid={testID}
      style={style}
      {...others}
    >
      {!compact && <Avatar name={name} thumbnailUrl={thumbnailUrl} />}
      <PostContent>
        <PostContentHeader>
          {compact && (
            <Avatar name={name} size="SM" thumbnailUrl={thumbnailUrl} />
          )}
          <PostContentTitle variant="h4">{name}</PostContentTitle>
          <PostContentTitle variant="subtitle2">@{nickname}</PostContentTitle>
          <Typography>-</Typography>
          <Typography>{formattedDate}</Typography>
        </PostContentHeader>

        <PostText data-testid={`${testID}_text`}>{renderText()}</PostText>

        <PostContentButtonsContainer>
          <Button onClick={() => {}}>Repost</Button>
          <Typography>{reposts}</Typography>
          <Button onClick={() => {}}>Quote post</Button>
          <Typography>{quotPosts}</Typography>
        </PostContentButtonsContainer>
      </PostContent>
    </PostContainer>
  );
};
