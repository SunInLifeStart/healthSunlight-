<template>
  <div>
    <el-row>
      <el-col :span="16" class="card_section">
        <el-col :span="4" style="line-height: 2;font-size: 14px">层级选项：</el-col>
        <el-col :span="18" style="margin-left: -9%">
          <el-pagination background layout="pager" :current-page.sync="level" @current-change="changeLevel(level)" :total="30"></el-pagination>
        </el-col>
      </el-col>
      <el-col :span="8">
        <el-col :span="10" :offset="14">
          <el-button size="mini" type="text" @click="dialogVisible = true" class="addBtn">保存</el-button>
          <el-button size="mini" type="text" @click="dialogVisible = true" class="addBtn">保存</el-button>
        </el-col>
      </el-col>
    </el-row>
    <!--引入弹框-->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>引入数据库数据后，当前填写的数据将被覆盖，请做好备份！确认是否引入？</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
    <tree-table :data="data1" :columns="columns1" :type="'col'" :rowCallback="handleCurrentChange" :evalFunc="func" :evalArgs="args"
                :stripe="true" :selection-change="CalculateCost(data1)" :showLevel='level' border>
    </tree-table>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import treeTable from '@/components/TreeTable'
  import treeToArray from '@/components/treeTable/customEval'
export default {
    components: { treeTable },
    name: 'noConstructionCost',
    data() {
      return {
        value8: 0,
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
        dialogVisible: false,
        data1: [{}],
        func: treeToArray,
        args: [null, null, true, 'timeLine'],
        columns1: [
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
            title: '原始指标说明',
            value: 'indicatorsremark',
            type: 'input',
            width: 200,
            index: 3,
            // 整列样式 可选
            colClass: 'bg_lightBlue'
          }, {
            title: '工程量',
            value: 'engineerdata',
            type: 'input',
            width: 200,
            index: 4,
            focus: false
          }, {
            title: '单位',
            value: 'coefficientunit',
            type: 'input',
            width: 200,
            index: 5,
            focus: false
          }, {
            title: '单价(元)',
            value: 'engineerunit',
            type: 'input',
            width: 200,
            index: 6,
            focus: false
          }, {
            title: '高层(18层以上，<100m)',
            value: 'nowbuildareaunitprice',
            type: 'input',
            width: 200,
            index: 7,
            focus: false
          }, {
            title: '花园洋房 (9层以下）',
            value: 'costcodelv',
            type: 'input',
            width: 200,
            index: 8,
            focus: false
          }, {
            title: '地下室',
            value: 'costcode',
            type: 'input',
            width: 200,
            index: 8,
            focus: false
          }, {
            title: '合价(万元)',
            value: 'sumprice',
            type: 'input',
            width: 200,
            index: 8,
            focus: false
          }, {
            title: '建筑面积平米造价(元/平米)',
            value: 'leaseunit',
            type: 'input',
            width: 200,
            index: 8,
            focus: false
          }, {
            title: '实际建筑面积平米造价(元/平米)',
            value: 'costremark',
            type: 'input',
            width: 200,
            index: 8,
            focus: false
          }, {
            title: '可租售平米造价（元/平米）)',
            value: 'isbulid',
            type: 'input',
            width: 200,
            index: 8,
            focus: false
          }, {
            title: '成本费用说明',
            value: 'remark',
            type: 'input',
            width: 200,
            index: 8,
            focus: false
          }
        ],
        level: 1
      }
    },
    created: function() {
      this.$store.dispatch('LookStandardNotBuild', { standardcostid: 123 }).then(data => {
        this.data1 = data.standardbuildcostList
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
        if (item) {
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
        this.level = level
      },
      handleRemove(file, fileList) {
      // console.log(file, fileList)
      },
      handleClose(done) { this.$confirm('确认关闭？').then(_ => { done() }).catch(_ => {}) }
    }
}
</script>

<style scoped>
</style>
