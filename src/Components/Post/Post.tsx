import { useMemo, useState } from 'react';

import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

import { TestProps } from '../../Config/Tests/Test.types';
// eslint-disable-next-line import/no-cycle
import { User } from '../../Pages/User';
import { TypographyVariant } from '../../Theme/Types/Typographies.types';
import { Avatar } from '../Avatar';
import { Button, ButtonSize } from '../Button';
import { Modal } from '../Modal';
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
    children,
    id,
    text,
    createdAt,
    createdBy,
    reposts,
    quotPosts,
    compact = postDefaults.compact,
    style,
    ...others
  } = props;

  const [open, setOpen] = useState(false);

  const handleOpenClose = () => {
    setOpen((prevState) => !prevState);
  };

  const { name, nickname, thumbnailUrl } = createdBy;

  const formattedDate = dayjs(createdAt).format('MMMM D, YYYY');

  const userNameVariant: TypographyVariant = compact ? 'h5' : 'h4';
  const userInfoVariant: TypographyVariant = compact
    ? 'subtitle3'
    : 'subtitle2';
  const textVariant: TypographyVariant = compact ? 'body2' : 'body1';
  const buttonSize: ButtonSize = compact ? 'MD' : 'LG';

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

  const renderAvatar = () => {
    return (
      <Avatar
        name={name}
        onClick={handleOpenClose}
        size={compact ? 'SM' : 'MD'}
        thumbnailUrl={thumbnailUrl}
      />
    );
  };

  return (
    <PostContainer
      key={id}
      compact={compact}
      data-testid={testID}
      style={style}
      {...others}
    >
      {!compact && renderAvatar()}

      {open && (
        <Modal onClose={handleOpenClose}>
          <User />
        </Modal>
      )}

      <PostContent>
        <PostContentHeader>
          {compact && renderAvatar()}

          <PostContentTitle variant={userNameVariant}>{name}</PostContentTitle>
          <PostContentTitle variant={userInfoVariant}>
            @{nickname}
          </PostContentTitle>
          <Typography variant={userInfoVariant}>- {formattedDate}</Typography>
        </PostContentHeader>

        <PostText data-testid={`${testID}_text`} variant={textVariant}>
          {renderText()}
        </PostText>

        {children}

        <PostContentButtonsContainer hasChildren={Boolean(children)}>
          <Button onClick={() => {}} size={buttonSize}>
            Repost
          </Button>
          <Typography variant={textVariant}>{reposts}</Typography>
          <Button onClick={() => {}} size={buttonSize}>
            Quote post
          </Button>
          <Typography variant={textVariant}>{quotPosts}</Typography>
        </PostContentButtonsContainer>
      </PostContent>
    </PostContainer>
  );
};
