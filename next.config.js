require('dotenv').config();
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');

module.exports = withSass({
    webpack: (config, options) =>
    {
        const { isServer, dev } = options;
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 100000,
                name: '[name].[ext]'
              }
            }
          });
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.BASE': JSON.stringify(process.env.BASE),
                'process.env.IDENTITY_POOL_ID': JSON.stringify(process.env.IDENTITY_POOL_ID),
                'process.env.IOT_HOST': JSON.stringify(process.env.IOT_HOST),
                'process.env.IOT_CLIENT': JSON.stringify(process.env.IOT_CLIENT)  
            })
        );
        config.node =
        {
            fs: 'empty',
            tls: 'empty'
        };
        return config;
    }
});