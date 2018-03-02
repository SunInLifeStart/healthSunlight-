<template>
  <div>
    <span style="float: left; margin-top: 10px;">层级选项:</span>
    <div class="block" style="width: 500px;float: left; margin-left: 100px;">
      <el-slider v-model="value8" show-input :max="6" :min="1" show-stops></el-slider>
    </div>
    <div style="float: right">
      <el-button @click="save">保存</el-button>
    </div>
    <el-table :data="tableData" border size="small" style="width: 100%">
      <el-table-column prop="costItem" label="费项"></el-table-column>
      <el-table-column prop="costItem" label="成本项目"></el-table-column>
      <el-table-column prop="costItem" label="计费基础"></el-table-column>
      <el-table-column prop="costItem" label="收费说明"></el-table-column>
      <el-table-column prop="costItem" label="收费依据"></el-table-column>
      <el-table-column prop="costItem" label="单位"></el-table-column>
      <el-table-column prop="costItem" label="高层"></el-table-column>
      <el-table-column prop="costItem" label="多层"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'designFee',
  data() {
    return {
      value8: 0,
      tableData: [
        {
          costItem: '01'
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
