<template>
  <div class="piecerow_main">
    <el-row class="piecerow">
      <el-col :span="24">
        <div style="padding: 5px;">
          <el-button class="saveBtn" size="mini"  plain>保存</el-button>
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
      </div>
      <div style="padding: 10px;">
        <tree-table :data="targetCost.manageApportion.items" :columns="targetCost.manageApportion.columns" :type="'col'"  :evalFunc="func" :evalArgs="args"
                    :stripe="true" :showLevel='level' border>
        </tree-table>
      </div>
    </el-row>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import treeTable from '@/components/TreeTable'
  import treeToArray from '@/components/treeTable/customEval'
  export default {
    components: {
      treeTable
    },
    data() {
      return {
        level: 2,
        func: treeToArray,
        args: [null, null, true, 'timeLine']
      }
    },
    computed: {
      ...mapGetters(['targetCost'])
    },
    methods: {
      // 改变层级
      changeLevel(_level) {
        this.level = _level
      }
    },
    created: function() {
      // 获取目标成本的管理口径分摊
      this.$store.dispatch('GetCaliberApportion', { investmentcostid: this.$route.params.id, sharetype: '4' })
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
