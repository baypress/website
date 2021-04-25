const React = require('react');
const { ThemeProvider } = require('styled-components');

const { theme } = require('./src/theme');

exports.wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
