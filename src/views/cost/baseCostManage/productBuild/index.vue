<template>
  <div>
    <span style="float: left">层级选项</span>
    <div class="block" style="width: 500px;float: left; margin-left: 100px;">
      <el-slider v-model="value8" show-input :max="6" :min="1" show-stops></el-slider>
    </div>
    <span style="float: right"><el-button>保存</el-button></span>
    <el-table :data="tableData" border size="small" style="width: 100%">
      <el-table-column prop="index" label="" width="50"></el-table-column>
      <el-table-column prop="project" label="" width="50"></el-table-column>
      <el-table-column prop="superHeight" label="超高层(>100m)"></el-table-column>
      <el-table-column prop="maxHeight" label="高层(18层以上，但<100m)"></el-table-column>
      <el-table-column prop="smallHeight" label="小高层(10-18层)"></el-table-column>
      <el-table-column prop="gardenHouse" label="花园洋房(9层以下)"></el-table-column>
      <el-table-column prop="gardenHouse" label="叠拼别墅"></el-table-column>
      <el-table-column prop="rowHouse" label="联排别墅"></el-table-column>
      <el-table-column prop="detachedVilla" label="独栋别墅"></el-table-column>
      <el-table-column label="廉（公）租房/经济适用房"></el-table-column>
      <el-table-column label="限价房/自住型商品房"></el-table-column>
      <el-table-column label="SOHO/酒店式公寓（100米以内）"></el-table-column>
      <el-table-column label="SOHO/酒店式公寓（超高层）"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'productBuild',
    data() {
      return {
        value8: 0,
        tableData: [{}]
      }
    },
    methods: {}
  }
</script>

<style scoped>
</style>
