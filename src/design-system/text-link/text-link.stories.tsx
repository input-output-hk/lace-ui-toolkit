import React from 'react';

import type { Meta } from '@storybook/react';

import { Variants, Section, page, UIStateTable } from '../decorators';
import { Grid, Cell } from '../grid';
import { Text } from '../text';

import { TextLink } from './text-link.component';

const subtitle = `Provides an inline-level content element that provides facilities for hosting hyperlinks.`;

export default {
  title: 'Buttons/Text Link',
  component: TextLink,
  decorators: [page({ title: 'Text Link', subtitle })],
} as Meta;

const TextLinkExamples = (): JSX.Element => (
  <>
    <Variants.Row>
      <Variants.Cell>
        <TextLink label="Label" />
      </Variants.Cell>
      <Variants.Cell>
        <TextLink label="Label" id="hover" />
      </Variants.Cell>
      <Variants.Cell>
        <TextLink label="Label" id="pressed" />
      </Variants.Cell>
      <Variants.Cell>
        <TextLink label="Label" disabled />
      </Variants.Cell>
      <Variants.Cell>
        <TextLink label="Label" id="focused" />
      </Variants.Cell>
    </Variants.Row>
    <Variants.Row>
      <Variants.Cell>
        <a href="#" id="visited" style={{ textDecoration: 'none' }}>
          <TextLink label="Label" />
        </a>
      </Variants.Cell>
      <Variants.Cell>
        <a href="#" id="visited" style={{ textDecoration: 'none' }}>
          <TextLink label="Label" id="hover" />
        </a>
      </Variants.Cell>
      <Variants.Cell>
        <a href="#" id="visited" style={{ textDecoration: 'none' }}>
          <TextLink label="Label" id="pressed" />
        </a>
      </Variants.Cell>
      <Variants.Cell>
        <a href="#" id="visited" style={{ textDecoration: 'none' }}>
          <TextLink label="Label" disabled />
        </a>
      </Variants.Cell>
      <Variants.Cell>
        <a href="#" id="visited" style={{ textDecoration: 'none' }}>
          <TextLink label="Label" id="focused" />
        </a>
      </Variants.Cell>
    </Variants.Row>
  </>
);

export const Overview = (): JSX.Element => (
  <Grid columns="$1">
    <Cell>
      <Section title="Main components">
        <UIStateTable>
          <TextLinkExamples />
        </UIStateTable>
      </Section>
    </Cell>
    <Cell>
      <Section title="Usage Examples">
        <Text.Body.Normal>
          This is an example of a text link in the
          <TextLink px="$4" label="middle" />
          of a text using horizontal padding (default).
        </Text.Body.Normal>
      </Section>
    </Cell>
    <Cell>
      <TextLink px="$0" label="Example without horizontal padding" />
    </Cell>
  </Grid>
);

Overview.parameters = {
  pseudo: {
    hover: '#hover',
    focus: '#focused',
    active: '#pressed',
    visited: '#visited',
  },
};
