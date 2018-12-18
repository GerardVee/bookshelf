require('dotenv').config();
const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = withSass({
    webpack: (config) =>
    {
        /*const { isServer, dev } = options;
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 100000,
                name: '[name].[ext]'
              }
            }
          });*/
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
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
    },
    optimization: process.env.NODE_ENV === 'development' ? {} : {
        minimizer:
        [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions:
                {
                    compress: true,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: false
            })
        ]
    }
});