<template>
  <div>
    <el-button icon="el-icon-circle-plus-outline" type="text" @click="goAddNews">新增</el-button>
    <el-button icon="el-icon-circle-plus-outline" type="text" @click="goPictureUpload">上传</el-button>
    <el-button icon="el-icon-circle-plus-outline" type="text">我的</el-button>
    <el-table
      :data="$dashboard.news"
      style="width: 100%">
      <el-table-column
        prop="belongscategory"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="newstitle"
        label="主题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="createdate"
        label="时间">
      </el-table-column>
    </el-table>
    <el-pagination
      style="float: right; margin-top: 10px; margin-right: 10px;"
      @size-change="handleSizeChange"
      :current-page="currentPage"
      :page-sizes="[20]"
      :page-size="100"
      background
      layout="total, sizes, prev, pager, next"
      :total="10">
    </el-pagination>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data() {
      return {
        currentPage: 1
      }
    },
    computed: {
      ...mapGetters(['$dashboard'])
    },
    created() {
      this.GetNews()
    },
    methods: {
      ...mapActions([
        'GetNews'
      ]),
      goAddNews() {
        this.$router.push({ path: '/addNews' })
      },
      goPictureUpload() {
        this.$router.push({ path: '/pictureUpload' })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
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
