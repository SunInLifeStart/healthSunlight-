<template>
  <div class="piecerow_main">
    <el-row class="piecerow">
      <el-col :span="24">
        <div style="padding: 10px;">
          <el-button class="saveBtn" size="mini" @click="SaveSpecialItem(data)" plain>保存</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row class="piecerow piecerow_bottom piecerow_text">
      <el-col :span="16" class="card_section">
        <div style="width: 60%;">
          <div class="hierarchy">层级选项：</div>
          <div class="paging">
            <el-pagination
              background
              layout="pager"
              :current-page.sync="level"
              @current-change="changeLevel(level)"
              :total="30">
            </el-pagination>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <el-col :span="14">&nbsp</el-col>
        <el-col :span="10">
          <el-button size="mini" icon="el-icon-delete" type="text" @click="delSpecialItem" class="delBtn" :disabled="delBtnFlag">删除</el-button>
          <el-button size="mini" icon="el-icon-circle-plus-outline" type="text" @click="addSpecialItem" class="addBtn" :disabled="addBtnFlag">增加</el-button>
        </el-col>
      </el-col>
      <tree-table :data="data" :columns="columns" :type="'col'" :rowCallback="handleCurrentChange" :evalFunc="func" :evalArgs="args"
                  :stripe="true" :selection-change="CalculateCost(data)" :showLevel='level' border>
      </tree-table>
    </el-row>
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
        level: 2,
        columns: [{}],
        func: treeToArray,
        args: [null, null, true, 'timeLine'],
        addBtnFlag: true, // 增加按钮的disabled
        delBtnFlag: true, // 删除按钮的disabled
        selectValue: '', // 当前选中的项，新增需要用到
        idFlag: 20 // 新增项的id，自增用
      }
    },
    created: function() {
      this.GetSpecialItem().then((data) => {
        // 表头 列信息
        this.data = data.data.items
        this.columns = data.data.columns
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
            var valFather
            if (val && val.parent) {
              valFather = val.parent.children
            }
            var haveChildrenFlag = false
            haveChildrenFlag = this.findIndex(valFather, haveChildrenFlag)
            if (!haveChildrenFlag) {
              this.addBtnFlag = false
            }
          }
        }
      },
      findIndex(item, haveChildrenFlag) {
        console.log(item)
        // var lastChildrenFlag = false
        if (item) {
          for (let i = 0; i < item.length; i++) {
            //          if (value && item[i]) {
            //            if (value.id === item[i].id) { // 判断是否id相等，为找到i
            //              if ((item.length - 1) === i) { // 判断是否为最后一项
            //                lastChildrenFlag = true
            //              }
            //            }
            //          }
            if (item[i].children && item[i].children.length > 0) {
              haveChildrenFlag = true
            }
          }
        }
        return haveChildrenFlag
      },
      // 增加方法
      addSpecialItem() {
        this.findSpecialItem(this.data, this.selectValue.id)
      },
      // 递归查询，符合条件的项增加
      findSpecialItem(item, id) {
        for (let i = 0; i < item.length; i++) {
          if (id === item[i].id) {
            var itemCopy = this.addCostCode(item[item.length - 1])
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
      }
    }
  }
</script>

<style scoped>
  /**
    项目地块图下边距
   */
  .piecerow_bottom {
    padding-bottom: 15px;
  }
  /**
    项目地块图和版本摘要
   */
  .piecerow {
    background-color: #feffff;
    margin-bottom: 10px;
    border-radius: 4px;
    color: #333;
    font-size: 14px;
  }
  .piecerow_main {
    background-color: #edf2f7;
    padding: 10px 10px;
  }
  .box-card {
    width: 100%;
  }
  /**
    层级选项分页样式
   */
  .paging{
    float: left;
    margin-top: 13px;
  }
  /**
    层级选项
   */
  .hierarchy{
    float: left;
    margin-top: 20px;
    margin-left: 10px;
    font-size: 14px;
  }
  /**
    删除
   */
  .delBtn{
    float: right;
    margin-right: 20px;
    margin-top: 10px;
    margin-left: 10px;
  }
  /**
    增加
   */
  .addBtn{
    float: right;
    margin-top: 10px;
  }
  /**
    保存按钮样式
   */
  .saveBtn{
    float: right;
    margin-bottom: 10px;
  }
</style>
