module.exports = {
  devServer: {
    // 代理
    proxy: {
      "^/api": {
        target: "https://vue3-fjord-81553.herokuapp.com",
        changeOrigin: true,
      },
    },
  },
};
