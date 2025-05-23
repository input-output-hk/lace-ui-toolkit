import React from 'react';

export interface Asset {
  id: string;
  ticker: string;
  balance: string;
  amount: string;
  icon?: string | React.ReactNode;
}

export interface AssetWithFiat extends Asset {
  fiat?: {
    value: string;
    ticker: string;
  };
}

export type AssetState<A extends Asset = AssetWithFiat> =
  | {
      type: 'valid';
      asset: A;
    }
  | { type: 'invalid'; asset: A; error: string };
