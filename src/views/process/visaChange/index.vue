<template>
  <div class="app-container">
    <div>
      <el-button>新增</el-button>
      <el-button>导出</el-button>
    </div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="组织机构">
            <el-input  type="text"  v-model="form.institutionalFramework"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="项目分期">
            <el-input  type="text"  v-model="form.projectTarget"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="关键词">
            <el-input type="text"  v-model="form.antistop" playsholder="主题/文档编号/施工单位/合同编号/合同名称"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="状态">
            <el-input  type="text"  v-model="form.state"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="部门">
            <el-input  type="text"  v-model="form.unit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="列名">
            <el-input type="text"  v-model="form.antistop" playsholder="主题/文档编号/施工单位/合同编号/合同名称"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="条件">
            <el-input  type="text"  v-model="form.state"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="内容">
            <el-input  type="text"  v-model="form.unit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-button>高级</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-table
      :data="tableData3"
      style="width: 100%">
      <el-table-column
        type="index"
        label="序号"
        width="80">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        width="100">
      </el-table-column>
      <el-table-column
        label="变更签证信息"
        align="center">
        <el-table-column
          prop="textNum"
          label="文档编号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="theme"
          label="主题"
          width="300">
        </el-table-column>
        <el-table-column
          prop="changeAttribute"
          label="变更类型"
          width="120">
        </el-table-column>
        <el-table-column
          prop="approvalCompleteTime"
          label="审批完成时间"
          width="140">
        </el-table-column>
        <el-table-column
          prop="estimatedAmount"
          label="预估金额"
          width="120">
        </el-table-column>
      </el-table-column>
      <el-table-column
        label="下发单信息"
        align="center">
        <el-table-column
          prop="textNum"
          label="下发单编号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="theme"
          label="合同名称"
          width="300">
        </el-table-column>
        <el-table-column
          prop="changeAttribute"
          label="是否完工确认"
          width="120">
        </el-table-column>
      </el-table-column>
      <el-table-column
        align="center"
        label="结转信息">
        <el-table-column
          prop="textNum"
          label="结转金额"
          width="120">
        </el-table-column>
        <el-table-column
          prop="theme"
          label="对应的预估变更"
          width="300">
        </el-table-column>
        <el-table-column
          prop="changeAttribute"
          label="对应的合同变更"
          width="120">
        </el-table-column>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="210">
        <template slot-scope="scope">
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
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
  name: 'visaChange',
  data() {
    return {
      form: {
        institutionalFramework: '',
        projectTarget: '',
        unit: '',
        antistop: ''
      },
      tableData3: [
        {
          state: '2016-05-07',
          approvalCompleteTime: '2016-05-07',
          textNum: 'CY-SY2-BG-1054',
          theme: '东西区背面2个橱窗侧边开捡修门 土建',
          changeAttribute: '设计变更',
          estimatedAmount: '500.00',
          orderNum: '50'
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
    }
  }
}
</script>

<style scoped>
</style>
