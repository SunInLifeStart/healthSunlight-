module.exports = {
  login: {
    code: 200,
    data: [
      {
        loginName: 'lichuan',
        name: '李川',
        token: '578345345',
        roles: ['admin'],
        avatar: 'user02.png',
      },
      {
        loginName: 'yangsirui',
        name: '杨思瑞',
        token: '578345348',
        roles: ['admin'],
        avatar: 'user02.png',
      }
    ]
  },
  getUserInfo: {
    code: 200,
    data: {
      name: 'TimeGap',
      avatar: 'user02.png',
      organizations: ['石家庄', '背景'],
      roles: ['admin']
    }
  }
}
