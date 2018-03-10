<template>
  <div>
    <!-- 查询条件 -->
    <div class="investmentClass">
      <el-form  label-width="120px">
        <el-row :gutter="0">
          <el-col :span="5">
            <el-form-item label="组织机构:">
              <el-select v-model="form.organization"  size="small" placeholder="请选择">
                <el-option
                  v-for="organization in form.organizations"
                  :key="organization.code"
                  :label="organization.value"
                  :value="organization.code">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="发票号:">
              <el-input type="text" size="small" v-model="form.ticketType"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="关键词">
              <el-input type="text" size="small" v-model="form.antistop" placeholder="请出入内容"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset="1"  class="div-font">
            <!--<el-button-group style="margin-top: 4px;">-->
              <!--<el-button size="small" icon="el-icon-search"></el-button>-->
              <el-button size="mini" icon="el-icon-search" type="primary">搜索</el-button>
              <!--<el-button size="small" @click="showAdvancedSearch = !showAdvancedSearch">高级</el-button>-->
              <el-button size="small" type="text" style="color: black" @click="showAdvancedSearch = !showAdvancedSearch"><span v-if="!showAdvancedSearch">更多搜索条件<i class="el-icon-arrow-down"></i></span>
                <span v-if="showAdvancedSearch">关闭更多搜索条件<i class="el-icon-arrow-up"></i></span></el-button>
            <!--</el-button-group>-->
          </el-col>
        </el-row>
        <!-- 高级查询条件 -->
        <div v-if="false">
          <el-row>
            <el-col :span="5">
              <el-form-item label="项目:">
                <el-select v-model="form.state" size="small" collapse-tags multiple placeholder="请选择">
                  <el-option v-for="organization in form.organizations" :label="organization" :value="organization" :key="organization"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="状态:">
                <el-select v-model="form.screen" size="small">
                  <el-option v-for="screen in form.screens" :label="screen" :value="screen" :key="screen"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="列名:">
                <el-input size="small" v-model="form.column"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </el-form>
    </div>
    <!-- 底部汇总信息展示 -->
    <div class="el-alert--success reminderBorder">
      <span class="reminder">发票数 </span><span class="reminderNum">100</span>
      <span class="reminder">含税金额 </span><span class="reminderNum">3,036,464,000</span>
      <span class="reminder">不含税金额 </span><span class="reminderNum">20,631.13</span>
    </div>
    <!--<div class="row-operation">-->
      <!--<el-button size="mini" @click="goAmendment">修改</el-button>-->
      <!--<el-button size="mini" type="danger">删除</el-button>-->
      <!--<el-button size="mini" >验真通过</el-button>-->
      <!--<el-button size="mini" >验真不通过</el-button>-->
      <!--<el-button size="mini" >票据抵扣</el-button>-->
      <!--<el-button size="mini" @click="dialogTableVisible = true">查看关联的业务单据</el-button>-->
      <!--<el-button size="mini">导出</el-button>-->
    <!--</div>-->
    <!--弹窗表格内容-->
    <el-dialog title="票据所关联的业务单据" :visible.sync="dialogTableVisible"  width="80%">
      <el-table ref="multipleTable" :data="tableData3"  tooltip-effect="dark" style="width: 100%"
                @selection-change="handleSelectionChange" >
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column property="state" label="状态"></el-table-column>
        <el-table-column property="ticketSize" width="150" label="单据编号">
          <template slot-scope="scope">
            <el-button type="text" @click="goPayDetail(scope.row.ticketSize)">{{scope.row.ticketSize}}</el-button>
          </template>
        </el-table-column>
        <el-table-column property="ticketType" label="主题"></el-table-column>
        <el-table-column property="taxAmount" label="申请金额"></el-table-column>
        <el-table-column property="taxAmount" label="应付金额"></el-table-column>
        <el-table-column property="deductionTime" label="支付日期"></el-table-column>
      </el-table>
    </el-dialog>
    <!-- 票据列表 -->
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="24">
        <el-button size="mini" class="btnRight" icon="el-icon-document" type="text" @click="goAmendment">修改</el-button>
        <el-button size="mini" class="btnRight" icon="el-icon-document" type="text">删除</el-button>
        <el-button size="mini" class="btnRight" icon="el-icon-document" type="text">验真通过</el-button>
        <el-button size="mini" class="btnRight" icon="el-icon-document" type="text">验真不通过</el-button>
        <el-button size="mini" class="btnRight" icon="el-icon-document" type="text">票据抵扣</el-button>
        <el-button size="mini" class="btnRight" icon="el-icon-document" type="text" @click="dialogTableVisible = true">查看关联的业务单据</el-button>
        <el-button size="mini" class="btnRight" icon="el-icon-document" type="text">导出</el-button>
      </el-col>
    </el-row>
    <div>
      <el-table border
                size="small"
                :default-sort="{prop: 'approvalStatus', order: 'descending'}"
                :data="tableData3"
                :row-class-name="tableRowClassName"
                :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
                :header-cell-style="{background:'#efefe0', 'text-align': 'center', color: '#a08e6e',fontSize:'13px',padding:'3px 0',fontWeight:'500'}">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="state" label="状态" width="100"></el-table-column>
        <el-table-column prop="ticketType" label="发票类型" width="200"></el-table-column>
        <el-table-column prop="ticketNum" label="发票代码" width="100"></el-table-column>
        <el-table-column prop="ticketSize" label="发票号" width="120"></el-table-column>
        <el-table-column prop="invoiceTime" label="开票日期" width="120"></el-table-column>
        <el-table-column prop="taxPaid" label="不含税金额" width="120"></el-table-column>
        <el-table-column prop="taxPaid" label="税额" width="120"></el-table-column>
        <el-table-column prop="taxAmount" label="含税金额" width="120"></el-table-column>
        <el-table-column prop="taxRate" label="税率" width="120"></el-table-column>
        <el-table-column prop="taxPaid" label="累计付款金额（含税）" width="120"></el-table-column>
        <el-table-column prop="taxPaid" label="未付款金额(含税)" width="120"></el-table-column>
        <el-table-column prop="taxPaid" label="我方单位" width="120"></el-table-column>
        <el-table-column prop="taxPaid" label="我方单位税号" width="120"></el-table-column>
        <el-table-column prop="taxPaid" label="对方单位" width="120"></el-table-column>
        <el-table-column prop="taxPaid" label="创建人" width="120"></el-table-column>
        <el-table-column prop="taxPaid" label="来源系统" width="120"></el-table-column>
        <el-table-column prop="taxPaid" label="抵扣失败原因" width="120"></el-table-column>
        <el-table-column prop="deductionStatus" label="认证失败原因" width="140"></el-table-column>
        <!-- <el-table-column prop="deductionTime" label="抵扣日期" width="120"></el-table-column> -->
        <!-- <el-table-column prop="payoutStatus " label="支付情况" width="120"></el-table-column> -->
      </el-table>
    </div>
    <!-- 分页 -->
    <div>
      <el-pagination
        class="pagination-position"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next"
        :total="2000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'billManage',
    data() {
      return {
        currentPage: 1,
        showAdvancedSearch: false,
        dialogTableVisible: false,
        form: {
          institutionalFramework: '',
          state: '',
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
      handleSelectionChange(val) {
        this.multipleSelection = val
      },
      goAmendment() {
        this.$router.push('/payment/bill/001')
      },
      goPayDetail(id) {
        this.$router.push({ name: '付款详情', params: { id }})
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
  /**
    高级查询,input样式调整
   */
  .investmentClass >>> .el-collapse-item__content{
    padding-bottom: 0;
    font-size: 12px;
    color: #333;
  }
  .investmentClass >>> .el-col-6, .el-col-5{
    height: 40px;
  }
  .investmentClass >>> .el-collapse-item__arrow{
    position: absolute;
    right: 65px;
  }
  /**
    高级查询样式
   */
  .investmentClass{
    padding-top: 10px;
    font-size: 13px;
    border: 1px solid #D5D5D5;
    border-left-style: none;
    border-top-style: none;
    border-right-style: none;
    box-shadow: 0 2px 3px rgba(0,0,0,0.2);
  }
  /**
    提示信息样式
   */
  .reminder{
    margin-left: 70px;
    font-size: 13px;
  }
  .reminderNum{
    color: #333;
    font-size: 16px;
    margin-left: 5px;
  }
  .reminderBorder{
    background-color: #F8F8FE;
    border: 1px solid #D1D2D2;
    color: #999;
    padding: 5px;
    position: fixed;
    bottom: 2px;
    width: 100%;
  }
  .el-col {
    border-radius: 4px;
    margin-top: 8px;
  }
  .center{
    text-align: center
  }
  .row-operation{
    padding-left: 44%;
    margin-bottom: 20px;
  }
  .pagination-position{
        float: right;
    margin-top: 20px;
  }
</style>
