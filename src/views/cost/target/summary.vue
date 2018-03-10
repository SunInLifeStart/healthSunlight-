<template>
  <div class="piecerow_main">
    <el-row class="piecerow piecerow_bottom piecerow_text">
      <el-col :span="16" class="card_section">
        <div style="width: 60%;">
          <div class="hierarchy">层级选项：</div>
          <div class="paging">
            <el-pagination
              background
              layout="pager"
              :current-page.sync="costcodelevel"
              @current-change="changeLevel(costcodelevel)"
              :total="50">
            </el-pagination>
          </div>
        </div>
      </el-col>
      <tree-table :data="data" :columns="columns" :type="'col'" :evalFunc="func" :evalArgs="args"
                  :stripe="true" :showLevel='costcodelevel' border>
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
        costcodelevel: 2,
        columns: [
          {
            title: '费项',
            value: 'costcode',
            type: 'text',
            width: 200,
            fixed: 'left'
          },
          {
            title: '成本项目',
            value: 'keytitle',
            type: 'text',
            width: 100
          },
          {
            title: '原始指标说明',
            value: 'area',
            type: 'text',
            width: 100
          },
          {
            title: '工程量',
            value: 'propertytypevalue',
            type: 'text',
            width: 100
          },
          {
            title: '单位',
            value: 'propertytypeunit',
            type: 'text',
            width: 100
          },
          {
            title: '单价（元）',
            value: 'unitprice',
            type: 'text',
            width: 100
          },
          {
            title: '合价（元）',
            value: 'sumcost',
            type: 'text',
            width: 100
          },
          {
            title: '建筑平米造价（元/平米）',
            value: 'totalbuildingareacost',
            type: 'text',
            width: 160
          },
          {
            title: '实际建筑平米造价（元/平米）',
            value: 'actualbuildingareacost',
            type: 'text',
            width: 180
          },
          {
            title: '可租售平米造价（元/平米）',
            value: 'holdedsalableareacost',
            type: 'text',
            width: 180
          },
          {
            title: '费用成本说明',
            value: 'remark',
            type: 'text',
            width: 100
          }
        ],
        func: treeToArray,
        args: [null, null, true, 'timeLine']
      }
    },
    created: function() {
      this.getCostSummary().then((data) => {
        this.data = data
      })
    },
    methods: {
      ...mapActions(['getCostSummary']),
      // 层级选项控制
      changeLevel(level) {
        this.costcodelevel = level
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
