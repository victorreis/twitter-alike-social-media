import {
  forwardRef,
  ForwardRefRenderFunction,
  useState,
  useCallback,
  useEffect,
} from 'react';

import { TestProps } from '../../Config/Tests/Test.types';
import { StyledTextarea } from './Textarea.styles';
import { TextareaProps, DefaultTextareaProps } from './Textarea.types';

export const textareaDefaults: Required<DefaultTextareaProps> &
  Required<TestProps> = {
  testID: 'Textarea',
  resizable: false,
  rows: 4,
};

const TextareaComponent: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = (props, ref) => {
  const {
    testID = textareaDefaults.testID,
    value: initialValue,
    resizable = textareaDefaults.resizable,
    rows = textareaDefaults.rows,
    onChange,
    maxLength,
    ...others
  } = props;

  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(() => initialValue);
  }, [initialValue]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = event.target.value;
      onChange(newValue);
      setValue(() => initialValue);
    },
    [initialValue, onChange]
  );

  return (
    <StyledTextarea
      ref={ref}
      data-testid={testID}
      maxLength={maxLength}
      onChange={handleChange}
      resizable={resizable}
      rows={rows}
      value={value}
      {...others}
    />
  );
};
export const Textarea = forwardRef(TextareaComponent);
