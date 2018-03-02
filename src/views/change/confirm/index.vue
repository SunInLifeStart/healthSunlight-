<template>
  <div class="app-container">
    <div>
      <el-button>完工确认</el-button>
    </div>
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
            <el-input v-model="form.theme" placeholder="关于下发7-5地块正负零以上建筑"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="项目分期">
            <el-input v-model="form.projectOrder"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="经办人">
            <el-input v-model="form.responsiblePerson"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="经办部门">
            <el-input v-model="form.transactionDepartment"></el-input>
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
        <el-col :span="6">
          <el-form-item label="发起审批日期">
            <el-input v-model="form.theme" placeholder="关于下发7-5地块正负零以上建筑"></el-input>
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
          <el-form-item label="专业">
            <el-input v-model="form.profession"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="诉求部门">
            <el-input v-model="form.claimsDepartment"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <i class="el-icon-document"></i>
    对应合同
    <el-table highlight-current-row :data="contracts" style="width: 100%">
      <el-table-column prop="orderNum" label="下发单编号" width="130"></el-table-column>
      <el-table-column prop="contractName" label="合同名称" width="200"></el-table-column>
      <el-table-column prop="changeUnit" label="施工单位" width="200"></el-table-column>
      <el-table-column prop="changeUnit" label="费用承担单位" width="200"></el-table-column>
      <el-table-column prop="changeUnit" label="合同对应金额" width="200"></el-table-column>
      <el-table-column prop="changeMoney" label="变更对应金额"
                       width="200">
        <template slot-scope="scope">
          <div @click="dialogTableVisible = true">{{scope.row.changeMoney}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="scheduledTime" label="预计实施时间" width="200"></el-table-column>
      <el-table-column prop="successTime" label="预计完成日期" width="200"></el-table-column>
    </el-table>
    <el-dialog title="" :visible.sync="dialogTableVisible">
      <el-table :data="contracts">
        <el-table-column property="date" label="所属项目"></el-table-column>
        <el-table-column property="name" label="所属费项"></el-table-column>
        <el-table-column property="address" label="合约规划名称"></el-table-column>
        <el-table-column property="address" label="合约规划金额"></el-table-column>
        <el-table-column property="address" label="合约对应金额"></el-table-column>
        <el-table-column property="address" label="总预留金额"></el-table-column>
        <el-table-column property="address" label="变更对应金额"></el-table-column>
      </el-table>
    </el-dialog>
    <i class="el-icon-document"></i>
    完工确认
    <p style="color: red">完工状态说明：“已完工”变更事项全部完成；“部分完工”变更事项部分完成并且确认不在继续进行；“未实施”变更事项不再进行。</p>
    <el-table highlight-current-row style="width: 100%">
      <el-table-column prop="" label="序号"></el-table-column>
      <el-table-column prop="" label="变更事项"></el-table-column>
      <el-table-column prop="" label="完工状态"></el-table-column>
      <el-table-column prop="" label="备注"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'confirm',
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
    methods: {}
  }
</script>

<style scoped>
</style>
