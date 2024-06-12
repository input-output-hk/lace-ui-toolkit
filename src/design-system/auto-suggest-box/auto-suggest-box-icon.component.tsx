import React from 'react';

import CheckIcon from '@icons/CheckFileUploadComponent';
import LoadingIcon from '@icons/LoadingComponent';
import cn from 'classnames';

import { Box } from '../box';
import { Loader } from '../loader';

import * as cx from './auto-suggest-box-icon.css';
import { ValidationStatus } from './auto-suggest-box-types';

export interface Props {
  status?: ValidationStatus;
}

export const Icon = ({ status }: Readonly<Props>): JSX.Element => {
  const isValidating = status === ValidationStatus.Validading;
  const isValidated = status === ValidationStatus.Validated;

  if (status === undefined) {
    return <></>;
  }

  return (
    <Box
      className={cn(cx.icon, {
        [cx.visible]: Boolean(status),
        [cx.loader]: isValidating,
        [cx.check]: isValidated,
      })}
    >
      {isValidating && <Loader w="$24" h="$24" icon={LoadingIcon} />}
      {isValidated && <CheckIcon />}
    </Box>
  );
};
