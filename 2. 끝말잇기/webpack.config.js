const path = require('path');                   // NodeJS를 설치하면 path는 설치되어있다.
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'word-relay-setting',

    mode: 'development',    // 실서비스 : production
    devtool: 'eval',                // eval : 빠르게

    resolve: {
        // entry에서 입력 app 에 파일넣을때 검색할 확장자 설정, 이 설정이 없으면 app ['./client.jsx'] 와 같이 확장자 넣어서 추가 필요함
        extensions: ['.js', '.jsx']
    },
    entry: {    // 입력
        // client.jsx에서 WordRelay.jsx를 불러오기 때문에 WordRelay.jsx는 추가 할 필요 없다.
        app: ['./client'],
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 5% in KR', 'last 2 chrome versions'],   // browserslist
                        },
                    }],
                    '@babel/preset-react'
                ],
                plugins: [
                    'react-refresh/babel'
                ],
            }
        }],
    },
    plugins: [
        new RefreshWebpackPlugin()
    ],
    output: {   // 출력
        path: path.join(__dirname, 'dist'), // __dirname은 현재 파일의 절대경로를 동적으로 가져옴, 현재파일경로/dist
        filename: 'app.js',
        publicPath: '/dist/'
    },
    devServer: {
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
    }
}