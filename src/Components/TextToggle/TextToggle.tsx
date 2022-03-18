import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';

import { TestProps } from '../../Config/Tests/Test.types';
import {
  TextToggleButton,
  TextToggleActiveButton,
  TextToggleContainer,
} from './TextToggle.styles';
import { TextToggleProps, DefaultTextToggleProps } from './TextToggle.types';

export const textToggleDefaults: Required<DefaultTextToggleProps> &
  Required<TestProps> = {
  testID: 'TextToggle',
  activeIndex: 0,
};

export const TextToggle: React.FC<TextToggleProps> = (props): JSX.Element => {
  const {
    testID = textToggleDefaults.testID,
    texts,
    onToggle,
    activeIndex: defaultIndex = textToggleDefaults.activeIndex,
    style,
    ...others
  } = props;

  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);

  useEffect(() => {
    setActiveIndex(() => defaultIndex);
  }, [defaultIndex]);

  const renderButtons = () => {
    return texts.map((text, index) => {
      const handleClick = () => {
        setActiveIndex(index);
        onToggle(index);
      };

      if (activeIndex === index) {
        return (
          <TextToggleActiveButton key={nanoid()} onClick={() => {}} size="MD">
            {text}
          </TextToggleActiveButton>
        );
      }
      return (
        <TextToggleButton key={nanoid()} onClick={handleClick} size="MD">
          {text}
        </TextToggleButton>
      );
    });
  };

  return (
    <TextToggleContainer data-testid={testID} style={style} {...others}>
      {renderButtons()}
    </TextToggleContainer>
  );
};
