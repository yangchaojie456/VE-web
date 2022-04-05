const {
  override,
  disableEsLint,
  overrideDevServer,
  watchAll,
  addWebpackPlugin,
} = require("customize-cra");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
module.exports = {
  webpack: override(
    // usual webpack plugin
    addWebpackPlugin(
      new MonacoWebpackPlugin({
        // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
        languages: ["typescript"],
      })
    )
  ),
};
