<template>
  <div>
    <el-collapse accordion>
      <el-collapse-item title="合同信息" name="1">
        <div>
          <el-row>
            <el-col :span="16">
              <el-col :span="3">合同名称</el-col>
              <el-col :span="19">
                <el-input v-model="payment.contract.name" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">合同编码</el-col>
              <el-col :span="14">
                <el-input v-model="payment.contract.number" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">合同总额</el-col>
              <el-col :span="14">
                <el-input v-model="payment.contract.total" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">累计申请总额</el-col>
              <el-col :span="14">
                <el-input v-model="payment.contract.applyTotal" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">未申请付款金额</el-col>
              <el-col :span="14">
                <el-input v-model="payment.contract.notApplyTotal" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">累计为付款比例</el-col>
              <el-col :span="14">
                <el-input v-model="payment.contract.payments" placeholder="请输入内容"></el-input>
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
                <el-input v-model="payment.paymentInformation.theme" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">付款编号</el-col>
              <el-col :span="14">
                <el-input v-model="payment.paymentInformation.paymentNumber" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">申请人</el-col>
              <el-col :span="14">
                <el-input v-model="payment.paymentInformation.proposer" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">申请部门</el-col>
              <el-col :span="14">
                <el-input v-model="payment.paymentInformation.application" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">申请日期</el-col>
              <el-col :span="14">
                <el-input v-model="payment.paymentInformation.applicationDate" placeholder="请输入内容"></el-input>
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
                <el-input v-model="payment.paymentInformation.payer" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">付款约定比例</el-col>
              <el-col :span="14">
                <el-input v-model="payment.paymentInformation.payerRatio" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="16">
              <el-col :span="3">收款单位</el-col>
              <el-col :span="19">
                <el-input v-model="payment.paymentInformation.payee" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              &nbsp
            </el-col>
            <el-col :span="16">
              <el-col :span="3">开户银行</el-col>
              <el-col :span="19">
                <el-input v-model="payment.paymentInformation.bank" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">银行账号</el-col>
              <el-col :span="14">
                <el-input v-model="payment.paymentInformation.account" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="1">付款说明</el-col>
              <el-col :span="22">
                <el-input
                  type="textarea"
                  v-model="payment.paymentInformation.remakes"
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
                  <el-input v-model="payment.payments.appliedAmount" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
              <el-col :span="8">
                <el-col :span="6">可抵扣税额 （B）</el-col>
                <el-col :span="14">
                  <el-input v-model="payment.payments.deductibleTax" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
              <el-col :span="8">
                <el-col :span="6">税率（C=B/A）</el-col>
                <el-col :span="14">
                  <el-input v-model="payment.payments.rate" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="8">
                <el-col :span="6">申请金额（含税）（D=A+B）</el-col>
                <el-col :span="14">
                  <el-input v-model="payment.payments.appliedAmountTax" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
              <el-col :span="8">
                <el-col :span="6">扣款金额（E）</el-col>
                <el-col :span="14">
                  <el-input v-model="payment.payments.deductions" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
              <el-col :span="8">
                <el-col :span="6">冲账金额（F）</el-col>
                <el-col :span="14">
                  <el-input v-model="payment.payments.amountStrike" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="8">
                <el-col :span="6">工抵房金额（H）</el-col>
                <el-col :span="14">
                  <el-input v-model="payment.payments.amountPaid" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
              <el-col :span="8">
                <el-col :span="6">奖励金额（I）</el-col>
                <el-col :span="14">
                  <el-input v-model="payment.payments.rewardAmount" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
              <el-col :span="8">
                <el-col :span="6">本次扣回金额（G）</el-col>
                <el-col :span="14">
                  <el-input v-model="payment.payments.amountWages" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="8">
                <el-col :span="6">应付金额（J=D-E-F-G-H+I）</el-col>
                <el-col :span="14">
                  <el-input v-model="payment.payments.amountPayable" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
              <el-col :span="8">
                <el-col :span="6">资金计划确认金额（K）</el-col>
                <el-col :span="14">
                  <el-input v-model="payment.payments.amountConfirm" placeholder="请输入内容"></el-input>
                </el-col>
              </el-col>
              <el-col :span="8">
                <el-col :span="6">资金计划可付款金额（L=K-H</el-col>
                <el-col :span="14">
                  <el-input v-model="payment.payments.amountConfirmPayable" placeholder="请输入内容"></el-input>
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
            :data="payment.productionTable"
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
          <el-tabs type="border-card">
            <el-tab-pane label="资金计划">
              <el-table
                border
                :data="payment.capitalPlan"
                style="width: 100%">
                <el-table-column
                  prop="planTheme"
                  label="资金计划主题"
                >
                </el-table-column>
                <el-table-column
                  prop="planMonth"
                  label="资金计划月份">
                </el-table-column>
                <el-table-column
                  prop="department"
                  label="部门">
                </el-table-column>
                <el-table-column
                  prop="planConfirmation"
                  label="资金计划确认金额">
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="付款方式"></el-tab-pane>
            <el-tab-pane label="项目分摊"></el-tab-pane>
            <el-tab-pane label="罚扣明细"></el-tab-pane>
            <el-tab-pane label="冲账明细"></el-tab-pane>
            <el-tab-pane label="代扣款项"></el-tab-pane>
            <el-tab-pane label="工抵房明细"></el-tab-pane>
            <el-tab-pane label="发票信息"></el-tab-pane>
          </el-tabs>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse accordion>
      <el-collapse-item title="附件" name="1">
        <div>
          <el-table
            border
            :data="payment.accessoryTable"
            style="width: 100%">
            <el-table-column
              prop="type"
              label="附件类型"
            >
            </el-table-column>
            <el-table-column
              prop="accessory"
              label="附件">
            </el-table-column>
            <el-table-column
              prop="remakes"
              label="备注">
            </el-table-column>
            <el-table-column
              prop="admin"
              label="上传人">
            </el-table-column>
            <el-table-column
              prop="uploadTime"
              label="上传时间">
            </el-table-column>
            <el-table-column
              prop="operation"
              label="操作">
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  export default {
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
        payment: {
          contract: {
            name: '成都龙湖花照二期机电总承包工程施工合同',
            number: 'HZEQ-XMHT-DX...',
            total: '12323213',
            applyTotal: '312312',
            notApplyTotal: '312312',
            payments: '12.63%'
          },
          paymentInformation: {
            theme: '成都龙湖花照二期机电总承包工程施工合同第1笔付款',
            paymentNumber: 'HT20170809112',
            proposer: '项目管理负责人',
            application: '项目成本中心',
            applicationDate: '2017-08-09',
            payer: '成都讯泰置业有限公司',
            payerRatio: '70%',
            payee: '交行武汉东西湖支行',
            bank: '交行武汉东西湖支行',
            account: '22232312',
            remakes: '1、本次为第一笔进度款，根据合同专用条款7.4付款约定：每月按经核实的累计至该月所完成的工程进度计算累计完成工程款，按照经发包人确认的累计完成工作量的70%再扣除前期已支付款项、扣除分包人应支付予发包人/总承包人或发包人/总承包人已代分包人支付的款项，甲供超领部分及违约金等款项后支付余款(中期付款额的计算内不包括所有进场但未安装物料的价款)；'

          },
          productionTable: [
            {
              lastTotalProduction: '22222',
              totalProduction: '2323',
              production: '12312',
              productionPayment: '213123'
            }
          ],
          accessoryTable: [
            {
              type: '文档',
              accessory: '花照二期机电总承包工程进度款第一次付款.pdf',
              remakes: '22',
              admin: '项目管理负责人',
              uploadTime: '2017-5-23',
              operation: '下载'
            }
          ],
          payments: {
            appliedAmount: '12321321',
            deductibleTax: '123213',
            rate: '123123',
            appliedAmountTax: '12312',
            deductions: '12312',
            amountStrike: '123',
            amountPaid: '23112',
            rewardAmount: '231',
            amountWages: '31',
            amountPayable: '123',
            amountConfirm: '123',
            amountConfirmPayable: '12312'
          },
          capitalPlan: [
            {
              planTheme: '成都龙湖花照二期工程部2017年12月资金计划',
              planMonth: '2017-12',
              department: '工程部',
              planConfirmation: '123213'
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .el-col {
    margin-top: 15px;
  }
</style>
