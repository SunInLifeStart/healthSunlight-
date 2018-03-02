<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-col>合同预估变更列表</el-col>
      </el-col>
      <el-col :span="12">
          <el-button type="text" @click="dialogTableVisible = true">发起合同变更结转</el-button>
      </el-col>
    </el-row>
    <!--弹窗表格内容-->
    <el-dialog title="合同变更结转" :visible.sync="dialogTableVisible" width="80%" center>
      <el-table ref="multipleTable" :data="contactChangeTable" tooltip-effect="dark" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column property="terminationReason" label="状态"></el-table-column>
        <el-table-column property="terminationReason" width="110" label="提交审批日期"></el-table-column>
        <el-table-column property="terminationReason" label="变更类型"></el-table-column>
        <el-table-column property="terminationReason" label="文档编号"></el-table-column>
        <el-table-column property="terminationReason" label="主题"></el-table-column>
        <el-table-column property="terminationReason" label="专业"></el-table-column>
        <el-table-column property="terminationReason" label="结转金额"></el-table-column>
        <el-table-column property="terminationReason" width="100" label="下发单编号"></el-table-column>
        <el-table-column property="terminationReason" width="120" label="对应的结转申请"></el-table-column>
        <el-table-column property="terminationReason" width="120" label="对应的合同变更"></el-table-column>
      </el-table>
    </el-dialog>
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
     <div class="el-alert el-alert--success is-center">
            已结转预估变更单数：【0】 已结转预估变更的结转金额：【0.00】 未结转预估变更单数：【0】 未结转预估变更的预估金额：【0.00】 预估变更总单数：【0】 总预估变更金额：【0】
        </div>
    <el-table
      :data="contactChangeTable"
      stripe
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
        width="110%"
        label="提交审批日期">
      </el-table-column>
      <el-table-column
        prop="changeType"
        label="变更类型">
      </el-table-column>
      <!--<el-table-column-->
      <!--prop="classification"-->
      <!--label="分类">-->
      <!--</el-table-column>-->
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
      <!--<el-table-column-->
      <!--prop="changeAmount"-->
      <!--label="预估变更金额"-->
      <!--width="180">-->
      <!--</el-table-column>-->
      <el-table-column
        prop="balanceAmount"
        label="结转金额">
      </el-table-column>
      <el-table-column
        prop="orderNumber"
        width="110%"
        label="下发单编号">
      </el-table-column>
      <!--<el-table-column-->
      <!--prop="contractChanges"-->
      <!--label="对应的合同变更"-->
      <!--width="180">-->
      <!--</el-table-column>  -->
      <el-table-column
        prop="contractChanges"
        label="对应的结转申请"
        width="180">
      </el-table-column>
      <el-table-column
        prop="contractChanges"
        label="对应的合同变更"
        width="180">
      </el-table-column>
      <el-table-column
        prop="theme"
        label="操作"
        width="180">
      </el-table-column>
      <!--<el-table-column-->
      <!--prop="terminator"-->
      <!--label="终止人">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
      <!--prop="endDate"-->
      <!--label="终止日期">-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
      <!--prop="terminationReason"-->
      <!--label="终止原因">-->
      <!--</el-table-column>-->
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
        contactChangeTable: [
          {
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
          }, {
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
          }
        ],
        multipleSelection: [],
        dialogTableVisible: false,
        dialogFormVisible: false,
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
    },
    methods: {
      /**
       * 获取选中数据
       */
      handleSelectionChange(val) {
        this.multipleSelection = val
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

  .div-bottom3 {
    position: absolute;
    bottom: 3%;
  }
</style>
