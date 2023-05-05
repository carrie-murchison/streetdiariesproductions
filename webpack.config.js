const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.tsx',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist', 'public'),
    publicPath: '/'
},
resolve: {
extensions: ['.ts', '.tsx', '.js', '.json']
},
module: {
rules: [
{
test: /.(ts|tsx)$/,
use: 'ts-loader',
exclude: /node_modules/
},
{
test: /.(png|jpe?g|gif)$/i,
use: [
{
loader: 'file-loader'
}
]
},
{
test: /.css$/i,
use: ['style-loader', 'css-loader']
}
]
},
plugins: [
new HtmlWebpackPlugin({
template: './client/index.html'
})
],
devServer: {
historyApiFallback: true,
contentBase: './dist/public',
hot: true
}
};
 

