<template>
  <el-table :data="formatData" size="mini" :cell-class-name="setCellClass" :row-class-name="_setRowClass" :span-method="objectSpanMethod1" :highlight-current-row="!!rowCallback" @current-change="handleCurrentChange" :row-style="showRow" v-bind="$attrs" :max-height="maxHeight">
    <!-- <slot></slot> -->
    <el-table-column v-if="type=='col'" v-for="(column, index) in columns" :show-overflow-tooltip="true" :fit="true" :key="column.value" :sortable="column.sortable" :label="column.title" :fixed="column.fixed" :width="column.width">
      <template slot-scope="scope">

        <!-- 缩进和图标 -->
        <span v-if="index === 0" v-for="space in scope.row._level" class="ms-tree-space" :key="space"></span>
        <span class="tree-ctrl" v-if="iconShow(index,scope.row)" @click="toggleExpanded(scope.$index)">
          <i v-if="!scope.row._expanded&&scope.row.mergeFlag" class="el-icon-caret-right"></i>
          <i v-else-if="scope.row._expanded&&scope.row.mergeFlag" class="el-icon-caret-bottom"></i>
          <i v-else-if="!scope.row._expanded" class="el-icon-plus"></i>
          <i v-else class="el-icon-minus"></i>
        </span>

        <!-- type=='text' 同时支持字符串和对象 -->
        <span v-if="column.type=='text'&&scope.row[column.value].value">
          {{scope.row[column.value].value}}
        </span>
        <span v-else-if="column.type=='text'&&!scope.row[column.value].value">
          {{scope.row[column.value]}}
        </span>

        <!-- type=='input' -->
        <div v-else-if="column.type=='input'">
          <el-input class="table_input" v-model="scope.row[column.value]" clearable>
          </el-input>
        </div>

        <!-- type=='select' -->
        <el-select v-else-if="column.type=='select'" v-model="scope.row[column.value]" placeholder="请选择">
          <el-option v-for="item in column.options" :key="item.value" :label="item.label" :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>

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
export default {
  name: 'treeTable',
  props: {
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
      required: true
    },
    rowCallback: Function,
    // 显示等级
    showLevel: {
      type: [String, Number]
    }
  },
  data() {
    return {
      yellow: 'yellow'
    }
  },
  created() {
    console.log(this.showLevel)
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
      console.log(func.apply(null, args))
      return func.apply(null, args)
    }
  },
  watch: {
    showLevel: function(newLevel, oldLevel) {
      console.log(newLevel, oldLevel, '````````')
      if (this.showLevel) {
        this.changeExpanded(this.formatData, this.showLevel)
      }
    }
  },
  methods: {
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
    objectSpanMethod1({ row, column, rowIndex, columnIndex }) {
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
    // 设置隔行换色
    _setRowClass({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return 'even_row'
      } else {
        return 'odd_row'
      }
    },
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
    // 切换下级是否展开
    toggleExpanded: function(trIndex) {
      console.log('toggleExpanded')
      const record = this.formatData[trIndex]
      record._expanded = !record._expanded
    },
    // 展开等级
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
    // 图标显示
    iconShow(index, record) {
      return index === 0 && record.children && record.children.length > 0
    },
    // 行回调方法
    handleCurrentChange(row) {
      if (this.rowCallback) {
        this.rowCallback(row)
      }
    },
    setCellStyle({ row, column, rowIndex, columnIndex }) {
      if ((rowIndex === 0, columnIndex === 0)) {
        column.label = '哈哈哈哈哈哈'
      }
      return row.idStyle || row.value2Style || {}
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
.yellow {
  background: yellow;
}
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
  background: lightblue;
}
.el-table .even_row {
  background: #fafafa;
}
.el-table .odd_row {
  background: white;
}
.table_input input {
  border: none;
  outline: none;
  background: none;
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

table td {
  line-height: 26px;
}

.tree-ctrl {
  position: relative;
  cursor: pointer;
  color: $color-blue;
  margin-left: -$space-width;
}
</style>
