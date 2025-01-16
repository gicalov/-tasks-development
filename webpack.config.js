const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/components/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "MyReactLibrary",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};
