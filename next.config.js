// next.config.js
const withTM = require('next-transpile-modules')(['tailwindcss']);

module.exports = withTM({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/ ,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    });

    return config;
  },
});
// use: ['style-loader', 'css-loader', 'postcss-loader'],