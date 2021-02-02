module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "assets": "@/assets",
        "home": "@/home"
      }
    }
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.styl$/,
  //       loader: "stylus-loader", // compiles Styl to CSS
  //     },
  //   ]
  // }
}
