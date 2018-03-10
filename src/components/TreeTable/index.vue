<template>
  <el-table class="el_table_td" :data="formatData" size="mini" :cell-class-name="setCellClass" :row-class-name="setRowClass" :span-method="objectSpanMethod" :highlight-current-row="!!rowCallback" @cell-dblclick="cellDbCall" @current-change="handleCurrentChange" :row-style="showRow" v-bind="$attrs" :max-height="maxHeight">
    <!-- <slot></slot> -->

    <el-table-column v-if="type=='col'" v-for="(column, index) in columns" :show-overflow-tooltip="true" :fit="true" :key="column.value" :sortable="column.sortable" :label="column.title" :fixed="column.fixed" :width="column.width">
      <!-- <el-table-column v-if="column.children" v-for="(columnChild, i) in column.children" :key="columnChild.value" :label="columnChild.title" :width="columnChild.width">
        <el-table-column v-if="columnChild.children" v-for="(columnSon, n) in column.children" :key="columnSon.value" :label="columnSon.title" :width="columnSon.width">
        </el-table-column>
      </el-table-column> -->
      <template slot-scope="scope">

        <!-- 缩进和图标 -->
        <span v-if="index === 0" v-for="space in scope.row._level" class="ms-tree-space" :key="space"></span>
        <span class="tree-ctrl" v-if="iconShow(index,scope.row)" @click="toggleExpanded(scope.$index)">
          <i v-if="!scope.row._expanded&&scope.row.mergeFlag" class="el-icon-caret-right"></i>
          <i v-else-if="scope.row._expanded&&scope.row.mergeFlag" class="el-icon-caret-bottom"></i>
          <i v-else-if="!scope.row._expanded" class="el-icon-plus"></i>
          <i v-else class="el-icon-minus"></i>
        </span>

        <el-tooltip placement="right" :disabled="!scope.row['tipIsOver'+index]">

          <!-- tooltip 同时支持字符串和数组 -->
          <div slot="content">
            <!-- <span v-if="scope.row[column.tooltip]&&typeof scope.row[column.tooltip]==='string'">{{scope.row[column.tooltip]}}</span> -->
            <!-- <span v-if="scope.row[column.tooltip]&&typeof scope.row[column.tooltip]==='object'" v-for="(tip,t) in scope.row[column.tooltip]" :key="t">{{tip}}<br/></span> -->
            <span v-for="(tip,x) in scope.row.cellStyles" :key="tip.col" v-if="scope.row.cellStyles[x].col===index">
              <span :onload="scope.row['tipIsOver'+index]=true" v-if="scope.row.cellStyles[x].tooltip" v-for="(tip,t) in scope.row.cellStyles[x].tooltip" :key="t">{{tip}}<br/></span>
            </span>
          </div>

          <!-- type=='text' 同时支持字符串和对象 -->
          <span v-if="column.type=='text'&&scope.row[column.value]&&typeof scope.row[column.value] === 'Object'">
            {{scope.row[column.value].value}}
          </span>
          <span v-else-if="column.type=='text'">
            <!-- type=='text' 优先设置单元格 新增item情况下为input -->
            <div v-if="scope.row.cellStyles&&index!==0" @keyup="cellChange(scope.row,column,index)">
              <span v-for="(item,x) in scope.row.cellStyles" :key="item.col" v-if="scope.row.cellStyles[x].col===index">
                <span :onload="scope.row['isOver'+index]=true">
                  <el-input v-if="scope.row.cellStyles[x].type==='input'" v-model="scope.row[column.value]" class="table_input" clearable></el-input>
                  <span v-if="!scope.row.cellStyles[x].type">{{scope.row[column.value]}}</span>
                </span>
              </span>
              <span v-if="!scope.row['isOver'+index]">{{scope.row[column.value]}}</span>
            </div>
            <span v-else>{{scope.row[column.value]}}</span>
          </span>

          <!-- type=='input' -->
          <div v-else-if="column.type=='input'" @keyup="cellChange(scope.row,column,index)">
            <el-input class="table_input" v-model="scope.row[column.value]" clearable>
            </el-input>
          </div>

          <!-- type=='select' -->
          <el-select class="table_select" v-else-if="column.type=='select'" v-model="scope.row[column.value]" placeholder="请选择" clearable>
            <el-option v-for="item in column.options" :key="item.value" :label="item.label" :value="item.value">
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>
        </el-tooltip>

      </template>
    </el-table-column>

    <el-table-column v-if="type=='row'" v-for="(column, index) in columns" :key="column.value" :sortable="column.sortable" :label="column.title" :fixed="column.fixed" :style="column.idStyle" :width="column.width">
      <template slot-scope="scope">
        <span v-if="index === 0" v-for="space in scope.row._level" class="ms-tree-space" :key="space"></span>
        <span class="tree-ctrl" v-if="iconShow(index,scope.row)" @click="toggleExpanded(scope.$index)">
          <!-- 如果有合并标识且关闭 -->
          <i v-if="!scope.row._expanded&&scope.row.mergeFlag" class="el-icon-caret-right"></i>
          <!-- 如果有合并标识且展开 -->
          <i v-else-if="scope.row._expanded&&scope.row.mergeFlag" class="el-icon-caret-bottom"></i>
          <!-- else关闭 -->
          <i v-else-if="!scope.row._expanded" class="el-icon-plus"></i>
          <!-- else展开 -->
          <i v-else class="el-icon-minus"></i>
        </span>

        <span v-if="column.type=='text'">
          {{scope.row[column.value]}}
        </span>

        <input v-else-if="column.type=='input'" type="text" v-model="scope.row[column.value]">

        <el-select v-else-if="column.type=='select'" v-model="scope.row[column.value]" placeholder="请选择">
          <el-option v-for="item in column.options" :key="item.value" :label="item.label" :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>

      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import treeToArray from './eval'
import _ from 'lodash'
export default {
  name: 'treeTable',
  props: {
    newObj: {
      type: Object
    },
    // 最大高度（超过之后固定头部）
    maxHeight: {
      type: [Number, String],
      default: '100%'
    },
    // 固定列 true|false|left|right 默认false
    fixed: [String, Boolean],
    // 是否隔行换色 默认false
    stripe: Boolean,
    // 树数据
    data: {
      type: [Array, Object],
      required: true
    },
    // 列配置项
    columns: {
      type: Array,
      required: true,
      default: () => []
    },
    evalFunc: Function,
    evalArgs: Array,
    expandAll: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'col',
      required: false
    },
    rowCallback: Function,
    cellCallback: Function,
    cellDbCallback: Function,
    doLayout: Function,
    // 显示等级
    showLevel: {
      type: [String, Number]
    }
  },
  computed: {
    // 格式化数据源
    formatData: function() {
      let tmp
      if (!Array.isArray(this.data)) {
        tmp = [this.data]
      } else {
        tmp = this.data
      }
      const func = this.evalFunc || treeToArray
      const args = this.evalArgs
        ? Array.concat([tmp], this.evalArgs)
        : [tmp, this.expandAll]
      return func.apply(null, args)
    }
  },
  watch: {
    showLevel: _.debounce(function(newLevel, oldLevel) {
      if (this.showLevel) {
        this.changeExpanded(this.formatData, this.showLevel)
      }
    }, 300)
  },
  // created() {
  //   this.$refs.singleTable.doLayout()
  // },
  methods: {
    cellDbCall(row, col, cell, event) {
      if (this.cellDbCallback) {
        this.cellDbCallback(row, col, cell, event)
      }
    },
    /**
     * 获取子集个数
     */
    getChildrenNo(item) {
      let count = 0
      if (item.children) {
        count += item.children.length
        for (var i in item.children) {
          if (item.children[i].children) {
            count += this.getChildrenNo(item.children[i])
          }
        }
      }
      return count
    },
    /**
     * 合并单元格（纵向展开合并第一列）
     */
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      // 如果是第一列
      if (columnIndex === 0) {
        // 如果有合并标识且状态展开 合并行列不变
        if (row.mergeFlag && row._expanded) {
          return {
            rowspan: row.children.length + 1,
            colspan: 1
          }
          // 如果有parentId不显示
        } else if (row.parentId) {
          return {
            rowspan: 0,
            colspan: 0
          }
          // 否则正常显示一个单元
        } else {
          return {
            rowspan: 1,
            colspan: 1
          }
        }
      }
    },
    /**
     * 合并单元格（横向展开随机合并列，暂时不开发）
     */
    objectSpanMethod2({ row, column, rowIndex, columnIndex }) {
      // 如果是第一列
      if (columnIndex === 0) {
        // 如果有合并标识且状态展开 合并行列不变
        if (row._expanded && row.mergeFlag) {
          return {
            rowspan: this.getChildrenNo(row) + 1,
            colspan: 1
          }
          // 如果有parentId不显示
        } else if (row.parentId && !row.children && !row.mergeFlag) {
          return {
            rowspan: 0,
            colspan: 0
          }
          // 否则正常显示一个单元
        } else {
          return {
            rowspan: 1,
            colspan: 1
          }
        }
      }
    },
    /**
     * 显示或隐藏row
     */
    showRow: function(row) {
      const show = row.row.parent
        ? row.row.parent._expanded && row.row.parent._show
        : true
      row.row._show = show
      return show ? '' : 'display:none;'
    },
    setCellClass: function({ row, column, rowIndex, columnIndex }) {
      if (row.cellStyles) {
        for (let i = 0; i < row.cellStyles.length; i++) {
          if (columnIndex === row.cellStyles[i].col) {
            return row.cellStyles[i].class
          }
        }
      }
      if (this.columns) {
        // 设置列样式
        for (let i = 0; i < this.columns.length; i++) {
          if (this.columns[i].colClass) {
            if (columnIndex === i) {
              return this.columns[i].colClass
            }
          }
        }
      }
    },
    /**
     * 设置隔行换色class
     */
    setRowClass({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return 'even_row'
      } else {
        return 'odd_row'
      }
    },
    /**
     * 设置单元格style（暂未启用此功能）
     */
    cellStyle: function({ row, column, rowIndex, columnIndex }) {
      if (row.cellStyles) {
        for (let i = 0; i < row.cellStyles.length; i++) {
          if (columnIndex === row.cellStyles[i].col) {
            return row.cellStyles[i]
          }
        }
      } else if (this.columns) {
        // 设置列样式
        for (let i = 0; i < this.columns.length; i++) {
          if (this.columns[i].colStyle) {
            if (columnIndex === i) {
              return this.columns[i].colStyle
            }
          }
        }
      }
    },
    /**
     * 切换下级是否展开
     */
    toggleExpanded: function(trIndex) {
      const record = this.formatData[trIndex]
      record._expanded = !record._expanded
    },
    /**
     * 展开等级
     */
    changeExpanded(items, level) {
      for (let i = 0; i < items.length; i++) {
        if (items[i]._level >= level) {
          items[i]._expanded = false
          if (items[i].children) {
            for (let n = 0; n < items[i].children.length; n++) {
              this.changeExpanded(items[i].children, level)
            }
          }
        } else {
          items[i]._expanded = true
          if (items[i].children) {
            for (let n = 0; n < items[i].children.length; n++) {
              this.changeExpanded(items[i].children, level)
            }
          }
        }
      }
    },
    /**
     * 图标显示
     */
    iconShow(index, record) {
      return index === 0 && record.children && record.children.length > 0
    },
    // 深复制对象方法
    cloneObj(obj) {
      console.log('2222')
      var newObj = {}
      if (obj instanceof Array) {
        newObj = []
      }
      for (var key in obj) {
        var val = obj[key]
        if (typeof val === 'object') {
          newObj[key] = {}
        } else if (typeof val === 'string' || typeof val === 'boolean') {
          newObj[key] = ''
        }
        // newObj[key] = typeof val === 'object' ? this.cloneObj(val) : val
        // newObj[key] = typeof val === 'object' ? this.cloneObj(val) : val
      }
      return newObj
    },
    /**
     * 添加同级item
     */
    addItem(items, item, id) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
          console.log(items[i].id, i, id, items[i])
          items[i].children.push(item)
          return false
        }
      }
    },
    delItem(items, item, id) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
          console.log(items[i].id, i, id, items[i])
          items[i].children.push(item)
          return false
        }
      }
    },
    /**
     * 行回调方法
     */
    handleCurrentChange(row) {
      // console.log('111', this.newObj)
      // const obj = {
      //   id: '', // 唯一标识
      //   checked: false,
      //   value1: '选项2',
      //   value2: 70101010110177,
      //   event: '事件8',
      //   comment: '无'
      // }
      // obj.id = row.parent.children[row.parent.children.length - 1].id + 1
      // delete obj.children
      // this.addItem(this.formatData, obj, row.parent.id)
      // console.log('调用了addItem')
      // this.formatData[0].aaa = true
      if (this.rowCallback) {
        this.rowCallback(row)
      }
    },
    cellChange(row, col, index) {
      if (typeof this.cellCallback === 'function') {
        this.cellCallback(row, col, index)
      }
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
// 预设样式
.font_color_white {
  color: white;
}
.font_color_green {
  color: green;
}
.font_color_red {
  color: red;
}
.bg_red {
  background: red;
}
.bg_grey {
  background: grey;
}
.bg_lightBlue {
  background: #eff8ff;
}
.el-table .even_row {
  background: #fafafa;
}
.el-table .odd_row {
  background: white;
}
.table_input input {
  height: 28px;
  border: none;
  outline: none;
  background: none;
}
.table_select input {
  height: 28px;
  border: none;
  background: none;
}
.el_table_td td {
  padding: 0;
  margin: 0;
}
.el_table_td th {
  padding: 0;
  margin: 0;
  height: 40px;
  background: #efefe0;
  text-align: center;
  color: #a08e6e;
  font-size: 13px;
  font-weight: 500;
}
</style>

<style lang="scss" rel="stylesheet/scss" scoped>
$color-blue: #2196f3;
$space-width: 18px;

.ms-tree-space {
  position: relative;
  top: 1px;
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  width: $space-width;
  height: 14px;
  &::before {
    content: '';
  }
}

.processContainer {
  width: 100%;
  height: 100%;
}

.tree-ctrl {
  position: relative;
  cursor: pointer;
  color: $color-blue;
  margin-left: -$space-width;
}
</style>
