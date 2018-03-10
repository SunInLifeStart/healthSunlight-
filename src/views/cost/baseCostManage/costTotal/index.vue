<template>
  <div>
    <el-row>
      <el-col :span="16" class="card_section">
        <el-col :span="4" style="line-height: 2;font-size: 14px">层级选项：</el-col>
        <el-col :span="18" style="margin-left: -9%">
          <el-pagination background layout="pager" :current-page.sync="level" @current-change="changeLevel(level)" :total="30"></el-pagination>
        </el-col>
      </el-col>
    </el-row>
    <el-table highlight-current-row :data="tableData" border
              size="small" style="width: 98%;margin-left: 1%" show-summary :summary-method="getSummaries"
              :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
              :header-cell-style="{background:'#E8F4F9', 'text-align': 'center', color: '#7986a9',fontSize:'13px',padding:'6px 0',fontWeight:'500'}">
      <el-table-column prop="costItem" width="100px" label="费项" align="center"></el-table-column>
      <el-table-column prop="projectName" label="成本项目" align="center"></el-table-column>
      <el-table-column prop="originalDescription" label="原始指标说明" align="center"></el-table-column>
      <el-table-column prop="workAmount" label="工程量" align="center"></el-table-column>
      <el-table-column prop="unit" label="单位" align="center"></el-table-column>
      <el-table-column prop="gardenHouse" label="单价(元)" align="center"></el-table-column>
      <el-table-column prop="combinedPrice" label="合价(万元)" align="center"></el-table-column>
      <el-table-column prop="combinedPrice" label="建筑面积平米造价(元/平米)"></el-table-column>
      <el-table-column prop="combinedPrice" label="实际建筑面积平米造价(元/平米"></el-table-column>
      <el-table-column prop="combinedPrice" label="可租售平米造价（元/平米）"></el-table-column>
      <el-table-column prop="combinedPrice" label="成本费用说明"></el-table-column>
    </el-table>
    <el-table highlight-current-row :data="tableData" border style="width: 98%;margin-left: 1%"
              :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
              :header-cell-style="{ display : 'none'}">
      <el-table-column prop="costItem" width="100px" label="" align="center"></el-table-column>
      <el-table-column prop="projectName" label="" align="center"></el-table-column>
      <el-table-column prop="originalDescription" label="" align="center"></el-table-column>
      <el-table-column prop="workAmount" label="" align="center"></el-table-column>
      <el-table-column prop="unit" label="" align="center"></el-table-column>
      <el-table-column prop="gardenHouse" label="" align="center"></el-table-column>
      <el-table-column prop="combinedPrice" label="" align="center"></el-table-column>
      <el-table-column prop="combinedPrice" label=""></el-table-column>
      <el-table-column prop="combinedPrice" label=""></el-table-column>
      <el-table-column prop="combinedPrice" label=""></el-table-column>
      <el-table-column prop="combinedPrice" label=""></el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  name: 'costTotal',
  data() {
    return {
      value8: 0,
      level: 1,
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
    // 层级选项控制
    changeLevel(level) {
      console.log(level)
      this.level = level
    },
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
