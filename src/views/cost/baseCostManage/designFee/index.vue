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
          <el-button size="mini"  @click="save" class="addBtn">保存</el-button>
        </el-col>
      </el-col>
    </el-row>
    <tree-table :data="data" :columns="columns" :type="'col'" :rowCallback="handleCurrentChange" :evalFunc="func" :evalArgs="args"
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
    name: 'designFee',
    data() {
      return {
        value8: 0,
        tableData: [
          {
            costItem: '01'
          }
        ],
        data: [{}],
        columns: [
          {
            title: '费项',
            value: 'costcodename',
            type: 'text',
            width: 300,
            index: 0,
            fixed: 'left',
            // 整列样式 可选
            colClass: 'font-center'
          },
          {
            title: '成本项目',
            value: 'costcode',
            type: 'text',
            width: 200,
            index: 2,
            focus: false
          }, {
            title: '计费基础',
            value: 'billingbasic',
            type: 'text',
            width: 200,
            index: 3,
            // 整列样式 可选
            colClass: 'bg_lightBlue'
          }, {
            title: '收费说明',
            value: 'chargeremark',
            type: 'input',
            width: 200,
            index: 4,
            focus: false
          }, {
            title: '收费依据',
            value: 'chargeorder',
            type: 'input',
            width: 200,
            index: 5,
            focus: false
          }, {
            title: '单位',
            value: 'chargernuit',
            type: 'text',
            width: 200,
            index: 6,
            focus: false
          }, {
            title: '高层',
            value: 'saleareaunroad',
            type: 'input',
            width: 200,
            index: 7,
            focus: false
          }, {
            title: '多层',
            value: 'rentareaonroad',
            type: 'input',
            width: 200,
            index: 8,
            focus: false
          }
        ],
        level: 1,
        func: treeToArray,
        args: [null, null, true, 'timeLine']
      }
    },
    created: function() {
      this.$store.dispatch('LookStandardCostDataBaseLimit', { standardcostid: 123 }).then(data => {
        this.data = data.DesignProducttypeDtoList
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
