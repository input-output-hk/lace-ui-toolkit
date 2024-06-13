module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn type-check',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': filenames => [
    `yarn lint:fix ${filenames.join(' ')}`,
    `yarn format ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': filenames => `yarn format ${filenames.join(' ')}`,
};
