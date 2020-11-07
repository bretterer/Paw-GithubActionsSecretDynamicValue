import webpack from 'webpack'
import path from 'path'

const name = 'GithubActionsSecretDynamicValue'

const production = process.env.NODE_ENV === 'production'

const config = {
  target: 'web',
  entry: [
    './src/GithubActionsSecretDynamicValue.js'
  ],
  output:{
    path: path.join(__dirname,
      './build/com.bretterer.paw.GithubActionsSecretDynamicValue'),
    pathInfo: true,
    publicPath: '/build/',
    filename: name+'.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ],
        test: /\.jsx?$/,
      }
    ]
  }
}
module.exports = config