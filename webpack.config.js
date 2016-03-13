var path = require("path");

module.exports = {
  entry: path.join(__dirname,"src/app/index.react.js"),
  output: {
    path: path.join(__dirname, "build/client"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    contentBase: path.join(__dirname, "build/client")
  },
  module:{
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel', 
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};