import React from 'react';

import * as Form from '@radix-ui/react-form';

import { UncontrolledPasswordInput } from './uncontrolled-password-box-input.component';

import type { UncontrolledPasswordInputProps } from './uncontrolled-password-box-input.component';

export interface UncontrolledPasswordBoxProps
  extends UncontrolledPasswordInputProps {
  rootStyle?: React.CSSProperties;
  onSubmit: (event: Readonly<React.FormEvent>) => void;
}

export const UncontrolledPasswordBox = ({
  rootStyle,
  onSubmit,
  ...props
}: Readonly<UncontrolledPasswordBoxProps>): JSX.Element => {
  return (
    <Form.Root style={rootStyle} onSubmit={onSubmit}>
      <UncontrolledPasswordInput {...props} />
    </Form.Root>
  );
};
