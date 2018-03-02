<template>
  <div style="margin: 10px;" class="aaa">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button class="saveBtn" size="mini" @click="SaveSpecialItem" plain>保存</el-button>
      </div>
      <div>
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
        <el-col :span="8" class="spanClass">
          <el-col :span="14">&nbsp</el-col>
          <el-col :span="10">
            <el-button size="mini" icon="el-icon-delete" type="text" @click="delSpecialItem" class="delBtn" disabled>删除</el-button>
            <el-button size="mini" icon="el-icon-circle-plus-outline" type="text" @click="addSpecialItem" class="addBtn" disabled>增加</el-button>
          </el-col>
        </el-col>
      </div>
      <tree-table :data="data" :columns="columns" :type="'col'" :rowCallback="handleCurrentChange" :evalFunc="func" :evalArgs="args"
                  :stripe="true" :selection-change="CalculateCost(data)" :showLevel='level' border>
      </tree-table>
    </el-card>
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
        level: 1,
        columns: [{}],
        func: treeToArray,
        args: [null, null, true, 'timeLine']
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
      message(row) {
        this.$message.info(row.event)
      },
      // 行选中回调
      handleCurrentChange(val) {
        console.log(val.id)
      },
      // 增加方法
      addSpecialItem() {
      },
      // 删除方法
      delSpecialItem() {
      },
      changeLevel(level) {
        console.log(level)
        this.level = level
      }
    }
  }
</script>

<style scoped>
  .el-col-8{
    margin-bottom: 5px;
    margin-top: -5px;
  }
  .text {
    font-size: 14px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }
  .paging{
    margin-left: 80px;
    margin-top: -23px;
    margin-bottom: 10px;
  }
  .hierarchy{
    margin-left: 10px;
    font-size: 14px;
  }
  .delBtn{
    float: right;
    margin-left: 10px;
    margin-top: -10px;
  }
  .addBtn{
    float: right;
    margin-top: -10px;
  }
  .card_section{
    margin-top: -5px;
    margin-bottom: 0;
  }
  .saveBtn{
    float: right;
    margin-top: -5px;
  }
  .aaa >>> .el-card__header{
    padding: 10px 10px ;
  }
</style>
