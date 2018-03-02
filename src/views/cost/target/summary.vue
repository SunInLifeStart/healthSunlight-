<template>
  <div>
    <span style="float: left">层级选项</span>
    <div class="block" style="width: 500px;float: left; margin-left: 100px;">
      <el-slider v-model="value8" show-input :max="6" :min="1" show-stops></el-slider>
    </div>
    <!--<span style="float: left">指标规划</span>-->
    <!--<div style="float: right">-->
      <!--<el-button>发起审批</el-button>-->
      <!--<el-button>导出</el-button>-->
      <!--<el-button>保存</el-button>-->
    <!--</div>-->
    <el-table :data="tableData3" height="250" border highlight-current-row style="width: 100%">
      <el-table-column prop="costItem" label="费项"></el-table-column>
      <el-table-column prop="costProject." label="成本项目"></el-table-column>
      <el-table-column prop="definitionIndicator" label="原始指标说明"></el-table-column>
      <el-table-column prop="workAmount" label="工程量"></el-table-column>
      <el-table-column prop="unit" label="单位"></el-table-column>
      <el-table-column prop="price" label="单价(元)"></el-table-column>
      <el-table-column prop="noSpecialIssue" label="(合价)不含特殊事项"></el-table-column>
      <el-table-column prop="specialIssue" label="特殊事项"></el-table-column>
      <el-table-column prop="total" label="合价(元)"></el-table-column>
      <el-table-column prop="constructionTime" label="建筑面积平米造价(元/平米)"></el-table-column>
      <el-table-column prop="actualConstruction" label="实际建筑面积平米造价(元/平米)"></el-table-column>
      <el-table-column prop="canRental" label="可租售平米造价(元/平米)"></el-table-column>
      <el-table-column prop="costDescription" label="成本费用说明"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'costTotal',
    data() {
      return {
        tableData3: [{
          costItem: '01'
        }],
        value8: 0
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
