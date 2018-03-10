<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="业务信息">
        <el-form ref="form" :model="form" label-width="120px">
          <el-row :gutter="20">
            <el-col :span="6">
              <i class="el-icon-document"></i>
              基本信息
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="文档编号">
                <el-input v-model="form.textNum"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="主题">
                <el-input v-model="form.theme"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="项目分期">
                <el-input v-model="form.projectOrder"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="经办人">
                <el-input v-model="form.netPerson"></el-input>
              </el-form-item>
            </el-col>

          </el-row>
          <el-row :gutter="20">
            <!--<el-col :span="6">-->
            <!--<el-form-item label="提出日期">-->
            <!--<el-input v-model="form.openDate"></el-input>-->
            <!--</el-form-item>-->
            <!--</el-col>-->
            <el-col :span="6">
              <el-form-item label="经办部门">
                <el-input v-model="form.netPerson"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="变更类型">
                <el-select v-model="form.changeAttribute" placeholder="please select your zone">
                  <el-option label="设计变更" value="shanghai"></el-option>
                  <el-option label="Zone two" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="分类">
                <el-select v-model="form.classify" placeholder="please select your zone">
                  <el-option label="职能和设计理解" value="shanghai"></el-option>
                  <el-option label="Zone two" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="3">
              <el-form-item label="专业">
                <el-select v-model="form.classify" placeholder="please select your zone">
                  <el-option label="职能和设计理解" value="shanghai"></el-option>
                  <el-option label="Zone two" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="3" style="padding: 0;margin-left: -2%">
              <el-form-item label="诉求部门">
                <el-select v-model="form.classify" placeholder="please select your zone">
                  <el-option label="职能和设计理解" value="shanghai"></el-option>
                  <el-option label="Zone two" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="发起审批日期">
                <el-date-picker type="date" placeholder="Pick a date" v-model="form.approvalByDate"
                                style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="是否交叉扣款">
                <el-radio-group v-model="form.crossDeductionsFlag">
                  <el-radio label="是"></el-radio>
                  <el-radio label="否"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="与报规、验收及销售合同核对">
                <el-radio-group v-model="form.checkContract">
                  <el-radio label="吻合"></el-radio>
                  <el-radio label="不吻合"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <!--<el-col :span="6">-->
            <!--<el-form-item label="审批完成日期">-->
            <!--<el-date-picker type="date" placeholder="Pick a date" v-model="form.approvalToDate"-->
            <!--style="width: 100%;"></el-date-picker>-->
            <!--</el-form-item>-->
            <!--</el-col>-->
            <el-col :span="6"></el-col>
            <!--<el-col :span="6">-->
            <!--<el-form-item label="经办人">-->
            <!--<el-input v-model="form.responsiblePerson"></el-input>-->
            <!--</el-form-item>-->
            <!--</el-col>-->
          </el-row>
          <!--<el-row :gutter="20">-->
          <!--<el-col :span="6">-->
          <!--<el-form-item label="经办部门">-->
          <!--<el-input v-model="form.transactionDepartment"></el-input>-->
          <!--</el-form-item>-->
          <!--</el-col>-->
          <!--<el-col :span="6">-->
          <!--<el-form-item label="诉求部门">-->
          <!--<el-input v-model="form.claimsDepartment"></el-input>-->
          <!--</el-form-item>-->
          <!--</el-col>-->

          <!--</el-row>-->
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="预估金额(A=B+C)">
                <el-input v-model="form.claimsDepartment"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="结转金额">
                <el-input v-model="form.transactionDepartment"></el-input>
              </el-form-item>
            </el-col>
            
          </el-row>
        </el-form>
        <i class="el-icon-document"></i>
        变更事项
        <p style="float: right;margin-left: 10px">删除</p>
        <p style="float: right">增加</p>
        <el-table highlight-current-row :data="tableData" style="width: 100%">
          <el-table-column type="index" label="序号" width="150"></el-table-column>
          <el-table-column prop="changeContent" label="变更内容" width="400"></el-table-column>
          <!-- <el-table-column prop="changeWhy" label="变更原因" width="400"></el-table-column> -->
          <!--<el-table-column prop="changeAnswer" label="变更原因" width="400"></el-table-column>-->
        </el-table>
        <i class="el-icon-document"></i>
        对应合同
        <p style="float: right;margin-left: 10px">删除</p>
        <p style="float: right">增加</p>
        <el-table highlight-current-row :data="contracts" style="width: 100%">
          <el-table-column prop="orderNum" label="下发单编号" width="130"></el-table-column>
          <el-table-column prop="contractName" label="合同名称" width="200"></el-table-column>
          <el-table-column prop="changeUnit" label="施工单位" width="200"></el-table-column>
           <el-table-column prop="changeUnit" label="合同金额" width="200"></el-table-column>
 ·        <el-table-column prop="changeMoney" label="变更对应金额"
                           width="200">
            <template slot-scope="scope">
              <div @click="dialogTableVisible = true">{{scope.row.changeMoney}}</div>
            </template>
          </el-table-column>
           <el-table-column prop="scheduledTime" label="预计实施时间" width="200"></el-table-column>
          <el-table-column prop="successTime" label="预计完成日期" width="200"></el-table-column>
          <!-- <el-table-column prop="changeUnit" label="费用承担单位" width="200"></el-table-column> -->
           <el-table-column prop="changesAs" label="变更事项" width="200"></el-table-column>
          <el-table-column prop="completionConfirmation" label="完工确认工程师" width="200"></el-table-column>
          <!--<el-table-column prop="bearFeesUnit" label="费用承担单位" width="200"></el-table-column>-->
          <!--<el-table-column prop="bearMoney" label="费用合同对应金额" width="200"></el-table-column>-->
        </el-table>
        <!-- <el-dialog title="" :visible.sync="dialogTableVisible">
          <el-table :data="contracts">
            <el-table-column property="date" label="所属项目"></el-table-column>
            <el-table-column property="name" label="所属费项"></el-table-column>
            <el-table-column property="address" label="合约规划名称"></el-table-column>
            <el-table-column property="address" label="合约规划金额"></el-table-column>
            <el-table-column property="address" label="合约对应金额"></el-table-column>
            <el-table-column property="address" label="总预留金额"></el-table-column>
            <el-table-column property="address" label="变更对应金额"></el-table-column>
          </el-table>
        </el-dialog> -->
        <i class="el-icon-document"></i>
        附件
        <el-table highlight-current-row :data="contracts" style="width: 100%">
          <el-table-column prop="orderNum" label="附件类型"></el-table-column>
          <el-table-column prop="orderNum" label="附件"></el-table-column>
          <el-table-column prop="orderNum" label="备注"></el-table-column>
          <el-table-column prop="orderNum" label="上传人"></el-table-column>
          <el-table-column prop="orderNum" label="上传时间"></el-table-column>
          <el-table-column prop="orderNum" label="操作"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="审批流程">
        <el-table highlight-current-row :data="tableData" style="width: 100%">
          <el-table-column type="index" label="编码" width="150"></el-table-column>
          <el-table-column prop="changeContent" label="变更性质" width="100"></el-table-column>
          <el-table-column prop="changeAnswer" label="分部分项名称" width="200"></el-table-column>
          <el-table-column prop="changeAnswer" label="计量单位" width="200"></el-table-column>
          <el-table-column prop="changeAnswer" label="变更内容" width="200"></el-table-column>
          <el-table-column prop="changeAnswer" label="工作量" width="200"></el-table-column>
          <el-table-column prop="changeAnswer" label="不含增值税单价" width="200"></el-table-column>
          <el-table-column prop="changeAnswer" label="不含增值税合价" width="200"></el-table-column>
          <el-table-column prop="changeAnswer" label="备注" width="200"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane disabled>
        <span slot="label" class="label-slot">
           <el-button>暂存</el-button>
           <el-button @click="goToInitiateApproval">发起审批</el-button>
        </span>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: 'visaApproval',
    data() {
      return {
        form: {
          textNum: '',
          theme: '',
          netPerson: '',
          projectOrder: '',
          changeAttribute: '',
          openDate: '',
          profession: '',
          crossDeductionsFlag: '',
          responsiblePerson: '',
          appliedAmount: '',
          checkContract: '',
          approvalToDate: '',
          approvalByDate: '',
          transactionDepartment: '',
          claimsDepartment: '',
          classify: ''
        },
        tableData: [
          {
            changeContent: '明确7-5C地块各楼栋正负零以上建筑细部做法',
            changeAnswer: ''
          }
        ],
        dialogTableVisible: false,
        contracts: [
          {
            orderNum: '',
            changeUnit: '重庆诚业建筑有限公司',
            contractName: '大竹林项目7-5C地块C组团总承包合同',
            bearFeesUnit: '重庆兴龙湖置地发展有限公司',
            bearMoney: '116753521.89',
            changeMoney: '25,000.00',
            scheduledTime: '2017-8-11',
            successTime: '2017-12-23',
            changesAs: '1',
            completionConfirmation: '马陆'
          },
          {
            orderNum: '',
            changeUnit: '重庆诚业建筑有限公司',
            contractName: '大竹林项目7-5C地块C组团总承包合同',
            bearFeesUnit: '重庆兴龙湖置地发展有限公司',
            bearMoney: '116753521.89',
            changeMoney: '25,000.00',
            scheduledTime: '2017-8-11',
            successTime: '2017-12-23',
            changesAs: '1',
            completionConfirmation: '马陆'
          }
        ]
      }
    },
    methods: {
      goToInitiateApproval() {
        this.$router.push({ name: '发起审批' })
      }
    }
  }
</script>

<style scoped>
  .label-slot{
    margin-left: 650px;
  }
  .label-slot button{
    padding: 8px;
  }
</style>
