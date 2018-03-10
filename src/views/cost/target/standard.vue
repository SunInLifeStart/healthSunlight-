<template>
  <div class="piecerow_main">
    <el-row class="piecerow">
      <el-col :span="24">
        <div style="padding: 10px;">
          <el-button class="saveBtn" size="mini"  plain>保存</el-button>
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
              :total="20">
            </el-pagination>
          </div>
        </div>
      </el-col>
      <tree-table :data="data" :columns="columns" :type="'col'" :evalFunc="func" :evalArgs="args"
                  :stripe="true" :showLevel='level' border>
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
        args: [null, null, true, 'timeLine']
      }
    },
    created: function() {
      this.getConstructionStandardTable().then((data) => {
        this.data = data.items
        this.columns = data.columns
      })
    },
    methods: {
      ...mapActions(['getConstructionStandardTable']),
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
