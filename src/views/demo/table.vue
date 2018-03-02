<template>
  <div class="app-container">
    <tree-table :data="data" :type="'col'" :columns="columns" :evalFunc="func" :evalArgs="args" :maxHeight="500" :fixed="true" :stripe="true" border>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="message(scope.row)">点击111</el-button>
        </template>
      </el-table-column>

    </tree-table>
  </div>
</template>

<script>
import treeTable from '@/components/TreeTable'
import treeToArray from '@/components/treeTable/customEval'

export default {
  name: 'tree',
  components: { treeTable },
  data() {
    return {
      fixed: 'true',
      columns: [
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
      func: treeToArray,
      data: [
        {
          id: 1, // 唯一标识
          title: '外立面',
          children: [
            {
              id: 2, // 唯一标识
              checked: false,
              value1: '选项2',
              value2: 777,
              event: '事件2',
              comment: '无',
              mergeFlag: true,
              children: [
                {
                  id: 71, // 唯一标识
                  parentId: 2,
                  checked: false,
                  value1: '选项2',
                  value2: '2-1',
                  event: '事件71',
                  comment: 'xx'
                },
                {
                  id: 72, // 唯一标识
                  parentId: 2,
                  checked: false,
                  value1: '选项2',
                  value2: '2-2',
                  event: '事件72',
                  comment: 'xx'
                },
                {
                  id: 73, // 唯一标识
                  parentId: 2,
                  checked: false,
                  value1: '选项2',
                  value2: '2-3',
                  event: '事件73',
                  comment: 'xx'
                }
              ]
            },
            {
              id: 3, // 唯一标识
              checked: false,
              value1: '选项2',
              value2: 777,
              event: '事件3',
              comment: '无',
              children: [
                {
                  id: 4, // 唯一标识
                  checked: false,
                  value1: '选项2',
                  value2: 777,
                  event: '事件4',
                  comment: '无'
                },
                {
                  id: 5, // 唯一标识
                  checked: false,
                  value1: '选项2',
                  value2: 777,
                  event: '事件5',
                  comment: '无'
                },
                {
                  id: 6, // 唯一标识
                  checked: false,
                  value1: '选项2',
                  value2: 777,
                  event: '事件6',
                  comment: '无',
                  children: [
                    {
                      id: 7, // 唯一标识
                      checked: false,
                      value1: '选项2',
                      value2: 777,
                      event: '事件7',
                      comment: '无',
                      mergeFlag: true, // 是否合并children标识
                      children: [
                        {
                          id: 71, // 唯一标识
                          parentId: 7,
                          checked: false,
                          value1: '选项2',
                          value2: '7-1',
                          event: '事件71',
                          comment: 'xx'
                        },
                        {
                          id: 72, // 唯一标识
                          parentId: 7,
                          checked: false,
                          value1: '选项2',
                          value2: '7-2',
                          event: '事件72',
                          comment: 'xx'
                        },
                        {
                          id: 73, // 唯一标识
                          parentId: 7,
                          checked: false,
                          value1: '选项2',
                          value2: '7-3',
                          event: '事件73',
                          comment: 'xx'
                        }
                      ]
                    },
                    {
                      id: 8, // 唯一标识
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
          id: 2,
          titile: 'second'
        }
      ],
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
      ]
    }
  },
  created: function() {
    this.$store.dispatch('GetTreeTable', { data: 123 }).then(data => {
      console.log(data, 12312312312312313)
      this.data = data.items
      this.columns = data.columns
    })
  },
  methods: {
    message(row) {
      console.log(row)
      this.$message.info(row.event)
    }
  }
}
</script>
