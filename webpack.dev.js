
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const mode = "development";

module.exports = merge.multiple(common, {
  web: {
    mode
  },
  node: {
    mode
  }
});
