import { TestProps } from '../../Config/Tests/Test.types';
import { TabContainer } from './Tab.styles';
import { TabProps, DefaultTabProps } from './Tab.types';

export const tabDefaults: Required<DefaultTabProps> & Required<TestProps> = {
  testID: 'Tab',
  active: false,
};

export const Tab: React.FC<TabProps> = (props): JSX.Element => {
  const {
    testID = tabDefaults.testID,
    text,
    active = tabDefaults.active,
    style,
    ...others
  } = props;

  return (
    <TabContainer
      active={active}
      data-testid={testID}
      style={style}
      {...others}
    >
      {text}
    </TabContainer>
  );
};
