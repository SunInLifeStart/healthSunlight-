<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-col :span="1"></el-col>
        <el-col :span="8">付款情况</el-col>
      </el-col>
      <el-col :span="12">
        <el-col :span="12">
          <el-col :span="8">合同金额（A）</el-col>
          <el-col :span="15">
            <el-input v-model="contactPayForm.amount" placeholder="请输入内容"></el-input>
          </el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="8">累计申请金额（B）</el-col>
          <el-col :span="15">
            <el-input v-model="contactPayForm.planedAmount" placeholder="请输入内容"></el-input>
          </el-col>
        </el-col>
         <el-col :span="12">
          <el-col :span="8">未申请金额（C=A-B）</el-col>
          <el-col :span="15">
            <el-input v-model="contactPayForm.planedAmount" placeholder="请输入内容"></el-input>
          </el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="8">累计实付金额（D）</el-col>
          <el-col :span="15">
            <el-input v-model="contactPayForm.planedAmount" placeholder="请输入内容"></el-input>
          </el-col>
        </el-col>
        <!--<el-col :span="12">-->
        <!--<el-col :span="8">未做申请金额（C=A-B）</el-col>-->
        <!--<el-col :span="15">-->
        <!--<el-input v-model="contactPayForm.noPlanedAmount" placeholder="请输入内容"></el-input>-->
        <!--</el-col>-->
        <!--</el-col>-->
        <el-col :span="12">
          <el-col :span="8">累计未代扣回金额</el-col>
          <el-col :span="15">
            <el-input v-model="contactPayForm.invoiceAmount" placeholder="请输入内容"></el-input>
          </el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="8">累计扣款金额</el-col>
          <el-col :span="15">
            <el-input v-model="contactPayForm.totalPayment" placeholder="请输入内容"></el-input>
          </el-col>
        </el-col>
        <el-col :span="12">
          <el-col :span="8">发票金额</el-col>
          <el-col :span="15">
            <el-input v-model="contactPayForm.cumulativePayment" placeholder="请输入内容"></el-input>
          </el-col>
        </el-col>
        <!--<el-col :span="12">-->
        <!--<el-col :span="8">累计实付金额（D）</el-col>-->
        <!--<el-col :span="15">-->
        <!--<el-input v-model="contactPayForm.unpaidAmount" placeholder="请输入内容"></el-input>-->
        <!--</el-col>-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
        <!--<el-col :span="8">累计实付比例（%）（E=D/A）</el-col>-->
        <!--<el-col :span="15">-->
        <!--<el-input v-model="contactPayForm.deductionAmount" placeholder="请输入内容"></el-input>-->
        <!--</el-col>-->
        <!--</el-col>-->
        <el-col :span="24">
          <el-col :span="8">累计实付比例(%)(E=D/A)</el-col>
          <el-col :span="15">
            <el-input v-model="contactPayForm.cumulativePayment" placeholder="请输入内容"></el-input>
          </el-col>
        </el-col>
      </el-col>
      <el-col :span="12">
        <el-progress type="circle" :percentage="25"></el-progress>
      </el-col>
    </el-row>
    <div>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-col :span="12">
            付款申请列表
          </el-col>
          <el-col :span="12">
            <el-col :span="12">
              <el-switch
                v-model="value"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
              显示含税金额
            </el-col>
            <el-col :span="12">
              <a href="#/payment/detail/001">新增付款申请</a>
            </el-col>
          </el-col>
        </el-col>
      </el-row>
        <div class="el-alert el-alert--success is-center">
             合计：[ 4] 累计申请金额：[ 7,156,567.123 ] 累计实付金额：[ 7,156,567.123 ]
        </div>
      <el-table
        :data="contactTableData"
        stripe style="width: 100%"
        height="520"
        highlight-current-row
        :default-sort="{prop: 'sort', order: 'descending'}"
        :row-class-name="tableRowClassName">
        <el-table-column sortable prop="sort" label="序号" width=""></el-table-column>
        <el-table-column sortable prop="status" label="状态" width="180"></el-table-column>
        <el-table-column sortable prop="type" label="付款主题"></el-table-column>
        <el-table-column label="付款编号">
          <template slot-scope="scope">
            <a href="#/payment/detail/001">213213</a>
          </template>
        </el-table-column>
        <el-table-column prop="planAmount" label="产值"></el-table-column>
        <el-table-column prop="applyAmount" label="申请金额"></el-table-column>
        <el-table-column prop="applyAmount" label="资金计划确认金额"></el-table-column>
        <el-table-column prop="applyAmount" label="实付金额"></el-table-column>
         <el-table-column prop="PaymentInstructions" label="操作" width="300">
            <template slot-scope="scope">
              <el-button
                plain
                @click="handleClick(scope.row)"
                type="primary"
                size="small">
                审批过程
              </el-button>
              <el-button
                plain
                @click="invoice(scope.row.id)"
                type="info"
                size="small">
               <a :href="'#/contract/detail/' + scope.row.id + '/payments/invoices'">关联发票</a>
              </el-button>
              <el-button
                plain
                @click="showChanges(scope.row.id)"
                type="info"
                size="small">
                删除
              </el-button>
            </template>
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
        contactTableData: [
          {
            sort: '1',
            status: '草稿',
            type: '已编制付款申请但未发起审批',
            planDate: '2018-01-01',
            planAmount: '25000000',
            applyAmount: '25000000',
            payedAmount: '15000000',
            PaymentInstructions: '按照备忘录约定进行付款'
          },
          {
            sort: '2',
            status: '审批中',
            type: '付款申请在审批中',
            planDate: '2018-01-01',
            planAmount: '25000000',
            applyAmount: '25000000',
            payedAmount: '15000000',
            PaymentInstructions: '按照备忘录约定进行付款'
          },
          {
            sort: '3',
            status: '已审批',
            type: '付款申请已通过审批',
            planDate: '2018-01-01',
            planAmount: '25000000',
            applyAmount: '25000000',
            payedAmount: '15000000',
            PaymentInstructions: '按照备忘录约定进行付款'
          },
          {
            sort: '4',
            status: '已驳回',
            type: '单据在审批中被驳回',
            planDate: '2018-01-01',
            planAmount: '25000000',
            applyAmount: '25000000',
            payedAmount: '15000000',
            PaymentInstructions: '按照备忘录约定进行付款'
          }
        ],
        value: false
      }
    },
    methods: {
      handleClick() {
        console.log(123)
      },
      invoice(id) {
          // window.location.href('#/contract/detail/' + id + '/payments/invoices');
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

