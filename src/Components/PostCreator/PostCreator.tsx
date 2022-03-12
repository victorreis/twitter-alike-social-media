import { useState } from 'react';

import { TestProps } from '../../Config/Tests/Test.types';
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

export const PostCreator: React.FC<PostCreatorProps> = (props): JSX.Element => {
  const {
    testID = postCreatorDefaults.testID,
    thumbnailUrl,
    name,
    style,
    ...others
  } = props;

  const maxlength = 777;
  const [value, setValue] = useState('');
  const [characterCounter, setCharacterCounter] = useState(0);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    setCharacterCounter(newValue.length);
  };

  return (
    <PostCreatorContainer data-testid={testID} style={style} {...others}>
      <PostCreatorHeader>
        <Avatar name={name} thumbnailUrl={thumbnailUrl} />
        <Textarea
          maxLength={maxlength}
          onChange={handleChange}
          placeholder="What is happening?"
          value={value}
        />
      </PostCreatorHeader>

      <PostCreatorFooter>
        <Typography>
          {characterCounter} / {maxlength}{' '}
        </Typography>
        <Button onClick={() => {}}>POST</Button>
      </PostCreatorFooter>
    </PostCreatorContainer>
  );
};
