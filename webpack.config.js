let path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

const isProd = !isDev;
console.log("isDev:", isDev);


const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if (isProd) {
        config.minimizer = [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config
};

const filename = ext => isDev ? `[name].${ext}` : `[name].[chunkhash].${ext}`;

const cssLoaders = extra => {
    let loaders = [
        MiniCssExtractPlugin.loader,
        'css-loader',
    ];

    if (extra) {
        loaders.push(extra)
    }

    return loaders
};

let conf = {
    mode: "development",
    // watch: isDev,
    entry: {
        vendor: './src/vendor.js',
        main: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: filename('js'),
        publicPath: "",
        clean: true,
    },
    optimization: optimization(),
    devServer: {
        port: 8081,
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        // hot: isDev,
        // overlay: {
        //     warnings: true,
        //     error: true,
        // },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader:'babel-loader',
                // exclude: '/node_modules/',
            },
            {
                test: /\.s[ac]ss$/i,
                use: cssLoaders('sass-loader'),
            },
            {
                test: /\.css$/i,
                use: cssLoaders(),
            },
            {
                test: /\.(png|jpg|svg|gif)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            // bypassOnDebug: true, // webpack@1.x
                            // disable: true, // webpack@2.x and newer
                        },
                    },
                ]
            },
            {
                test: /\.(ttf|otf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            // {
            //     test: /\.xml$/,
            //     use: ['xml-loader']
            // },
            // {
            //     test: /\.csv$/,
            //     use: ['csv-loader']
            // },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        new HTMLWebpackPlugin({
            filename: "index.html",
            template: './src/index.html',
            minify: {
                collapseWhitespace: isProd
            },
            cache: false,
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/partials/header.html'),
            location: 'header',
            template_filename: ['index.html'],
        }),
        // new HtmlWebpackPartialsPlugin({
        //     path: path.join(__dirname, './src/partials/modal.html'),
        //     location: 'aside',
        //     template_filename: ['index.html', 'product.html']
        // }),
        // new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/img'),
                    to: path.resolve(__dirname, 'dist/img')
                },
                {
                    from: path.resolve(__dirname, 'src/assets/static'),
                    to: path.resolve(__dirname, 'dist'),
                }
            ],
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
    ],
};

module.exports = (env, options) => {
    let isProd = options.mode === 'production';
    conf.devtool = isProd ? false : 'eval-cheap-module-source-map';
    conf.target = isProd ? 'browserslist' : 'web';
    return conf;
};

