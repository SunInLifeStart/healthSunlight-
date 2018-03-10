/**
 * 合同api
 * @param {*} data
 */
import fetch from './fetch'
import url from './url'

export function findContracts(data) {
  // let accurate = ''
  // data.accurates.forEach(element => {
  //   accurate += element.columnName + ' ' + element.condtion + ' ' + element.content + ' '
  // })
  // console.log(accurate)

  var _request = {
    // 'companyid': '4', // 组织机构
    // 'belprojectid': '4369', // 项目ID
    // 'isfromvo': 'N', // 结算状态
    // 'contracttypeid': '924', // 合同类别

    'companyid': data.organization || '', // 组织机构
    'belprojectid': '4369', // 项目ID
    'isfromvo': data.settlementState || '', // 结算状态
    'contracttypeid': data.contractItem || '', // 合同类别

    'displayorder': '4', // 结算状态标识
    'keyword': data.word || '', // 关键词
    'project': data.project || '', // 项目
    'recordstatus': data.state || '', // 状态
    'pageSize': data.pageSize || '', // 每页记录条数
    'pageNum': data.pageNum || '', // 页数

    'reftable': '', //
    'accurates’': [
      {
        columnName: '', // 列名
        condtion: '', // 条件
        content: ''// 内容
      }
    ]

  }
  // data.addConditions.forEach(function(v, i) {
  //   _request.columnname.push(v.columnName)
  //   _request.condtion.push(v.condtion)
  //   _request.content.push(v.content)
  // })
  return fetch({
    url: url.findContracts,
    method: 'post',
    data: _request
  })
}
export function jumpContract(keywords) {
  return fetch({
    url: url.jumpContract,
    method: 'post',
    data: keywords
  })
}
export function obtainPayment() {
  return fetch({
    url: url.obtainPayment,
    method: 'post'
  })
}
