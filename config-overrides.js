const { override } = require('customize-cra')
const { addWebpackModuleRule } = require('customize-cra')

module.exports = override(
    addWebpackModuleRule({
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
    }),
    addWebpackModuleRule({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    }),
  );
