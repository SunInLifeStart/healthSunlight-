<template>
  <div>
    <span style="float: left; margin-top: 10px;">层级选项:</span>
    <div class="block" style="width: 500px;float: left; margin-left: 100px;">
      <el-slider v-model="value8" show-input :max="6" :min="1" show-stops></el-slider>
    </div>
    <el-table :data="tableData" border show-summary :summary-method="getSummaries" style="width: 100%">
      <el-table-column prop="costItem" label="费项" width="50"></el-table-column>
      <el-table-column prop="projectName" label="成本项目" width="100"></el-table-column>
      <el-table-column prop="originalDescription" label="原始指标说明"></el-table-column>
      <el-table-column prop="workAmount" label="工程量"></el-table-column>
      <el-table-column prop="unit" label="单位"></el-table-column>
      <el-table-column prop="gardenHouse" label="单价(元)"></el-table-column>
      <el-table-column prop="combinedPrice" label="合价(万元)"></el-table-column>
      <el-table-column prop="coveredArea" label="建筑面积平米造价(元/平米)"></el-table-column>
      <el-table-column prop="practicalCoveredArea" label="实际建筑面积平米造价(元/平米)"></el-table-column>
      <el-table-column prop="canRental" label="可租售平米造价（元/平米）"></el-table-column>
      <el-table-column prop="costExplain" label="成本费用说明"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'costTotal',
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
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '合计'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
        } else {
          sums[index] = 'N/A'
        }
      })
      return sums
    }
  }
}
</script>

<style scoped>
</style>
