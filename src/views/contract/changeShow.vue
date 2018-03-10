<template>

  <div>
    <!--导航tab-->
    <div style="background-color: #EEF2F6;padding: 8px">
      <el-tabs v-model="activeName" @tab-click="handleClick" style="background-color: #ffffff;">
        <el-tab-pane name="first">
          <div slot="label">
            <div style="padding: 0 16%;">签证信息</div>
          </div>
          <!--基本信息-->
          <el-col class="dev1_border"></el-col>
          <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #B0B4B7"
               @click="basicInfo = !basicInfo">
            <el-row>
              <el-col :span="13" style="margin-left: 1%">
                <span style="border-left: 2px solid #7986A9"></span>
                <span class="dev1_font">基本信息</span>
              </el-col>
              <el-col :span="10" style="text-align: right;margin-left: 2%">
                <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="basicInfo"></i>
                <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!basicInfo"></i>
              </el-col>
            </el-row>
          </div>
          <div v-show="basicInfo" class="dev_show">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
              <el-row :gutter="20">
                <el-col :span="6" :offset="1">
                  <el-form-item label="文档编号:" class="from-margin8">
                    <el-input v-model="ruleForm.name" required prop="name" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="14" :offset="1">
                  <el-form-item label="主题:" prop="name" class="from-margin8">
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6" :offset="1">
                  <el-form-item label="项目分期:" class="from-margin8">
                    <el-input v-model="form.organization" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-form-item label="提网人:" class="from-margin8">
                    <el-input v-model="form.organization" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="提出日期:" class="from-margin8">
                    <el-input v-model="form.organization" size="small"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6" :offset="1">
                  <el-form-item label="变更类型:" class="from-margin8">
                    <el-input v-model="form.organization" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-form-item label="专业:" class="from-margin8">
                    <el-input v-model="form.organization" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7">
                  <el-form-item label="合作商申请金额:" class="from-margin8">
                    <el-input v-model="form.organization" size="small"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <!--变更事项-->
          <el-col class="dev1_border"></el-col>
          <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #B0B4B7"
               @click="changeItem = !changeItem">
            <el-row>
              <el-col :span="10" style="margin-left: 1%">
                <span style="border-left: 2px solid #7986A9"></span>
                <span class="dev1_font">变更事项</span>
              </el-col>
              <el-col :span="13" style="text-align: right;margin-left: 2%">
                <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="changeItem"></i>
                <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!changeItem"></i>
              </el-col>
            </el-row>
          </div>
          <div v-show="changeItem" class="dev_show" style="margin: 1% 0;">
            <el-table highlight-current-row :data="tableData" border
                      size="small" style="width: 98%;margin-left: 1%"
                      :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
                      :header-cell-style="{background:'#E8F4F9', 'text-align': 'center', color: '#7986a9',fontSize:'13px',padding:'6px 0',fontWeight:'500'}">
              <el-table-column type="index" width="100px" label="序号" align="center"></el-table-column>
              <el-table-column prop="statusAccounting" label="变更内容" align="center"></el-table-column>
            </el-table>
          </div>
          <!--对应合同-->
          <el-col class="dev1_border"></el-col>
          <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #B0B4B7"
               @click="homologousContract = !homologousContract">
            <el-row>
              <el-col :span="10" style="margin-left: 1%">
                <span style="border-left: 2px solid #7986A9"></span>
                <span class="dev1_font">变更事项</span>
              </el-col>
              <el-col :span="13" style="text-align: right;margin-left: 2%">
                <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="homologousContract"></i>
                <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!homologousContract"></i>
              </el-col>
            </el-row>
          </div>
          <div v-show="homologousContract" class="dev_show" style="margin: 1% 0;">
            <el-table highlight-current-row :data="tableData" border
                      size="small" style="width: 98%;margin-left: 1%"
                      :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
                      :header-cell-style="{background:'#E8F4F9', 'text-align': 'center', color: '#7986a9',fontSize:'13px',padding:'6px 0',fontWeight:'500'}">
              <el-table-column type="index" width="100px" label="下发单编号" align="center"></el-table-column>
              <el-table-column prop="statusAccounting" label="合同名称" align="center"></el-table-column>
              <el-table-column prop="statusAccounting" label="施工单位" align="center"></el-table-column>
              <el-table-column prop="statusAccounting" label="合同金额" align="center"></el-table-column>
              <el-table-column prop="statusAccounting" label="预计实施时间" align="center"></el-table-column>
              <el-table-column prop="statusAccounting" label="预计完成日期" align="center"></el-table-column>
              <el-table-column prop="statusAccounting" label="变更事项" align="center"></el-table-column>
            </el-table>
          </div>
          <!--附件-->
          <el-col class="dev1_border"></el-col>
          <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #B0B4B7"
               @click="accessory = !accessory">
            <el-row>
              <el-col :span="10" style="margin-left: 1%">
                <span style="border-left: 2px solid #7986A9"></span>
                <span class="dev1_font">附件</span>
              </el-col>
              <el-col :span="13" style="text-align: right;margin-left: 2%">
                <i class="el-icon el-icon-download"></i><span style="margin-left: 1%">一键下载</span>
                <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="accessory"></i>
                <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!accessory"></i>
              </el-col>
            </el-row>
          </div>
          <div v-show="accessory" class="dev_show" style="margin: 1% 0;">
            <el-table highlight-current-row :data="tableData" border
                      size="small" style="width: 98%;margin-left: 1%"
                      :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
                      :header-cell-style="{background:'#E8F4F9', 'text-align': 'center', color: '#7986a9',fontSize:'13px',padding:'6px 0',fontWeight:'500'}">
              <el-table-column type="index" width="100px" label="附件类型" align="center"></el-table-column>
              <el-table-column prop="statusAccounting" label="附件" align="center"></el-table-column>
              <el-table-column prop="statusAccounting" label="备注" align="center"></el-table-column>
              <el-table-column prop="statusAccounting" label="上传人" align="center"></el-table-column>
              <el-table-column prop="statusAccounting" label="上传时间" align="center"></el-table-column>
              <el-table-column prop="statusAccounting" label="操作" align="center"></el-table-column>
            </el-table>
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
        changeItem: true,
        homologousContract: true,
        payMethod: true,
        accessory: true,
        classA: true,
        classB: false,
        form: {
          id: '12',
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
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ]
        },
        tableData: [
          {
            approvalStatus: '已审批',
            statusAccounting: '已结算',
            outLineCanSee: '外网可见',
            nameContract: '西苑颐和园一期',
            supplierUnit: '龙湖地产代理合同',
            contractMoneyPlus: '18,43500.00',
            contractMoneyAfter: '19,5500.00',
            appliedAmount: '18,000.000.00',
            radioPayment: '100%',
            contractDate: '2018-4-30',
            settlementAmount: '1418,000.00'
          },
          {
            approvalStatus: '已审批',
            statusAccounting: '已结算',
            outLineCanSee: '外网可见',
            nameContract: '西苑颐和园一期',
            supplierUnit: '龙湖地产和原告代理合同',
            contractMoneyPlus: '2318,000.00',
            contractMoneyAfter: '14529,000.00',
            appliedAmount: '184,000.00',
            radioPayment: '100%',
            contractDate: '2018-4-30',
            settlementAmount: '1833,000.00'
          },
          {
            approvalStatus: '已审批',
            statusAccounting: '已结算',
            outLineCanSee: '外网不可见',
            nameContract: '西苑颐和园一期',
            supplierUnit: '龙湖地产颐和原著理合同',
            contractMoneyPlus: '145.258,000.00',
            contractMoneyAfter: '1.249,000.00',
            appliedAmount: '183.342,000.00',
            radioPayment: '100%',
            contractDate: '2018-4-30',
            settlementAmount: '183.325,000.00'
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
              marginLeft: index !== 0 ? '-0.8%' : '0'
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

<style>
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
    padding-left: 8%;
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
    border-top: 12px solid transparent;
    border-left: 12px solid;
    border-bottom: 12px solid transparent;
  }

  /*右上三角*/
  .triangle-topright {
    width: 0;
    height: 0;
    border-top: 12px solid;
    border-left: 12px solid transparent;
  }

  /*右下三角*/
  .triangle-bottomright {
    width: 0;
    height: 0;
    border-bottom: 12px solid;
    border-left: 12px solid transparent;
  }

  .from-margin8 {
    margin-bottom: 8px
  }

  .from-margin2 {
    margin-bottom: -3%
  }

  .el-tabs__active-bar {
    max-width: 100px;
    /*margin-left: 6%;*/
    position: absolute;
    bottom: 0;
    left: 7%;
    height: 2px;
    background-color: #409EFF;
    z-index: 1;
    -webkit-transition: -webkit-transform .3s cubic-bezier(.645, .045, .355, 1);
    transition: -webkit-transform .3s cubic-bezier(.645, .045, .355, 1);
    transition: transform .3s cubic-bezier(.645, .045, .355, 1);
    transition: transform .3s cubic-bezier(.645, .045, .355, 1), -webkit-transform .3s cubic-bezier(.645, .045, .355, 1);
    list-style: none;
  }

  .el-tabs__item {
    padding: 0 20px;
    height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #393d46;
    position: relative;
  }

  .dev1_border {
    border: 6px solid #EEF2F6;
  }
  .el-tabs__item.is-active {
    color: #7986a9;
  }
</style>
