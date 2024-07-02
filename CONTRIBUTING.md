# Contributing

## Development workflow

To get started with the project, run `yarn` in the root directory to install the required dependencies:

```sh
yarn
```

We use [storybook](https://storybook.js.org/docs) for components development. To run storybook execute

```sh
yarn dev
```

## Linting and tests

We use [TypeScript](https://www.typescriptlang.org/) for type checking

```sh
yarn type-check
```

[ESLint](https://eslint.org/) for linting the code

```sh
yarn lint
```

and [Prettier](https://prettier.io/) for formatting the code

```sh
yarn format
```

> [!TIP] Pre-commit hook
>
> Our pre-commit hooks verify that the linter and format pass when committing.

We use [Chromatic](https://www.chromatic.com/docs/) for visual testing and UI regression.

Our storybook is published to Chromatic and accessible by following: [https://storybook.lw.iog.io/](https://storybook.lw.iog.io/)

## Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

- `fix`: bug fixes, e.g. fix crash due to deprecated method.
- `feat`: new features, e.g. add new method to the module.
- `docs`: changes into documentation, e.g. add usage example for the module..
- `style`: formatting, code style.
- `refactor`: code refactor, e.g. migrate from class components to hooks.
- `test`: adding or updating tests, e.g. add integration tests using detox.
- `ci`: changes to continuous integration, pipelines, workflows.
- `chore`: other changes not affecting functionality.

> [!TIP] Pre-commit hook
>
> Our pre-commit hooks verify that your commit message matches this format when committing.

### How to write good commit message

**Write the summary line of what you have done in the imperative mood**, that is as if you were
commanding someone.

Start the line with `fix`, `add`, `change` instead of ~~`fixed`~~, ~~`added`~~, ~~`changed`~~.

Don’t end the summary line with a period`.`.

## Code Review

During the code review, we aim to improve the overall product quality.

- Reviews should be concise and written in neutral language. Critique the code, not the author, and be respectful.
- Over-communicate your thoughts in the initial message, as it saves time on back and forth communication cycles.

### Merge Review

The PR commit messages plays an essential role in our versioning and publishing process. Rebase your branch with main to keep your code in sync and to have a linear commits history.

Create atomic commits which focuses on single thing at a time, and write good commit message, so it is self-contained and explanatory.

## Versioning and Publishing

We follow [semantic versioning](https://semver.org/) and use [semantic release](https://github.com/semantic-release/semantic-release) for automatic versioning and publishing npm package to [GitHub Package Registry](https://github.com/input-output-hk/lace-ui-toolkit/pkgs/npm/lace-ui-toolkit).

> [!IMPORTANT]
>
> It's important to follow [Commit message convention](#commit-message-convention), so semantic-release can automatically determine the right version to be published to registry.

## Useful links

- [Auto-squashing Git Commits](https://thoughtbot.com/blog/autosquashing-git-commits)
- [Code Review Developer Guide](https://google.github.io/eng-practices/review/)
- [Respectful Code Reviews](https://chromium.googlesource.com/chromium/src/+/master/docs/cr_respect.md)
