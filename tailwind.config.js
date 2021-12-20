module.exports = {
  corePlugins: false,
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
  safelist: [{ pattern: /prose/, variants: ['dark'] }],
};
