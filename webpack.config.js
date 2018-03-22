const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!sass-loader!' + path.resolve('loaders/inject-global-scss') 
            }
              
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // Global Sweetalert
        new webpack.ProvidePlugin({
            'swal' : 'sweetalert2'
        }),

        new webpack.ProvidePlugin({
            'propTypes' : 'prop-types'
        })
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true
    }
};