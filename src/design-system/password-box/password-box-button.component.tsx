import React from 'react';

import CloseEye from '@icons/EyeCloseComponent';
import OpenEye from '@icons/EyeOpenComponent';
import cn from 'classnames';

import * as cx from './password-box-button.css';

interface PasswordBoxButtonProps {
  onClick: (event: Readonly<React.MouseEvent<HTMLButtonElement>>) => void;
  disabled: boolean;
  isPasswordVisible: boolean;
}

export const PasswordInputButton = ({
  onClick,
  disabled,
  isPasswordVisible,
}: Readonly<PasswordBoxButtonProps>): JSX.Element => {
  return (
    <button
      type="button"
      className={cx.inputButton}
      onClick={onClick}
      disabled={disabled}
    >
      {isPasswordVisible ? (
        <CloseEye
          className={cn(cx.inputButtonIcon, {
            [cx.disabledInputButtonIcon]: disabled,
          })}
        />
      ) : (
        <OpenEye
          className={cn(cx.inputButtonIcon, {
            [cx.disabledInputButtonIcon]: disabled,
          })}
        />
      )}
    </button>
  );
};
