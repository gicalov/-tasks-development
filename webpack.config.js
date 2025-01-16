import { fileURLToPath } from "url";
import { dirname } from "path";

// Определение __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  mode: "development",
  entry: "./src/components/index.tsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "index.js",
    library: "MyLibrary",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // соответствие .ts и .tsx файлам
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
