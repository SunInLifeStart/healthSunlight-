<template>

  <div>
    <!--导航tab-->
    <div style="background-color: #EEF2F6;padding: 8px">
      <el-tabs v-model="activeName" @tab-click="handleClick" style="background-color: #ffffff;">
        <!--<el-tab-pane label="合同信息" name="first">-->
        <el-tab-pane name="first">
          <div slot="label">
            <div>合同信息</div>
          </div>
          <!--基本信息-->
          <el-col style="border: 8px solid #EEF2F6;"></el-col>
          <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #B0B4B7"
               @click="basicInfo = !basicInfo">
            <el-row>
              <el-col :span="10" style="margin-left: 1%">
                <span style="border-left: 2px solid #7986A9"></span>
                <span class="dev1_font">基本信息</span>
              </el-col>
              <el-col :span="13" style="text-align: right">
                <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="basicInfo"></i>
                <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!basicInfo"></i>
              </el-col>
            </el-row>
          </div>
          <div v-show="basicInfo" class="dev_show">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
              <el-row :gutter="20">
                <el-col :span="6" :offset="2">
                  <el-form-item label="合同编号:">
                    <el-input v-model="ruleForm.name" required prop="name" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="14">
                  <el-form-item label="合同名称" prop="name">
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6" :offset="2">
                  <el-form-item label="费项归属:">
                    <el-input v-model="form.organization" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="合同类别:">
                    <el-input v-model="form.organization" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="形成方式:">
                    <el-input v-model="form.organization" size="small"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6" :offset="2">
                  <el-form-item label="经办人:" prop="region">
                    <el-select v-model="ruleForm.region" size="small" placeholder="请选择经办人">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="经办部门:" prop="region">
                    <el-select v-model="ruleForm.region" size="small" style="width: 100%" placeholder="请选择经办部门">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="计价模式:" prop="region">
                    <el-select v-model="ruleForm.region" size="small" placeholder="请选择计价模式" style="width: 100%;">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6" :offset="2">
                  <el-form-item label="签订日期:">
                    <el-input v-model="form.organization" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="招标信息:" prop="region">
                    <el-select v-model="ruleForm.region" size="small" placeholder="请选择招标信息" style="width: 100%;">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="是否主要合同:" label-width="120px" prop="resource">
                    <el-radio-group v-model="ruleForm.resource">
                      <el-radio label="是"></el-radio>
                      <el-radio label="否"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6" :offset="2">
                  <el-form-item label="开工日期:" prop="name">
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="竣工日期:">
                    <el-input v-model="form.organization" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="质保期到期日:">
                    <el-input v-model="form.organization" size="small"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6" :offset="2">
                  <el-form-item label="是否关联集采:" label-width="120px" prop="resource">
                    <el-radio-group v-model="ruleForm.resource">
                      <el-radio label="是"></el-radio>
                      <el-radio label="否"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
                <el-col :span="14">
                  <el-form-item label="关联合同:">
                    <el-input v-model="form.contractNum" size="small"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6" :offset="2">
                  <el-form-item label="是否有履约函:" label-width="120px" prop="resource">
                    <el-radio-group v-model="ruleForm.resource">
                      <el-radio label="是"></el-radio>
                      <el-radio label="否"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="13" :offset="2">
                  <el-form-item label="组团名:">
                    <el-input v-model="form.contractNum" size="small"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <!--合同主体-->
          <el-col style="border: 8px solid #EEF2F6;"></el-col>
          <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #B0B4B7"
               @click="contractMain = !contractMain">
            <el-row>
              <el-col :span="10" style="margin-left: 1%">
                <span style="border-left: 2px solid #7986A9"></span>
                <span class="dev1_font">合同主体</span>
              </el-col>
              <el-col :span="13" style="text-align: right">
                <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="contractMain"></i>
                <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!contractMain"></i>
              </el-col>
            </el-row>
          </div>
          <div v-show="contractMain" class="dev_show">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-row :gutter="20">
                <el-col :span="13" :offset="2">
                  <el-form-item label="我方单位:" prop="name">
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="合同性质:" prop="region">
                    <el-select v-model="ruleForm.region" size="small" placeholder="请选择经办人">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="13" :offset="2">
                  <el-form-item label="总包单位:" prop="name">
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="合同性质:" prop="region">
                    <el-select v-model="ruleForm.region" size="small" placeholder="请选择合同性质">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="13" :offset="2">
                  <el-form-item label="分包单位:" prop="name">
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="13" :offset="2">
                  <el-form-item label="收款单位:" prop="name">
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <!--合同金额-->
          <el-col style="border: 8px solid #EEF2F6;"></el-col>
          <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #B0B4B7"
               @click="contractMoney = !contractMoney">
            <el-row>
              <el-col :span="10" style="margin-left: 1%">
                <span style="border-left: 2px solid #7986A9"></span>
                <span class="dev1_font">合同金额</span>
              </el-col>
              <el-col :span="13" style="text-align: right">
                <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="contractMoney"></i>
                <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!contractMoney"></i>
              </el-col>
            </el-row>
          </div>
          <div v-show="contractMoney" class="dev_show">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
              <el-row :gutter="20">
                <el-col :span="6" :offset="2">
                  <el-form-item>
                    <div slot="label">合同金额:<br>
                      <div class="dev1_span">(不含可抵扣税)<span style="color: red">(A)</span></div>
                    </div>
                    <!--<span class="dev1_z" style="left: -52%;">(不含可抵扣税)<span style="color: red">(A)</span></span>-->
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item>
                    <div slot="label">可抵扣税额:<br>
                      <div class="dev1_span"><span style="color: red">(B)</span></div>
                    </div>
                    <!--<span class="dev1_z" style="left: -12%;"><span style="color: red">(B)</span></span>-->
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item>
                    <div slot="label">合同金额(含税):<br>
                      <div class="dev1_span">(计成本)<span style="color: red">(C=A+B)</span></div>
                    </div>
                    <!--<span class="dev1_z" style="left: -25%;"><span style="color: red">(C=A+B)</span></span>-->
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6" :offset="2">
                  <el-form-item>
                    <div slot="label">不计成本金额:<br>
                      <div class="dev1_span">(计成本)<span style="color: red">(D)</span></div>
                    </div>
                    <!--<span class="dev1_z" style="left: -12%;"><span style="color: red">(D)</span></span>-->
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                    <!--<el-date-picker type="date" placeholder="Pick a date" v-model="form.dateSigning"></el-date-picker>-->
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item>
                    <!--label="有效签约金额:"-->
                    <div slot="label">有效签约金额:<br>
                      <div class="dev1_span">(计成本)<span style="color: red">(E=A-D)</span></div>
                    </div>
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="合同预留金:" prop="name">
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                    <!--<el-date-picker type="date" placeholder="Pick a date" v-model="form.dateSigning"></el-date-picker>-->
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6" :offset="2">
                  <el-form-item label="发票类型:" prop="name">
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item>
                    <div slot="label" style="width: 106%"><span style="color:red">*</span>可抵扣税税率(%):</div>
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="币种:" prop="name">
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <!--合约规划-->
          <el-col style="border: 8px solid #EEF2F6;"></el-col>
          <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #B0B4B7"
               @click="contractPlan = !contractPlan">
            <el-row>
              <el-col :span="10" style="margin-left: 1%">
                <span style="border-left: 2px solid #7986A9"></span>
                <span class="dev1_font">合同金额</span>
              </el-col>
              <el-col :span="13" style="text-align: right">
                <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="contractPlan"></i>
                <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!contractPlan"></i>
              </el-col>
            </el-row>
          </div>
          <div v-show="contractPlan" class="dev_show">
            <el-table highlight-current-row :data="tableData" border
                      :header-cell-style="{background:'#7A86A7',color:'#FFF',borderColor:'rgb(116, 127, 154)'}">
              <el-table-column type="index" width="100px" label="序号" align="center"></el-table-column>
              <el-table-column prop="statusAccounting" label="所属费项" align="center"></el-table-column>
              <el-table-column prop="nameContract" label="合约规划名称" align="center"></el-table-column>
              <el-table-column prop="supplierUnit" label="原合约规划金额(F)" align="center"></el-table-column>
              <el-table-column prop="contractMoneyPlus" label="合对应金额(不含税)(G)" align="center"></el-table-column>
              <el-table-column prop="contractMoneyAfter" label="预留金(H)" align="center"></el-table-column>
              <el-table-column prop="appliedAmount" label="差额(I=F-G-H)" align="center"></el-table-column>
            </el-table>
          </div>
          <!--其他说明-->
          <el-col style="border: 8px solid #EEF2F6;"></el-col>
          <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #B0B4B7"
               @click="otherExplain = !otherExplain">
            <el-row>
              <el-col :span="10" style="margin-left: 1%">
                <span style="border-left: 2px solid #7986A9"></span>
                <span class="dev1_font">其他说明</span>
              </el-col>
              <el-col :span="13" style="text-align: right">
                <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="otherExplain"></i>
                <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!otherExplain"></i>
              </el-col>
            </el-row>
          </div>
          <div v-show="otherExplain" class="dev_show">
            <el-form :model="form" ref="form" label-width="100px" class="demo-ruleForm">
              <el-row :gutter="20">
                <el-col :span="22" :offset="2">
                  <el-form-item label="合同范围:">
                    <el-input type="textarea" :rows="2" placeholder="请输入内容"
                              v-model="form.responsiblePerson"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="22" :offset="2">
                  <el-form-item label="合约付款节点:">
                    <div>
                      <div style="float: left" v-for="(item,index) in styleData"
                           :style="stepStyle(index,'marginLeft')">
                        <div style="float: left" :style="stepStyle(index,'background')">
                          <div class="triangle-topright" :style="stepStyle(index,'borderTopColor')"></div>
                          <div class="triangle-bottomright"
                               :style="stepStyle(index,'borderBottomColor')"></div>
                        </div>
                        <div style="float: left">
                          <div style="padding: 0 35px;" :style="stepStyle(index,'background1')">
                            {{ item }}
                          </div>
                        </div>
                        <div style="float: left">
                          <div class="triangle-right"
                               :style="stepStyle(index,'borderLeftColor')"></div>
                        </div>
                      </div>
                    </div>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="22" :offset="2">
                  <el-form-item label="合约付款约定:">
                    <el-input type="textarea" :rows="2" placeholder="请输入内容"
                              v-model="form.responsiblePerson"></el-input>
                  </el-form-item>
                  <div class="detail_dev2">(需说明首付款，过程付款，尾款的付款条件，时间及金额)</div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="22" :offset="2">
                  <el-form-item label="与目标成本:">
                    <el-input type="textarea" :rows="2" placeholder="请输入内容"
                              v-model="form.responsiblePerson"></el-input>
                  </el-form-item>
                  <div class="detail_dev2">(或非项目合同的费用预算)，比较，如超标请说明原因</div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="22" :offset="2">
                  <el-form-item label="其他:">
                    <el-input type="textarea" :rows="2" placeholder="请输入内容"
                              v-model="form.responsiblePerson"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #B0B4B7"
                   @click="accessory = !accessory">
                <el-row>
                  <el-col :span="10" style="margin-left: 1%">
                    <span style="border-left: 2px solid #7986A9"></span>
                    <span class="dev1_font">合同文件</span>
                  </el-col>
                  <el-col :span="13" style="text-align: right">
                    <i class="el-icon el-icon-download"></i><span style="margin-left: 1%"
                                                                  class="dev1_font">一键下载</span>
                    <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="accessory"></i>
                    <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!accessory"></i>
                  </el-col>
                </el-row>
              </div>
              <el-collapse-transition>
                <div v-show="accessory" class="dev_show">
                  <el-table highlight-current-row :data="tableData" border
                            :header-cell-style="{background:'#7986A9', 'text-align': 'center', color: 'white'}"
                            :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center'}:{}"
                            style="width: 100%">
                    <el-table-column prop="approvalStatus" align="center" height="2000px"  label="附件类型"></el-table-column>
                    <el-table-column prop="outLineCanSee" align="center" label="所属费项" width="600"></el-table-column>
                    <el-table-column prop="statusAccounting" align="center" label="备注"></el-table-column>
                    <el-table-column prop="statusAccounting" align="center" label="操作"></el-table-column>
                  </el-table>
                </div>
              </el-collapse-transition>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane name="second">
          <div slot="label">
            <div style="padding:0 16%">清单信息</div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contractInfo',
    data() {
      return {
        activeName: 'first',
        radio: '1',
        basicInfo: true,
        contractMain: true,
        contractMoney: true,
        contractPlan: true,
        otherExplain: true,
        payMethod: true,
        accessory: true,
        classA: true,
        classB: false,
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
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ]
        },
        tableData: [
          {
            approvalStatus: '已审批',
            statusAccounting: '已结算',
            outLineCanSee: '外网可见',
            nameContract: '西苑颐和园一期',
            supplierUnit: '龙湖地产代理合同',
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
            outLineCanSee: '外网可见',
            nameContract: '西苑颐和园一期',
            supplierUnit: '龙湖地产和原告代理合同',
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
            outLineCanSee: '外网不可见',
            nameContract: '西苑颐和园一期',
            supplierUnit: '龙湖地产颐和原著理合同',
            contractMoneyPlus: '18,000.00',
            contractMoneyAfter: '19,000.00',
            appliedAmount: '18,000.00',
            radioPayment: '100%',
            contractDate: '2018-4-30',
            settlementAmount: '18,000.00'
          }
        ],
        styleData: ['预付款 20%', '进度款 70%', '竣备款85%', '结算款 95%', '质保金 100%']
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      },
      stepStyle(index, type) {
        switch (type) {
          case 'marginLeft':
            return {
              marginLeft: index !== 0 ? '-1.5%' : '0'
            }
          case 'background':
            return {
              background: index === 0 ? '#EE9877' : 'none'
            }
          case 'background1':
            return {
              background: index % 2 === 0 ? '#EE9877' : '#F3BE56'
            }
          case 'borderTopColor':
            return {
              borderTopColor: index % 2 === 0 ? '#EE9877' : '#F3BE56'
            }
          case 'borderBottomColor':
            return {
              borderBottomColor: index % 2 === 0 ? '#EE9877' : '#F3BE56'
            }
          case 'borderLeftColor':
            return {
              borderLeftColor: index % 2 === 0 ? '#EE9877' : '#F3BE56'
            }
          default:
            return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail_dev1 {
    width: 2px;
    background-color: rgb(65, 73, 82);
    height: 16px;
    margin-top: 8px;
  }

  .dev1_z {
    position: absolute;
    top: 64%;
    font-size: 8px;
    color: #606266;
  }

  .dev1_span {
    margin-top: -16%;
    font-size: 12px;
  }

  .dev1_font {
    margin-left: 2%;
    color: #60696b;
    font-size: 14px;
  }

  .class-a {
    border-bottom: 3px solid #657398;
    text-align: center;
    width: 7%;
  }

  .detail_dev2 {
    font-size: 8px;
    color: rgb(169, 175, 181);
    margin-top: -1%;
    padding-left: 14%;
    padding-bottom: 1%;
  }

  .dev_show {
    background-color: #FFF;
    margin-top: 2%
  }

  /*右三角*/
  .triangle-right {
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-left: 20px solid;
    border-bottom: 20px solid transparent;
  }

  /*右上三角*/
  .triangle-topright {
    width: 0;
    height: 0;
    border-top: 20px solid;
    border-left: 20px solid transparent;
  }

  /*右下三角*/
  .triangle-bottomright {
    width: 0;
    height: 0;
    border-bottom: 20px solid;
    border-left: 20px solid transparent;
  }
</style>
