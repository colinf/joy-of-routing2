module.exports = {
  entry: "./src/main.js",
  output: {
    path: './build',
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  historyApiFallback: {
    index: '/build/'
  },
  devServer: {
    port: 3000
  },
  module: {
    loaders: [{
      test: /\.css?$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: "file-loader?name=img/img-[hash:6].[ext]"
    },
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        "presets": ["react", "es2015", "stage-0"]
      }
    }]
  }
};
