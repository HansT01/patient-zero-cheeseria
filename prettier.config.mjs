/** @type {import("prettier").Config} */
const config = {
  useTabs: false,
  tabWidth: 2,
  printWidth: 120,
  singleQuote: true,
  jsxSingleQuote: true,
  quoteProps: 'preserve',
  semi: false,
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
