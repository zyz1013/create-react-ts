const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
process.env.NODE_ENV = process.env.NODE_ENV || "production";

const isDev = process.env.NODE_ENV === "development";

const entry = {};
const plugins = [];
entry.main = ["./src/index.tsx"];
plugins.push(
  new HtmlWebpackPlugin({
    filename: "index.html",
    template: "./src/index.html"
  })
);
plugins.push(
  new webpack.DefinePlugin({
    API_URL: JSON.stringify("https://r.qa.innodealing.com"),
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
  })
);

if (isDev) {
  console.log(process.env.NODE_ENV);
}

const config = {
  mode: process.env.NODE_ENV,
  target: "web",
  entry: entry,
  context: __dirname,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
    // publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              // cacheDirectory: true, //使用缓存
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-transform-runtime"]
            }
          },
          {
            loader: "awesome-typescript-loader" // ts-loader和他的区别：awesome-typescript-loader功能更全
          }
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "[name]-[hash:8].[ext]",
              publicPath: "images/",
              outputPath: "images/"
            }
          }
        ]
      }
    ]
  },
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM"
  // },
  plugins,
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8888,
    hot: true,
    // open: true,
    inline: true
  }
};

module.exports = config;
