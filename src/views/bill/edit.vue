<template>
  <div style="padding: 10px;background-color: #EEF2F6">
    <div style="background-color: #FFFFFF">
      <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #e2e7eb;background-color: #FFFFFF;">
        <el-row>
          <el-col :span="10" style="margin-left: 1%">
            <span style="border-left: 2px solid #7986A9"></span>
            <span class="dev1_font">基本信息</span>
          </el-col>
          <el-col :span="13" style="text-align: right;margin-left: 2%">
            <el-button type="primary" size='mini' @click="goSave">保存</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="dev_show">
        <el-form  :rules="rules"  label-width="140px" class="demo-ruleForm">
          <el-row :gutter="20">
            <el-col :span="7">
              <el-form-item label="票据类型:" class="from-margin8">
                <el-select v-model="form.ticketType" size="small" style="width: 100%">
                  <el-option label="营业税普通发票" value="01"></el-option>
                  <el-option label="增值税普通发票" value="02"></el-option>
                  <el-option label="增值税电子发票" value="03"></el-option>
                  <el-option label="增值税电子发票" value="04"></el-option>
                  <el-option label="增值税电子发票" value="05"></el-option>
                  <el-option label="机动车增值税专用发票" value="06"></el-option>
                  <el-option label="增值税普通发票（卷式）" value="07"></el-option>
                  <el-option label="其他票据" value="08"></el-option>
                  <el-option label="营业税普通发票" value="09"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="7" :offset="1"  class="selectClass">
              <el-form-item label="票据号:" class="from-margin8">
                <el-input v-model="form.ticketNum" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7" :offset="1">
              <el-form-item label="发票代码:" class="from-margin8">
                <el-input v-model="form.ticketTime" size="small"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="7">
              <el-form-item label="开票日期:" class="from-margin8">
                <el-input v-model="form.ticketSize" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7" :offset="1">
              <el-form-item label="校检码后六位:" class="from-margin8">
                <el-input v-model="form.ticketTime" size="small"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="15">
              <el-form-item label="说明:" class="from-margin8">
                <el-input v-model="form.text" size="small"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <!--<el-form :model="form" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm selectClass">-->
        <!--<el-row >-->
        <!--<el-col :span="7" :offset="1">-->
        <!--<el-form-item label="票据类型">-->
        <!--<el-select v-model="form.ticketType" style="width:100%">-->
        <!--<el-option label="营业税普通发票" value="01"></el-option>-->
        <!--<el-option label="增值税普通发票" value="02"></el-option>-->
        <!--<el-option label="增值税电子发票" value="03"></el-option>-->
        <!--<el-option label="增值税电子发票" value="04"></el-option>-->
        <!--<el-option label="增值税电子发票" value="05"></el-option>-->
        <!--<el-option label="机动车增值税专用发票" value="06"></el-option>-->
        <!--<el-option label="增值税普通发票（卷式）" value="07"></el-option>-->
        <!--<el-option label="其他票据" value="08"></el-option>-->
        <!--<el-option label="营业税普通发票" value="09"></el-option>-->
        <!--</el-select>-->
        <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="7">-->
        <!--<el-form-item label="票据号">-->
        <!--<el-input v-model="form.ticketNum" placeholder="请出入内容"></el-input>-->
        <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="7">-->
        <!--<el-form-item label="发票代码">-->
        <!--<el-input v-model="form.ticketSize" placeholder="请出入内容"></el-input>-->
        <!--</el-form-item>-->
        <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row>-->
        <!--<el-col :span="7" :offset="1">-->
        <!--<el-form-item label="开票日期">-->
        <!--<el-date-picker style="width:98%"  type="date" placeholder="Pick a date" v-model="form.ticketTime" ></el-date-picker>-->
        <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="7">-->
        <!--<el-form-item label="对方单位:" >-->
        <!--<el-input v-model="ruleForm.name" ></el-input>-->
        <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="7">-->
        <!--<el-form-item label="校检码后六位">-->
        <!--<el-input v-model="form.text"></el-input>-->
        <!--</el-form-item>-->
        <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row >-->
        <!--<el-col :span="21" :offset="1">-->
        <!--<el-form-item label="说明">-->
        <!--<el-input type="textarea" v-model="form.text" ></el-input>-->
        <!--</el-form-item>-->
        <!--</el-col>-->
        <!--</el-row>-->
        <!--</el-form>-->
      </div>
    </div>
    <div class="dev1_border"></div>
    <div style="background-color: #FFFFFF">
      <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #e2e7eb;background-color: #FFFFFF;">
        <el-row>
          <el-col :span="10" style="margin-left: 1%">
            <span style="border-left: 2px solid #7986A9"></span>
            <span class="dev1_font">票据金额</span>
          </el-col>
        </el-row>
      </div>
      <div  class="dev_show">
        <el-form  :rules="rules"  label-width="140px" class="demo-ruleForm">
          <el-row :gutter="20">
            <el-col :span="7">
              <el-form-item label="不含可抵扣税金额:" class="from-margin8">
                <el-input v-model="form.taxDeductionNo" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7" :offset="1">
              <el-form-item label="可抵扣税率:" class="from-margin8">
                <el-input v-model="form.taxRate" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7" :offset="1">
              <el-form-item label="可抵扣税额:" class="from-margin8">
                <el-input v-model="form.taxDeduction" size="small"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="7">
              <el-form-item label="含可抵扣税金额:" class="from-margin8">
                <el-input v-model="form.taxDeductionYes" size="small"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <!--<el-form :model="form"   label-width="130px" class="demo-ruleForm selectClass">-->
        <!--<el-row >-->
        <!--<el-col :span="7" :offset="1">-->
        <!--<el-form-item label="不含可抵扣税金额">-->
        <!--<el-input v-model="form.taxDeductionNo"></el-input>-->
        <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="7">-->
        <!--<el-form-item label="可抵扣税率">-->
        <!--<el-input v-model="form.taxRate"></el-input>-->
        <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="7">-->
        <!--<el-form-item label="可抵扣税额">-->
        <!--<el-input v-model="form.taxDeduction"></el-input>-->
        <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="7" :offset="1">-->
        <!--<el-form-item label="含可抵扣税金额">-->
        <!--<el-input v-model="form.taxDeductionYes"></el-input>-->
        <!--</el-form-item>-->
        <!--</el-col>-->
        <!--</el-row>-->
        <!--</el-form>-->
      </div>
    </div>
    <div class="dev1_border"></div>
    <div style="background-color: #FFFFFF">
      <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #e2e7eb;background-color: #FFFFFF;">
        <el-row>
          <el-col :span="10" style="margin-left: 1%">
            <span style="border-left: 2px solid #7986A9"></span>
            <span class="dev1_font">附件</span>
          </el-col>
          <el-col :span="13" style="text-align: right;margin-left: 2%">
            <i class="el-icon el-icon-download"></i><span style="margin-left: 1%"
                                                          class="dev1_font">一键下载</span>
          </el-col>
        </el-row>
      </div>
      <div class="dev_show">
        <el-table highlight-current-row :data="tableData" border
                  size="small" style="width: 98%;margin-left: 1%"
                  :row-class-name="tableRowClassName"
                  :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
                  :header-cell-style="{background:'#efefe0', 'text-align': 'center', color: '#a08e6e',fontSize:'13px',height:'40px',padding:'6px 0',fontWeight:'500'}">
          <el-table-column prop="approvalStatus" align="center" label="附件类型"></el-table-column>
          <el-table-column prop="outLineCanSee" align="center" label="附件名称"></el-table-column>
          <el-table-column prop="approvalStatus" align="center" label="上传人"></el-table-column>
          <el-table-column prop="outLineCanSee" align="center" label="上传时间"></el-table-column>
          <el-table-column prop="approvalStatus" align="center" label="备注"></el-table-column>
          <el-table-column prop="statusAccounting" align="center" label="操作"></el-table-column>
          <el-table-column  align="center" label="操作">
            <template slot-scope="scope">
              <a style="color: #409EFF;">下载</a>
            </template>
          </el-table-column>
        </el-table>
        <div class="dev1_border1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'billModify',
  data() {
    return {
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
      form: {
        ticketType: '',
        ticketNum: '',
        ticketSize: '',
        ticketTime: '',
        text: '',
        taxDeductionNo: '',
        taxDeductionYes: '',
        taxDeduction: '',
        taxRate: ''
      },
      tableData: [
        {
          approvalStatus: '已审批',
          statusAccounting: '已结算',
          operation: '下载',
          outLineCanSee: '外网可见',
          nameContract: '西苑颐和园一期',
          supplierUnit: '龙湖地产代理合同',
          contractMoneyPlus: '1,843,500.00',
          contractMoneyAfter: '195,500.00',
          appliedAmount: '18,000,000.00',
          radioPayment: '100%',
          contractDate: '2018-4-30',
          settlementAmount: '1,418,000.00'
        },
        {
          approvalStatus: '已审批',
          statusAccounting: '已结算',
          operation: '下载',
          outLineCanSee: '外网可见',
          nameContract: '西苑颐和园一期',
          supplierUnit: '龙湖地产和原告代理合同',
          contractMoneyPlus: '2,318,000.00',
          contractMoneyAfter: '14,529,000.00',
          appliedAmount: '184,000.00',
          radioPayment: '100%',
          contractDate: '2018-4-30',
          settlementAmount: '1,833,000.00'
        }
      ]
    }
  },
  methods: {
    goSave() {
      this.$router.push('/payment/bill/')
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
    color: #999;
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
    color: #9a9fa4;
    margin-top: -1%;
    padding-left: 10%;
    padding-bottom: 1%;
  }

  .dev_show {
    background-color: #FFF;
    margin-top: 1%
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
    bottom: 2px;
    left: 7%;
    height: 2px;
    background-color: #7986a9;
    z-index: 1;
    -webkit-transition: -webkit-transform .3s cubic-bezier(.645, .045, .355, 1);
    transition: -webkit-transform .3s cubic-bezier(.645, .045, .355, 1);
    transition: transform .3s cubic-bezier(.645, .045, .355, 1);
    transition: transform .3s cubic-bezier(.645, .045, .355, 1), -webkit-transform .3s cubic-bezier(.645, .045, .355, 1);
    list-style: none;
  }

  .el-tabs__item {
    padding: 45px 20px;
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
  .el-tabs__header {
    padding: 0;
    position: relative;
    margin: 0 0 0px;
  }

  .dev1_border {
    border: 6px solid #EEF2F6;
  }
  .dev1_border1 {
    border: 6px solid #FFFFFF;
  }
  .el-tabs__item.is-active {
    color: #7986a9;
  }
  .el-table .warning-row {
    background: #F5F7FA;
  }
</style>
