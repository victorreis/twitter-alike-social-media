import { forwardRef, ForwardRefRenderFunction, useState } from 'react';

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

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setValue(() => newValue);
    onChange(newValue);
  };

  return (
    <StyledTextarea
      ref={ref}
      data-testid={testID}
      maxLength={maxLength}
      onChange={handleChange}
      resizable={resizable}
      // rows={5}
      rows={rows}
      value={value}
      {...others}
    />
  );
};
export const Textarea = forwardRef(TextareaComponent);
