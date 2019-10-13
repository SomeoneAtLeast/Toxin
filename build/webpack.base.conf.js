const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}

const PAGES_DIR_1 = `${PATHS.src}/pages/main-pages`
const PAGES_DIR_2 = `${PATHS.src}/pages/ui-kit-pages/headers-and-footers`
const PAGES_1 = fs.readdirSync(PAGES_DIR_1).filter(fileName => fileName.endsWith('.pug'))
const PAGES_2 = fs.readdirSync(PAGES_DIR_2).filter(fileName => fileName.endsWith('.pug'))

const IMG_DIRS = fs
  .readdirSync(`${PATHS.src}/blocks`)
  .filter((dirName) => fs.lstatSync(`${PATHS.src}/blocks/${dirName}`).isDirectory());


module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src,
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    // publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.pug$/,
      loader: 'pug-loader'
    },{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    },  {
      test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
        name: 'assets/fonts/[name].[ext]'
      }
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: 'assets/img/[name].[ext]'
      }
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: `${PATHS.src}./postcss.config.js` } }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    },]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].css`,
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
      // { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/static`, to: '' },
          ...IMG_DIRS.map((item) => {
        return { context: `${PATHS.src}/blocks/${item}/img`, from: '**/*', to: './assets/img' };
      })
    ]),

    ...PAGES_1.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR_1}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    })),

    ...PAGES_2.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR_2}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    })),
  ],
}