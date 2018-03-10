<template>
  <div>
    <div style="margin: 8px">
      <el-form ref="form" :model="form" label-width="120px">
        <el-row :gutter="5">
          <el-col :span="6">
            <el-form-item label="组织机构">
              <el-select v-model="form.organization">
                <el-option label="类别1" value="001"></el-option>
                <el-option label="类别2" value="002"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="项目/分期">
              <el-select v-model="form.project">
                <el-option label="类别1" value="001"></el-option>
                <el-option label="类别2" value="002"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-button-group>
              <el-button icon="el-icon-search"></el-button>
              <el-button @click="showAdvancedSearch = !showAdvancedSearch">高级</el-button>
            </el-button-group>
          </el-col>
        </el-row>
      </el-form>
      <el-row :gutter="20">
        <el-col :span="6">
        </el-col>
        <el-col :span="6">
          资金计划数：【{{budgetTotal.capitalPlan}}】
        </el-col>
        <el-col :span="6">
          资金计划金额：【{{budgetTotal.budgetPlan}}】
        </el-col>
        <el-col :span="6">
          资金计划确认金额：【{{budgetTotal.budgetConfirmPlanPlan}}】
        </el-col>
      </el-row>
    </div>
    <div v-for="particulars in budgetTotal.particularsList">
      <el-row :gutter="20">
        <el-col :span="6">
          <div>{{particulars.name}}</div>
        </el-col>
        <el-col :span="6">
          资金计划数：【{{particulars.capitalPlan}}】
        </el-col>
        <el-col :span="6">
          资金计划金额：【{{particulars.budgetPlan}}】
        </el-col>
        <el-col :span="6">
          资金计划确认金额：【{{particulars.budgetConfirmPlanPlan}}】
        </el-col>

      </el-row>
      <el-table
        :data="particulars.list"
        height="250"
        border
        style="width: 100%">
        <el-table-column
          width="180"
          type="index"
          label="序号"
        >
        </el-table-column>
        <el-table-column
          prop="project"
          label="项目名称"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="department"
          width="180"
          label="部门">
        </el-table-column>
        <el-table-column
          prop="functionCost"
          width="180"
          label="职能费项">
        </el-table-column>
        <el-table-column
          prop="contractNo"
          width="180"
          label="合同编号">
        </el-table-column>
        <el-table-column
          prop="contracts"
          width="180"
          label="合同">
        </el-table-column>
        <el-table-column
          prop="paymentCoding"
          width="180"
          label="付款编码">
        </el-table-column>
        <el-table-column
          prop="opposite"
          width="180"
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
          prop="monthlyPaidPayment"
          label="本月确认付款金额"
          width="180">
        </el-table-column>
        <el-table-column
          prop="paidPayment"
          width="180"
          label="实付金额">
        </el-table-column>
        <el-table-column
          prop="paymentLastDueDate"
          label="截止上期累计付款金额"
          width="180">
        </el-table-column>
        <el-table-column
          prop="paymentDueDate"
          label="截止本期累计付款金额"
          width="180">
        </el-table-column>
        <el-table-column
          prop="contractBudget"
          label="合同/预算/结算金额"
          width="180">
        </el-table-column>
        <el-table-column
          prop="paymentRatio"
          label="付款比例"
          width="180">
        </el-table-column>
        <el-table-column
          prop="paymentProperties"
          label="付款属性"
          width="180">
        </el-table-column>
        <el-table-column
          prop="separateProjectsData"
          label="单项工程俊备日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="contractPaymentCriteria"
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
  </div>

</template>

<script>
  export default {
    data() {
      return {
        showAdvancedSearch: false,
        form: {
          organization: '',
          project: ''
        },
        budgetTotal: {
          capitalPlan: '22',
          budgetPlan: '33',
          budgetConfirmPlanPlan: '333',
          particularsList: [
            {
              name: '工程造价',
              capitalPlan: '11',
              budgetPlan: '13',
              budgetConfirmPlanPlan: '133',
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
                monthlyPayment: '10000',
                monthlyPaidPayment: '120000',
                paidPayment: '2000000',
                paymentLastDueDate: '152020',
                paymentDueDate: '300000',
                contractBudget: '10000',
                paymentRatio: '5',
                paymentProperties: 'dddd',
                separateProjectsData: '20180106',
                contractPaymentCriteria: 'sss',
                remarks: '备注'
              }]
            },
            {
              name: '工程相关',
              capitalPlan: '11',
              budgetPlan: '20',
              budgetConfirmPlanPlan: '200',
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
                monthlyPayment: '10000',
                monthlyPaidPayment: '120000',
                paidPayment: '2000000',
                paymentLastDueDate: '152020',
                paymentDueDate: '300000',
                contractBudget: '10000',
                paymentRatio: '5',
                paymentProperties: 'dddd',
                separateProjectsData: '20180106',
                contractPaymentCriteria: 'sss',
                remarks: '备注'
              }]
            },
            {
              name: '报建支出',
              capitalPlan: '11',
              budgetPlan: '20',
              budgetConfirmPlanPlan: '200',
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
                monthlyPayment: '10000',
                monthlyPaidPayment: '120000',
                paidPayment: '2000000',
                paymentLastDueDate: '152020',
                paymentDueDate: '300000',
                contractBudget: '10000',
                paymentRatio: '5',
                paymentProperties: 'dddd',
                separateProjectsData: '20180106',
                contractPaymentCriteria: 'sss',
                remarks: '备注'
              }]
            }
          ]

        }
      }
    }

  }
</script>

<style scoped>

</style>
