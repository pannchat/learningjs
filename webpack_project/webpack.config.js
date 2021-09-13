const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports={
    entry: './src/index.js',
    output: {
        filename : 'bundle.[hash].js',
        path : path.resolve(__dirname, 'dist'),
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    // {   
                    //     loader : 'style-loader',
                    //     options:{
                    //         injectType : 'singletonStyleTag'
                    //     }
                    // },
                    {
                        loader : 'css-loader',
                        options:{
                            modules:true
                        }  
                    }
                ],
            },{
                test: /\.hbs$/,
                use: ['handlebars-loader']
            }
        ]
    },
    plugins : [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack',
            template: './template.hbs',
            meta: {
                viewport: 'width=device-width, initial-scale=1'
            }
        }),
        new CleanWebpackPlugin(),
    ],
    mode:'none'
}