const path = require('path');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  stats: 'normal',
  entry: {
    './app': './src/index',
    './ckeditor': './src/stylesheets/theme/ckeditor.scss',
    './print': './src/stylesheets/theme/print.scss'
  },
  externals: {
    jquery: 'jQuery',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'javascripts/[name].js',
    publicPath: "../../dist/"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        include: /images/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: /fonts/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                    {
                      // Options
                    },
                  ],
                ],
              },
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
        ]
      },
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '../src')
    ],
  },
  plugins: [
    new RemoveEmptyScriptsPlugin({
      extensions:['scss']
    }),
    new MiniCssExtractPlugin({
      filename: 'stylesheets/[name].css',
    }),
    new SVGSpritemapPlugin('./src/icons/*.svg', {
      sprite: {
        generate: {
          title: false,
        },
        prefix: false,
      },
      output: {
        filename: 'images/sprite.svg',
      }
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/static',
          to: './static',
        },
      ]
    }),
  ]
};
