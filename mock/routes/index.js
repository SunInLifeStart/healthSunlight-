/**
 * 路由配置模块
 * @module routes
 */
const router = require('koa-router')();
const _ = require("lodash");
const url = require('../../api/url');

const user = require('./user');
const product = require('./product');
const todos = require('./todos');
const dashboard = require('./dashboard');
const projects = require('./projects');

router
  .post(url.login, function* () {
    if (this.request.body.username == 'admin') {
      this.body = user.login
    } else {
      const result = _.clone(user.login)
      result.data.token = "editor"
      this.body = result
    }
  })
  .get(url.userInfo, function* () {
    if (this.request.headers['authorization'] == 'admin') {
      this.body = user.getUserInfo
    } else {
      const result = _.clone(user.getUserInfo)
      result.data.roles = ["editor"]
      this.body = result
    }
  })
 
  .post(url.getItems, function* () {
    this.body = dashboard.data
  })

  //获取项目信息接口
  .post(url.getProjects, function* () {
    console.log(projects.data,'8888888888888999')
    this.body = projects.data
  })

  .post(url.todos, function* () {
    this.body = todos.todos
  })
  .get(url.product, function* () {
    const {
      start,
      limit,
      keyword
    } = this.query;

    this.body = product.getProduct(start, limit, keyword)
  })
  .post(url.product, function* () {
    this.body = product.createProduct(this.request.body)
  })
  .put(url.product, function* () {
    this.body = product.updateProduct(this.request.body)
  })
  .delete(url.product, function* () {
    this.body = product.deleteProduct(this.request.body.ids)
  })


module.exports = router;
