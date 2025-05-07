import React from 'react';

import CheckFileUploadIcon from '@icons/CheckFileUploadComponent';
import UploadIcon from '@icons/UploadGradientComponent';

import { Box } from '../box';
import { Divider } from '../divider';
import { Flex } from '../flex';
import { Text } from '../text';

import * as cx from './file-upload.css';

import type { OmitClassName } from '../../types';

type Props = OmitClassName<'input'> & {
  label: string | React.ReactNode;
  supportedFormats: string;
  files?: string[];
  removeButtonLabel: string;
  key?: string;
  onRemove?: (file: string, index: number) => void;
};

export const FileUpload = ({
  label,
  supportedFormats,
  id = crypto.randomUUID(),
  accept,
  files = [],
  removeButtonLabel,
  key = 'file-upload',
  onRemove,
  ...props
}: Readonly<Props>): JSX.Element => (
  <label htmlFor={id} className={cx.root} id={`${id}-label`}>
    <input
      type="file"
      id={id}
      accept={accept}
      required
      hidden
      key={key}
      {...props}
    />
    <Flex
      className={cx.iconBox}
      mr="$24"
      alignItems="center"
      justifyContent="center"
    >
      <UploadIcon data-testid="upload-icon" />
    </Flex>
    <Box w="$fill">
      <Box>
        <Box mb="$8">
          <Text.Body.Normal weight="$medium" data-testid="file-upload-label">
            {label}
          </Text.Body.Normal>
        </Box>
        <Text.Body.Small
          color="secondary"
          weight="$medium"
          data-testid="supported-formats-label"
        >
          {supportedFormats}
        </Text.Body.Small>
      </Box>
      {files.length > 0 && (
        <Box w="$fill">
          <Divider my="$16" w="$fill" />
          {files.map((file, index) => (
            <Box key={file}>
              <Flex mb="$8">
                <Text.Body.Small weight="$medium" data-testid={'file-name'}>
                  {file}
                </Text.Body.Small>
                <Box className={cx.checkIconBox} ml="$8">
                  <CheckFileUploadIcon data-testid="check-icon" />
                </Box>
              </Flex>
              <button
                className={cx.removeButtonBox}
                data-testid="remove-button"
                onClick={(event): void => {
                  if (onRemove) {
                    event.preventDefault();
                    event.stopPropagation();
                    onRemove(file, index);
                  }
                }}
              >
                <Text.Label color="error">{removeButtonLabel}</Text.Label>
              </button>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  </label>
);
