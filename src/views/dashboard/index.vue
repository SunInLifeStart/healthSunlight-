<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          todos
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-carousel :interval="4000" height="200px">
            <el-carousel-item v-for="item in dashboard.headlines" :key="item.title">
              <h3>{{ item.title }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>

    <el-tabs>
      <el-tab-pane label="操作台">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>待办事项</span>
              </div>
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="类型"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="主题"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="经办人">
                </el-table-column>
              </el-table>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>公告栏</span>
              </div>
              <div v-for="(article,index) in dashboard.news" :key="index" class="text item">
                {{article.newstitle}} {{article.createDate}}
              </div>
            </el-card>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="24">
            <vue-event-calendar title="我的日历" :events="dashboard.events">
            </vue-event-calendar>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="驾驶舱">驾驶舱</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import 'vue-event-calendar/dist/style.css' // 1.1.10之后的版本，css被放在了单独的文件中，方便替换
import vueEventCalendar from 'vue-event-calendar' // 日历
import { mapGetters, mapActions } from 'vuex'
import Vue from 'vue'

Vue.use(vueEventCalendar, {
  locale: 'zh',
  color: '#50aaf8', // Set main color
  className: 'selected-day', // (default: 'selected-day')
  weekStartOn: '1' // Can be: 1, 2, 3, 4, 5, 6, 0 (default: 0)
})

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
  },
  computed: {
    ...mapGetters(['dashboard'])
  },
  created() {
    this.GetHeadlines()
    this.GetNews()
    this.GetEvents()
  },
  methods: {
    ...mapActions([
      'GetHeadlines',
      'GetNews',
      'GetEvents'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
