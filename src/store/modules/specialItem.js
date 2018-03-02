/**
 * demo store
 */
import { getTreeTable, saveSpecialItem } from 'api/specialItem'
import { SET_TREETABLE, SAVE_SPECIALITEM } from '../../constants/specialItem'

// 递归计算价钱，改变文字颜色
function calculateCost(item) {
  for (let i = 0; i < item.length; i++) {
    if (item[i].budgetUnitPrice && item[i].budgetvariable) {
      // 1、	【实际成本】=【估算变量】*【估算单价】
      item[i].actualCost = parseFloat(item[i].budgetUnitPrice) * parseFloat(item[i].budgetvariable) || ''
      // 2、	【参考成本】=【估算变量】*【参考单价】
      item[i].budgetCost = parseFloat(item[i].budgetUnitPrice) * parseFloat(item[i].referenceunitprice) || ''
      // 5、	如果【实际成本】大于【参考成本】时，【实际成本】的数值变成红色，否则为绿色，相等时为黑色
      if (item[i].actualCost > item[i].budgetCost) {
        item[i].cellStyles = [
          {
            col: 7, // 列
            class: 'font_color_red' // 背景
          }
        ]
      } else if (item[i].actualCost < item[i].budgetCost) {
        item[i].cellStyles = [
          {
            col: 7, // 列
            class: 'font_color_green' // 背景
          }
        ]
      } else {
        item[i].cellStyles = [
          {
            col: 7, // 列
            class: 'black' // 背景
          }
        ]
      }
    }
    if (item[i].children) {
      if (item[i].children.length > 0) {
        calculateCost(item[i].children)
      }
    }
  }
  return item
}
const specialItem = {
  state: {
    treeTable: [] // 表格数据
  },
  mutations: {
    [SET_TREETABLE]: (state, data) => {
      state.treeTable = data
    },
    [SAVE_SPECIALITEM]: (state, data) => {
    }
  },
  actions: {
    // 获取各个项目信息
    GetSpecialItem({
      commit
    }, ids) {
      return getTreeTable(ids).then(result => {
        // 递归调用calculateCost，计算价钱
        calculateCost(result.data.items)
        commit(SET_TREETABLE, result)
        return result
      })
    },
    // 页面的元素发生变化时调用
    CalculateCost({
                    commit
                  }, result) {
      // 递归调用calculateCost，重新计算价钱
      calculateCost(result)
      commit(SET_TREETABLE, result)
    },
    // 获取各个项目信息
    SaveSpecialItem({
                     commit
                   }, ids) {
      return saveSpecialItem(ids).then(result => {
        commit(SAVE_SPECIALITEM, result)
        return result
      })
    }
  }
}

export default specialItem
