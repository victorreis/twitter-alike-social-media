import { TestProps } from '../../Config/Tests/Test.types';
import { FixedBarContainer } from './FixedBar.styles';
import { FixedBarProps, DefaultFixedBarProps } from './FixedBar.types';

export const fixedBarDefaults: Required<DefaultFixedBarProps> &
  Required<TestProps> = {
  testID: 'FixedBar',
  justifyContent: 'flex-start',
};

export const FixedBar: React.FC<FixedBarProps> = (props): JSX.Element => {
  const {
    testID = fixedBarDefaults.testID,
    children,
    justifyContent = fixedBarDefaults.justifyContent,
    style,
    ...others
  } = props;

  return (
    <FixedBarContainer
      data-testid={testID}
      justifyContent={justifyContent}
      style={style}
      {...others}
    >
      {children}
    </FixedBarContainer>
  );
};
