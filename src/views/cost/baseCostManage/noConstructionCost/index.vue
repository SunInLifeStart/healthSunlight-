<template>
  <div>
    <span style="float: left">层级选项:</span>
    <div class="block" style="width: 500px;float: left; margin-left: 100px;">
      <el-slider v-model="value8" show-input :max="6" :min="1" show-stops></el-slider>
    </div>
    <div style="float: right">
      <el-button  @click="dialogVisible = true">引入</el-button>
      <el-button>保存</el-button>
    </div>
    <!--引入弹框-->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>引入数据库数据后，当前填写的数据将被覆盖，请做好备份！确认是否引入？</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
    <el-table :data="tableData" border show-summary sum-text="合计" size="small" style="width: 100%">
      <el-table-column prop="costItem" label="费项" width="50"></el-table-column>
      <el-table-column prop="costProject" label="成本项目" width="50"></el-table-column>
      <el-table-column prop="superHeight" label="原始指标说明"></el-table-column>
      <el-table-column prop="workAmount" label="工程量"></el-table-column>
      <el-table-column prop="unit" label="单位"></el-table-column>
      <el-table-column prop="price" label="单价(元)"></el-table-column>
      <el-table-column prop="price" label="高层(18层以上，<100m)"></el-table-column>
      <el-table-column prop="price" label="花园洋房 (9层以下）"></el-table-column>
      <el-table-column prop="price" label="地下室"></el-table-column>
      <el-table-column prop="totalPrice" label="合价(万元)"></el-table-column>
      <el-table-column prop="coveredArea" width="200" label="建筑面积平米造价(元/平米)"></el-table-column>
      <el-table-column width="200" prop="practicalCoveredArea" label="实际建筑面积平米造价(元/平米)"></el-table-column>
      <el-table-column width="200" prop="practicalCoveredArea" label="可租售平米造价（元/平米）"></el-table-column>
      <el-table-column prop="costExplain" label="成本费用说明"></el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'noConstructionCost',
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
      ],
      dialogVisible: false
    }
  },
  methods: {
    handleClose(done) { this.$confirm('确认关闭？').then(_ => { done() }).catch(_ => {}) }
  }
}
</script>

<style scoped>
</style>
