const vueConfig = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                        @import 'src/assets/scss/main.scss';
                    `
      }
    }
  }
};

// if (
//   process.env.NODE_ENV === "production" ||
//   process.env.NODE_ENV === "identity"
// ) {
//   vueConfig.chainWebpack = config => {
//     config.plugin("html").init((Plugin, args) => {
//       const newArgs = {
//         ...args[0]
//       };
//       newArgs.minify.removeAttributeQuotes = false;
//       return new Plugin(newArgs);
//     });

//     config.plugins.delete("prefetch");

//     config.plugin("preload").tap(options => {
//       options[0] = {
//         rel: "preload",
//         include: "initial"
//         // fileWhiteList: ['/\.woff$/']
//       };

//       return options;
//     });
//   };
// }

module.exports = vueConfig;
