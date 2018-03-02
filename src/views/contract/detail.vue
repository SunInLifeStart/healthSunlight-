<template>

  <div>
    <!--导航tab-->
    <div style="background-color: #EEF2F6;padding: 8px">
      <div style="background-color: #fff;line-height: 3;padding-left: 2%;">
        <el-row :gutter="20">
          <el-col :span="2" :class="{ 'class-a': classA}">
            <div @click="classA = !classA">合同信息</div>
          </el-col>
          <el-col :span="2" :class="{ 'class-a': !classA}">
            <div @click="classA = !classA">清单信息</div>
          </el-col>
        </el-row>
      </div>
      <!--合同信息-->
      <div v-if="classA">
        <!--基本信息-->
        <div style="background-color: #FFF">
          <el-row :gutter="20" style="margin-top: 1%;padding-left: 1%;line-height: 2;">
            <el-col :span="1" style="width: 2%">
              <div @click="basicInfo = !basicInfo" class="detail_dev1"></div>
            </el-col>
            <el-col :span="15" style="padding-left: 0">
              <!--<i class="el-icon-document"></i>-->
              <span @click="basicInfo = !basicInfo" style="color: #60696b;font-size: 14px;">基本信息</span>
              <el-button size="mini" @click="showChanges(form.id)">预估变更</el-button>
              <el-button size="mini" @click="showPayments(form.id)">付款</el-button>
              <el-button size="mini">合同变更</el-button>
              <el-button size="mini">补充合同</el-button>
              <el-button size="mini">合同结算</el-button>
              <el-button size="mini">采购清单</el-button>
            </el-col>
          </el-row>
        </div>
        <div v-show="basicInfo" style="background-color: #FFF">
          <el-form :model="form" ref="form" label-width="100px" class="demo-ruleForm">
            <el-row :gutter="20">
              <el-col :span="6" :offset="2">
                <el-form-item label="合同编号:">
                  <el-input v-model="form.organization" size="mini"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="14">
                <el-form-item label="合同名称:">
                  <el-input v-model="form.organization" size="small"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6" :offset="2">
                <el-form-item label="费项归属:">
                  <el-input v-model="form.organization" size="small"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="合同类别:">
                  <el-input v-model="form.organization" size="small"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="形成方式:">
                  <el-input v-model="form.organization" size="small"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6" :offset="2">
                <el-form-item label="经办人:">
                  <el-select v-model="form.project" size="small">
                    <el-option label="西苑颐和原著一期" value="shanghai"></el-option>
                    <el-option label="北京北京" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="经办部门:">
                  <el-select v-model="form.project" size="small">
                    <el-option label="西苑颐和原著一期" value="shanghai"></el-option>
                    <el-option label="北京北京" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="计价模式:">
                  <el-select v-model="form.contactName" size="small">
                    <el-option label="西苑颐和原著一期" value="shanghai"></el-option>
                    <el-option label="北京北京" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6" :offset="2">
                <el-form-item label="签订日期:">
                  <el-input v-model="form.organization" size="mini"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="招标信息:">
                  <el-select v-model="form.project" size="small">
                    <el-option label="西苑颐和原著一期" value="shanghai"></el-option>
                    <el-option label="北京北京" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="是否主要合同:">
                  <el-radio v-model="radio" label="1">是</el-radio>
                  <el-radio v-model="radio" label="2">否</el-radio>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6" :offset="2">
                <el-form-item label="开工日期:">
                  <el-input v-model="form.organization" size="small"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
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
                <el-form-item label="是否关联集采:">
                  <el-radio v-model="radio" label="1">是</el-radio>
                  <el-radio v-model="radio" label="2">否</el-radio>
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
                <el-form-item label="是否有履约函:">
                  <el-radio v-model="radio" label="1">是</el-radio>
                  <el-radio v-model="radio" label="2">否</el-radio>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="履约函百分比:">
                  <el-input v-model="form.contractNum" size="small"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="14" :offset="2">
                <el-form-item label="组团名:">
                  <el-input v-model="form.contractNum" size="small"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <!--合同主体-->
        <div style="background-color: #FFF">
          <el-row :gutter="20" style="margin-top: 1%;padding-left: 1%;line-height: 2;">
            <el-col :span="1" style="width: 2%">
              <div @click="contractMain = !contractMain" class="detail_dev1"></div>
            </el-col>
            <el-col :span="6" style="padding-left: 0">
              <!--<i class="el-icon-document"></i>-->
              <span @click="contractMain = !contractMain" style="color: #60696b;font-size: 14px;">合同主体</span>
            </el-col>
          </el-row>
        </div>
        <div v-show="contractMain" style="background-color: #FFF">
          <el-form :model="form" ref="form" label-width="100px" class="demo-ruleForm">
            <el-row :gutter="20">
              <el-col :span="14" :offset="2">
                <el-form-item label="我方单位:">
                  <el-input v-model="form.contractNum" size="small"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="合同性质:">
                  <el-select v-model="form.freeTo" size="small">
                    <el-option label="所有" value="shanghai"></el-option>
                    <el-option label="北京北京" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="14" :offset="2">
                <el-form-item label="总包单位:">
                  <el-input v-model="form.contractNum" size="small"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="合同性质:">
                  <el-select v-model="form.freeTo" size="small">
                    <el-option label="所有" value="shanghai"></el-option>
                    <el-option label="北京北京" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="14" :offset="2">
                <el-form-item label="分包单位:">
                  <el-input v-model="form.contractNum" size="small"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="14" :offset="2">
                <el-form-item label="收款单位:">
                  <el-input v-model="form.contractNum" size="small"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <!--合同金额-->
        <div style="background-color: #FFF">
          <el-row :gutter="20" style="margin-top: 1%;padding-left: 1%;line-height: 2;">
            <el-col :span="1" style="width: 2%">
              <div @click="contractMain = !contractMain" class="detail_dev1"></div>
            </el-col>
            <el-col :span="6" style="padding-left: 0">
              <!--<i class="el-icon-document"></i>-->
              <span @click="contractMoney = !contractMoney" style="color: #60696b;font-size: 14px;">合同金额</span>
            </el-col>
          </el-row>
        </div>
        <div v-show="contractMoney" style="background-color: #FFF">
          <el-form :model="form" ref="form" label-width="100px" class="demo-ruleForm">
            <el-row :gutter="20">
              <el-col :span="6" :offset="2">
                <el-form-item label="合同金额(不含可抵扣税)(A):">
                  <el-input v-model="form.contractNum" size="small"></el-input>
                  <!--<el-date-picker type="date" placeholder="Pick a date" v-model="form.dateSigning"></el-date-picker>-->
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="可抵扣税额(B):">
                  <el-input v-model="form.ourUnit" size="small"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="合同金额(含税)(C=A+B):">
                  <el-input v-model="form.transactionDepartment " size="small"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6" :offset="2">
                <el-form-item label="不计成本金额(D):">
                  <el-input v-model="form.contractNum" size="small"></el-input>
                  <!--<el-date-picker type="date" placeholder="Pick a date" v-model="form.dateSigning"></el-date-picker>-->
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="有效签约金额(计成本(E=A-D):">
                  <el-input v-model="form.responsiblePerson" size="small"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="合同预留金:">
                  <el-input v-model="form.contractNum" size="small"></el-input>
                  <!--<el-date-picker type="date" placeholder="Pick a date" v-model="form.dateSigning"></el-date-picker>-->
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6" :offset="2">
                <el-form-item label="发票类型:">
                  <el-input v-model="form.responsiblePerson" size="small"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="可抵扣税税率(%):">
                  <el-input v-model="form.transactionDepartment " size="small"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="币种:">
                  <el-input v-model="form.ourUnit" size="small"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <!--合约规划-->
        <div style="background-color: #FFF">
          <el-row :gutter="20" style="margin-top: 1%;padding-left: 1%;line-height: 2;">
            <el-col :span="1" style="width: 2%">
              <div @click="contractPlan = !contractPlan" class="detail_dev1"></div>
            </el-col>
            <el-col :span="6" style="padding-left: 0">
              <!--<i class="el-icon-document"></i>-->
              <span @click="contractPlan = !contractPlan" style="color: #60696b;font-size: 14px;">合同金额</span>
            </el-col>
          </el-row>
        </div>
        <div v-show="contractPlan" style="background-color: #FFF;padding: 8px">
          <el-table highlight-current-row :data="tableData" border
                    :header-cell-style="{background:'#7A86A7',color:'#FFF',borderColor:'rgb(116, 127, 154)'}">
            <el-table-column prop="approvalStatus" label="序号" align="center"></el-table-column>
            <el-table-column prop="statusAccounting" label="所属费项" align="center"></el-table-column>
            <el-table-column prop="nameContract" label="合约规划名称" align="center"></el-table-column>
            <el-table-column prop="supplierUnit" label="原合约规划金额(F)" align="center"></el-table-column>
            <el-table-column prop="contractMoneyPlus" label="合对应金额(不含税)(G)" align="center"></el-table-column>
            <el-table-column prop="contractMoneyAfter" label="预留金(H)" align="center"></el-table-column>
            <el-table-column prop="appliedAmount" label="差额(I=F-G-H)" align="center"></el-table-column>
          </el-table>
        </div>
        <!--其他说明-->
        <div style="background-color: #FFF" @click="otherExplain = !otherExplain">
          <el-row :gutter="20" style="margin-top: 1%;padding-left: 1%;line-height: 2;">
            <el-col :span="1" style="width: 2%">
              <div class="detail_dev1"></div>
            </el-col>
            <el-col :span="6" style="padding-left: 0">
              <span style="color: #60696b;font-size: 14px;">其他说明</span>
            </el-col>
            <el-col :span="17" style="text-align: right">
              <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="otherExplain"></i>
              <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!otherExplain"></i>
            </el-col>
          </el-row>
        </div>
        <div v-show="otherExplain" style="background-color: #FFF;padding: 8px">
          <el-form :model="form" ref="form" label-width="100px" class="demo-ruleForm">
            <el-row :gutter="20">
              <el-col :span="22" :offset="2">
                <el-form-item label="合同范围:">
                  <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.responsiblePerson"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="22" :offset="2">
                <el-form-item label="合约付款节点:">
                  <div>
                    <div style="float: left" v-for="(item,index) in styleData" :style="stepStyle(index,'marginLeft')">
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
                  <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.responsiblePerson"></el-input>
                </el-form-item>
                <div class="detail_dev2">(需说明首付款，过程付款，尾款的付款条件，时间及金额)</div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="22" :offset="2">
                <el-form-item label="与目标成本:">
                  <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.responsiblePerson"></el-input>
                </el-form-item>
                <div class="detail_dev2">(或非项目合同的费用预算)，比较，如超标请说明原因</div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="22" :offset="2">
                <el-form-item label="其他:">
                  <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.responsiblePerson"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <div style="width: 100%;line-height: 45px;border-bottom: 1px solid #B0B4B7" @click="accessory = !accessory">
              <el-row>
                <el-col :span="10">
                  <span style="border-left: 2px solid #7986A9"></span><span style="margin-left: 1%">合同文件</span>
                </el-col>
                <el-col :span="14" style="text-align: right">
                  <i class="el-icon el-icon-download"></i><span style="margin-left: 1%">一键下载</span>
                  <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="accessory"></i>
                  <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!accessory"></i>
                </el-col>
              </el-row>
            </div>
            <el-collapse-transition>
              <div v-show="accessory" style="margin-top: 2%">
                <el-table highlight-current-row :data="tableData" border
                          :header-cell-style="{background:'#7986A9', 'text-align': 'center', color: 'white'}"
                          :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center'}:{}"
                          style="width: 100%">
                  <el-table-column prop="approvalStatus" label="附件类型"></el-table-column>
                  <el-table-column prop="outLineCanSee" label="所属费项" width="600"></el-table-column>
                  <el-table-column prop="statusAccounting" label="备注"></el-table-column>
                  <el-table-column prop="statusAccounting" label="操作"></el-table-column>
                </el-table>
              </div>
            </el-collapse-transition>
          </el-form>
        </div>
      </div>
      <!--清单信息-->
      <div v-if="!classA">

      </div>
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
          id: '123',
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
            outLineCanSee: '外网可见',
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
            outLineCanSee: '外网可见',
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
            outLineCanSee: '外网不可见',
            nameContract: '西苑颐和园一期',
            supplierUnit: '龙湖地产颐和原著广告代理合同',
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
      },
      showPayments(id) {
        this.$router.push({ name: '合同付款', params: { id }})
      },
      showChanges(id) {
        this.$router.push({ name: '预估变更', params: { id }})
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

  .class-a {
    border-bottom: 3px solid #657398;
  }

  .detail_dev2 {
    font-size: 8px;
    color: rgb(169, 175, 181);
    margin-top: -1%;
    padding-left: 14%;
    padding-bottom: 1%;
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
