module.exports = {
  bumpFiles: [
    {
      filename: 'package.json',
      type: 'json',
    },
    {
      filename: 'package-lock.json',
      type: 'json',
    },
    {
      filename: 'packages/react-js/package.json',
      type: 'json',
    },
    {
      filename: 'packages/react-js/package-lock.json',
      type: 'json',
    },
    {
      filename: 'packages/react-ts/package.json',
      type: 'json',
    },
    {
      filename: 'packages/react-ts/package-lock.json',
      type: 'json',
    },
  ],
  scripts: {
    postbump:
      'npm run publish:react-js && npm update --save-exact @uzh-bf/code-style-react-js && npm install && npm run publish:react-ts',
  },
}
