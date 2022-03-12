import { useState } from 'react';

import { TestProps } from '../../Config/Tests/Test.types';
import { ButtonContainer } from './Button.styles';
import { ButtonProps, DefaultButtonProps } from './Button.types';

export const buttonDefaults: Required<DefaultButtonProps> &
  Required<TestProps> = {
  testID: 'Button',
  type: 'button',
};

export const Button: React.FC<ButtonProps> = (props): JSX.Element => {
  const {
    testID = buttonDefaults.testID,
    children,
    type = buttonDefaults.type,
    onClick,
    hoverFeedbackColor,
    hoverText,
    ...others
  } = props;

  const [text, setText] = useState<string>(children);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  const handleMouseEnter = () => {
    if (hoverText) {
      setText(hoverText);
    }
  };
  const handleMouseLeave = () => {
    setText(children);
  };

  return (
    <ButtonContainer
      data-testid={testID}
      hoverFeedbackColor={hoverFeedbackColor}
      hoverText={hoverText}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      type={type}
      {...others}
    >
      {text}
    </ButtonContainer>
  );
};
