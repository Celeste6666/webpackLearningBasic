module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3.8,
        targets: '> 2%, not dead',
        // Setting this to false will preserve ES modules(為了 tree shaking)
        modules: false,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
  ],
};
