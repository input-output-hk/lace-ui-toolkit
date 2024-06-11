import React from 'react';

import { BaseCard } from './base-card.component';

import type { CardProps } from './base-card.component';
import type { Scheme } from './types';

export type VariantCardProps = Omit<CardProps, 'scheme'>;

export const createCardVariantComponent =
  <Props extends VariantCardProps>(scheme: Scheme) =>
  (props: Readonly<Props>) => <BaseCard {...props} scheme={scheme} />;

createCardVariantComponent.displayName = 'createCardVariantComponent';
