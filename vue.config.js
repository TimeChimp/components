const vueConfig = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                    @import '@/assets/scss/main.scss';
                    `
      }
    }
  }
};

module.exports = vueConfig;
