<template>
  <div class="app-container">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="合同信息" name="first">
        <el-form ref="form" :model="form" label-width="120px">
          <el-row :gutter="20">
            <el-col :span="6">
              <i class="el-icon-document"></i>
              合同基本信息
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="合同编号">
                <el-input v-model="form.organization"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="合同名称">
                <el-input v-model="form.project"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="费项归属">
                <el-input v-model="form.contactName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="合同类别">
                <el-input v-model="form.supplierUnit"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="形成方式">
                <el-select v-model="form.organization">
                  <el-option label="北京龙湖" value="shanghai"></el-option>
                  <el-option label="北京北京" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="经办人">
                <el-select v-model="form.project">
                  <el-option label="西苑颐和原著一期" value="shanghai"></el-option>
                  <el-option label="北京北京" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="经办部门">
                <el-select v-model="form.project">
                  <el-option label="西苑颐和原著一期" value="shanghai"></el-option>
                  <el-option label="北京北京" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="计价模式">
                <el-select v-model="form.contactName">
                  <el-option label="西苑颐和原著一期" value="shanghai"></el-option>
                  <el-option label="北京北京" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="签订日期">
                <el-input v-model="form.organization"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="招标信息">
                <el-select v-model="form.project">
                  <el-option label="西苑颐和原著一期" value="shanghai"></el-option>
                  <el-option label="北京北京" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="是否主要合同">
                <el-radio v-model="radio" label="1">是</el-radio>
                <el-radio v-model="radio" label="2">否</el-radio>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="开工日期">
                <el-input v-model="form.organization"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="竣工日期">
                <el-input v-model="form.organization"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="保质期到期日期">
                <el-input v-model="form.organization"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="是否主要合同">
                <el-radio v-model="radio" label="1">是</el-radio>
                <el-radio v-model="radio" label="2">否</el-radio>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="关联合同">
                <el-input v-model="form.contractNum"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="是否有履约保函">
                <el-radio v-model="radio" label="1">是</el-radio>
                <el-radio v-model="radio" label="2">否</el-radio>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="组团名">
                <el-input v-model="form.contractNum"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="履约保函百分比">
                <el-input v-model="form.contractNum"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="建筑面积">
                <el-input v-model="form.contractNum"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="实际施工面积">
                <el-input v-model="form.contractNum"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="6">
              <i class="el-icon-goods"></i>
              合同主体
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="我方单位">
                <el-input v-model="form.contractNum"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="合同性质">
                <el-select v-model="form.freeTo">
                  <el-option label="所有" value="shanghai"></el-option>
                  <el-option label="北京北京" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="总包单位">
                <el-select v-model="form.screen">
                  <el-option label="我经办的合同" value="shanghai"></el-option>
                  <el-option label="北京北京" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="主合同">
                <el-select v-model="form.freeTo">
                  <el-option label="所有" value="shanghai"></el-option>
                  <el-option label="北京北京" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="分包单位">
                <el-select v-model="form.statusAccounting">
                  <el-option label="所有" value="shanghai"></el-option>
                  <el-option label="北京北京" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="收款单位">
                <el-select v-model="form.freeTo">
                  <el-option label="所有" value="shanghai"></el-option>
                  <el-option label="北京北京" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="6">
              <i class="el-icon-message"></i>
              合同金额
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="合同金额(不含可抵扣税)(A)">
                <el-date-picker type="date" placeholder="Pick a date" v-model="form.dateSigning" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="可抵扣税额(B)">
                <el-input v-model="form.ourUnit"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="合同金额(含税)(C=A+B)">
                <el-input v-model="form.transactionDepartment "></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="不计成本金额(D)">
                <el-date-picker type="date" placeholder="Pick a date" v-model="form.dateSigning" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="有效签约金额(计成本(E=A-D)">
                <el-input v-model="form.responsiblePerson"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="合同预留金">
                <el-date-picker type="date" placeholder="Pick a date" v-model="form.dateSigning" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="发票类型">
                <el-input v-model="form.responsiblePerson"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="可抵扣税税率(%)">
                <el-input v-model="form.transactionDepartment "></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="币种">
                <el-input v-model="form.ourUnit"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="6">
              <i class="el-icon-printer"></i>
              合约规划
            </el-col>
          </el-row>
          <el-table
            highlight-current-row
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="approvalStatus"
              label="所属项目"
              width="100">
            </el-table-column>
            <el-table-column
              prop="statusAccounting"
              label="所属费项"
              width="100">
            </el-table-column>
            <el-table-column
              prop="nameContract"
              label="合约规划名称"
              width="180">
            </el-table-column>
            <el-table-column
              prop="supplierUnit"
              label="原合约规划金额(F)"
              width="280">
            </el-table-column>
            <el-table-column
              prop="contractMoneyPlus"
              label="合对应金额(不含税)(G)"
              width="280">
            </el-table-column>
            <el-table-column
              prop="contractMoneyAfter"
              label="预留金(H)"
              width="280">
            </el-table-column>
            <el-table-column
              prop="appliedAmount"
              label="差额(I=F-G-H)"
              width="280">
            </el-table-column>
          </el-table>

          <el-row :gutter="20">
            <el-col :span="6">
              <i class="el-icon-sold-out"></i>
              其他说明
            </el-col>
          </el-row>
          <el-form-item label="合同范围：">
            <el-input type="textarea" v-model="form.responsiblePerson"></el-input>
          </el-form-item>
          <el-form-item label="合同付款节点：">
            <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
              <el-step title="步骤 1" ></el-step>
              <el-step title="步骤 2" ></el-step>
              <el-step title="步骤 3" ></el-step>
            </el-steps>
          </el-form-item>
          <el-form-item label="合同付款约定（需说明首付款、过程付款、尾款的付款条件、时间及金额）：">
            <el-input type="textarea" v-model="form.ourUnit"></el-input>
          </el-form-item>
          <el-form-item label="与目标成本（或非项目合同的费用预算）比较，如超标请说明原因：">
            <el-input type="textarea" v-model="form.responsiblePerson"></el-input>
          </el-form-item>
          <el-form-item label="其他：">
            <el-input v-model="form.ourUnit"></el-input>
          </el-form-item>

          <el-row :gutter="20">
            <el-col :span="6">
              <i class="el-icon-document"></i>
              付款方式
            </el-col>
          </el-row>
          <el-table
            highlight-current-row
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="approvalStatus"
              label="付款方式名称"
              width="100">
            </el-table-column>
            <el-table-column
              prop="statusAccounting"
              label="付款比率(%)"
              width="100">
            </el-table-column>
          </el-table>

          <el-row :gutter="20">
            <el-col :span="6">
              <i class="el-icon-document"></i>
              附件
            </el-col>
          </el-row>
          <el-table
            highlight-current-row
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="approvalStatus"
              label="附件类型"
              width="100">
            </el-table-column>
            <el-table-column
              prop="statusAccounting"
              label="附件名称"
              width="100">
            </el-table-column>
            <el-table-column
              prop="statusAccounting"
              label="上传人"
              width="100">
            </el-table-column>
            <el-table-column
              prop="statusAccounting"
              label="上传时间"
              width="100">
            </el-table-column>
            <el-table-column
              prop="statusAccounting"
              label="备注"
              width="100">
            </el-table-column>
          </el-table>
        </el-form>
      </el-tab-pane>

      <el-tab-pane label="清单信息" name="second">

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: 'contractInfo',
    data() {
      return {
        activeName: 'first',
        radio: '1',
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
      handleClick(tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>

<style scoped>
</style>
