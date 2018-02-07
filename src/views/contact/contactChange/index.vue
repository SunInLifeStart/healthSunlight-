<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-col >合同预估变更列表</el-col>
      </el-col>
    </el-row>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row>
        <el-col :span="6">
          <el-form-item label="合同变更">
            <el-select v-model="form.organization">
              <el-option label="北京龙湖" value="shanghai"></el-option>
              <el-option label="北京北京" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="状态">
            <el-select v-model="form.project">
              <el-option label="西苑颐和原著一期" value="shanghai"></el-option>
              <el-option label="北京北京" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="文档编号">
            <el-input v-model="form.contactName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button-group>
            <el-button icon="el-icon-search"></el-button>
          </el-button-group>
        </el-col>
      </el-row>
    </el-form>
    <el-table
      :data="contactChangeTable"
      stripe
      border
      size="small"
      style="width: 100%">
      <el-table-column
        type="index"
        label="序号"
      >
      </el-table-column>
      <el-table-column
        prop="status"
        label="合同变更"
      >
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
      >
      </el-table-column>
      <el-table-column
        prop="approvalDate"
        label="提交审批日期">
      </el-table-column>
      <el-table-column
        prop="changeType"
        label="变更类型">

      </el-table-column>

      <el-table-column
        prop="documentNumber"
        label="文档编号">
      </el-table-column>
      <el-table-column
        prop="theme"
        label="主题">
      </el-table-column>
      <el-table-column
        prop="professional"
        label="专业">
      </el-table-column>
      <el-table-column
        prop="balanceAmount"
        label="结转金额">
      </el-table-column>
      <el-table-column
        prop="balanceAmount"
        label="下单编号">
      </el-table-column>

      <el-table-column
        prop="ChangeVisa"
        label="对应的结转申请" width="180"
      >
      </el-table-column>
      <el-table-column
        prop="contractChanges"
        label="对应的合同变更"
        width="180">
      </el-table-column>
      <el-table-column
        prop="terminationReason"
        label="操作">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'contact-change',
    data() {
      return {
        contactChange: {
          carriedForwardList: 1,
          carriedForwardAmount: 20000,
          forecastChangeList: 5,
          carriedForwardContractList: '1',
          forecastChangeAmount: 1000000,
          forecastChangeListTotal: 20
        },
        contactChangeTable: [{
          status: '更改',
          approvalDate: '123',
          changeType: '合同',
          classification: '12312',
          documentNumber: '123',
          theme: '变更',
          professional: '22',
          changeAmount: '22',
          balanceAmount: '22',
          ChangeVisa: 22,
          orderNumber: '22',
          contractChanges: '333',
          terminator: '小三',
          endDate: '20160101',
          terminationReason: '22'
        }],
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
    padding-top: 8px;
  }


</style>
