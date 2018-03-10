<template>
  <div>
    <div>
      <el-row>
        <el-col :span="24">
          <el-col :span="17"></el-col>
           <el-col :span="1"> <el-button size="mini">更新</el-button></el-col>
          <el-col :span="1"> <el-button size="mini">暂存</el-button></el-col>
          <el-col :span="1"> <el-button size="mini">上报</el-button></el-col>
          <el-col :span="1"> <el-button size="mini">撤回</el-button></el-col>
           <el-col :span="1"> <p>{{budgetReport.status}}</p></el-col>
        </el-col>
      </el-row>
      <el-form  :model="keyword" label-width="120px">
      <el-row :gutter="5">
        <el-col :span="6">
          <el-form-item label="项目">
            <el-select v-model="keyword.project">
               <el-option label="项目1" value="001"></el-option>
              <el-option label="项目2" value="002"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="职能分类">
            <el-select v-model="keyword.functional">
              <el-option label="职能分类1" value="001"></el-option>
              <el-option label="职能分类2" value="002"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="关键字">
            <el-input v-model="keyword.word" placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button-group>
            <el-button icon="el-icon-search" ></el-button>
          </el-button-group>
        </el-col>
      </el-row>
    </el-form>
    </div>
    <el-table :data="budgetReport.list" height="250" size="small" border style="width: 100%">
      <el-table-column prop="manipulate" label="操作">
         <template slot-scope="scope">
          <el-button
            plain
            type="primary"
            size="mini">
            操作1
          </el-button>
        </template>
      </el-table-column>
      <el-table-column width="50" type="index" label="序号"></el-table-column>
      <el-table-column prop="project" label="项目名称"></el-table-column>
        <el-table-column prop="project" label="职能分类"></el-table-column>
         <el-table-column prop="contractNo" label="合同编号"></el-table-column>
         <el-table-column prop="contracts" label="合同"></el-table-column>
      <el-table-column prop="paymentCoding" label="付款编码"></el-table-column>
      <el-table-column prop="opposite" label="对方单位"></el-table-column>
      <el-table-column prop="responsible" label="责任人"></el-table-column>
      <el-table-column prop="monthlyPayment" label="本月计划付款金额" width="180"></el-table-column>
      <el-table-column prop="monthlyPayment" label="本月确认付款金额" width="180"></el-table-column>
      <el-table-column prop="monthlyPayment" label="截止本期累计付款金额" width="180"></el-table-column>
      <el-table-column prop="monthlyPayment" label="合同/预算/结算金额" width="180"></el-table-column>
      <el-table-column prop="monthlyPayment" label="付款比例" width="180"></el-table-column>
       <el-table-column prop="monthlyPayment" label="付款阶段" width="180"></el-table-column>
      <el-table-column prop="monthlyPayment" label="单项工程竣备日期" width="180"></el-table-column>
      <el-table-column prop="monthlyPayment" label="合同约定付款条件" width="180"></el-table-column>
      <el-table-column prop="remarks" label="备注" width="180"></el-table-column>
    </el-table>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        showAdvancedSearch: false,
        keyword: {
          word: '',
          functional: '',
          project: ''
        },
        project: '',
        budgetReport: {
          project: '',
          opposite: '',
          department: '',
          status: '未上报',
          list: [{
            manipulate: '',
            project: '北京龙湖',
            department: '北京',
            functionCost: '龙湖',
            contractNo: 'NS250010200',
            contracts: '顺北sss',
            paymentCoding: 'pay123ws22',
            opposite: 'MJZKR',
            responsible: 'asdaw',
            monthlyPayment: '10000'
          }]
        }
      }
    }
  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 4px;
    margin-top: 8px;
  }

  .div-font {
    padding-top: 8px;
    font-size: 14px;
  }

</style>
