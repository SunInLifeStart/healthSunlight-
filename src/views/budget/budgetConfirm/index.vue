<template>
  <el-tabs v-model="activeName" type="card" @tab-click="">
    <el-tab-pane label="总览" name="first">
      <el-table
        :data="confirmSummary"
        height="250"
        size="small"
        border
        style="width: 100%">
        <el-table-column
          type="index"
          label="序号"
        >
        </el-table-column>
        <el-table-column
          prop="project"
          label="项目"
        >
        </el-table-column>
        <el-table-column
          label="本月职能资金计划"
          align="center">
          <el-table-column
            prop="engineering"
            label="工程相关">
          </el-table-column>
          <el-table-column
            prop="design"
            label="研发设计">
          </el-table-column>
          <el-table-column
            prop="constructionCost"
            label="工程造价">
          </el-table-column>
          <el-table-column
            prop="commercialService"
            label="报建支出">
          </el-table-column>
        </el-table-column>
        <el-table-column
          prop="total"
          label="上报合计">
        </el-table-column>
        <el-table-column
          prop="taxCalculation"
          label="确认合计">
        </el-table-column>
        <el-table-column
          prop="taxCalculation"
          label="计税方式">
        </el-table-column>
        <el-table-column
          prop="taxCalculation"
          label="付款申请金额">
        </el-table-column>
        <el-table-column
          prop="taxCalculation"
          label="实际金额">
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="明细" name="second">
      <el-row :gutter="20">
        <el-col :span="5">
          <el-col :span="8">
            <div class="div-font">项目/分期</div>
          </el-col>
          <el-col :span="16">
            <div>
              <el-input v-model="particulars.project" placeholder="请输入内容"></el-input>
            </div>
          </el-col>
        </el-col>
        <el-col :span="5">
          <el-col :span="8">
            <div class="div-font">部门</div>
          </el-col>
          <el-col :span="16">
            <div class="block">
              <el-input v-model="particulars.department" placeholder="请输入内容"></el-input>
            </div>
          </el-col>
        </el-col>
        <el-col :span="5">
          <el-col :span="8">
            <div class="div-font">关键字</div>
          </el-col>
          <el-col :span="16">
            <div class="block">
              <el-input v-model="particulars.opposite" placeholder="请输入内容"></el-input>
            </div>
          </el-col>
        </el-col>
      </el-row>
      <el-table
        :data="particulars.list"
        height="250"
        size="small"
        border
        style="width: 100%">
        <el-table-column
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
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first',

        confirmSummary: [{
          project: '北京龙湖',
          engineering: '北京',
          design: '龙湖',
          constructionCost: '250010200',
          commercialService: '顺北',
          operations: '撒旦天堂',
          total: '200100200200',
          taxCalculation: '实付'
        }],
        particulars: {
          list: [{
            project: '北京龙湖',
            department: '北京',
            functionCost: '龙湖',
            contractNo: 'NS250010200',
            contracts: '顺北sss',
            paymentCoding: 'pay123ws22',
            opposite: 'MJZKR',
            responsible: 'asdaw',
            monthlyPayment: '10000'
          }],
          project: '',
          opposite: '',
          department: ''
        }
      }
    },
    methods: {}
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
