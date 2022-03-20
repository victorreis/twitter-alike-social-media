import { useMemo, useRef, useState } from 'react';

import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

import { EXTENDED_DATE_FORMAT } from '../../Config/Constants.config';
import { TestProps } from '../../Config/Tests/Test.types';
import { TypographyVariant } from '../../Theme/Types/Typographies.types';
import { Avatar } from '../Avatar';
import { Button, ButtonSize } from '../Button';
import { PostCreator } from '../PostCreator';
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
    isAvatarClickable,
    onClickAvatar,
    onClickRepost,
    onClickQuotePost,
    style,
    ...others
  } = props;

  const { name, nickname, thumbnailUrl } = createdBy;
  const [showPostCreator, setShowPostCreator] = useState<boolean>();
  const quotePostCreatorRef = useRef<HTMLTextAreaElement>(null);

  const formattedDate = dayjs(createdAt).format(EXTENDED_DATE_FORMAT);

  const userNameVariant: TypographyVariant = compact ? 'h5' : 'h4';
  const userInfoVariant: TypographyVariant = compact
    ? 'subtitle3'
    : 'subtitle2';
  const textVariant: TypographyVariant = compact ? 'body2' : 'body1';
  const buttonSize: ButtonSize = compact ? 'MD' : 'LG';

  const handleClickRepost = () => {
    onClickRepost(id);
  };

  const handleSubmitQuotePost = (quotePostText: string) => {
    setShowPostCreator(() => false);
    onClickQuotePost(id, quotePostText);
  };

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
        isAvatarClickable={Boolean(isAvatarClickable)}
        name={name}
        nickname={nickname}
        onClickAvatar={onClickAvatar}
        size={compact ? 'SM' : 'MD'}
        thumbnailUrl={thumbnailUrl}
      />
    );
  };

  const handleShowQuotePostCreator = () => {
    setShowPostCreator(() => true);
    if (quotePostCreatorRef.current) {
      quotePostCreatorRef.current.focus();
    }
  };

  const renderQuotePostCreator = () => {
    return (
      showPostCreator && (
        <PostCreator
          ref={quotePostCreatorRef}
          isAvatarClickable={isAvatarClickable}
          name={name}
          nickname={nickname}
          onClickAvatar={onClickAvatar}
          onSubmit={handleSubmitQuotePost}
          thumbnailUrl={thumbnailUrl}
        />
      )
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
          <Button onClick={handleClickRepost} size={buttonSize}>
            Repost
          </Button>
          <Typography variant={textVariant}>{reposts}</Typography>
          <Button
            disabled={showPostCreator}
            onClick={handleShowQuotePostCreator}
            size={buttonSize}
          >
            Quote post
          </Button>

          <Typography variant={textVariant}>{quotPosts}</Typography>
        </PostContentButtonsContainer>

        {renderQuotePostCreator()}
      </PostContent>
    </PostContainer>
  );
};
