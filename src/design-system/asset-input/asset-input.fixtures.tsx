import React from 'react';

import cardanoImage from '../../assets/images/cardano-blue-bg.png';
import { Image } from '../profile-picture';

import type { AssetWithFiat, AssetState } from './asset-input.data';

export const asset: AssetWithFiat = {
  balance: String(10_000_000),
  amount: '',
  id: '',
  ticker: 'Token',
  icon: <Image imageSrc={cardanoImage} />,
  fiat: {
    value: '0',
    ticker: 'USD',
  },
};

export const validState = (id = '1'): AssetState => ({
  type: 'valid',
  asset: {
    ...asset,
    id,
  },
});

export const invalidState = (id = '1'): AssetState => ({
  type: 'invalid',
  asset: {
    ...asset,
    id,
  },
  error: 'Insufficient balance',
});
