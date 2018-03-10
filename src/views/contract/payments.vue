<template>
  <div>
    <div class="piecerow_main">
      <div class="piecerow">
        <!--付款情况-->
        <div style="background-color: #EEF2F6">
          <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #e9e9e9;background-color: #FFFFFF;border-top-left-radius: 4px;border-top-right-radius: 4px"
               @click="basicInfo = !basicInfo">
            <el-row>
              <el-col :span="11" style="margin-left: 1%">
                <span style="border-left: 2px solid #7986A9"></span>
                <span class="dev1_font">付款情况</span>
                <span style="color: red;font-size: 12px;margin-left: 5px">以下金额均为含税</span>
              </el-col>
              <el-col :span="12" style="text-align: right;margin-left: 2%">
                <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="basicInfo"></i>
                <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!basicInfo"></i>
              </el-col>
            </el-row>
          </div>
        </div>
        <div v-show="basicInfo" class="dev_show">
          <el-form   label-width="140px" class="demo-ruleForm">
            <el-container>
              <el-aside width="70%" style="overflow-x: hidden;overflow-y: hidden">
                <el-row :gutter="20" style="margin-top: 1%">
                  <el-col :span="11">
                    <el-form-item class="from-margin2">
                      <div slot="label">合同金额:<br>
                        <div class="dev1_span"><span style="color: red">（A）</span></div>
                      </div>
                      <el-input v-model="$contract.obtainPayment.paymentConditions.totalContract_A" placeholder="请输入内容" size="small"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="11" :offset="1" class="selectClass">
                    <el-form-item class="from-margin2">
                      <div slot="label">累计申请金额:<br>
                        <div class="dev1_span"><span style="color: red">（B）</span></div>
                      </div>
                      <el-input v-model="$contract.obtainPayment.paymentConditions.applicationAmount_B" placeholder="请输入内容" size="small"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="11">
                    <el-form-item class="from-margin2">
                      <div slot="label">未申请金额:<br>
                        <div class="dev1_span"><span style="color: red">（C=A-B）</span></div>
                      </div>
                      <el-input v-model="$contract.obtainPayment.paymentConditions.applicationAmount_B" placeholder="请输入内容" size="small"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="11" :offset="1"  class="selectClass">
                    <el-form-item class="from-margin2">
                      <div slot="label">累计实付金额:<br>
                        <div class="dev1_span"><span style="color: red">（D）</span></div>
                      </div>
                      <el-input v-model="$contract.obtainPayment.paymentConditions.realPay_D" placeholder="请输入内容" size="small"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="11">
                    <el-form-item class="from-margin2">
                      <div slot="label">未做申请金额:<br>
                        <div class="dev1_span"><span style="color: red">（C=A-B）</span></div>
                      </div>
                      <el-input v-model="$contract.obtainPayment.paymentConditions.realPay_D" placeholder="请输入内容" size="small"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="11" :offset="1"  class="selectClass">
                    <el-form-item class="from-margin2">
                      <div slot="label">累计扣款金额:
                      </div>
                      <el-input v-model="$contract.obtainPayment.paymentConditions.allAmountWage" placeholder="请输入内容" size="small"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="11">
                    <el-form-item class="from-margin2">
                      <div slot="label">发票金额:
                      </div>
                      <el-input v-model="$contract.obtainPayment.paymentConditions.invoiceAmount" placeholder="请输入内容" size="small"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="11" :offset="1"  class="selectClass">
                    <el-form-item class="from-margin2">
                      <div slot="label">累计实付比例:<br>
                        <div class="dev1_span"><span style="color: red">(%)(E=D/A)</span></div>
                      </div>
                      <el-input v-model="$contract.obtainPayment.paymentConditions.paySchedule" placeholder="请输入内容" size="small"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-aside>
              <el-main>
                <div style="padding: 5% 0 0 21%;">
                  <el-progress  type="circle" :percentage="25"></el-progress>
                </div>
              </el-main>
            </el-container>
          </el-form>
        </div>
        <div v-show="basicInfo" style="background-color: #EEF2F6">
          <div class="dev1_border1"></div>
        </div>
        <!--付款申请列表-->
        <div class="dev1_border"></div>
        <div style="background-color: #EEF2F6">
          <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #e9e9e9;
            background-color: #FFFFFF;border-top-left-radius: 4px;border-top-right-radius: 4px"
               @click="contractPlan = !contractPlan">
            <el-row>
              <el-col :span="10" style="margin-left: 1%">
                <span style="border-left: 2px solid #7986A9"></span>
                <span class="dev1_font">付款申请列表</span>
              </el-col>
              <el-col :span="12" style="text-align: right; color: #60696b;font-size: 14px;">
                <a href="#/payment/detail/001">新增付款申请</a>
              </el-col>
              <el-col :span="1" style="text-align: right;margin-left: 2%">
                <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="contractPlan"></i>
                <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!contractPlan"></i>
              </el-col>
            </el-row>
          </div>
        </div>
        <div v-show="contractPlan" class="dev_show">
          <div style="padding:11px 0">
            <el-table highlight-current-row :data="$contract.obtainPayment.applicationList" border
                      size="small" style="width: 98%;margin-left: 1%"
                      :row-class-name="tableRowClassName"
                      :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
                      :header-cell-style="{background:'#efefe0', 'text-align': 'center', color: '#a08e6e',fontSize:'13px',height:'40px',padding:'6px 0',fontWeight:'500'}">
              <el-table-column sortable prop="index" width="100px" label="序号" align="center"></el-table-column>
              <el-table-column sortable prop="state" label="状态" align="center"></el-table-column>
              <el-table-column sortable sortable prop="themePayment" label="付款主题" align="center"></el-table-column>
              <el-table-column  label="付款编号">
                <template slot-scope="scope">
                  <a href="#/payment/detail/001">{{scope.row.number}}</a>
                </template>
              </el-table-column>
              <el-table-column prop="amountExcludingTax" label="申请金额（含税）"></el-table-column>
              <el-table-column prop="amountExcludingTax" label="申请金额（不含税）"></el-table-column>
              <el-table-column prop="payExcludingTax" label="实付金额（含税）"></el-table-column>
              <el-table-column prop="payExcludingTax" label="实付金额（不含税）"></el-table-column>
              <el-table-column prop="theConfirmation" label="资金计划确认金额"></el-table-column>
              <el-table-column prop="" label="操作" width="300">
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
          <div class="el-alert el-alert--success is-center">
            合计：[ 4] 累计申请金额：[ 7,156,567.123 ] 累计实付金额：[ 7,156,567.123 ]
          </div>
        </div>
        <div v-show="contractPlan" style="background-color: #EEF2F6">
          <div class="dev1_border1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'contact-payment',
    data() {
      return {
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
        value: false,
        contractPlan: true,
        basicInfo: true
      }
    },
    computed: {
      ...mapGetters(['$contract'])
    },
    created() {
      this.ObtainPayment()
    },
    methods: {
      ...mapActions([
        'ObtainPayment'
      ]),
      handleClick() {
        console.log(123)
      },
      invoice(id) {
        // window.location.href('#/contract/detail/' + id + '/payments/invoices');
      },
      tableRowClassName({ row, rowIndex }) {
        if (rowIndex % 2 === 1) {
          return 'interleave_row'
        }
        return ''
      }
    }
  }
</script>

<style scoped>

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
  .piecerow_main {
    background-color:#edf2f7;
    padding: 10px 10px 0 10px;
  }
  /**
   标题的背景色，和高度
 */
  .piecerow >>> .el-tabs__item.is-active{
    color:#7986a9;
  }
  .piecerow >>> .el-tabs__active-bar{
    background-color: #7986a9;
  }
  .piecerow >>> .el-tabs__item.is-active:hover{
    color: #7986a9;
  }
  .piecerow >>> .el-tabs__nav{
    margin-left: 10px;
  }
  .piecerow >>> .el-tabs__header{
    margin: 0;
  }
  .dev1_font {
    margin-left: 2%;
    color: #60696b;
    font-size: 14px;
  }
  .dev1_border {
    border: 6px solid #EEF2F6;
  }
  .dev1_border1 {
    border: 6px solid #FFFFFF;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .dev_show {
    background-color: #FFF;
  }
  .from-margin2 {
    margin-bottom: -3%
  }
  .dev1_span {
    margin-top: -16%;
    font-size: 12px;
    color: #999;
  }
</style>
<style>
  .el-table .interleave_row {
    background: #F5F7FA;
  }
  .el-table .success-row {
    background: #FAECD7;
  }
</style>

