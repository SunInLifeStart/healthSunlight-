module.exports = {
  changes: {
  //   code: 200,
  //   total: 12,
  //   data: [{
  //     id: '0001',
  //     approvalStatus: '审批中',
  //     statusAccounting: '未结算',
  //     nameProject: '西苑颐和园一期',
  //     nameContract: '西苑颐和园一期广告合同',
  //     supplierUnit: '天河广告公司',
  //     contractMoneyPlus: 18032.12,
  //     contractMoneyAfter: 19932.32,
  //     appliedAmount: 18800.34,
  //     radioPayment: 0.8212,
  //     contractDate: '2018-4-30',
  //     settlementAmount: 18800.35
  //   }
  //   ]
  // }
    'state': true,
    'message': '查询成功',
    'total': 12, // 自己加的，后端无返回
    'data': [
      {
        id: '123',
        state: '审批中',
        approvalCompleteTime: '2016-05-07',
        textNum: 'CY-SY2-BG-1054',
        issueds: [
            { num: 'CY-SY2-BG-1054' },
            { num: 'CY-SY2-BG-0988' }
        ],
        theme: '东西区背面2个橱窗侧边开捡修门 土建',
        changeAttribute: '设计变更',
        estimatedAmount: '500.00',
        orderNum: '50'
      },
      {
        id: '123',
        state: '草稿',
        approvalCompleteTime: '2016-05-07',
        textNum: 'CY-SY2-BG-1054',
        issueds: [
            { num: 'CY-SY2-BG-1054' },
            { num: 'CY-SY2-BG-0988' }
        ],
        theme: '东西区背面2个橱窗侧边开捡修门 土建',
        changeAttribute: '设计变更',
        estimatedAmount: '500.00',
        orderNum: '50'
      },
      {
        id: '123',
        state: '结转中',
        approvalCompleteTime: '2016-05-07',
        textNum: 'CY-SY2-BG-1054',
        issueds: [
            { num: 'CY-SY2-BG-1054' },
            { num: 'CY-SY2-BG-0988' }
        ],
        theme: '东西区背面2个橱窗侧边开捡修门 土建',
        changeAttribute: '设计变更',
        estimatedAmount: '500.00',
        orderNum: '50'
      }
    ]
  }
}
