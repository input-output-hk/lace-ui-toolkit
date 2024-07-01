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

We use [Chromatic](https://www.chromatic.com/docs/) for visual testing and UI regression.

Our storybook is published to Chromatic and accessible by following: [https://storybook.lw.iog.io/](https://storybook.lw.iog.io/)

### Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

- `fix`: bug fixes, e.g. fix crash due to deprecated method.
- `feat`: new features, e.g. add new method to the module.
- `refactor`: code refactor, e.g. migrate from class components to hooks.
- `docs`: changes into documentation, e.g. add usage example for the module..
- `test`: adding or updating tests, e.g. add integration tests using detox.
- `chore`: tooling changes, e.g. change CI config.

Our pre-commit hooks verify that your commit message matches this format when committing.

### Linting and tests

[ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [TypeScript](https://www.typescriptlang.org/)

We use [TypeScript](https://www.typescriptlang.org/) for type checking, [ESLint](https://eslint.org/) with [Prettier](https://prettier.io/) for linting and formatting the code.

Our pre-commit hooks verify that the linter and format pass when committing.

## Code Review

During the code review, we aim to improve the overall product quality.

- Reviews should be concise and written in neutral language. Critique the code, not the author, and be respectful.
- Over-communicate your thoughts in the initial message, as it saves time on back and forth communication cycles.

### Merge Review

The PR commit messages will play an essential role in our release process. Use squash and rebase for reorganizing the messages so they are self-contained and explanatory.

### Versioning and Publishing

We follow [semantic versioning](https://semver.org/) and use [semantic release](https://github.com/semantic-release/semantic-release) for automatic versioning and publishing npm package to [GitHub Package Registry](https://github.com/input-output-hk/lace-ui-toolkit/pkgs/npm/lace-ui-toolkit).

> [!IMPORTANT]
>
> It's important to follow [Commit message convention](#commit-message-convention), so semantic-release can automatically determine the right version to be published to registry.

### Useful links

- [Auto-squashing Git Commits](https://thoughtbot.com/blog/autosquashing-git-commits)
- [Code Review Developer Guide](https://google.github.io/eng-practices/review/)
- [Respectful Code Reviews](https://chromium.googlesource.com/chromium/src/+/master/docs/cr_respect.md)
