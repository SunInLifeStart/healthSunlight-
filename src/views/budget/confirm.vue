<template>
  <el-tabs v-model="activeName" type="card" @tab-click="">
    <el-tab-pane label="总览" name="first">
      <el-row>
        <el-col :span="24">
          <el-col :span="17"></el-col>
           <el-col :span="1"> <el-button size="mini">锁定</el-button></el-col>
          <el-col :span="1"> <el-button size="mini">解锁</el-button></el-col>
          <el-col :span="1"> <el-button size="mini">暂存</el-button></el-col>
          <el-col :span="1"> <el-button size="mini">确认</el-button></el-col>
        </el-col>
      </el-row>
      <el-table :data="confirmSummary" height="250" size="small" border style="width: 100%">
         <el-table-column type="selection" width="50">
              <template slot-scope="scope">
                 <el-checkbox label=""></el-checkbox>
              </template>
        </el-table-column>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="project" label="项目"></el-table-column>
        <el-table-column label="本月职能资金计划" align="center">
          <el-table-column prop="engineering" label="工程相关"></el-table-column>
          <el-table-column prop="design" label="研发设计"></el-table-column>
          <el-table-column prop="constructionCost" label="工程造价"></el-table-column>
          <el-table-column prop="commercialService" label="报建支出"></el-table-column>
        </el-table-column>
        <el-table-column label="上报合计">
          <template slot-scope="scope">
            <a @click="goBudgetTotal">213213</a>
          </template>
        </el-table-column>
         <el-table-column prop="taxCalculation" label="确认合计"></el-table-column>
         <el-table-column prop="constructionCost" label="差额"></el-table-column>
         <el-table-column prop="taxCalculation" label="计税方式"></el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="明细" name="second">
         <el-form  :model="keyword" label-width="120px">
            <el-row :gutter="5">
              <el-col :span="6">
                <el-form-item label="项目/分期">
                  <el-select v-model="keyword.project">
                    <el-option label="项目/分期1" value="001"></el-option>
                    <el-option label="项目/分期2" value="002"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="部门">
                  <el-select v-model="keyword.functional">
                    <el-option label="部门1" value="001"></el-option>
                    <el-option label="部门2" value="002"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="关键字">
                  <el-input v-model="keyword.word" placeholder="请输入内容"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-button-group>
                  <el-button icon="el-icon-search" ></el-button>
                </el-button-group>
              </el-col>
            </el-row>
        </el-form>
      <el-table :data="particulars.list" height="250" size="small" border style="width: 100%">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="project" label="项目名称"></el-table-column>
        <el-table-column prop="department" label="部门"></el-table-column>
        <el-table-column prop="functionCost" label="职能费项"></el-table-column>
        <el-table-column prop="contractNo" label="合同编号"></el-table-column>
        <el-table-column prop="contracts" label="合同"></el-table-column>
        <el-table-column prop="paymentCoding" label="付款编码"></el-table-column>
        <el-table-column prop="opposite" label="对方单位"></el-table-column>
        <el-table-column prop="responsible" label="责任人"></el-table-column>
        <el-table-column prop="monthlyPayment" label="本月计划付款金额" width="180"></el-table-column>
        <el-table-column prop="monthlyPayment" label="本月确认付款金额" width="180"></el-table-column>
        <!-- <el-table-column prop="monthlyPayment" label="截止上期累计付款金额" width="180"></el-table-column> -->
        <el-table-column prop="monthlyPayment" label="截止本期累计付款金额" width="180"></el-table-column>
        <el-table-column prop="monthlyPayment" label="合同/预算/结算金额" width="180"></el-table-column>
        <el-table-column prop="monthlyPayment" label="付款比例" width="180"></el-table-column>
        <el-table-column prop="monthlyPayment" label="付款阶段" width="180"></el-table-column>
        <el-table-column prop="monthlyPayment" label="单项工程竣备日期" width="180"></el-table-column>
        <el-table-column prop="monthlyPayment" label="合同约定付款条件" width="180"></el-table-column>
        <el-table-column prop="remarks" label="备注" width="180"></el-table-column>
      </el-table>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    data() {
      return {
        keyword: {
          word: '',
          functional: '',
          project: ''
        },
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
    methods: {
      goBudgetTotal() {
        this.$router.push('/budgetTotal')
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
