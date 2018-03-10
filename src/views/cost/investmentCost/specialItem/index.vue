<template>
  <div class="piecerow_main">
    <el-row class="piecerow">
      <el-col :span="24">
        <div style="padding: 5px;">
            <el-button class="saveBtn" size="mini" @click="SaveSpecialItem(specialItem.treeTable.items)" plain>保存</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row class="piecerow piecerow_bottom piecerow_text">
      <div style="margin-bottom: 46px;">
        <el-col :span="16" class="card_section">
          <div style="width: 60%;">
            <div class="hierarchy">层级选项：</div>
            <div class="paging">
              <el-pagination
                background
                small
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
      </div>
      <div style="padding: 10px;">
        <tree-table :data="specialItem.treeTable.items" :columns="specialItem.treeTable.columns" :type="'col'" :rowCallback="handleCurrentChange" :evalFunc="func" :evalArgs="args"
                    :stripe="true" :selection-change="CalculateCost(specialItem.treeTable)" :showLevel='level' border>
        </tree-table>
      </div>
    </el-row>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import treeTable from '@/components/TreeTable'
  import treeToArray from '@/components/treeTable/customEval'

  export default {
    computed: {
      ...mapGetters(['specialItem'])
    },
    components: { treeTable },
    data() {
      return {
        level: 2, // 层级选项
        func: treeToArray,
        args: [null, null, true, 'timeLine'],
        addBtnFlag: true, // 增加按钮的disabled
        delBtnFlag: true, // 删除按钮的disabled
        selectValue: '', // 当前选中的项，新增需要用到
        idFlag: 20 // 新增项的id，自增用
      }
    },
    // 初始化页面时调用接口，填充页面数据
    created: function() {
      this.GetSpecialItem()
    },
    methods: {
      ...mapActions(['GetSpecialItem', 'CalculateCost', 'SaveSpecialItem']),
      // 行选中回调，判断是否可以增加或者删除
      handleCurrentChange(val) {
        this.selectValue = val
        this.addBtnFlag = true
        this.delBtnFlag = true
        if (this.selectValue && this.selectValue.addFlag) {
          this.delBtnFlag = false
          this.addBtnFlag = false
        } else {
          if (val && val.level === 1) {
            this.addBtnFlag = true
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
        if (item) {
          for (let i = 0; i < item.length; i++) {
            if (item[i].children && item[i].children.length > 0) {
              haveChildrenFlag = true
            }
          }
        }
        return haveChildrenFlag
      },
      // 增加方法
      addSpecialItem() {
        this.findSpecialItem(this.specialItem.treeTable.items, this.selectValue.id)
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
                addFlag: true,
                cellStyles: [
                  {
                    col: 3, // 列
                    type: 'input', // 类型
                    class: 'bg_lightBlue'
                  },
                  {
                    col: 4, // 列
                    type: 'input', // 类型
                    class: 'bg_lightBlue'
                  },
                  {
                    col: 1, // 列
                    type: 'input', // 类型
                    class: 'bg_lightBlue'
                  }
                ]
              }
            )
            this.addBtnFlag = true
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
        this.delSelectItem(this.specialItem.treeTable.items, this.selectValue.id)
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
    margin-top: 20px;
    margin-left: 10px;
  }
  /**
    增加
   */
  .addBtn{
    float: right;
    margin-top: 20px;
  }
  /**
    保存按钮样式
   */
  .saveBtn{
    float: right;
    margin-right: 15px;
    margin-bottom: 5px;
    background-color: #7986a9;
    color: white;
  }
</style>
