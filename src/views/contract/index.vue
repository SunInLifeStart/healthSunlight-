<template>
 <div>
   <el-tabs :tab-position="tabPosition" style="height: 400px;">
     <el-tab-pane label="春季">春季</el-tab-pane>
     <el-tab-pane label="夏季">夏季</el-tab-pane>
     <el-tab-pane label="秋季">秋季</el-tab-pane>
     <el-tab-pane label="冬季">冬季</el-tab-pane>
   </el-tabs>
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

</style>
