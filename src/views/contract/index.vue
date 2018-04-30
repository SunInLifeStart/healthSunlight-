<template>
 <div>
   <el-row :gutter="20">
     <el-col :span="24">
       <el-tabs class="content" :tab-position="tabPosition" style="height: 400px;">
         <el-tab-pane label="春季">春季</el-tab-pane>
         <el-tab-pane label="夏季">夏季</el-tab-pane>
         <el-tab-pane label="秋季">秋季</el-tab-pane>
         <el-tab-pane label="冬季">冬季</el-tab-pane>
       </el-tabs>
     </el-col>
   </el-row>
   <el-row :gutter="20">
     <el-col :span="3">
       <div class="left_like">
         <div class="left_like_size">
           <span>您可能喜欢</span>
         </div>

       </div>
     </el-col>
   </el-row>
 </div>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: 'left'
    }
  },
  created() {
  },
  methods: {
  }
}
</script>
<style scoped>
  .content >>> .el-tabs__item {
    padding: 45px 24px 45px 100px;
  }
  .left_like{
    width: 100%;
    border: 1px solid #CCCCCC;
    height: 260px;
  }
  .left_like_size{
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #CCCCCC;
  }
</style>
