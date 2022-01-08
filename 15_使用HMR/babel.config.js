module.exports = {
  presets: [
    ['@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3.8,
        targets: '> 0.5%, not dead',
        // Setting this to false will preserve ES modules.
        modules: false,
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime'],
};
