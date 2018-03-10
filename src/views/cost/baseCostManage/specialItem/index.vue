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
          <el-button size="mini"  class="addBtn" @click="save">保存</el-button>
          <i class="el-icon-circle-plus" style="margin-right: 10px">添加</i>
          <i class="el-icon-delete">删除</i>
        </el-col>
      </el-col>
    </el-row>
    <tree-table :data="data1" :columns="columns1" :type="'col'" :rowCallback="handleCurrentChange" :evalFunc="func"
                :evalArgs="args"
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
    name: 'specialItem',
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
        data1: [{}],
        func: treeToArray,
        args: [null, null, true, 'timeLine'],
        columns1: [
          {
            title: '',
            value: 'costcodename',
            type: 'text',
            width: 300,
            index: 0,
            fixed: 'left',
            // 整列样式 可选
            colClass: 'font-center'
          },
          {
            title: '特殊事项',
            value: 'specialmattername',
            type: 'text',
            width: 200,
            index: 2,
            focus: false
          }, {
            title: '估算变量',
            value: 'budgetvariable',
            type: 'input',
            width: 200,
            index: 3,
            // 整列样式 可选
            colClass: 'bg_lightBlue'
          }, {
            title: '单位',
            value: 'specialunit',
            type: 'input',
            width: 200,
            index: 4,
            focus: false
          }, {
            title: '影响变量估算',
            value: 'finalcost',
            type: 'input',
            width: 200,
            index: 5,
            focus: false
          }, {
            title: '估算单价',
            value: 'inpactbuget',
            type: 'input',
            width: 200,
            index: 6,
            focus: false
          }, {
            title: '估算参考成本',
            value: 'budgetunitprice',
            type: 'input',
            width: 200,
            index: 7,
            focus: false
          }, {
            title: '备注',
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
      this.$store.dispatch('LookStandardCostDataBaseSpecialList', { cityName: 123 }).then(data => {
        this.data1 = data[0].cmStandardSpeclilListVoList
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
      findIndex: function(item, value) {
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
</style>
