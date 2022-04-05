const { override, addWebpackPlugin } = require("customize-cra");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const path = require("path");

// modifying the path directory
const addCustomize = () => (config) => {
  config.output.path = path.join(
    path.dirname(config.output.path),
    "client/build"
  );
  const paths = require("react-scripts/config/paths");
  paths.appBuild = path.join(path.dirname(paths.appBuild), "client/build");
  return config;
};

module.exports = {
  webpack: override(
    // usual webpack plugin
    addWebpackPlugin(
      new MonacoWebpackPlugin({
        // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
        languages: ["typescript"],
      })
    ),
    addCustomize()
  ),
};
