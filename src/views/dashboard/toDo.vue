<template>
  <el-tabs>
    <el-tab-pane label="待办">
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column
          property="date"
          label="类型"
          width="120">
        </el-table-column>
        <el-table-column
          property="name"
          label="主题"
          width="120">
        </el-table-column>
        <el-table-column
          property="address"
          label="金额">
        </el-table-column>
        <el-table-column
          property="address"
          label="经办人">
        </el-table-column>
        <el-table-column
          property="address"
          label="职能">
        </el-table-column>
        <el-table-column
          property="address"
          label="时长（天）">
        </el-table-column>
        <el-table-column
          property="address"
          label="时间">
        </el-table-column>
        <el-table-column
          property="address"
          label="状态">
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="已办">已办</el-tab-pane>
    <el-tab-pane label="通知">通知</el-tab-pane>
    <el-tab-pane label="我的发起">我的发起</el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>

<style scoped>
  .el-main {

    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .el-aside {
    color: #333;
    width: 40%;
  }

  .el-col {
    margin-top: 8px;
  }


  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .el-collapse{
    margin: 8px;
  }
  .divCollapse{
    text-align: right;border-top: solid 1px #ebeef5
  }
  .el-col-3{
    width: 14%;
  }
</style>
