<template>
  <div class="app-container">
    <div>
      <h4>data-Array-数据-必填</h4>
      <h4>columns-Array-表头和列配置-必填</h4>
      <h4>type-String-table类型-默认col-可选</h4>
      <h4>rowCallback-Function-行选中回调-可选</h4>
      <h4>maxHeight-Number-超过最大高度后自动固定头部-可选</h4>
      <h4>stripe-Boolean-是否隔行换色 默认false-可选</h4>
      <h4>支持列样式、单元格自定义样式、单元格自定义输入类型、鼠标划过显示自定义显示提示信息。数据源格式参考：mock/routes/treeTable.js</h4>
      <h4>showLevel-[String, Number]-展开等级-可选</h4>
      <h4>cellCallback-Function-单元格change回调（row,col,index）-可选</h4>
    </div>
    <input type="text" v-model="level" @change="changeLevel(level)">
    <!-- 纵向展开demo -->
    <tree-table :cellDbCallback="demo" :data="data" :columns="columns" :showLevel='level' :cellCallback="cellCallbackFn" :rowCallback="handleCurrentChange" :evalFunc="func" :maxHeight="500" :stripe="true" border>
    </tree-table>

    <!-- 横向展开demo -->
    <!-- <tree-table :data="data2" :columns="columns2" :type="'row'" :evalFunc="func" :evalArgs="args" :maxHeight="800" :fixed="true" :stripe="true" border>
    </tree-table> -->

  </div>
</template>

<script>
import treeTable from '@/components/TreeTable'
import treeToArray from '@/components/treeTable/customEval'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'tree',
  components: { treeTable },
  data() {
    return {
      level: '2',
      data: [{}],
      columns: [{}],
      columns2: [
        {
          title: '一级',
          value: 'id',
          type: 'text',
          width: 300,
          fixed: 'left',
          sortable: true
        },
        {
          title: '二级',
          value: 'value1',
          type: 'select',
          width: 200,
          sortable: true
        },
        {
          title: '三级',
          value: 'value2',
          type: 'text',
          width: 200
        },
        {
          title: '价格基数',
          value: 'comment1',
          type: 'input',
          width: 200
        },
        {
          title: '单位',
          value: 'comment2',
          type: 'input',
          width: 200
        },
        {
          title: '配置',
          value: 'comment3',
          type: 'input',
          width: 200
        },
        {
          title: '标准配置',
          value: 'comment4',
          type: 'input',
          width: 200
        },
        {
          title: '参考价格上限',
          value: 'comment5',
          type: 'input',
          width: 200
        },
        {
          title: '实际配置',
          value: 'comment6',
          type: 'input',
          width: 200
        },
        {
          title: '实际价格',
          value: 'comment7',
          type: 'input',
          width: 200
        },
        {
          title: '配置',
          value: 'comment8',
          type: 'input',
          width: 200
        }
      ],
      data2: [
        {
          id: 1, // 唯一标识
          mergeFlag: true,
          title: '外立面',
          children: [
            {
              id: 11, // 唯一标识
              parentId: 1,
              mergeFlag: true,
              checked: false,
              value1: '选项2',
              value2: 777,
              event: '事件2',
              comment: '无',
              children: [
                {
                  id: 111, // 唯一标识
                  parentId: 11,
                  checked: false,
                  value1: '选项2',
                  value2: '2-1',
                  event: '事件71',
                  comment: 'xx'
                },
                {
                  id: 112, // 唯一标识
                  parentId: 11,
                  checked: false,
                  value1: '选项2',
                  value2: '2-2',
                  event: '事件72',
                  comment: 'xx'
                },
                {
                  id: 113, // 唯一标识
                  parentId: 11,
                  checked: false,
                  value1: '选项2',
                  value2: '2-3',
                  event: '事件73',
                  comment: 'xx'
                }
              ]
            },
            {
              id: 12, // 唯一标识
              parentId: 1,
              mergeFlag: true,
              checked: false,
              value1: '选项2',
              value2: 777,
              event: '事件3',
              comment: '无',
              children: [
                {
                  id: 121, // 唯一标识
                  parentId: 12,
                  checked: false,
                  value1: '选项2',
                  value2: 777,
                  event: '事件4',
                  comment: '无'
                },
                {
                  id: 122, // 唯一标识
                  parentId: 12,
                  checked: false,
                  value1: '选项2',
                  value2: 777,
                  event: '事件5',
                  comment: '无'
                },
                {
                  id: 123, // 唯一标识
                  parentId: 12,
                  mergeFlag: true,
                  checked: false,
                  value1: '选项2',
                  value2: 777,
                  event: '事件6',
                  comment: '无',
                  children: [
                    {
                      id: 1231, // 唯一标识
                      parentId: 123,
                      mergeFlag: true,
                      checked: false,
                      value1: '选项2',
                      value2: 777,
                      event: '事件7',
                      comment: '无',
                      children: [
                        {
                          id: 12311, // 唯一标识
                          parentId: 1231,
                          checked: false,
                          value1: '选项2',
                          value2: '7-1',
                          event: '事件71',
                          comment: 'xx'
                        },
                        {
                          id: 12312, // 唯一标识
                          parentId: 1231,
                          checked: false,
                          value1: '选项2',
                          value2: '7-2',
                          event: '事件72',
                          comment: 'xx'
                        },
                        {
                          id: 12313, // 唯一标识
                          parentId: 1231,
                          checked: false,
                          value1: '选项2',
                          value2: '7-3',
                          event: '事件73',
                          comment: 'xx'
                        }
                      ]
                    },
                    {
                      id: 1232, // 唯一标识
                      parentId: 123,
                      checked: false,
                      value1: '选项2',
                      value2: 777,
                      event: '事件8',
                      comment: '无'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 2, // 唯一标识
          title: '外立面2',
          mergeFlag: true,
          children: [
            {
              id: 21, // 唯一标识
              parentId: 2,
              checked: false,
              value1: '选项2',
              value2: 777,
              event: '事件2',
              comment: '无'
            }
          ]
        }
      ],
      func: treeToArray,
      args: [null, null, true, 'timeLine'],
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '选项2'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      newItem: {
        id: '', // 唯一标识
        checked: false,
        value1: '选项2',
        value2: 70101010110177,
        event: '事件8',
        comment: '无'
      }
    }
  },
  computed: {
    ...mapGetters(['$demo'])
  },
  created: function() {
    this.GetTreeTable().then(data => {
      this.data = data.items
      this.columns = data.columns
    })
  },
  methods: {
    ...mapActions(['GetTreeTable']),
    // 单元格回调
    cellCallbackFn(row) {
      console.log(row, '2222')
    },
    demo(row) {
      console.log(row, '1111')
    },
    message(row) {
      console.log(row)
      this.$message.info(row.event)
    },
    // 行选中回调
    handleCurrentChange(val) {
      console.log(val.id)
      console.log(this.$demo.treeTable)
    },
    changeLevel(level) {
      this.level = level
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.yellow {
  background: yellow;
}
</style>
