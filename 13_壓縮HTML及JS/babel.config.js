module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      corejs: 3.8,
      targets: '> 0.2%, not dead',
    }],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
  ],
};
