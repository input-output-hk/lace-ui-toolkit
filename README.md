# Lace UI toolkit

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=input-output-hk_lace-ui-toolkit&metric=alert_status&token=98802db7b585471a39ab75e8baf01cff96c561db)](https://sonarcloud.io/summary/new_code?id=input-output-hk_lace-ui-toolkit)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=input-output-hk_lace-ui-toolkit&metric=security_rating&token=98802db7b585471a39ab75e8baf01cff96c561db)](https://sonarcloud.io/summary/new_code?id=input-output-hk_lace-ui-toolkit)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=input-output-hk_lace-ui-toolkit&metric=vulnerabilities&token=98802db7b585471a39ab75e8baf01cff96c561db)](https://sonarcloud.io/summary/new_code?id=input-output-hk_lace-ui-toolkit)

## Getting Started

### Prerequisites

- yarn v3.8.2. Follow [installation guide](https://yarnpkg.com/getting-started/install)

First, install the dependencies:

```bash
yarn install
```

## Development

[Storybook](https://storybook.js.org/docs) is used for development, run it using command:

```bash
yarn storybook
```

or

```bash
yarn dev
```

For more details check [CONTRIBUTING.md]('./CONTRIBUTING.md) guide.

## File naming convention

| FILES            |                                    PURPOSE                                     |
| ---------------- | :----------------------------------------------------------------------------: |
| \*.index.ts      |             Defines the public API to be imported by other modules             |
| \*.component.tsx |                            Defines the UI component                            |
| \*.css.ts        |                           Vanilla-extract CSS files                            |
| \*.stories.ts    |                                Storybook files                                 |
| \*.data.ts       | Defines the data/types representation of the UI component or application logic |
| \*.context.ts    |    Defines the UI component's inner state to be consumed by nested children    |
| \*.hooks.ts      |                Defines methods to manipulate the context state                 |

## Working with Storybook

### Stories format

| Type         |                                  PURPOSE                                  |
| ------------ | :-----------------------------------------------------------------------: |
| Overview     |          Dumb components presented as 1:1 parity from Figma file          |
| Interactions |            Used for testing and to simulate user interactions             |
| Controls     | Interact with a component's arguments dynamically without needing to code |

### Docs

Make sure to export `components` and `subcomponents` so they are displayed in the `Docs` tab.

```jsx
export default {
  title: 'List & tables/Assets table',
  component: AssetsTable,
  subcomponents: {
    TokenProfile,
    TokenAmount,
    MarketPrice,
  }
} as Meta;
```

## Working with Icons

Adding a new or updating existing icons require:

1. Add svg icon to `src/icons/raw` directory.
2. Run `build:icons` command (It will generate tsx components in `src/icons` directory and update `src/icons/index.ts`)

```bash
yarn build:icons
```

3. Commit all added and modified files.

To use icon in this project import it using lookup location `@icons/`

```
import AdaComponent from '@icons/AdaComponents';
```

To use icon in dependent project import it like this

```
import { AdaComponent } from '@input-output-hk/lace-ui-toolkit';
```

## Link Lace UI Toolkit for local development / testing

We recommend using [yalc](https://github.com/wclr/yalc) for linking a package from your local development environment to another project. This is particularly helpful when developing multiple packages that depend on each other and you want to test changes in real time without needing to publish the package to a registry.

> [!NOTE]
> Yalc is simple local npm registry which works across package managers. Learn more about [yalc](https://github.com/wclr/yalc)

If you work with projects using different package managers like npm, yarn, or pnpm the recommended approach is to use yalc, as it work across different package managers. You can easily link yarn based repository like **Lace UI Toolkit** to npm, yarn, or pnpm repositories in the same time.

### To use **yalc** follow steps described bellow:

1. Install dependencies: `yarn install`
2. Build project **Lace UI Toolkit**: `yarn build`
3. Publish to yalc: `yalc publish`
4. Link **Lace UI Toolkit** to dependent project: `yalc link @input-output-hk/lace-ui-toolkit`
5. Update package in dependant project after each published build: `yalc update @input-output-hk/lace-ui-toolkit`
6. Once development done unlink **Lace UI Toolkit**: `yalc remove @input-output-hk/lace-ui-toolkit`

### To effectively use **yalc** follow steps described bellow:

1. Install dependencies: `yarn install`
2. Watch for changes and build, publish and push updates: `yarn watch:pub`
   - `yarn watch:pub` uses commands `yarn build --watch` and `yalc push`.
   - `yalc push` is alias for `yalc publish --push`. Push will auto update **Lace UI Toolkit** in all linked projects.
3. Navigate to dependent project and link **Lace UI Toolkit**: `yalc link @input-output-hk/lace-ui-toolkit`
4. Once development done unlink **Lace UI Toolkit**: `yalc remove @input-output-hk/lace-ui-toolkit`

### Useful yalc commands

- `yalc link @input-output-hk/lace-ui-toolkit`: Link **Lace UI Toolkit** with other projects
- `yalc remove @input-output-hk/lace-ui-toolkit`: Unlink **Lace UI Toolkit** from other projects
- `yalc installations show @input-output-hk/lace-ui-toolkit`: List all projects linking to **Lace UI Toolkit**
- `yalc publish`: Publish package to yalc's registry
- `yalc update @input-output-hk/lace-ui-toolkit`: Update **Lace UI Toolkit** in dependent project
- `yalc push` or `yalc publish --push`: Publish package to yalc's registry and auto update dependant projects
