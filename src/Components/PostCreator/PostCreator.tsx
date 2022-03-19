import {
  forwardRef,
  ForwardRefRenderFunction,
  useState,
  useCallback,
} from 'react';

import { POST_CREATOR_MAX_LENGTH } from '../../Config/Constants.config';
import { TestProps } from '../../Config/Tests/Test.types';
import { useShowUserPage } from '../../Hooks/ShowUserPage';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Textarea } from '../Textarea';
import { Typography } from '../Typography';
import {
  PostCreatorContainer,
  PostCreatorFooter,
  PostCreatorHeader,
} from './PostCreator.styles';
import { PostCreatorProps, DefaultPostCreatorProps } from './PostCreator.types';

export const postCreatorDefaults: Required<DefaultPostCreatorProps> &
  Required<TestProps> = {
  testID: 'PostCreator',
};

const PostCreatorComponent: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  PostCreatorProps
> = (props, ref) => {
  const {
    testID = postCreatorDefaults.testID,
    thumbnailUrl,
    name,
    nickname,
    onSubmit,
    style,
    ...others
  } = props;

  const [value, setValue] = useState('');
  const [characterCounter, setCharacterCounter] = useState(0);

  const { handleShowUserPage, isAvatarClickable } = useShowUserPage({
    nickname,
  });

  const handleChange = (newValue: string) => {
    setValue(newValue);
    setCharacterCounter(newValue.length);
  };

  const handleSubmit = useCallback(() => {
    if (value) {
      setValue(() => '');
      onSubmit(value);
      setCharacterCounter(() => 0);
    }
  }, [onSubmit, value]);

  return (
    <PostCreatorContainer data-testid={testID} style={style} {...others}>
      <PostCreatorHeader>
        <Avatar
          clickable={isAvatarClickable}
          name={name}
          onClick={handleShowUserPage}
          thumbnailUrl={thumbnailUrl}
        />
        <Textarea
          ref={ref}
          maxLength={POST_CREATOR_MAX_LENGTH}
          onChange={handleChange}
          placeholder="What is happening?"
          value={value}
        />
      </PostCreatorHeader>

      <PostCreatorFooter>
        <Typography>
          {characterCounter} / {POST_CREATOR_MAX_LENGTH}{' '}
        </Typography>
        <Button onClick={handleSubmit}>POST</Button>
      </PostCreatorFooter>
    </PostCreatorContainer>
  );
};

export const PostCreator = forwardRef(PostCreatorComponent);
