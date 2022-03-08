module.exports = {
  env: {
    jest: true
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: ['prettier'],
  rules: {
    'max-len': 'off',
    'prettier/prettier': ['error'],
    'no-underscore-dangle': 0,
    'no-unused-vars': ['error', {argsIgnorePattern: 'next'}],
    camelcase: 0
  },
};
