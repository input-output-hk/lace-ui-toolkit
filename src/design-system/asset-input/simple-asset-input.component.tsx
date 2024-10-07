import React from 'react';

import { Box } from '../box';
import { Text } from '../text';

import { AmountInput } from './amount-input.component';
import * as cx from './simple-asset-input.css';

import type { Asset, AssetState } from './asset-input.data';

interface Props {
  state: AssetState<Asset>;
  balanceLabel: string;
  onAmountChange?: (asset: Readonly<Asset>, amount: string) => void;
}

export const SimpleAssetInput = ({
  state,
  balanceLabel,
  onAmountChange,
}: Readonly<Props>): JSX.Element => (
  <div className={cx.root}>
    <Box className={cx.amountBox}>
      <AmountInput
        id={state.asset.id}
        value={state.asset.amount}
        alignment="left"
        onChange={(value): void => {
          onAmountChange?.(state.asset, value);
        }}
      />
    </Box>
    <Box className={cx.balance}>
      <Text.Body.Normal color="secondary">
        {balanceLabel}: {state.asset.balance} {state.asset.ticker}
      </Text.Body.Normal>
    </Box>
    {state.type === 'invalid' && (
      <Box className={cx.error}>
        <Text.Label
          color="error"
          data-testid={`asset-input-error-${state.asset.id}`}
        >
          {state.error}
        </Text.Label>
      </Box>
    )}
  </div>
);
