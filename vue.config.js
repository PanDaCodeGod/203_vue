module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 37.5, // 换算的基数
            //如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
            propList: ["*"],
            // 黑名单目录
            // exclude: /node_modules/
          })
        ]
      }
    }
  }
}