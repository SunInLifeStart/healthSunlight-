<template>
  <div>
    <el-row>
      <el-col :span="5">
        <el-col :span="8">组织机构</el-col>
        <el-col :span="16">
          <el-input></el-input>
        </el-col>
      </el-col>
      <el-col :span="5">
        <el-col :span="8">项目/分期</el-col>
        <el-col :span="16">
          <el-input></el-input>
        </el-col>
      </el-col>
      <el-col :span="5">
        <el-col :span="8">关键词</el-col>
        <el-col :span="16">
          <el-input></el-input>
        </el-col>
      </el-col>
      <el-col :span="4">&nbsp</el-col>
      <el-col :span="5">
        <el-col :span="12">
          <el-input></el-input>
        </el-col>
        <el-col :span="12"> 高级</el-col>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      border
      @cell-click="goPayment"
      size="small"
      style="width: 100%">
      <el-table-column
        type="index"
        label="序号"
      >
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
      >
      </el-table-column>
      <el-table-column
        prop="paymentType"
        label="付款类别">
      </el-table-column>
      <el-table-column
        prop="paymentTheme"
        label="付款主题">
      </el-table-column>
      <el-table-column
        prop="paymentNumber"
        label="付款编号">
      </el-table-column>
      <el-table-column
        prop="Title"
        label="合同名称">
      </el-table-column>
      <el-table-column
        prop="payer"
        label="付款单位">
      </el-table-column>
      <el-table-column
        prop="payee"
        label="收款单位">
      </el-table-column>
      <el-table-column
        prop="appliedAmount"
        label="申请金额">
      </el-table-column>
      <el-table-column
        prop="paymentAmount"
        label="支付金额">
      </el-table-column>
      <el-table-column
        prop="output"
        label="累计产值">
      </el-table-column>
      <el-table-column
        prop="applicationDivision"
        label="申请部门">
      </el-table-column>
      <el-table-column
        prop="proposer"
        label="申请人">
      </el-table-column>
      <el-table-column
        prop="applicationDate"
        label="申请日期">
      </el-table-column>
      <el-table-column
        prop="operation"
        fixed
        label="操作">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            status: '已审核',
            paymentType: '合同',
            paymentTheme: '京市丰台区卢沟桥乡西局旧村改',
            paymentNumber: 'HS123234',
            Title: '北京市丰台区卢沟桥乡西局',
            payer: '大大',
            payee: '大的',
            appliedAmount: '222',
            paymentAmount: '3333',
            output: '123',
            applicationDivision: '123',
            proposer: '123',
            applicationDate: '123',
            operation: '23'
          }
        ]
      }
    },
    methods: {
      goPayment() {
        this.$router.push({ path: 'payment' })
      }
    }
  }
</script>

<style scoped>

</style>
