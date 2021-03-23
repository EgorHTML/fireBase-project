const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { access } = require('fs');
module.exports={
    watch: true,
    entry:{
        reg:'./src/index.js',
        home:'./src/home.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
      
        rules: [{
            include: path.resolve(__dirname, './src')
          },
          {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        ]
    },
    plugins:[new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './src/index.html',
        filename: 'index.html'
      }),
      new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './src/index2.html',
        filename: 'index2.html'
      })],
      mode: 'none',
    
}