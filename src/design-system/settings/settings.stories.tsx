import React from 'react';

import { action } from '@storybook/addon-actions';
import type { Meta } from '@storybook/react';

import * as Button from '../buttons/';
import { page, Section, Variants } from '../decorators';
import { Flex } from '../flex';
import { Grid, Cell } from '../grid';

import { Setting } from './setting.component';
import { SettingsSection } from './settings-section.component';

export default {
  title: 'Settings/Overview',

  decorators: [
    page({
      title: 'Settings Components',
      subtitle:
        'These components can be used to render the sections and items on a settings page.',
    }),
  ],
} as Meta;

export const Overview = (): React.JSX.Element => (
  <div id="storybook">
    <Grid columns="$1">
      <Cell>
        <Section title="Usage Example">
          <Variants.Table>
            <Variants.Row>
              <Variants.Cell>
                <Flex justifyContent="center" w="$fill">
                  <SettingsSection title="Example Setting">
                    <Setting
                      description="this is an example of a first setting"
                      title="First Setting"
                      onClick={action('first setting clicked')}
                    />
                    <Setting
                      description="this is an example of a second setting"
                      title="Second Setting"
                      onClick={action('second setting clicked')}
                      addon={<Button.CallToAction label="test addon" />}
                    />
                  </SettingsSection>
                </Flex>
              </Variants.Cell>
            </Variants.Row>
          </Variants.Table>
        </Section>
      </Cell>
    </Grid>
  </div>
);
