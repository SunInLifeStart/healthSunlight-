<template>
  <div>
    <el-row style="margin: 15px">
      <el-col :span="2" :offset="22"><el-button @click="save">保存</el-button></el-col>
    </el-row>
    <span style="float: left; margin-top: 10px;">层级选项:</span>
    <div class="block" style="width: 500px;float: left; margin-left: 100px;">
      <el-slider v-model="value8" show-input :max="3" :min="1" show-stops></el-slider>
    </div>
    <div style="float: right">
      <i class="el-icon-circle-plus" style="margin-right: 10px">添加</i>
      <i class="el-icon-delete">删除</i>
    </div>
    <el-table :data="tableData" border size="small" style="width: 100%">
      <el-table-column width="50"></el-table-column>
      <el-table-column prop="specialIssue" label="特殊事项"></el-table-column>
      <el-table-column prop="workAmount" label="估算变量"></el-table-column>
      <el-table-column prop="unit" label="单位"></el-table-column>
      <el-table-column prop="gardenHouse" label="影响变量估算"></el-table-column>
      <el-table-column prop="combinedPrice" label="估算单价"></el-table-column>
      <el-table-column prop="coveredArea" label="估算参考成本"></el-table-column>
      <el-table-column prop="remarks" label="备注"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'specialItem',
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
