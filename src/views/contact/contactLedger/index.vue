<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-row :gutter="5">
        <el-col :span="6">
          <el-form-item label="组织机构">
            <el-select v-model="form.organization">
              <el-option label="北京龙湖" value="shanghai"></el-option>
              <el-option label="北京北京" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="合同类别">
            <el-select v-model="form.project">
              <el-option label="西苑颐和原著一期" value="shanghai"></el-option>
              <el-option label="北京北京" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="关键词">
            <el-input v-model="form.contactName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button-group>
            <el-button icon="el-icon-search"></el-button>
            <el-button @click="isShow = !isShow">高级</el-button>
          </el-button-group>
        </el-col>
      </el-row>

      <el-row :gutter="10" v-if="isShow">
        <el-col :span="6">
          <el-form-item label="项目">
            <el-input v-model="form.contractNum"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="状态">
            <el-select v-model="form.screen">
              <el-option label="我经办的合同" value="shanghai"></el-option>
              <el-option label="北京北京" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="10" v-if="isShow">
        <el-col :span="6">
          <el-form-item label="列名">
            <el-input v-model="form.responsiblePerson"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="条件">
            <el-input v-model="form.ourUnit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="内容">
            <el-input v-model="form.transactionDepartment "></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-table
      highlight-current-row
      :data="tableData"
      border
      @row-click="clickRowOpen"
      style="width: 100%">
      <el-table-column
        type="index"
        label="序号"
        width="70">
      </el-table-column>
      <el-table-column
        prop="approvalStatus"
        label="审批状态"
        width="100">
      </el-table-column>
      <el-table-column
        prop="statusAccounting"
        label="结算状态"
        width="100">
      </el-table-column>
      <el-table-column
        prop="nameContract"
        label="项目名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="supplierUnit"
        label="合同名称"
        width="280">
      </el-table-column>
      <el-table-column
        prop="contractMoneyPlus"
        label="有效签约金额(A)"
        width="180">
      </el-table-column>
      <el-table-column
        prop="contractMoneyAfter"
        label="累计变更金额(B)"
        width="120">
      </el-table-column>
      <el-table-column
        prop="contractMoneyAfter"
        label="预估变更金额(C)">
      </el-table-column>
      <el-table-column
        prop="appliedAmount"
        label="已申请金额"
        width="120">
      </el-table-column>
      <el-table-column
        prop="appliedAmount"
        label="已付款金额（D）"
        width="120">
      </el-table-column>
      <el-table-column
        prop="radioPayment"
        label="付款比例（E=D/（A+B））"
        width="220">
      </el-table-column>
      <el-table-column
        prop="contractDate"
        label="合同总额（F=A+B+C）"
        width="220">
      </el-table-column>
      <el-table-column
        prop="settlementAmount"
        label="预留余额">
      </el-table-column>
      <el-table-column
        prop=""
        label="经办人">
      </el-table-column>
      <el-table-column
        prop=""
        label="合同类别">
      </el-table-column>
      <el-table-column
        prop=""
        label="形成方式">
      </el-table-column>
      <el-table-column
        prop=""
        label="合同编号">
      </el-table-column>
      <el-table-column
        prop=""
        label="计价模式">
      </el-table-column>
      <el-table-column
        prop=""
        label="签约日期">
      </el-table-column>
      <el-table-column
        prop=""
        label="结算日期">
      </el-table-column>
      <el-table-column
        prop=""
        label="结算金额">
      </el-table-column>
      <el-table-column
        prop=""
        label="供方单位">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false,
        form: {
          organization: '',
          contactName: '',
          project: '',
          contractNum: '',
          statusAccounting: '',
          screen: '',
          freeTo: '',
          responsiblePerson: '',
          transactionDepartment: '',
          dateSigning: '',
          ourUnit: '',
          supplierUnit: ''
        },
        tableData: [
          {
            approvalStatus: '已审批',
            statusAccounting: '已结算',
            nameContract: '西苑颐和园一期',
            supplierUnit: '龙湖地产颐和原著广告代理合同',
            contractMoneyPlus: '18,000.00',
            contractMoneyAfter: '19,000.00',
            appliedAmount: '18,000.00',
            radioPayment: '100%',
            contractDate: '2018-4-30',
            settlementAmount: '18,000.00'
          },
          {
            approvalStatus: '已审批',
            statusAccounting: '已结算',
            nameContract: '西苑颐和园一期',
            supplierUnit: '龙湖地产颐和原著广告代理合同',
            contractMoneyPlus: '18,000.00',
            contractMoneyAfter: '19,000.00',
            appliedAmount: '18,000.00',
            radioPayment: '100%',
            contractDate: '2018-4-30',
            settlementAmount: '18,000.00'
          },
          {
            approvalStatus: '已审批',
            statusAccounting: '已结算',
            nameContract: '西苑颐和园一期',
            supplierUnit: '龙湖地产颐和原著广告代理合同',
            contractMoneyPlus: '18,000.00',
            contractMoneyAfter: '19,000.00',
            appliedAmount: '18,000.00',
            radioPayment: '100%',
            contractDate: '2018-4-30',
            settlementAmount: '18,000.00'
          }
        ]
      }
    },
    methods: {
      clickRowOpen() {
        this.$router.push({ path: 'contractInfo' })
      }
    }
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
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
