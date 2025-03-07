import React from 'react';

import { action } from '@storybook/addon-actions';
import type { Meta } from '@storybook/react';

import { LocalThemeProvider, ThemeColorScheme } from '../../design-tokens';
import { page, Section, Variants } from '../decorators';
import { Divider } from '../divider';
import { Flex } from '../flex';
import { Cell, Grid } from '../grid';

import { PasswordBox } from './password-box.component';
import * as cx from './password-box.stories.css';

import type { PasswordBoxProps } from './password-box.component';

const subtitle =
  'The password box represents a control for entering passwords.';

export default {
  title: 'Input Fields/Password Box',
  component: PasswordBox,
  decorators: [page({ title: 'Password Box', subtitle })],
} as Meta;

const VariantsTable = (): JSX.Element => (
  <Section title="Variants">
    <Variants.Table headers={['Password Visible', 'Password Hidden']}>
      <Variants.Row>
        <Variants.Cell>
          <PasswordBox
            placeholder="Input Text"
            label="Password"
            onChange={v => console.log(v.value)}
            defaultIsPasswordVisible
            onSubmit={action('onSubmit')}
          />
        </Variants.Cell>
        <Variants.Cell>
          <PasswordBox
            onChange={v => console.log(v.value)}
            placeholder="Input Text"
            label="Password"
            onSubmit={action('onSubmit')}
          />
        </Variants.Cell>
      </Variants.Row>
    </Variants.Table>
  </Section>
);

const PasswordBoxComponent = ({
  label = 'Password',
  ...props
}: Readonly<Partial<PasswordBoxProps>>): JSX.Element => (
  <PasswordBox
    onChange={v => console.log(v.value)}
    label={label}
    rootStyle={{ width: '200px' }}
    onSubmit={action('onSubmit')}
    {...props}
  />
);

const HoverPasswordBoxComponent = (): JSX.Element => (
  <PasswordBoxComponent
    defaultIsPasswordVisible
    containerClassName={cx.hoverEffect}
  />
);

const FocusedPasswordBoxComponent = (): JSX.Element => (
  <PasswordBoxComponent
    defaultIsPasswordVisible
    containerClassName={cx.focusEffect}
  />
);

const MainComponents = (): JSX.Element => (
  <>
    <Variants.Row>
      <Variants.Cell>
        <PasswordBoxComponent defaultIsPasswordVisible />
      </Variants.Cell>
      <Variants.Cell>
        <HoverPasswordBoxComponent />
      </Variants.Cell>
      <Variants.Cell>
        <PasswordBoxComponent
          placeholder="Input Text"
          defaultIsPasswordVisible
        />
      </Variants.Cell>
      <Variants.Cell>
        <PasswordBoxComponent
          label="Password"
          placeholder="Input Text"
          defaultIsPasswordVisible
          errorMessage="Error"
          rootStyle={{ width: '200px' }}
          onSubmit={action('onSubmit')}
        />
      </Variants.Cell>
      <Variants.Cell>
        <PasswordBoxComponent defaultIsPasswordVisible disabled />
      </Variants.Cell>
      <Variants.Cell>
        <FocusedPasswordBoxComponent />
      </Variants.Cell>
    </Variants.Row>
    <Variants.Row>
      <Variants.Cell>
        <PasswordBoxComponent placeholder="" />
      </Variants.Cell>
      <Variants.Cell>
        <HoverPasswordBoxComponent />
      </Variants.Cell>
      <Variants.Cell>
        <PasswordBoxComponent placeholder="Input Text" />
      </Variants.Cell>
      <Variants.Cell>
        <PasswordBoxComponent
          label="Password"
          placeholder="Input Text"
          defaultIsPasswordVisible
          errorMessage="Error"
          rootStyle={{ width: '200px', marginTop: '20px' }}
          onSubmit={action('onSubmit')}
        />
      </Variants.Cell>
      <Variants.Cell>
        <PasswordBoxComponent disabled />
      </Variants.Cell>
      <Variants.Cell>
        <FocusedPasswordBoxComponent />
      </Variants.Cell>
    </Variants.Row>
  </>
);

export const Overview = (): JSX.Element => {
  return (
    <Grid>
      <Cell>
        <Section title="Copy for use">
          <Flex flexDirection="column" alignItems="center" w="$fill" my="$32">
            <PasswordBoxComponent
              label="Password"
              rootStyle={{ width: '500px' }}
              onSubmit={action('onSubmit')}
            />
          </Flex>
        </Section>
        <VariantsTable />

        <Divider my="$64" />

        <Section title="Main components">
          <Variants.Table
            headers={[
              'Rest',
              'Hover',
              'Active/Pressed',
              'Error',
              'Disabled',
              'Focused',
            ]}
          >
            <MainComponents />
          </Variants.Table>
          <LocalThemeProvider colorScheme={ThemeColorScheme.Dark}>
            <Variants.Table>
              <MainComponents />
            </Variants.Table>
          </LocalThemeProvider>
        </Section>
      </Cell>
    </Grid>
  );
};
