<template>
  <div  style="position: relative">
    <div style="position: absolute;top:4px;right:40px;z-index: 1;">
      <el-button  size="small" @click="save">保存</el-button>
    </div>
    <el-tabs type="border-card">
      <el-tab-pane label="地基与基础工程">
        <span style="float: left">层级选项:</span>
        <div class="block" style="width: 500px;float: left; margin-left: 100px;">
          <el-slider v-model="value8" show-input :max="6" :min="1" show-stops></el-slider>
        </div>
        <el-table :data="tableData" border size="small" style="width: 100%">
          <el-table-column prop="costItem" label="费项" width="50"></el-table-column>
          <el-table-column prop="costProject" label="成本项目" width="80"></el-table-column>
          <el-table-column prop="superHeight" label="原始指标">
            <el-table-column prop="explain" label="说明"></el-table-column>
            <el-table-column prop="number" label="数值"></el-table-column>
          </el-table-column>
          <el-table-column prop="coefficient" label="系数">
            <el-table-column prop="number" label="数值"></el-table-column>
            <el-table-column prop="unit" label="单位"></el-table-column>
          </el-table-column>
          <el-table-column prop="coefficient" label="工程量">
            <el-table-column prop="number" label="数值"></el-table-column>
            <el-table-column prop="unit" label="单位"></el-table-column></el-table-column>
          <el-table-column prop="price" label="单价(元)"></el-table-column>
          <el-table-column prop="totalPrice" label="合价(万元)"></el-table-column>
          <el-table-column prop="coveredArea" width="200" label="建筑面积平米造价(元/平米)"></el-table-column>
          <el-table-column prop="practicalCoveredArea" width="200" label="实际建筑面积平米造价(元/平米)"></el-table-column>
          <!--<el-table-column prop="canRental" width="200" label="可租售平米造价（元/平米）"></el-table-column>-->
          <el-table-column prop="costExplainNo" width="200" label="成本费用说明(不能改)"></el-table-column>
          <el-table-column prop="remake" width="200" label="备注"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="高层">
        <span style="float: left">层级选项:</span>
        <div class="block" style="width: 500px;float: left; margin-left: 100px;">
          <el-slider v-model="value8" show-input :max="6" :min="1" show-stops></el-slider>
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="costItem" label="费项" width="50"></el-table-column>
          <el-table-column prop="costProject" label="成本项目" width="50"></el-table-column>
          <el-table-column prop="superHeight" label="原始指标">
            <el-table-column prop="explain" label="说明"></el-table-column>
            <el-table-column prop="number" label="数值"></el-table-column>
          </el-table-column>
          <el-table-column prop="coefficient" label="系数">
            <el-table-column prop="number" label="数值"></el-table-column>
            <el-table-column prop="unit" label="单位"></el-table-column>
          </el-table-column>
          <el-table-column prop="coefficient" label="工程量">
            <el-table-column prop="number" label="数值"></el-table-column>
            <el-table-column prop="unit" label="单位"></el-table-column>
          </el-table-column>
          <el-table-column prop="price" label="单价(元)"></el-table-column>
          <el-table-column prop="totalPrice" label="合价(万元)"></el-table-column>
          <el-table-column prop="coveredArea" label="建筑面积平米造价(元/平米)"></el-table-column>
          <el-table-column prop="practicalCoveredArea" label="实际建筑面积平米造价(元/平米)"></el-table-column>
          <el-table-column prop="canRental" label="可租售平米造价（元/平米）"></el-table-column>
          <el-table-column prop="costExplainNo" label="成本费用说明(不能改)"></el-table-column>
          <el-table-column prop="costExplainNo" label="备注"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="洋房">洋房</el-tab-pane>
      <el-tab-pane label="非人防车库">非人防车库</el-tab-pane>
      <el-tab-pane label="人防车库">人防车库</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'constructionCost',
  data() {
    return {
      value8: 0,
      tableData: [
        {
          costItem: '01',
          projectName: '开发成本',
          originalDescription: '红线内景观面积',
          workAmount: '53,700.00',
          unit: '元',
          price: '413.72'
        }
      ]
    }
  },
  methods: {
    /**
     * 保存提示
     */
    save() {
      this.$confirm('是否要保存数据？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '保存成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消保存!'
        })
      })
    }
  }
}
</script>

<style scoped>
</style>
