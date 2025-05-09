const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js", // Your main JavaScript file
  output: {
    filename: "ElectronWebView.js", // Name of the output bundle
    path: path.resolve(__dirname, "dist"), // Output directory
    library: {
      type: "umd",
    },
    clean: true,
  },
  devtool: "source-map",
  target: ["electron-renderer"],
  externals: [
    {
      react: "react",
      "react-dom": "react-dom",
    },
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match JavaScript files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
