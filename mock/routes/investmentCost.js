/**
 * 投模成本
 * */
module.exports = {
  homePageData: {
    msg: 'success',
    code: 1,
    data: [
      {
        'investmentcostid': 1,
        'cityid': '1',
        'area': '通州',
        'landcode': '1',
        'landname': '大兴时代',
        'planname': '方案一',
        'landarea': 2222,
        'costamt': 1234,
        'modifyuserid': 1,
        'remark': '说明',
        'approvedstate': '审批中',
        'approvedate': '2018-02-11 22:00:00',
        'submitdate': '2018-02-11 22:00:00',
        'createuserid': 1,
        'createdate': '2018-02-11 22:00:00',
        'modifydate': '2018-02-11 22:00:00'
      },
      {
        'investmentcostid': 2,
        'cityid': '1',
        'area': '通州',
        'landcode': '1',
        'landname': '大兴时代',
        'planname': '方案一',
        'landarea': 2222,
        'costamt': 1234,
        'modifyuserid': 1,
        'remark': '说明',
        'approvedstate': '审批中',
        'approvedate': '2018-02-11 22:00:00',
        'submitdate': '2018-02-11 22:00:00',
        'createuserid': 1,
        'createdate': '2018-02-11 22:00:00',
        'modifydate': '2018-02-11 22:00:00'
      }
    ]
  },
  investmentVersion: {
    'msg': 'success',
    'code': 1,
    'data': [{
      ' investmentVersionId ': 1,
      ' cityId ': '1',
      ' area ': '西湖区',
      ' landCode ': 'JX2007-003',
      ' landName ': '西湖东北地块',
      ' planName ': '方案一',
      ' createUserid ': '1',
      ' aclculateDATE ': '2017-10-11',
      ' versionName ': 'v1',
      ' versionRemark ': '',
      ' changeType ': '查询',
      ' InvestmentCostId ': 1,
      ' cityName ': '杭州市',
      ' createUserId': '贾灿灿',
      'Path1': '',
      'Path2': 'ww.',
      '上传时间': '2017',
      '附件类型 ': 'word',
      '附件名 ': '杭州市',
      '备注': '贾灿灿'

    }]
  },
  updateOrAddInvestmentVersion: {
    'msg': 'success',
    'code': 1,
    'data': 1
  },
  investmentVersionSummary: {
    'msg': 'success',
    'code': 1,
    'data': [{
      '总成本': 1111,
      '特殊事项': 1111,
      ' glcaliberunit ': 22,
      ' cwcaliberunit ': 11,
      '建安单方': 11111111
    }]
  },
  deleteHomePage: {
    'msg': 'success',
    'code': 1,
    'data': []
  },
  costBase: {
    'msg': 'success',
    'code': 1,
    'data': [
      {
        'investmentbaseinfoid': 1,
        'contentinfo': '项目总体配置定位',
        'provalue': 'P1',
        'remark': '无',
        'investmentcostid': 1,
        'createdate': '2018-02-10 00:00:00',
        'modifydate': '2018-02-11 00:00:00'
      }
    ]
  },
  costBaseResult: {
    'msg': 'success',
    'code': true,
    'data': []
  },
  costSpecialMatter: {
    'msg': 'success',
    'code': 1,
    'data': [{
      'investmentspeciallistid': 1,
      'investmentcostid': 1,
      'costcode': '(A.03.01)',
      'costcodelevel': '1',
      'costcodename': 'ha',
      'budgetvariable': 1000,
      'specialunit': 'm',
      'inpactbuget': '有房屋、建筑物、构筑物影响（拆除、保护、改善、补偿）',
      'budgetunitprice': 500,
      'budgetcost': 2000000,
      'finalcost': 2000000,
      'remark': '无',
      'createdate': '2018-02-25 15:54:49',
      'modifydate': '2018-02-25 15:54:49',
      'flag': 'f',
      'costcodeparentid': '1',
      'haschild': 'f'
    }, {
      'investmentspeciallistid': 2,
      'investmentcostid': 1,
      'costcode': '(A.03.01)',
      'costcodelevel': '1',
      'costcodename': 'ha',
      'budgetvariable': 1000,
      'specialunit': 'm',
      'inpactbuget': '有房屋、建筑物、构筑物影响（拆除、保护、改善、补偿）',
      'budgetunitprice': 500,
      'budgetcost': 2000000,
      'finalcost': 2000000,
      'remark': '无',
      'createdate': '2018-02-25 15:54:49',
      'modifydate': '2018-02-25 15:54:49',
      'flag': 'f',
      'costcodeparentid': '1',
      'haschild': 'f'
    }]
  },
  costSpecialMatterResult: {
    'msg': 'success',
    'code': true,
    'data': []
  },
  costs: {
    'msg': 'success',
    'code': 1,
    'data': [{
      'investmentcostsummaryid': 1,
      'costcode': '1',
      'costcodelevel': '1',
      'costcodename': '土地综合价金（直接交给政府，取得财政票据）',
      'costcodeparentid': '2',
      'haschild': 'f',
      'budgetcostname': '土地综合价金（直接交给政府，取得财政票据）',
      'budgetbasis': '其他',
      'budgetvalue': '1',
      'budgeunit': '㎡',
      'costunitprice': 14500000000,
      'costamt': 145000,
      'saleunitprice': 3107.4,
      'buildareaunitprice': 900,
      'inamt': 14476.30,
      'remark': '无',
      'investmentcostid': 1,
      'createdate': '2018-02-11 22:00:00',
      'modifydate': '2018-02-11 22:00:00'
    }]
  },
  costResult: {
    'msg': 'success',
    'code': true,
    'data': []
  },
  costMaterialAllocations: {
    'msg': 'success',
    'code': 1,
    'data': [
      {
        'investmentmatpriceid': 1,
        'matpricename': '钢筋基准价格',
        'matpricecode': '1',
        'materialsprice': 4000,
        'materialsunit': '元/kg',
        'remark': '无',
        'investmentcostid': 1,
        'createdate': '2018-02-10 00:00:00',
        'modifydate': '2018-02-11 00:00:00'
      },
      {
        'investmentmatpriceid': 2,
        'matpricename': '钢筋基准价格',
        'matpricecode': '1',
        'materialsprice': 4000,
        'materialsunit': '元/kg',
        'remark': '无',
        'investmentcostid': 1,
        'createdate': '2018-02-10 00:00:00',
        'modifydate': '2018-02-11 00:00:00'
      }
    ]
  },
  costFinancialApportionment: {
    'msg': 'success',
    'code': 1,
    'data': [{
      'investmentcalibershareid': 1,
      'sharetype': '1',
      'shareinfo': '规划指标（m2)',
      'shareinfoparentid': '1',
      'haschild': 'f',
      'detailshareinfo': '用地面积',
      'producttypename': '高层(18层以上，但<100m)',
      'producttypecode': '6',
      'producttypeid': 6,
      'shareamt': 1000,
      'investmentcostid': 1,
      'createdate': '2018-02-10 00:00:00',
      'modifydate': '2018-02-11 00:00:00'
    }, {
      'investmentcalibershareid': 2,
      'sharetype': '1',
      'shareinfo': '规划指标（m2)',
      'shareinfoparentid': '1',
      'haschild': 'f',
      'detailshareinfo': '用地面积',
      'producttypename': '高层(18层以上，但<100m)',
      'producttypecode': '6',
      'producttypeid': 6,
      'shareamt': 1000,
      'investmentcostid': 1,
      'createdate': '2018-02-10 00:00:00',
      'modifydate': '2018-02-11 00:00:00'
    }]
  },
  costProjectConfiguration: {
    'msg': 'success',
    'code': 1,
    'data': [{
      'investmentproconfigid': 1,
      'buildtypecode': '1',
      'buildtypename': '住宅',
      'buildtypeparentid': '1',
      'haschild': 'f',
      'producttypename': '独栋别墅',
      'producttypecode': '1',
      'buildtypeidlv': 1,
      'constructconfig': 'P2',
      'jzconfig': 'D2',
      'jgconfig': 'S2',
      'jzunitcost': 2000,
      'investmentcostid': 1,
      'createdate': '2018-02-11 22:00:00',
      'modifydate': '2018-02-11 22:00:00'
    }, {
      'investmentproconfigid': 2,
      'buildtypecode': '1',
      'buildtypename': '住宅',
      'buildtypeparentid': '1',
      'haschild': 'f',
      'producttypename': '独栋别墅',
      'producttypecode': '1',
      'buildtypeidlv': 1,
      'constructconfig': 'P2',
      'jzconfig': 'D2',
      'jgconfig': 'S2',
      'jzunitcost': 2000,
      'investmentcostid': 1,
      'createdate': '2018-02-11 22:00:00',
      'modifydate': '2018-02-11 22:00:00'
    }]
  },
  costProjectConfigurationResult: {
    'msg': 'success',
    'code': true,
    'data': []
  },
  costLimitCoefficient: {
    'msg': 'success',
    'code': 1,
    'data': [{
      'investmentlimitdataid': 2,
      'costcode': '(A.02.02.01)',
      'costcodelevel': '3',
      'costcodename': '勘测费',
      'budgetbasic': '建设用地面积',
      'budgetbasicunit': '㎡'
    }]
  },
  costLimitCoefficientResult: {
    'msg': 'success',
    'code': true,
    'data': []
  },
  importCostLimitCoefficient: {
    'msg': 'success',
    'code': 1,
    'data': [
      {
        'investmentcostid': '1',
        'createdate': '2017-12-01',
        'cityid': '嘉兴',
        'area': '秀洲区',
        'landcode': 'JX-2017-003',
        'landname': '北干街道至上青公路地区',
        'planname': '方案1',
        'costamt': 22913,
        'landarea': 1123123,
        'glcaliberunit': 3300,
        'cwcaliberunit': 3300,
        'createuserid': 1
      }
    ]
  }
}
