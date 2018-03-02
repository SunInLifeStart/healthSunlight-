<template>
  <div class="app-container">
    <div>
      <el-button @click="goAmendment">修改</el-button>
      <el-button @click="goNewAmendment">新增</el-button>
      <el-button>删除</el-button>
      <el-button>验真通过</el-button>
      <el-button>验真不通过</el-button>
      <el-button>票据抵扣</el-button>
      <el-button>查看关联的业务单据</el-button>
      <el-button>导出</el-button>
    </div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="组织机构">
            <el-select v-model="form.institutionalFramework">
              <el-option v-for="organization in form.organizations" :label="organization" :value="organization" :key="organization"></el-option>
            </el-select>
            <!--<el-input type="text" v-model="form.institutionalFramework"></el-input>-->
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="发票类型">
            <el-select v-model="form.ticketType">
              <el-option v-for="ticketType in form.ticketTypes" :label="ticketType" :value="ticketType" :key="ticketType"></el-option>
            </el-select>
            <!--<el-input type="text" v-model="form.ticketType"></el-input>-->
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="关键词">
            <el-input type="text" v-model="form.antistop" placeholder="主题/文档编号/施工单位/合同编号/合同名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button-group>
            <el-button icon="el-icon-search"></el-button>
            <el-button @click="showAdvancedSearch = !showAdvancedSearch">高级</el-button>
          </el-button-group>
        </el-col>
      </el-row>
      <el-row :gutter="10" v-if="showAdvancedSearch">
        <el-col :span="6">
          <el-form-item label="项目">
            <el-select v-model="form.contractNum">
              <el-option v-for="organization in form.organizations" :label="organization" :value="organization" :key="organization"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="状态">
            <el-select v-model="form.screen">
              <el-option v-for="screen in form.screens" :label="screen" :value="screen" :key="screen"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="列名">
            <el-input v-model="form.column"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="10" v-if="showAdvancedSearch">
        <el-col :span="6">
          <el-form-item label="条件">
            <el-select v-model="form.condition">
              <el-option v-for="condition in form.conditions" :label="condition" :value="condition" :key="condition"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="内容">
            <el-input v-model="form.transactionDepartment"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-table :data="tableData3" style="width: 100%">
      <el-table-column type="index" width="50" label=""></el-table-column>
      <el-table-column prop="state" label="状态" width="100"></el-table-column>
      <el-table-column prop="ticketType" label="发票类型" width="200"></el-table-column>
      <el-table-column prop="ticketNum" label="发票代码" width="100"></el-table-column>
      <el-table-column prop="ticketSize" label="发票号" width="120"></el-table-column>
      <el-table-column prop="deductionStatus" label="抵扣状态" width="140"></el-table-column>
      <el-table-column prop="deductionTime" label="抵扣日期" width="120"></el-table-column>
      <el-table-column prop="payoutStatus " label="支付情况" width="120"></el-table-column>
      <el-table-column prop="invoiceTime" label="开票时间" width="120"></el-table-column>
      <el-table-column prop="taxAmount" label="含税金额" width="120"></el-table-column>
      <el-table-column prop="taxRate" label="税率" width="120"></el-table-column>
      <el-table-column prop="taxPaid" label="税额" width="120"></el-table-column>
      <el-table-column prop="taxPaid" label="不含税金额" width="120"></el-table-column>
      <el-table-column prop="taxPaid" label="累计付款金额（含税）" width="120"></el-table-column>
      <el-table-column prop="taxPaid" label="未付款金额(含税)" width="120"></el-table-column>
      <el-table-column prop="taxPaid" label="我方单位" width="120"></el-table-column>
      <el-table-column prop="taxPaid" label="我方单位税号" width="120"></el-table-column>
      <el-table-column prop="taxPaid" label="对方单位" width="120"></el-table-column>
      <el-table-column prop="taxPaid" label="创建人" width="120"></el-table-column>
      <el-table-column prop="taxPaid" label="来源系统" width="120"></el-table-column>
      <el-table-column prop="taxPaid" label="抵扣失败原因" width="120"></el-table-column>
    </el-table>
    <div>发票数:【100】 含税金额:【3,036,464,000】 不含税金额:【20,631.13】</div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'billManage',
    data() {
      return {
        showAdvancedSearch: false,
        form: {
          institutionalFramework: '',
          ticketType: '',
          antistop: '',
          organizations: [
            '集团总部',
            '北京龙湖',
            '重庆龙湖'
          ],
          ticketTypes: [
            '营业税普通发票',
            '增值税普通发票',
            '其他发票'
          ],
          screen: '',
          column: '',
          screens: [
            '待验真',
            '验真通过',
            '验真不通过'
          ],
          condition: '',
          conditions: [
            '大于',
            '小于',
            '大于等于',
            '小于等于',
            '等于'
          ]
        },
        tableData3: [
          {
            state: '已认证',
            ticketType: '营业税普通发票',
            ticketNum: '',
            ticketSize: '381888',
            deductionStatus: '未推送',
            deductionTime: '2018-1-1',
            payoutStatus: '未支付',
            invoiceTime: '2016-8-23',
            taxAmount: '9,600.00',
            taxRate: '1',
            taxPaid: '100'
          },
          {
            state: '已认证',
            ticketType: '营业税普通发票',
            ticketNum: '',
            ticketSize: '381888',
            deductionStatus: '未推送',
            deductionTime: '2018-1-1',
            payoutStatus: '未支付',
            invoiceTime: '2016-8-23',
            taxAmount: '9,600.00',
            taxRate: '1',
            taxPaid: '100'
          },
          {
            state: '已认证',
            ticketType: '营业税普通发票',
            ticketNum: '',
            ticketSize: '381888',
            deductionStatus: '未推送',
            deductionTime: '2018-1-1',
            payoutStatus: '未支付',
            invoiceTime: '2016-8-23',
            taxAmount: '9,600.00',
            taxRate: '1',
            taxPaid: '100'
          },
          {
            state: '已认证',
            ticketType: '营业税普通发票',
            ticketNum: '',
            ticketSize: '381888',
            deductionStatus: '未推送',
            deductionTime: '2018-1-1',
            payoutStatus: '未支付',
            invoiceTime: '2016-8-23',
            taxAmount: '9,600.00',
            taxRate: '1',
            taxPaid: '100'
          },
          {
            state: '已认证',
            ticketType: '营业税普通发票',
            ticketNum: '',
            ticketSize: '381888',
            deductionStatus: '未推送',
            deductionTime: '2018-1-1',
            payoutStatus: '未支付',
            invoiceTime: '2016-8-23',
            taxAmount: '9,600.00',
            taxRate: '1',
            taxPaid: '100'
          },
          {
            state: '已认证',
            ticketType: '营业税普通发票',
            ticketNum: '',
            ticketSize: '381888',
            deductionStatus: '未推送',
            deductionTime: '2018-1-1',
            payoutStatus: '未支付',
            invoiceTime: '2016-8-23',
            taxAmount: '9,600.00',
            taxRate: '1',
            taxPaid: '100'
          }
        ],
        currentPage3: 5
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      },
      goAmendment() {
        this.$router.push('/payment/bill/001')
      },
      goNewAmendment() {
        this.$router.push('/payment/bill/001')
      }
    }
  }
</script>

<style scoped>
  .el-col {
    border-radius: 4px;
    margin-top: 8px;
  }
</style>
