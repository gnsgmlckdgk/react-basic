const path = require('path');

module.exports = {
    name: 'gugudan',

    mode: 'development',
    devtool: 'eval',

    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {    // 입력
        app: ['./client'],
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [],
            }
        }],
    },

    output: {   // 출력
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },

}