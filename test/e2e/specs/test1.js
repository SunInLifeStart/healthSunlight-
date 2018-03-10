// For authoring Nightwatch tests, see http://nightwatchjs.org/guide#usage
import {} from 'jest'
module.exports = {
  'login': function(browser) {
    // automatically uses dev Server port from /config.index.js default:
    // http://localhost:8080 see nightwatch.conf.js
    const devServer = browser.globals.devServerURL
    // 初始化一些数据
    const username = 'admin'
    const password = 'admin123'

    browser.url(devServer)
    // 等待程序1秒
      .waitForElementVisible('.login-container', 50000)
    // 等待5秒
      .pause(3000)
      .useCss() // we're back to CSS now
      .clearValue('input[name=username]')
      .pause(1000)
      .clearValue('input[name=password]')
      .pause(2000)
      // .setValue('input[name=username]', username)
      .pause(1000)
      .setValue('input[name=password]', password)

    // 判断此节点存在不存在
    browser
      .expect
      .element('.login-container')
      .to
      .be
      .present
    browser.pause(3000)

    // 点击登录
    browser.click('.el-button', function() {
      console.log('login')
    })
    // 等待4秒
    browser.pause(4000)
    browser.click('.hamburger-container', function() {
      console.log('click example')
    })
    browser.pause(2000)
    browser.click('.hamburger-container', function() {
      console.log('click example')
    })
    browser.click('.avatar-container', function() {
      console.log('click example')
    })
    browser.click('.avatar-container', function() {
      console.log('click example')
    })

    browser.pause(2000)
    // 结束
    browser.end()
    // .expect.containsText('h1', 'Welcome to Your Vue.js App')
    // .expect.elementCount('img', 1)
  }
}
