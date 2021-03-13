module.exports = {
  bumpFiles: [
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
      'cd packages/react-js && npm publish && cd ../../packages/react-ts && npm update --save-exact @uzh-bf/code-style-react-js && npm publish',
  },
}
