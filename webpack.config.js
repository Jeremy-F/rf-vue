const path = require('path');
const webpack = require('webpack');

const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')

let plugins = [];
let dev = !(process.env.NODE_ENV === "production");
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let extractSass = new ExtractTextPlugin({
    //filename: dev?"[name].css":"[name].[chunkhash:12].css",
    filename: dev?"[name].css":"[name].css",
    disable: dev
});
plugins.push(extractSass);
plugins.push(new webpack.HotModuleReplacementPlugin({}));
if(!dev){
    plugins.push(new UglifyJSPlugin());
    plugins.push(new ManifestPlugin());
    plugins.push(new CleanWebpackPlugin(['dist/js/*.js', 'dist/js/*.css'], {
        root:  path.resolve('./'),
        verbose: true
    }));
}
let config = {
        entry: './src/main.ts',
        output:{
            path: path.resolve(__dirname, 'dist/js/'),
            publicPath: '/dist/js/',
            //filename: dev?"main.js":"main.[hash:12].js"
            filename: dev?"main.js":"main.js"
        },
        resolve: {
            extensions: ['.js', '.ts', '.vue', '.html', '.sass', '.css'],
            alias:{'jquery': 'jquery/src/jquery.js'}
        },
        devtool: dev?"source-map":false,
        devServer: {
            noInfo: true,
            port: 8080,
            proxy: {}
        },
    module: {
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                    // the "scss" and "sass" values for the lang attribute to the right configs here.
                    // other preprocessors should work out of the box, no loader config like this necessary.
                    'scss': 'vue-style-loader!css-loader!sass-loader',
                    'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                }
                // other vue-loader options go here
            }
        },
        {
            test: /\.ts$/,
            use: [
                {
                    loader: 'ts-vue-loader',
                },
                {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                },
            ]
        },
        {
            test: /\.html$/,
            use: 'vue-template-loader'
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true,
                    },
                },
            ],
        },
        {
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'dist/fonts/'
                }
            }]
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }
    ]
},
plugins
};
module.exports = config;
