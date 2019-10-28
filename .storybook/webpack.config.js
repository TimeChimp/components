const path = require('path');

module.exports = ({ config, mode }) => {
    config.module.rules.push({
        test: /\.(ts)$/,
        loader: require.resolve('ts-loader'),
        include: path.resolve(__dirname, '../src'),
    });

    config.module.rules.push({
        test: /\.scss$/,
        use: [
            'vue-style-loader',
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    implementation: require('sass'),
                    prependData: `
                        @import '@/assets/scss/main.scss';
					`,
                },
            },
        ],
        include: path.resolve(__dirname, '../src'),
    });

    config.resolve = {
        extensions: ['.js', '.vue', '.json', '.scss', '.ts', '.tsx'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': path.resolve('src'),
        },
    };

    return config;
};
