const path = require("path");
const { spawn } = require("child_process");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.jsx?$/,
        use: [{ loader: "babel-loader" }, { loader: "eslint-loader" }],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: "file-loader?name=img/[name]__[hash:base64:5].[ext]",
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader?name=font/[name]__[hash:base64:5].[ext]",
          },
        ],
      },
    ],
  },
  target: "electron-renderer",
  devtool: "cheap-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    stats: {
      colors: true,
      chunks: false,
      children: false,
    },
    before: () => {
      spawn("electron", ["."], {
        shell: true,
        env: process.env,
        stdio: "inherit",
      })
        .on("close", () => process.exit(0))
        .on("error", (spawnError) =>
          console.error("Error spawning electron process", spawnError)
        );
    },
  },
};
