<template>
  <div style="margin: 20px">
    <el-row>
      <el-col :span="22">
        &nbsp
      </el-col>
      <el-col :span="2">
        <el-button size="mini" type="primary">保存</el-button>
      </el-col>
    </el-row>
    <!--<el-table :data="financeCostAlloc.table" :span-method="objectSpanMethod" size="small" border-->
              <!--style="width: 100%; margin-top: 20px">-->
      <!--<el-table-column fixed prop="shareContent" label="分摊内容"></el-table-column>-->
      <!--<el-table-column width="180" fixed prop="itemizedContent" label="细项分摊内容"></el-table-column>-->
      <!--<el-table-column prop="" align="center" label="各业态指标">-->
        <!--<el-table-column prop="highRise" width="180" label="高层（18层以上，但<100M)"></el-table-column>-->
        <!--<el-table-column prop="townhouse" width="180" label="联排别墅"></el-table-column>-->
        <!--<el-table-column prop="salesBusiness" label="销售商业"></el-table-column>-->
        <!--<el-table-column prop="carport" width="180" label="非人防车库"></el-table-column>-->
        <!--<el-table-column prop="total" width="180" label="合计(m2，万元)"></el-table-column>-->
      <!--</el-table-column>-->
    <!--</el-table>-->
    <tree-table :data="data" :columns="columns" :type="'col'" :rowCallback="handleCurrentChange" :evalFunc="func"
                :evalArgs="args"
                :stripe="true" :selection-change="CalculateCost(data)" :showLevel='level' border>
    </tree-table>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import treeTable from '@/components/TreeTable'
  import treeToArray from '@/components/treeTable/customEval'

  export default {
    components: { treeTable },
    data() {
      return {
        data: [{}],
        columns: [
          {
            title: '分摊内容',
            value: 'shareinfo',
            type: 'text',
            width: 300,
            index: 0,
            fixed: 'left',
            // 整列样式 可选
            colClass: 'font-center',
            mergeFlag: true
          },
          {
            title: '细项分摊内容',
            value: 'detailshareinfo',
            type: 'text',
            width: 200,
            index: 2,
            focus: false
          }, {
            title: '高层（18层以上，但<100M)',
            value: 'sharetype',
            type: 'input',
            width: 200,
            index: 4,
            focus: false
          }, {
            title: '联排别墅',
            value: 'shareinfoparentid',
            type: 'input',
            width: 200,
            index: 5,
            focus: false
          }, {
            title: '销售商业',
            value: 'haschild',
            type: 'input',
            width: 200,
            index: 6,
            focus: false
          }, {
            title: '非人防车库',
            value: 'JDMJ',
            type: 'input',
            width: 200,
            index: 7,
            focus: false
          }, {
            title: '合计(m2，万元)',
            value: 'rentareaonroad',
            type: 'input',
            width: 200,
            index: 8,
            focus: false
          }
        ],
        level: 1,
        func: treeToArray,
        args: [null, null, true, 'timeLine'],
        financeCostAlloc: {
          table: [
            {
              shareContent: '规划指标（m2)',
              itemizedContent: '用地面积',
              superTall: '混凝土框架',
              highRise: '39,073',
              smallTop: '-',
              gardenHouse: '0%',
              stackedTownhouses: '0%',
              townhouse: '0%',
              praetorium: '0%',
              affordableHouses: '2',
              condo: '3',
              commercial: '3',
              sohoLeveling: '3',
              sohoPycnocline: '3',
              sohoLevelingHigh: '3',
              sohoPycnoclineHigh: '3',
              salesBusiness: '3',
              budgetHotel: '3',
              starredHotel: '3',
              officeBuilding: '3',
              officeBuildingHigh: '3',
              carport: '3',
              storeroom: '3',
              total: '39,073'
            },
            {
              shareContent: '',
              itemizedContent: '可租售面积',
              superTall: '0',
              highRise: '91,800',
              smallTop: '-',
              gardenHouse: '10.71%',
              stackedTownhouses: '10.71%',
              townhouse: '10.71%',
              praetorium: '10.71%',
              affordableHouses: '10.71%',
              condo: '10.71%',
              commercial: '10.71%',
              sohoLeveling: '10.71%',
              sohoPycnocline: '10.71%',
              sohoLevelingHigh: '10.71%',
              sohoPycnoclineHigh: '10.71%',
              salesBusiness: '10.71%',
              budgetHotel: '10.71%',
              starredHotel: '10.71%',
              officeBuilding: '10.71%',
              officeBuildingHigh: '10.71%',
              carport: '10.71%',
              storeroom: '10.71%',
              total: '180,151'
            },
            {
              shareContent: '',
              itemizedContent: '其中：地上可租售',
              superTall: '',
              highRise: '91,800',
              smallTop: '-',
              gardenHouse: '-',
              stackedTownhouses: '-',
              townhouse: '-',
              praetorium: '-',
              affordableHouses: '-',
              condo: '-',
              commercial: '-',
              sohoLeveling: '-',
              sohoPycnocline: '-',
              sohoLevelingHigh: '-',
              sohoPycnoclineHigh: '-',
              salesBusiness: '-',
              budgetHotel: '-',
              starredHotel: '-',
              officeBuilding: '-',
              officeBuildingHigh: '-',
              carport: '-',
              storeroom: '-',
              total: '-'
            },
            {
              shareContent: '开发成本（元/平米）',
              itemizedContent: '用地面积',
              superTall: '混凝土框架',
              highRise: '39,073',
              gardenHouse: '0%',
              smallTop: '-',
              stackedTownhouses: '0%',
              townhouse: '0%',
              praetorium: '0%',
              affordableHouses: '2',
              condo: '3',
              commercial: '3',
              sohoLeveling: '3',
              sohoPycnocline: '3',
              sohoLevelingHigh: '3',
              sohoPycnoclineHigh: '3',
              salesBusiness: '3',
              budgetHotel: '3',
              starredHotel: '3',
              officeBuilding: '3',
              officeBuildingHigh: '3',
              carport: '3',
              storeroom: '3',
              total: '39,073'
            },
            {
              shareContent: '',
              itemizedContent: '可租售面积',
              superTall: '0',
              highRise: '91,800',
              gardenHouse: '10.71%',
              smallTop: '-',
              stackedTownhouses: '10.71%',
              townhouse: '10.71%',
              praetorium: '10.71%',
              affordableHouses: '10.71%',
              condo: '10.71%',
              commercial: '10.71%',
              sohoLeveling: '10.71%',
              sohoPycnocline: '10.71%',
              sohoLevelingHigh: '10.71%',
              sohoPycnoclineHigh: '10.71%',
              salesBusiness: '10.71%',
              budgetHotel: '10.71%',
              starredHotel: '10.71%',
              officeBuilding: '10.71%',
              officeBuildingHigh: '10.71%',
              carport: '10.71%',
              storeroom: '10.71%',
              total: '180,151'
            },
            {
              shareContent: '',
              itemizedContent: '其中：地上可租售',
              superTall: '',
              highRise: '91,800',
              gardenHouse: '-',
              smallTop: '-',
              stackedTownhouses: '-',
              townhouse: '-',
              praetorium: '-',
              affordableHouses: '-',
              condo: '-',
              commercial: '-',
              sohoLeveling: '-',
              sohoPycnocline: '-',
              sohoLevelingHigh: '-',
              sohoPycnoclineHigh: '-',
              salesBusiness: '-',
              budgetHotel: '-',
              starredHotel: '-',
              officeBuilding: '-',
              officeBuildingHigh: '-',
              carport: '-',
              storeroom: '-',
              total: '-'
            }
          ]
        },
        value8: 0
      }
    },
    created: function() {
      this.$store.dispatch('SaveStandardCostStatementShareFinance', { standardcostid: 123 }).then(data => {
        this.data = data.FinancePlanningDtoList
        console.log(data)
      })
    },
    methods: {
      ...mapActions(['GetSpecialItem', 'CalculateCost', 'SaveSpecialItem']),
      // 行选中回调，判断是否可以增加
      handleCurrentChange(val) {
        this.selectValue = val
        this.addBtnFlag = true
        this.delBtnFlag = true
        if (this.selectValue && this.selectValue.addFlag) {
          this.delBtnFlag = false
          this.addBtnFlag = false
        } else {
          if (val && val.level === 1) {
            console.log('第一层不可添加')
          } else {
            this.findIndex(this.data, val)
          }
        }
      },
      findIndex(item, value) {
        var haveChildrenFlag = true
        var lastChildrenFlag = false
        for (let i = 0; i < item.length; i++) {
          if (value && item[i]) {
            if (value.id === item[i].id) { // 判断是否id相等，为找到i
              if ((item.length - 1) === i) { // 判断是否为最后一项
                lastChildrenFlag = true
              }
            }
          }
          if (item[i].children) {
            if (item[i].children.length > 0) {
              this.findIndex(item[i].children, value)
            }
            haveChildrenFlag = false
          }
          // 如果同级没有子级，并且是最后一项，新增按钮可以点击
          if (haveChildrenFlag && lastChildrenFlag) {
            this.addBtnFlag = false
          }
        }
      },
      // 增加方法
      addSpecialItem() {
        this.findSpecialItem(this.data, this.selectValue.id)
      },
      // 递归查询，符合条件的项增加
      findSpecialItem(item, id) {
        for (let i = 0; i < item.length; i++) {
          if (id === item[i].id) {
            var itemCopy = this.addCostCode(item[i])
            item.push(
              {
                id: `${this.idFlag++}`,
                costcode: itemCopy, // 唯一标识
                checked: false,
                costcodename: '',
                budgetvariable: '',
                specialunit: '',
                calculationRule: '',
                budgetCost: '',
                budgetUnitPrice: '',
                actualCost: '',
                referenceunitprice: '',
                remark: '',
                event: '事件5',
                comment: '无',
                addFlag: true
              }
            )
            this.addBtnFlag = true
            console.log('成功')
          }
          if (item[i].children) {
            if (item[i].children.length > 0) {
              this.findSpecialItem(item[i].children, id)
            }
          }
        }
      },
      // 序号+1
      addCostCode(item) {
        var itemCopy = item.costcode.split('.')
        var num = parseInt(itemCopy[itemCopy.length - 1].substring(0, itemCopy.length - 1)) + 1
        itemCopy.pop()
        if (num < 10) {
          num = '0' + num
        }
        itemCopy.push(num + ')')
        itemCopy = itemCopy.join('.')
        return itemCopy
      },
      // 删除方法
      delSpecialItem() {
        this.delSelectItem(this.data, this.selectValue.id)
      },
      // 递归找到位置，删除方法
      delSelectItem(item, id) {
        for (let i = 0; i < item.length; i++) {
          if (id === item[i].id) {
            item.splice(item.length - 1, 1)
            break
          }
          if (item[i].children) {
            if (item[i].children.length > 0) {
              this.delSelectItem(item[i].children, id)
            }
          }
        }
      },
      // 层级选项控制
      changeLevel(level) {
        console.log(level)
        this.level = level
      },
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 3 === 0) {
            return {
              rowspan: 3,
              colspan: 1
            }
          } else {
            return {
              rowspan: 0,
              colspan: 0
            }
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
