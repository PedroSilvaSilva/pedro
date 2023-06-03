const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      _assets: path.resolve(__dirname, "src/assets"),
      _components: path.resolve(__dirname, "src/components"),
      _pages: path.resolve(__dirname, "src/pages"),
      _store: path.resolve(__dirname, "src/store"),
      _theme: path.resolve(__dirname, "src/theme"),
      _utils: path.resolve(__dirname, "src/utils"),
    },
  },
};
