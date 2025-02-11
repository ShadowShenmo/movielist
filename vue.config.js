// vue.config.js
const { defineConfig } = require('@vue/cli-service');

async function getUnocssConfig() {
  const { default: UnocssPlugin } = await import('unocss/webpack');
  const { presetUno, presetAttributify, presetIcons } = await import('unocss');
  return {
    transpileDependencies: true,
    configureWebpack: {
      plugins: [
        UnocssPlugin({
          presets: [
            presetUno(),
            presetAttributify(),
            presetIcons()
          ]
        })
      ]
    }
  };
}

module.exports = async () => {
  return defineConfig(await getUnocssConfig());
};
