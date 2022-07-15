const path = require('path')

module.export = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.tsx?$/,
            user: 'ts-loader',
            exclude: /node-modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}