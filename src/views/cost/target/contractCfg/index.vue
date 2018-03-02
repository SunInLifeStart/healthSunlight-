<template>
  <div>
    <div style="float:none">
      <span style="float: left">层级选项</span>
      <div class="block" style="width: 500px;float: left; margin-left: 100px;">
        <el-slider v-model="value8" show-input :max="6" :min="1" show-stops></el-slider>
      </div>
      <span>合约规划分解</span>
      <el-button style="float: right">保存</el-button>
      <el-button style="float: right">新增</el-button>
      <!--<el-button style="float: right">导出</el-button>-->
    </div>
    <div>
      <el-table :data="tableData3" height="250" border highlight-current-row style="width: 40%;float: left">
        <el-table-column prop="costItem" label="费项/合约规划">
        </el-table-column>
        <el-table-column prop="costProject." label="目标金额">
        </el-table-column>
      </el-table>
      <el-table :data="tableDataRight" height="250" border highlight-current-row
                style="width: 50%;float: left; margin-left: 100px;">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="contractPlanning" label="合约规划名称"></el-table-column>
        <el-table-column prop="contractName"  label="合同名称">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="goContractDetail(scope.row)" >{{scope.row.contractName}}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="costProject." label="合约规划金额(A>=B)"></el-table-column>
        <el-table-column prop="costProject." label="已使用合约金额(B)"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contractCfg',
    data() {
      return {
        tableData3: [{
          costItem: '01'
        }],
        tableDataRight: [
          {
            contractName: '杭州龙昊萧政储出【2016】',
            contractPlanning: '土建工程总承包合同'
          }
        ],
        value8: 0
      }
    },
    methods: {
      goContractDetail(id) {
        this.$router.push({ name: '合同信息', params: { id }})
      }
    }
  }
</script>

<style scoped>

</style>
