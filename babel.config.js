module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          atoms: './src/components/atoms',
          molecules: './src/components/molecules',
          organisms: './src/components/organisms',
          img: './src/assets/images',
          pages: './src/pages',
          utils: './src/utils',
        },
      },
    ],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-optional-chaining',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/proposal-object-rest-spread',
  ],
  sourceMaps: false,
};
