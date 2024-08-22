import React from 'react';

import type { Meta } from '@storybook/react';

import { page, Variants, Section, UIStateTable } from '../decorators';
import { Divider } from '../divider';
import { Flex } from '../flex';
import { Grid, Cell } from '../grid';

import { Trigger } from './profile-dropdown-trigger.component';

import type { ProfileType } from './profile-dropdown-wallet-card.component';
const subtitle = `Reusable button component for use in a variety of controls containing only an icon for its content.`;

export default {
  title: 'Navigation and toolbars/Profile Dropdown/Trigger',
  component: Trigger,
  decorators: [page({ title: 'Trigger', subtitle })],
  argTypes: {
    onClick: { action: true },
  },
} as Meta;

const TriggerSample = ({
  disabled,
  id,
  active,
  hasSubtitle = true,
  profile,
}: Readonly<{
  disabled?: boolean;
  id?: string;
  active?: boolean;
  hasSubtitle?: boolean;
  profile?: ProfileType;
}>): JSX.Element => (
  <Trigger
    title="Alice's wallet"
    subtitle={hasSubtitle ? 'Account #0' : undefined}
    disabled={disabled}
    id={id}
    active={active}
    type="hot"
    profile={profile}
  />
);

const Buttons = (): JSX.Element => (
  <Variants.Row>
    <Variants.Cell>
      <TriggerSample />
    </Variants.Cell>
    <Variants.Cell>
      <TriggerSample id="hover" />
    </Variants.Cell>
    <Variants.Cell>
      <TriggerSample id="pressed" active />
    </Variants.Cell>
    <Variants.Cell>
      <TriggerSample disabled />
    </Variants.Cell>
    <Variants.Cell>
      <TriggerSample id="focused" />
    </Variants.Cell>
  </Variants.Row>
);

export const Overview = (): JSX.Element => (
  <Grid columns="$1">
    <Cell>
      <Section title="Examples">
        <Flex gap="$16" alignItems="center" w="$fill" justifyContent="center">
          <TriggerSample />
          <TriggerSample hasSubtitle={false} />
          <TriggerSample
            hasSubtitle={false}
            profile={{
              customProfileComponent: (
                <Flex
                  alignItems="center"
                  w={'$32'}
                  h={'$32'}
                  justifyContent="center"
                >
                  TT
                </Flex>
              ),
            }}
          />
        </Flex>
      </Section>

      <Divider my="$64" />

      <Section title="Main components">
        <UIStateTable>
          <Buttons />
        </UIStateTable>
      </Section>
    </Cell>
  </Grid>
);

Overview.parameters = {
  pseudo: {
    hover: '#hover',
    focusVisible: '#focused',
    active: '#pressed',
  },
};
