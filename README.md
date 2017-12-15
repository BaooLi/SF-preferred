顺丰优选项目说明文档
项目目录介绍:

Alt text

├──src # 前端目录 
│ ├── api 
│ │ ├── 
│ │ ├── 
│ │ ├── 
│ │ ├── 
│ │ ├── 
│ │ └── 
│ ├── 
│ ├── component # 公用组件 
│ │ ├── 
│ │ ├── 
│ │ ├── 
│ │ ├── 
│ │ ├── 
│ │ └── 
│ ├──containers # 容器组件 
│ │ ├── 
│ │ ├── 
│ │ ├── 
│ │ ├── 
│ │ ├── 
│ │ └── 
│ ├── style # 公用样式 
│ ├── store#仓库 
│ │ ├── actions # redux action 
│ │ └── reducer # redux reducer 
│ ├── 
│ ├── index.html# HTML页面模板 
│ └── util # 工具类库 
├── 
├── dist # 编译后的目录 
├── 
├── config # 配置文件 
│ └── api 
├── router 
├── static # 静态资源服务 
│ └── img 
│ └── 
└──

代码克隆：
git clone https://github.com/xiexiaoge/SF-preferred 
启动项目：npm run dev

初始化项目
npm init -y
安装依赖的模块
后端依赖的模块
npm install body-parser connect-mongo ejs express express-session mongoose -S
前端依赖的模块 生产依赖
npm install es6-promise history react react-dom react-redux react-router-dom react-router-redux@next react-swipe react-transition-group redux redux-thunk swipe-js-iso whatwg-fetch -S
开发依赖模块 开发依赖
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 css-loader file-loader url-loader html-webpack-plugin less less-loader style-loader webpack webpack-dev-server html-webpack-plugin -D
资源文件
写项目需要用到的图片，psd，数据js文件

一个完整的redux流程
写一个后台接口 /api/lessons
在前台的api里增加获取此接口数据的方法,在index.js中写获取数据的方法，在自己的home.js中调用
定义新的动作类型action-types,一般有2个，开始获取，获取完成
在reducer里添加两个case以处理这两种动作类型
在actions里添加一个新的方法
在组件里调用action的方法
项目中遇到的问题分析：
