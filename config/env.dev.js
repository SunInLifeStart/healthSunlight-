var merge = require('webpack-merge')
var envProd = require('./env.prod')

module.exports = merge(envProd,{
    NODE_ENV: '"development"',
    ENV_CONFIG: '"dev"',
    BACK_END: 'http://localhost:19000'
})
