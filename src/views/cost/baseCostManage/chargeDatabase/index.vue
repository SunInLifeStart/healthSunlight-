<template>
  <div style="position: relative">
    <el-button  size="small" style="position: absolute;top:4px;right:40px;z-index: 1;" @click="save">保存</el-button>
    <el-tabs type="border-card">
      <el-tab-pane label="东城区">东城区</el-tab-pane>
      <el-tab-pane label="西城区">
        <span style="float: left">层级选项:</span>
        <div class="block" style="width: 500px;float: left; margin-left: 100px;">
          <el-slider show-input :max="6" :min="1" show-stops></el-slider>
        </div>
        <el-table :data="tableData" border size="small" style="width: 100%">
          <el-table-column prop="expenseItem" label="费项"></el-table-column>
          <el-table-column prop="basedOn" label="成本项目"></el-table-column>
          <el-table-column prop="chargeState" label="计算基础"></el-table-column>
          <el-table-column prop="feeBasis" label="收费说明"></el-table-column>
          <el-table-column prop="" align="center" label="收费依据"></el-table-column>
          <el-table-column prop="units" align="center" label="单位"></el-table-column>
          <el-table-column prop="" label="高层"></el-table-column>
          <el-table-column prop="" label="多层"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="海淀区">海淀区</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            expenseItem: '01-2',
            costItems: '前期工程费',
            basedOn: '总建筑面积',
            chargeState: '住宅150元/平方米,非住宅220/平方米 （2014年2月28日前拿地项目，按照原收费标准——住宅90元/M2,非住宅140元/M2标准缴纳）',
            feeBasis: '杭价费[2014]32号',
            units: '元/m²',
            barrioOne: '1',
            barrioTwo: '2',
            barrioThree: '3',
            barrioFour: '4'
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
