const loose = true

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        loose,
        modules: false,
      },
    ],
  ],
  plugins: ['annotate-pure-calls'],
}
