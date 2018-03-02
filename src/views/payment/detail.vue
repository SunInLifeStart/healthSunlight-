<template>
  <div>
    <el-collapse accordion>
      <el-collapse-item title="合同信息" name="1">
        <div>
          <el-row>
            <el-col :span="16">
              <el-col :span="3">合同名称</el-col>
              <el-col :span="19">
                <el-input v-model="$payment.contract.name" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">合同编码</el-col>
              <el-col :span="14">
                <el-input v-model="$payment.contract.number" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">合同总额</el-col>
              <el-col :span="14">
                <el-input v-model="$payment.contract.total" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">累计申请总额</el-col>
              <el-col :span="14">
                <el-input v-model="$payment.contract.applyTotal" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">未申请付款金额</el-col>
              <el-col :span="14">
                <el-input v-model="$payment.contract.notApplyTotal" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">累计为付款比例</el-col>
              <el-col :span="14">
                <el-input v-model="$payment.contract.payments" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse accordion>
      <el-collapse-item title="付款信息" name="1">
        <div>
          <el-row>
            <el-col :span="16">
              <el-col :span="3">主题</el-col>
              <el-col :span="19">
                <el-input v-model="$payment.paymentInformation.theme" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">付款编号</el-col>
              <el-col :span="14">
                <el-input v-model="$payment.paymentInformation.paymentNumber" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">申请人</el-col>
              <el-col :span="14">
                <el-input v-model="$payment.paymentInformation.proposer" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">申请部门</el-col>
              <el-col :span="14">
                <el-input v-model="$payment.paymentInformation.application" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">申请日期</el-col>
              <el-col :span="14">
                <el-input v-model="$payment.paymentInformation.applicationDate" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="16">
              <el-col :span="3">付款类型</el-col>
              <el-col :span="19">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">付款阶段</el-col>
              <el-col :span="14">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </el-col>
            <el-col :span="16">
              <el-col :span="3">付款单位</el-col>
              <el-col :span="19">
                <el-input v-model="$payment.paymentInformation.payer" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">付款约定比例</el-col>
              <el-col :span="14">
                <el-input v-model="$payment.paymentInformation.payerRatio" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="16">
              <el-col :span="3">收款单位</el-col>
              <el-col :span="19">
                <el-input v-model="$payment.paymentInformation.payee" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              &nbsp
            </el-col>
            <el-col :span="16">
              <el-col :span="3">开户银行</el-col>
              <el-col :span="19">
                <el-input v-model="$payment.paymentInformation.bank" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">银行账号</el-col>
              <el-col :span="14">
                <el-input v-model="$payment.paymentInformation.account" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="1">付款说明</el-col>
              <el-col :span="22">
                <el-input
                  type="textarea"
                  v-model="$payment.paymentInformation.remakes"
                  placeholder="请输入内容">
                </el-input>
              </el-col>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse accordion>
      <el-collapse-item title="付款金额" name="1">
        <div>
          <el-row>
            <el-col :span="24">
              <el-col :span="8">
                <el-col :span="6">申请金额（不含可抵扣税）（A）</el-col>
                <el-col :span="14">
                  <el-input v-model="$payment.payment.appliedAmount" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
              <el-col :span="8">
                <el-col :span="6">可抵扣税额 （B）</el-col>
                <el-col :span="14">
                  <el-input v-model="$payment.payment.deductibleTax" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
              <el-col :span="8">
                <el-col :span="6">税率（C=B/A）</el-col>
                <el-col :span="14">
                  <el-input v-model="$payment.payment.rate" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="8">
                <el-col :span="6">申请金额（含税）（D=A+B）</el-col>
                <el-col :span="14">
                  <el-input v-model="$payment.payment.appliedAmountTax" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
              <el-col :span="8">
                <el-col :span="6">扣款金额（E）</el-col>
                <el-col :span="14">
                  <el-input v-model="$payment.payment.deductions" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
              <el-col :span="8">
                <el-col :span="6">冲账金额（F）</el-col>
                <el-col :span="14">
                  <el-input v-model="$payment.payment.amountStrike" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="8">
                <el-col :span="6">工抵房金额（H）</el-col>
                <el-col :span="14">
                  <el-input v-model="$payment.payments.amountPaid" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
              <el-col :span="8">
                <el-col :span="6">奖励金额（I）</el-col>
                <el-col :span="14">
                  <el-input v-model="$payment.payment.rewardAmount" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
              <el-col :span="8">
                <el-col :span="6">本次扣回金额（G）</el-col>
                <el-col :span="14">
                  <el-input v-model="$payment.payment.amountWages" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="8">
                <el-col :span="6">应付金额（J=D-E-F-G-H+I）</el-col>
                <el-col :span="14">
                  <el-input v-model="$payment.payment.amountPayable" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
              <el-col :span="8">
                <el-col :span="6">资金计划确认金额（K）</el-col>
                <el-col :span="14">
                  <el-input v-model="$payment.payment.amountConfirm" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
              <el-col :span="8">
                <el-col :span="6">资金计划可付款金额（L=K-H</el-col>
                <el-col :span="14">
                  <el-input v-model="$payment.payment.amountConfirmPayable" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse accordion>
      <el-collapse-item title="产值明细" name="1">
        <div>
          <el-table
            :data="$payment.productionTable"
            border
            style="width: 100%">
            <el-table-column
              prop="lastTotalProduction"
              label="上期累计产值"
            >
            </el-table-column>
            <el-table-column
              prop="totalProduction"
              label="本期累计产值">
            </el-table-column>
            <el-table-column
              prop="production"
              label="本期产值">
            </el-table-column>
            <el-table-column
              prop="address"
              label="付款比例">
            </el-table-column>
            <el-table-column
              prop="productionPayment"
              label="产值申请付款金额">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse accordion>
      <el-collapse-item title="" name="1">
        <div>
          <el-button>关联发票</el-button>
          <el-button @click="dialogFormVisible = true">开票通知</el-button>
          <el-dialog title="开票通知" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="购买方" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="销售方" :label-width="formLabelWidth" >
                <el-input v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="票据类型" :label-width="formLabelWidth">
                <el-select v-model="form.name" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="说明">
                <el-input type="textarea" v-model="form.name"></el-input>
              </el-form-item>
              <el-col>票据金额</el-col>
              <el-form-item label="不含可抵扣税金额" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="可抵扣税率" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="可抵扣税额" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="含可抵扣税金额" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
          </el-dialog>

          <el-tabs type="border-card">
            <el-tab-pane label="资金计划">
              <el-table border :data="$payment.capitalPlan" style="width: 100%">
                <el-table-column prop="planTheme" label="资金计划主题"></el-table-column>
                <el-table-column prop="planMonth" label="资金计划月份"></el-table-column>
                <el-table-column prop="department" label="部门"></el-table-column>
                <el-table-column prop="planConfirmation" label="资金计划确认金额"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="付款方式">
              <el-table border :data="$payment.capitalPlan1" style="width: 100%">
                <el-table-column prop="planTheme" label="付款方式名称"></el-table-column>
                <el-table-column prop="planMonth" label="付款金额"></el-table-column>
                <el-table-column prop="department" label="付款比率(%)"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="项目分摊">
              <el-table border :data="$payment.capitalPlan2" style="width: 100%">
                <el-table-column prop="planTheme" label="项目"></el-table-column>
                <el-table-column prop="planMonth" label="发票金额"></el-table-column>
                <el-table-column prop="planMonth" label="付款金额"></el-table-column>
                <el-table-column prop="department" label="付款比率(%)"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="罚扣明细">
              <el-table border :data="$payment.capitalPlan3" style="width: 100%">
                <el-table-column prop="planTheme" label="扣款内容"></el-table-column>
                <el-table-column prop="planMonth" label="扣款金额"></el-table-column>
                <el-table-column prop="planMonth" label="备注"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="冲账明细">
              <el-table border :data="$payment.capitalPlan4" style="width: 100%">
                <el-table-column prop="planTheme" label="状态"></el-table-column>
                <el-table-column prop="planMonth" label="主题"></el-table-column>
                <el-table-column prop="planMonth" label="借款金额"></el-table-column>
                <el-table-column prop="planMonth" label="已冲账金额"></el-table-column>
                <el-table-column prop="planMonth" label="待冲账金额"></el-table-column>
                <el-table-column prop="planMonth" label="本次冲账金额"></el-table-column>
                <el-table-column prop="planMonth" label="申请人"></el-table-column>
                <el-table-column prop="planMonth" label="申请部门"></el-table-column>
                <el-table-column prop="planMonth" label="申请日期"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="代扣款项">
              <el-table border :data="$payment.capitalPlan5" style="width: 100%">
                <el-table-column prop="planTheme" label="代付费项"></el-table-column>
                <el-table-column prop="planMonth" label="代付金额"></el-table-column>
                <el-table-column prop="planMonth" label="已扣回金额"></el-table-column>
                <el-table-column prop="planMonth" label="已冲账金额"></el-table-column>
                <el-table-column prop="planMonth" label="未扣回金额"></el-table-column>
                <el-table-column prop="planMonth" label="本次扣回金额"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="工抵房明细">
              <el-table border :data="$payment.capitalPlan5" style="width: 100%">
                <el-table-column prop="planTheme" label="工抵房费项"></el-table-column>
                <el-table-column prop="planMonth" label="工抵房金额"></el-table-column>
                <el-table-column prop="planMonth" label="已抵扣金额"></el-table-column>
                <el-table-column prop="planMonth" label="待抵扣金额"></el-table-column>
                <el-table-column prop="planMonth" label="本次抵扣金额"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="发票信息">
              <el-table border :data="$payment.capitalPlan6" style="width: 100%">
                <el-table-column prop="planTheme" label="发票号"></el-table-column>
                <el-table-column prop="planMonth" label="发票类型"></el-table-column>
                <el-table-column prop="department" label="票据金额(不含税)"></el-table-column>
                <el-table-column prop="planConfirmation" label="税率"></el-table-column>
                <el-table-column prop="planConfirmation" label="票据税额"></el-table-column>
                <el-table-column prop="planConfirmation" label="票据金额(含税)"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="自持可售分摊">
              <el-table border :data="$payment.capitalPlan7" style="width: 100%">
                <el-table-column prop="planTheme" label="分摊类型"></el-table-column>
                <el-table-column prop="department" label="分摊金额（必填）"></el-table-column>
                <el-table-column prop="planConfirmation" label="分摊比例（%）"></el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse accordion>
      <el-collapse-item title="附件" name="1">
        <div>
          <el-table border :data="$payment.accessoryTable" style="width: 100%">
            <el-table-column prop="type" label="附件类型"></el-table-column>
            <el-table-column prop="accessory" label="附件"></el-table-column>
            <el-table-column prop="remakes" label="备注"></el-table-column>
            <el-table-column prop="admin" label="上传人"></el-table-column>
            <el-table-column prop="uploadTime" label="上传时间"></el-table-column>
            <el-table-column prop="operation" label="操作"></el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'payment',
  computed: {
    ...mapGetters(['$payment'])
  },
  created() {
    this.FindPayment()
  },
  methods: {
    ...mapActions([
      'FindPayment'
    ])
  },
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      value: '',
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'

    }
  }
}
</script>

<style scoped>
  .el-col {
    margin-top: 15px;
  }
</style>
