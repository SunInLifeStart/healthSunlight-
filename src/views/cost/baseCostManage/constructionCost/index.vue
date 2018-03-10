<template>
  <div class="piecerow_main">
    <div class="piecerow">
      <el-tabs>
        <el-tab-pane label="地基与基础工程">
          <div class="betweenBack"></div>
          <el-row>
            <el-col :span="16" class="card_section">
              <el-col :span="4" style="line-height: 2;font-size: 14px">层级选项：</el-col>
              <el-col :span="18" style="margin-left: -9%">
                <el-pagination background layout="pager" :current-page.sync="level" @current-change="changeLevel(level)"
                               :total="30"></el-pagination>
              </el-col>
                <el-button size="mini" class="btnRight" icon="el-icon-document" type="text">引入</el-button>
                <el-button size="mini" class="btnRight" icon="el-icon-circle-plus-outline" type="text" @click="save">
                  保存
                </el-button>
            </el-col>
          </el-row>
          <tree-table :data="data" :columns="columns" :type="'col'" :rowCallback="handleCurrentChange" :evalFunc="func"
                      :evalArgs="args"
                      :stripe="true" :selection-change="CalculateCost(data)" :showLevel='level' border>
          </tree-table>
        </el-tab-pane>
        <el-tab-pane label="高层">
          <div class="betweenBack"></div>
          <el-row>
            <el-col :span="16" class="card_section">
              <el-col :span="4" style="line-height: 2;font-size: 14px">层级选项：</el-col>
              <el-col :span="18" style="margin-left: -9%">
                <el-pagination background layout="pager" :current-page.sync="level" @current-change="changeLevel(level)" :total="30"></el-pagination>
              </el-col>
            </el-col>
          </el-row>
          <tree-table :data="data" :columns="columns" :type="'col'" :rowCallback="handleCurrentChange" :evalFunc="func" :evalArgs="args"
                      :stripe="true" :selection-change="CalculateCost(data)" :showLevel='level' border>
          </tree-table>
        </el-tab-pane>
        <el-tab-pane label="洋房">洋房</el-tab-pane>
        <el-tab-pane label="非人防车库">非人防车库</el-tab-pane>
        <el-tab-pane label="人防车库">人防车库</el-tab-pane>
      </el-tabs>
    </div>
  </div>


  <!--<div  style="position: relative">-->
  <!--<div style="position: absolute;top:4px;right:40px;z-index: 1;">-->
  <!--<el-button  size="small" @click="save">保存</el-button>-->
  <!--</div>-->
  <!--<el-tabs type="border-card">-->
  <!--<el-tab-pane label="地基与基础工程">-->
  <!--<el-row>-->
  <!--<el-col :span="16" class="card_section">-->
  <!--<el-col :span="4" style="line-height: 2;font-size: 14px">层级选项：</el-col>-->
  <!--<el-col :span="18" style="margin-left: -9%">-->
  <!--<el-pagination background layout="pager" :current-page.sync="level" @current-change="changeLevel(level)" :total="30"></el-pagination>-->
  <!--</el-col>-->
  <!--</el-col>-->
  <!--<el-col :span="8">-->
  <!--<el-col :span="10" :offset="14">-->
  <!--<el-button size="mini" type="text" class="addBtn">保存</el-button>-->
  <!--</el-col>-->
  <!--</el-col>-->
  <!--</el-row>-->
  <!--<tree-table :data="data" :columns="columns" :type="'col'" :rowCallback="handleCurrentChange" :evalFunc="func" :evalArgs="args"-->
  <!--:stripe="true" :selection-change="CalculateCost(data)" :showLevel='level' border>-->
  <!--</tree-table>-->
  <!--</el-tab-pane>-->
  <!--<el-tab-pane label="高层">-->
  <!--<el-row>-->
  <!--<el-col :span="16" class="card_section">-->
  <!--<el-col :span="4" style="line-height: 2;font-size: 14px">层级选项：</el-col>-->
  <!--<el-col :span="18" style="margin-left: -9%">-->
  <!--<el-pagination background layout="pager" :current-page.sync="level" @current-change="changeLevel(level)" :total="30"></el-pagination>-->
  <!--</el-col>-->
  <!--</el-col>-->
  <!--</el-row>-->
  <!--<tree-table :data="data" :columns="columns" :type="'col'" :rowCallback="handleCurrentChange" :evalFunc="func" :evalArgs="args"-->
  <!--:stripe="true" :selection-change="CalculateCost(data)" :showLevel='level' border>-->
  <!--</tree-table>-->
  <!--</el-tab-pane>-->
  <!--<el-tab-pane label="洋房">洋房</el-tab-pane>-->
  <!--<el-tab-pane label="非人防车库">非人防车库</el-tab-pane>-->
  <!--<el-tab-pane label="人防车库">人防车库</el-tab-pane>-->
  <!--</el-tabs>-->
  <!--</div>-->
</template>

<script>
  import { mapActions } from 'vuex'
  import treeTable from '@/components/TreeTable'
  import treeToArray from '@/components/treeTable/customEval'

  export default {
    components: { treeTable },
    name: 'constructionCost',
    data() {
      return {
        value8: 0,
        level: 2,
        tableData: [
          {
            costItem: '01',
            projectName: '开发成本',
            originalDescription: '红线内景观面积',
            workAmount: '53,700.00',
            unit: '元',
            price: '413.72'
          }
        ],
        data: [{}],
        columns: [
          {
            title: '费项',
            value: 'expenditure',
            type: 'text',
            width: 300,
            index: 0,
            fixed: 'left',
            // 整列样式 可选
            colClass: 'font-center'
          },
          {
            title: '成本项目',
            value: 'costcodename',
            type: 'text',
            width: 200,
            index: 2,
            focus: false
          }, {
            title: '说明',
            value: 'indicatorsremark',
            type: 'input',
            width: 200,
            index: 3,
            // 整列样式 可选
            colClass: 'bg_lightBlue'
          }, {
            title: '数值',
            value: 'indicatorsdata',
            type: 'input',
            width: 200,
            index: 4,
            focus: false
          }, {
            title: '数值',
            value: 'coefficientdata',
            type: 'input',
            width: 200,
            index: 5,
            focus: false
          }, {
            title: '单位',
            value: 'coefficientunit',
            type: 'input',
            width: 200,
            index: 6,
            focus: false
          }, {
            title: '数值',
            value: 'engineerdata',
            type: 'input',
            width: 200,
            index: 7,
            focus: false
          }, {
            title: '单位',
            value: 'engineerunit',
            type: 'input',
            width: 200,
            index: 8,
            focus: false
          }, {
            title: '单价（元）',
            value: 'unitprice',
            type: 'input',
            width: 200,
            index: 9,
            focus: false
          }, {
            title: '合价（万元）',
            value: 'sumprice',
            type: 'input',
            width: 200,
            index: 10,
            focus: false
          }, {
            title: '建筑面积平方米造价（元/平米）',
            value: 'buildareaunitprice',
            type: 'input',
            width: 200,
            index: 10,
            focus: false
          }, {
            title: '实际建筑面积平方米造价（元/平米）',
            value: 'nowbuildareaunitprice',
            type: 'input',
            width: 200,
            index: 10,
            focus: false
          }, {
            title: '可建设建筑面积平方米造价（元/平米）',
            value: 'leaseunit',
            type: 'input',
            width: 200,
            index: 10,
            focus: false
          }, {
            title: '成本费用说明',
            value: 'costremark',
            type: 'text',
            width: 200,
            index: 10,
            focus: false
          }, {
            title: '备注',
            value: 'remark',
            type: 'input',
            width: 200,
            index: 10,
            focus: false
          }
        ],
        func: treeToArray,
        args: [null, null, true, 'timeLine']
      }
    },
    created: function() {
      this.$store.dispatch('LookStandardCostBuildBaseEngineer', { standardcostid: 123 }).then(data => {
        this.data = data.cost.costlist.details
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
              })
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
        this.level = level
      },
      /**
       * 保存提示
       */
      save() {
        this.$confirm('是否要保存数据？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '保存成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消保存!'
          })
        })
      }
    }
  }
</script>

<style scoped>
  /**
 标题的背景色，和高度
*/
  .piecerow >>> .el-tabs__item.is-active {
    color: #7986a9;
  }

  .piecerow >>> .el-tabs__active-bar {
    background-color: #7986a9;
  }

  .piecerow >>> .el-tabs__item.is-active:hover {
    color: #7986a9;
  }

  .piecerow >>> .el-tabs__nav {
    margin-left: 10px;
  }

  .piecerow >>> .el-tabs__header {
    margin: 0;
  }

  .piecerow {
    background-color: white;
    margin-bottom: 10px;
    border-radius: 4px;
    color: #333;
    font-size: 14px;
  }

  .piecerow_main {
    background-color: #edf2f7;
    padding: 10px 10px 0 10px;
  }

  .investmentClass >>> .el-form-item__error {
    top: 90%;
  }

  /**
  高级查询样式
 */
  .investmentClass {
    font-size: 13px;
    border: 1px solid #D5D5D5;
    border-left-style: none;
    border-top-style: none;
    border-right-style: none;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  }

  /**
    高级查询,input样式调整
   */
  .investmentClass > > > .el-collapse-item__content {
    padding-bottom: 0;
    font-size: 12px;
    color: #333;
  }

  .investmentClass > > > .el-col-6, .el-col-5 {
    height: 40px;
  }

  .investmentClass > > > .el-collapse-item__arrow {
    position: absolute;
    right: 65px;
  }

  .betweenBack {
    height: 10px;
    background-color: #edf2f7;
  }
</style>
