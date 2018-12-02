var webpack = require('webpack');
module.exports = {
  //插件项
  plugins: [
    //new webpack.optimize.CommonsChunkPlugin('common.js', ["p1", "p2"]),
    new webpack.optimize.UglifyJsPlugin({
	    compress: {
		    warnings: false,
		    drop_console: true
	    }
    }),
    new webpack.dependencies.LabeledModulesPlugin()
  ],
  //页面入口文件配置
  entry: {
    //main:'./js/main',
    //img:'./js/img'
    style: './style/style.scss',
    main: './script/index.js'
  },
  //入口文件输出配置
  output: {
    path: './dist/',
    publicPath: './dist/',
    filename: '[name].js'
    //sourceMapFilename:'[name].map'
  },
  module: {
    //加载器配置
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style!css!less?sourceMap' },
      //{ test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=819200' },
      {test: /\.scss$/, loader: "style!css!sass"}
      // {
      //   test: /\.scss$/,
      //   use: [{
      //     loader: "style-loader" // 将 JS 字符串生成为 style 节点
      //   }, {
      //     loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
      //   }, {
      //     loader: "sass-loader" // 将 Sass 编译成 CSS
      //   }]
      // }
    ]
  },
  devtool: 'source-map',
  //其它解决方案配置
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.json']
  }
};
