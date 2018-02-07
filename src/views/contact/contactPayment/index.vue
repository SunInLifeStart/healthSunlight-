<template>
  <div>
    <div>
      <el-button>暂存</el-button>
      <el-button>关闭</el-button>
    </div>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-col :span="1"></el-col>
        <el-col :span="8">基本信息</el-col>
      </el-col>
      <el-col :span="6">
        <el-col :span="8">合同金额</el-col>
        <el-col :span="15">
          <el-input v-model="contactPayForm.amount" placeholder="请输入内容"></el-input>
        </el-col>
      </el-col>
      <el-col :span="6">
        <el-col :span="8">已做计划金额</el-col>
        <el-col :span="15">
          <el-input v-model="contactPayForm.planedAmount" placeholder="请输入内容"></el-input>
        </el-col>
      </el-col>
      <el-col :span="6">
        <el-col :span="8">未做计划金额</el-col>
        <el-col :span="15">
          <el-input v-model="contactPayForm.noPlanedAmount" placeholder="请输入内容"></el-input>
        </el-col>
      </el-col>
      <el-col :span="6">
        <el-col :span="8">发票金额</el-col>
        <el-col :span="15">
          <el-input v-model="contactPayForm.invoiceAmount" placeholder="请输入内容"></el-input>
        </el-col>
      </el-col>
      <el-col :span="6">
        <el-col :span="8">累计实付</el-col>
        <el-col :span="15">
          <el-input v-model="contactPayForm.totalPayment" placeholder="请输入内容"></el-input>
        </el-col>
      </el-col>
      <el-col :span="6">
        <el-col :span="8">累计付款</el-col>
        <el-col :span="15">
          <el-input v-model="contactPayForm.cumulativePayment" placeholder="请输入内容"></el-input>
        </el-col>
      </el-col>
      <el-col :span="6">
        <el-col :span="8">累计实付比例（%）</el-col>
        <el-col :span="15">
          <el-input v-model="contactPayForm.cumulativePercentage" placeholder="请输入内容"></el-input>
        </el-col>
      </el-col>
      <el-col :span="6">
        <el-col :span="8">累计未代扣回金额</el-col>
        <el-col :span="15">
          <el-input v-model="contactPayForm.unpaidAmount" placeholder="请输入内容"></el-input>
        </el-col>
      </el-col>
      <el-col :span="6">
        <el-col :span="8">累计扣款金额</el-col>
        <el-col :span="15">
          <el-input v-model="contactPayForm.deductionAmount" placeholder="请输入内容"></el-input>
        </el-col>
      </el-col>
      <el-col :span="24">
        <el-col :span="2"><p style="color: red">说明:</p></el-col>
        <el-col :span="15">
          <p style="padding-top: 8px">{{contactPayForm.instructions}}</p>
        </el-col>
      </el-col>

    </el-row>
    <div>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-col :span="1"></el-col>
          <el-col :span="15">
            实付款列表
          </el-col>
          <el-col :span="8">
            <el-col :span="4">新增</el-col>
            <el-col :span="4">删除</el-col>
            <el-col :span="4">付款申请</el-col>
            <el-col :span="8">发票关联变更</el-col>
            <el-col :span="4">导出</el-col>
          </el-col>

        </el-col>
      </el-row>
      <el-table
        :data="contactTableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="sort"
          label="序号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="180">
        </el-table-column>
        <el-table-column
          prop="type"
          label="款号类型">
        </el-table-column>
        <el-table-column
          prop="planDate"
          label="计划日期">
        </el-table-column>
        <el-table-column
          prop="planAmount"
          label="计划金额">
        </el-table-column>
        <el-table-column
          prop="applyAmount"
          label="实际申请金额">
        </el-table-column>
        <el-table-column
          prop="payedAmount"
          label="实付金额">
        </el-table-column>
        <el-table-column
          prop="PaymentInstructions"
          label="付款说明">
        </el-table-column>
      </el-table>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'contact-payment',
    data() {
      return {
        contactPayForm: {
          amount: '1000',
          planedAmount: '2000',
          invoiceAmount: '20000',
          noPlanedAmount: '30000',
          totalPayment: '20000',
          cumulativePayment: '20000',
          cumulativePercentage: '5',
          unpaidAmount: '2000',
          deductionAmount: '100',
          instructions: '累计实付 = SUM（实付全额）'
        },
        contactTableData: [{
          sort: '1',
          status: '已审批',
          type: '合同款',
          planDate: '2018-01-01',
          planAmount: '25000000',
          applyAmount: '25000000',
          payedAmount: '15000000',
          PaymentInstructions: '按照备忘录约定进行付款'
        }]
      }
    }
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;

  &
  :last-child {
    margin-bottom: 0;
  }

  }
  .el-col {
    border-radius: 4px;
    margin-top: 8px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

