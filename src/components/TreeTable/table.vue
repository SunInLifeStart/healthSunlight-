<template>
  <!-- :span-method="objectSpanMethod" -->
  <el-table :data="formatData" :span-method="objectSpanMethod2" :row-style="showRow" v-bind="$attrs" style="width: 100%" :max-height="maxHeight" :stripe="stripe">
    <el-table-column v-if="type=='col'" v-for="(column, index) in columns" :key="column.value" :sortable="column.sortable" :label="column.title" :fixed="column.fixed" :width="column.width">
      <template slot-scope="scope">
        <span v-if="index === 0" v-for="space in scope.row._level" class="ms-tree-space" :key="space"></span>
        <span class="tree-ctrl" v-if="iconShow(index,scope.row)" @click="toggleExpanded(scope.$index)">
          <i v-if="!scope.row._expanded&&scope.row.mergeFlag" class="el-icon-caret-right"></i>
          <i v-else-if="scope.row._expanded&&scope.row.mergeFlag" class="el-icon-caret-bottom"></i>
          <i v-else-if="!scope.row._expanded" class="el-icon-plus"></i>
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

    <el-table-column v-if="type=='row'" v-for="(column, index) in columns" :key="column.value" :sortable="column.sortable" :label="column.title" :fixed="column.fixed" :width="column.width">
      <template slot-scope="scope">
        <span v-if="index === 0" v-for="space in scope.row._level" class="ms-tree-space" :key="space"></span>
        <span class="tree-ctrl" v-if="iconShow(index,scope.row)" @click="toggleExpanded(scope.$index)">
          <i v-if="!scope.row._expanded&&scope.row.mergeFlag" class="el-icon-caret-right"></i>
          <i v-else-if="scope.row._expanded&&scope.row.mergeFlag" class="el-icon-caret-bottom"></i>
          <i v-else-if="!scope.row._expanded" class="el-icon-plus"></i>
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
    // 数据
    data: {
      type: [Array, Object],
      required: true
    },
    // 列配置项
    columns: {
      type: Array,
      default: () => []
    },
    evalFunc: Function,
    evalArgs: Array,
    expandAll: {
      type: Boolean,
      default: false
    }
  },
  data: {
    childNo: 0
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
  methods: {
    getChildrenNo(item) {
      console.log('12312312312321312312')

      this.childNo += item.children.length
      for (let i = 0; i <= item.length; i++) {
        if (item[i].children.length) {
          this.getChildrenNo(item[i])
        }
      }
      console.log(this.childNo, 'this.childNo')
      return this.childNo
    },
    objectSpanMethod2({ row, column, rowIndex, columnIndex }) {
      // 只合并第一列
      if (columnIndex === 0) {
        console.log('12312312312321312312')
        if (row._expanded) {
          return {
            rowspan: this.getChildrenNo(row) + 1,
            colspan: 1
          }
        } else if (row.parentId) {
          return {
            rowspan: 0,
            colspan: 0
          }
        } else {
          return {
            rowspan: 1,
            colspan: 1
          }
        }
      }
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      // 只合并第一列
      console.log('12312312312321312312')

      if (columnIndex === 0) {
        if (row.mergeFlag && row._expanded) {
          return {
            rowspan: row.children.length + 1,
            colspan: 1
          }
        } else if (row.parentId) {
          return {
            rowspan: 0,
            colspan: 0
          }
        } else {
          return {
            rowspan: 1,
            colspan: 1
          }
        }
      }
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2]
        } else if (columnIndex === 1) {
          return [0, 0]
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
    // 切换下级是否展开
    toggleExpanded: function(trIndex) {
      console.log('toggleExpanded')
      const record = this.formatData[trIndex]
      record._expanded = !record._expanded
    },
    // 图标显示
    iconShow(index, record) {
      return index === 0 && record.children && record.children.length > 0
    }
  }
}
</script>

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
