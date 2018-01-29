## 美嘉创想 rome 项目 vue版

## 技术栈

vue + vuex + vue-router + webpack3 + fetch + sass

## 部署

安装 npm install
开发模式运行 npm run dev
build生产代码 npm run build

## 项目结构

```
.
├─.babelrc                            // babel的配置
├─.config.json                        // 如果使用了ip代理，那么配置文件在这里
├─.eslintignore	                      // eslint设置忽略的文件
├─.eslintrc.json                      // eslint的配置文件
├─.gitignore                          // git忽略上传的文件
├─package.json                        // npm命令包
├─readme.md                           // 项目介绍
├─_gitattributes
├─test
|  └setup-test-env.js
├─src                                 // 页面主文件
|  ├─client.js
|  ├─history.js
|  ├─index.html                       // 入口html文件，配置静态菜单等全局常见变量
|  ├─routes.js                        // 路由配置
|  ├─utils                            // 公用的文件
|  |   ├─ajax.js                      // 发送异步获取数据的配置
|  |   └index.js                      // 发送异步数据前的准备工作
|  ├─style                            // 样式库
|  |   ├─base.less                    // 全局通用的样式
|  |   └theme.less                    // 存放变量的less
|  ├─store                            // redux的store的配置
|  |   └configureStore.js
|  ├─reducers                         // reduce的配置
|  |    ├─common.js
|  |    ├─house.js
|  |    ├─index.js
|  |    └tabList.js
|  ├─views                            // 项目绝大部分业务文件
|  |   ├─welcome.js
|  |   ├─test
|  |   |  ├─index.js
|  |   |  ├─sub.js
|  |   |  └third.js
|  |   ├─house
|  |   |   ├─houseManage.js
|  |   |   └index.js
|  ├─middleware                       
|  |     ├─index.js
|  |     ├─logger.js
|  |     └router.js
|  ├─images                           // 图片文件夹
|  |   ├─default.png
|  |   ├─leftBg.jpg
|  |   └navcontrol.png
|  ├─iconfont
|  |    ├─iconfont.eot
|  |    ├─iconfont.svg
|  |    ├─iconfont.ttf
|  |    └iconfont.woff
|  ├─containers                       // 全局的框架文件 
|  |     ├─App
|  |     |  ├─extra.js
|  |     |  ├─footer.js
|  |     |  ├─header.js
|  |     |  ├─index.js
|  |     |  ├─login.js
|  |     |  ├─rightAside.js
|  |     |  ├─tabList.js
|  |     |  ├─leftNav
|  |     |  |    └index.js
|  ├─constants
|  |     ├─actionTypes.js
|  |     └index.js
|  ├─components                        // 公用的组件库 
|  |     ├─index.less
|  |     ├─searchTable
|  |     |      └index.js
|  |     ├─searchForm
|  |     |     └index.js
|  |     ├─searchChosen
|  |     |      └index.js
|  |     ├─multiSelect
|  |     |      └index.js
|  ├─api                              // 整个项目API的url配置
|  |  ├─common.js
|  |  ├─house.js
|  |  └index.js
|  ├─actions                          // 整个项目的actions配置
|  |    ├─common.js
|  |    ├─house.js
|  |    └tabList.js
```