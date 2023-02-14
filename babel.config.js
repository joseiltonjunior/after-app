module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@storage': './src/storage',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
