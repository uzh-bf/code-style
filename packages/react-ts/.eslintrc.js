module.exports = {
  extends: ['airbnb-typescript', 'prettier'],
  plugins: [],
  rules: {
    'react/react-in-jsx-scope': 0,
  },
  parserOptions: {
    // tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}
