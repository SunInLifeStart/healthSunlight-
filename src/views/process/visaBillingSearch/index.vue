<template>
  <div>
    <div>
      <el-button>导出下发单</el-button>
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
              <el-form-item label="提网人">
                <el-input v-model="form.netPerson"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="申请日期">
                <el-input v-model="form.openDate"></el-input>
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
              <el-form-item label="专业">
                <el-input v-model="form.profession"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">

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
              <el-form-item label="诉求部门">
                <el-input v-model="form.claimsDepartment"></el-input>
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
          </el-row>
    </el-form>
    <i class="el-icon-document"></i>
    变更事项
    <el-table
      highlight-current-row
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="index"
        label="序号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="changeContent"
        label="变更内容"
        width="800">
      </el-table-column>
      <el-table-column
        prop="changeAnswer"
        label="变更原因"
        width="400">
      </el-table-column>
    </el-table>
    <i class="el-icon-document"></i>
    对应合同
    <el-table
      highlight-current-row
      :data="contracts"
      style="width: 100%">
      <el-table-column
        prop="orderNum"
        label="下发单编号"
        width="130">
      </el-table-column>
      <el-table-column
        prop="contractName"
        label="合同名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="changeUnit"
        label="施工单位"
        width="200">
      </el-table-column>
      <el-table-column
        prop="bearFeesUnit"
        label="费用承担单位"
        width="200">
      </el-table-column>
      <el-table-column
        prop="bearMoney"
        label="费用合同对应金额"
        width="200">
      </el-table-column>
      <el-table-column
        prop="changeMoney"
        label="变更对应金额"
        width="200">
      </el-table-column>
      <el-table-column
        prop="scheduledTime"
        label="预计实施时间"
        width="200">
      </el-table-column>
      <el-table-column
        prop="successTime"
        label="预计完成时间"
        width="200">
      </el-table-column>
      <el-table-column
        prop="changesAs"
        label="变更事项"
        width="200">
      </el-table-column>
      <el-table-column
        prop="completionConfirmation"
        label="完工确认工程师"
        width="200">
      </el-table-column>
    </el-table>
    附件
    <el-table
      highlight-current-row
      :data="tableData2"
      style="width: 100%">
      <el-table-column
        prop="textType"
        label="附件类型"
        width="150">
      </el-table-column>
      <el-table-column
        prop="accessory"
        label="附件"
        width="200">
      </el-table-column>
      <el-table-column
        prop="changeAnswer"
        label="备注"
        width="200">
      </el-table-column>
      <el-table-column
        prop="index"
        label="上传人"
        width="150">
      </el-table-column>
      <el-table-column
        prop="changeContent"
        label="上传时间"
        width="200">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button type="text" size="small">下载</el-button>
          <el-button type="text" size="small">一键下载</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'visaBillingSearch',
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
          changeAnswer: '明确7-5C地块各楼栋正负零以上建筑细部做法'
        }
      ],
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
        }
      ],
      tableData2: [
        {
          accessory: '票据信息.pdf',
          textType: '文档'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
