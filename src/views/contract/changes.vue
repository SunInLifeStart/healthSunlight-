<template>
  <div>
       <!-- 底部汇总信息展示 -->
       <div class="el-alert--success reminderBorder">
          <span class="reminder">已结转预估变更单数 </span><span class="reminderNum1 fontSize18"> 123123</span>
          <span class="reminder">已结转预估变更的结转金额 </span><span class="reminderNum1 fontSize18">3,036,464,000</span>
          <span class="reminder">未结转预估变更单数 </span><span class="reminderNum1" fontSize18>20,631.13</span>
          <span class="reminder">未结转预估变更的预估金额 </span><span class="reminderNum1 fontSize18">141,509.43</span>
          <span class="reminder">预估变更总单数 </span><span class="reminderNum1 fontSize18">3,036,464,000</span>
          <span class="reminder">总预估变更金额 </span><span class="reminderNum1 fontSize18">3,036,464,000</span>
      </div>
      <el-row :gutter="20" style="margin-top: 20px;">
          <el-col :span="24">
              <el-button size="mini" class="btnRight" icon="el-icon-document" type="text" >导出</el-button>
              <el-button size="mini" class="btnRight" icon="el-icon-document" type="text" @click="toggleSelection(contactChangeTable[1])">发起合同变更结转</el-button>
          </el-col>
       </el-row>
       <!--弹窗表格内容-->
      <el-dialog title="合同变更结转" :visible.sync="dialogTableVisible" width="80%" center>
        <el-table ref="multipleTable" :data="contactChangeTable" tooltip-effect="dark" style="width: 100%"
                  @selection-change="handleSelectionChange" :select-all="true">
          <el-table-column type="selection" width="55" aria-checked="true"></el-table-column>
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
        <el-button type="text" style="float: right;padding:5px" @click="dialogTableVisible = false">确定</el-button>
      </el-dialog>
       <div>
         <el-table
            border
            size="small"
            :default-sort="{prop: 'approvalStatus', order: 'descending'}"
            :row-class-name="tableRowClassName"
            :data="contactChangeTable"
             @row-dblclick="changeShow($event.documentNumber)"
            :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
            :header-cell-style="{background:'#efefe0', 'text-align': 'center', color: '#a08e6e',fontSize:'13px',padding:'3px 0',fontWeight:'500'}">
              <el-table-column  type="index"  label="序号"  >  </el-table-column>
              <el-table-column   prop="status" label="状态"  > </el-table-column>
              <el-table-column   prop="approvalDate"  width="110%" label="提交审批日期">  </el-table-column>
              <el-table-column  prop="changeType"  label="变更类型">  </el-table-column>
              <el-table-column prop="classification"  label="分类">  </el-table-column>
              <el-table-column
                prop="documentNumber"
                label="文档编号">
                <template slot-scope="scope">
                  <el-button type="text" @click="changeShow(scope.row.documentNumber)">{{scope.row.documentNumber}}</el-button>
                </template>
              </el-table-column>
              <el-table-column  prop="theme"  label="主题">  </el-table-column>
              <el-table-column  prop="professional"  label="专业"> </el-table-column>
              <el-table-column   prop="changeAmount"  label="预估变更金额"  width="180">  </el-table-column>
              <el-table-column  prop="balanceAmount" label="结转金额">  </el-table-column>
              <el-table-column  prop="orderNumber"  width="110%" label="下发单编号">  </el-table-column>
              <el-table-column  prop="contractChanges"  label="对应的合同变更"  width="180">  </el-table-column> 
              <el-table-column  prop="contractChanges"  label="对应的结转申请"  width="180"> </el-table-column>
              <el-table-column  prop="contractChanges" label="对应的合同变更"  width="180">  </el-table-column>
              <el-table-column  prop="theme"  label="操作"  width="180">  </el-table-column>
          </el-table>
       </div>
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
      toggleSelection(a) {
        this.dialogTableVisible = true
        // this.$refs.multipleTable.toggleRowSelection(a)
      },
      handleSelectionChange(val) {
        this.multipleSelection = val
      },
      changeShow(id) {
        this.$router.push({ name: '变更签证展示', params: { id }})
      },
      tableRowClassName({ row, rowIndex }) {
        if (rowIndex === 3) {
          return 'selected'
        }
        return ''
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
  .reminderNum1{
    margin-left: 4px;
    font-size: 9px;
  }
  
</style>
