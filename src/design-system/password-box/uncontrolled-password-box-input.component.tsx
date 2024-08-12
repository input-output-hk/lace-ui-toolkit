import React, { useState } from 'react';

import * as Form from '@radix-ui/react-form';
import cn from 'classnames';

import { Flex } from '../flex';
import { Text } from '../text';

import { PasswordInputButton } from './password-box-button.component';
import * as cx from './password-box-input.css';

export type Password = {
  input: HTMLInputElement;
  // TODO: convert this to UInt8Array
  value: string;
};

export type OnPasswordChange = (event: Readonly<Password>) => void;

export interface UncontrolledPasswordInputProps
  extends Omit<Form.FormControlProps, 'value' | 'onChange'> {
  required?: boolean;
  disabled?: boolean;
  id?: string;
  label: string;
  name?: string;
  errorMessage?: string;
  onChange: OnPasswordChange;
  defaultIsPasswordVisible?: boolean;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  testId?: string;
}

export const UncontrolledPasswordInput = ({
  required = false,
  disabled = false,
  id,
  label,
  name,
  errorMessage = '',
  containerClassName = '',
  onChange,
  defaultIsPasswordVisible = false,
  containerStyle,
  testId,
}: Readonly<UncontrolledPasswordInputProps>): JSX.Element => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(
    defaultIsPasswordVisible,
  );

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = event =>
    onChange({ input: event.target, value: event.target.value });

  return (
    <div className={cx.root} data-testid={testId && `${testId}-container`}>
      <Form.Field
        name="field"
        className={cn(cx.container, {
          [cx.disabledContainer]: disabled,
          [containerClassName]: containerClassName,
        })}
        style={containerStyle}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Form.Control asChild>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              required={required}
              placeholder=""
              className={cn(cx.input, { [cx.largeDots]: !isPasswordVisible })}
              disabled={disabled}
              name={name}
              onChange={onChangeHandler}
              id={id}
              data-testid={testId}
            />
          </Form.Control>
          <Form.Label
            className={cn(cx.label, { [cx.disabledLabel]: disabled })}
          >
            {label}
          </Form.Label>
          <PasswordInputButton
            testId={testId && `${testId}-toggle`}
            onClick={(event): void => {
              event.preventDefault();
              setIsPasswordVisible(!isPasswordVisible);
            }}
            disabled={disabled}
            isPasswordVisible={isPasswordVisible}
          />
        </Flex>
      </Form.Field>
      {errorMessage && (
        <Text.Label color="error" className={cx.errorMessage}>
          {errorMessage}
        </Text.Label>
      )}
    </div>
  );
};
