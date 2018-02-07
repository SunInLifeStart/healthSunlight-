<template>
  <div>
    <div>
      <el-row>
        <el-col :span="24">
          <el-col :span="3">
            资金计划明细
          </el-col>
          <el-col :span="17"></el-col>
          <el-col :span="1">生成</el-col>
          <el-col :span="1">暂存</el-col>
          <el-col :span="1">上报</el-col>
          <el-col :span="1">撤回</el-col>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5">
          <el-col :span="8">
            <div class="div-font">项目/分期</div>
          </el-col>
          <el-col :span="16">
            <div>
              <el-input v-model="budgetReport.project" placeholder="请输入内容"></el-input>
            </div>
          </el-col>
        </el-col>
        <el-col :span="5">
          <el-col :span="8">
            <div class="div-font">部门</div>
          </el-col>
          <el-col :span="16">
            <div class="block">
              <el-input v-model="budgetReport.department" placeholder="请输入内容"></el-input>
            </div>
          </el-col>
        </el-col>
        <el-col :span="5">
          <el-col :span="8">
            <div class="div-font">关键字</div>
          </el-col>
          <el-col :span="16">
            <div class="block">
              <el-input v-model="budgetReport.opposite" placeholder="请输入内容"></el-input>
            </div>
          </el-col>
        </el-col>
      </el-row>
    </div>
    <div>
      <p>状态：{{budgetReport.status}}</p>
    </div>
    <el-table
      :data="budgetReport.list"
      height="250"
      size="small"
      border
      style="width: 100%">
      <el-table-column
        prop="manipulate"
        label="操作">
      </el-table-column>

      <el-table-column
        width="180"
        type="index"
        label="序号"
      >
      </el-table-column>
      <el-table-column
        prop="project"
        label="项目名称"
      >
      </el-table-column>
      <el-table-column
        prop="department"
        label="部门">
      </el-table-column>
      <el-table-column
        prop="functionCost"
        label="职能费项">
      </el-table-column>
      <el-table-column
        prop="contractNo"
        label="合同编号">
      </el-table-column>
      <el-table-column
        prop="contracts"
        label="合同">
      </el-table-column>
      <el-table-column
        prop="paymentCoding"
        label="付款编码">
      </el-table-column>
      <el-table-column
        prop="opposite"
        label="对方单位">
      </el-table-column>
      <el-table-column
        prop="responsible"
        label="责任人">
      </el-table-column>
      <el-table-column
        prop="monthlyPayment"
        label="本月计划付款金额"
        width="180">
      </el-table-column>
      <el-table-column
        prop="monthlyPayment"
        label="本月确认付款金额"
        width="180">
      </el-table-column>
      <el-table-column
        prop="monthlyPayment"
        label="截止上期累计付款金额"
        width="180">
      </el-table-column>
      <el-table-column
        prop="monthlyPayment"
        label="截止本期累计付款金额"
        width="180">
      </el-table-column>
      <el-table-column
        prop="monthlyPayment"
        label="合同/预算/结算金额"
        width="180">
      </el-table-column>
      <el-table-column
        prop="monthlyPayment"
        label="付款比例"
        width="180">
      </el-table-column>
      <el-table-column
        prop="monthlyPayment"
        label="付款阶段"
        width="180">
      </el-table-column>
      <el-table-column
        prop="monthlyPayment"
        label="单项工程竣备日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="monthlyPayment"
        label="合同约定付款条件"
        width="180">
      </el-table-column>
      <el-table-column
        prop="remarks"
        label="备注"
        width="180">
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        budgetReport: {
          project: '',
          opposite: '',
          department: '',
          status: '未上报',
          list: [{
            manipulate: '',
            project: '北京龙湖',
            department: '北京',
            functionCost: '龙湖',
            contractNo: 'NS250010200',
            contracts: '顺北sss',
            paymentCoding: 'pay123ws22',
            opposite: 'MJZKR',
            responsible: 'asdaw',
            monthlyPayment: '10000'
          }]
        }
      }
    }
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 4px;
    margin-top: 8px;
  }

  .div-font {
    padding-top: 8px;
    font-size: 14px;
  }

</style>
