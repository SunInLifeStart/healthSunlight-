<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="签证信息">
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
              <el-form-item label="提网人">
                <el-input v-model="form.netPerson"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="提出日期">
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
              <el-form-item label="发起审批日期">
                <el-date-picker type="date" placeholder="Pick a date" v-model="form.approvalByDate" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="审批完成日期">
                <el-date-picker type="date" placeholder="Pick a date" v-model="form.approvalToDate" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="6">
            </el-col>
            <el-col :span="6">
              <el-form-item label="经办人">
                <el-input v-model="form.responsiblePerson"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
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
            <el-col :span="6">
              <el-form-item label="与报规、验收及销售合同核对">
                <el-radio-group v-model="form.checkContract">
                  <el-radio label="吻合"></el-radio>
                  <el-radio label="不吻合"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="结转金额">
                <el-input v-model="form.transactionDepartment"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="预估金额(A=B+C)">
                <el-input v-model="form.claimsDepartment"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="有效预估金额(含返工金额)">
                <el-input v-model="form.crossDeductionsFlag"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="与报规、验收及销售合同核对">
                <el-input v-model="form.checkContract"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
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
      </el-tab-pane>
      <el-tab-pane label="清单信息">
        <el-table
          highlight-current-row
          :data="tableData"
          style="width: 100%">
          <el-table-column
            type="index"
            label="编码"
            width="150">
          </el-table-column>
          <el-table-column
            prop="changeContent"
            label="变更性质"
            width="100">
          </el-table-column>
          <el-table-column
            prop="changeAnswer"
            label="分部分项名称"
            width="200">
          </el-table-column>
          <el-table-column
            prop="changeAnswer"
            label="计量单位"
            width="200">
          </el-table-column>
          <el-table-column
            prop="changeAnswer"
            label="变更内容"
            width="200">
          </el-table-column>
          <el-table-column
            prop="changeAnswer"
            label="工作量"
            width="200">
          </el-table-column>
          <el-table-column
            prop="changeAnswer"
            label="不含增值税单价"
            width="200">
          </el-table-column>
          <el-table-column
            prop="changeAnswer"
            label="不含增值税合价"
            width="200">
          </el-table-column>
          <el-table-column
            prop="changeAnswer"
            label="备注"
            width="200">
          </el-table-column>
        </el-table>
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
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
