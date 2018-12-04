var path = require('path');

var ROOT_PATH = path.resolve(__dirname, './');
var SRC_PATH = path.resolve(__dirname, './src')
var DIST_PATH = path.resolve(__dirname, './dist');

module.exports = (env, argv) => {

    const mode = argv.mode;
    const watching = !!argv.watching;
    const dev = mode === 'development';
    const prod = mode === 'production';
    if (!dev && !prod) {
        throw new Error('Environment is not defined!');
    }

    var config = {
        context: ROOT_PATH,
        entry: './src/index.ts',
        output: {
            path: DIST_PATH,
            publicPath: '/',
            filename: prod ? 'bundle.min.js' : 'bundle.js',
            pathinfo: false,
            libraryTarget: 'umd' // SPFx
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader',
                    include: [
                        SRC_PATH
                    ],
                    exclude: /node_modules/,
                    options: {
                        transpileOnly: watching,
                    }
                },
            ]
        },
        plugins: [],
        resolve: {
            modules: [
                SRC_PATH,
                'node_modules',
            ],
            extensions: ['.ts', '.tsx', '.js', '.json', '.scss', '.css'],
        },
        externals: [
            'react',
            'react-dom',
        ],
        target: 'web',
        devtool: 'source-map'
    };

    return config;
};
