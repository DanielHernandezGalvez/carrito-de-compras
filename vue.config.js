const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

const path = require("path");

module.exports = {
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule("mp3")
      .test(/\.mp3$/)
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => {
        options = options || {}; // Añade esta línea para asegurar que options no sea undefined
        options.limit = 8192;
        return options;
      });
  },
  configureWebpack: {
    resolve: {
      alias: {
        // Agrega esta línea si tus archivos MP3 están en la misma carpeta que App.vue
        assets: path.resolve(__dirname, "./src"),
      },
    },
  },
};
