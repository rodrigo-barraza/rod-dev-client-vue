const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   allowedHosts: 'all',
  //   host: 'development.rod.dev',
  //   port: 8080,
  // }

  // public: 'development.rod.dev:8080',
  // disableHostCheck: true,
})

// module.exports = {
//   devServer: {
//       port: 80,
//       disableHostCheck: true,
//   },
//   transpileDependencies: true,
// };
