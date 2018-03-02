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
            <el-input type="text" v-model="form.institutionalFramework"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="项目分期">
            <el-input type="text" v-model="form.projectTarget"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="关键词">
            <el-input v-model="form.contactName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button-group>
            <el-button icon="el-icon-search" ></el-button>
            <el-button @click="showAdvancedSearch = !showAdvancedSearch">高级</el-button>
          </el-button-group>
        </el-col>
      </el-row>
      <el-row :gutter="20" v-if="showAdvancedSearch">
        <el-col :span="6">
          <el-form-item label="状态">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="部门">
            <el-input v-model="form.ourUnit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="列名">
            <el-input v-model="form.ourUnit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="条件">
            <el-input v-model="form.ourUnit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="内容">
            <el-input v-model="form.transactionDepartment"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-table :data="tableData3" style="width: 100%;height=250"  @row-dblclick="goVisaBillingSearch($event.id)">
      <el-table-column type="index" fixed="left" label="序号"   width="50"></el-table-column>
      <el-table-column prop="state" fixed="left" label="合同变更" width="80"></el-table-column>
      <el-table-column prop="state" fixed="left" label="状态" width="50"></el-table-column>
      <el-table-column label="变更签证信息"  align="center" >
        <el-table-column prop="textNum" fixed="left" label="文档编号"  width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="goVisaBillingSearch(scope.row.id)">{{scope.row.textNum}}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="theme" fixed="left" label="主体" width="200"></el-table-column>
        <el-table-column prop="changeAttribute" fixed="left" label="变更类型" width="80"></el-table-column>
        <el-table-column prop="approvalCompleteTime" fixed="left" label="审批完成时间" width="100"></el-table-column>
        <el-table-column prop="estimatedAmount"  fixed="left" label="预估金额" width="120"></el-table-column>
      </el-table-column>
      <el-table-column label="下发单信息" align="center">
        <el-table-column prop="textNum" label="下发单编号" width="120"></el-table-column>
        <el-table-column prop="theme" label="合同名称" width="300"></el-table-column>
        <el-table-column prop="changeAttribute" label="是否完工确认" width="120"></el-table-column>
      </el-table-column>
      <el-table-column align="center" label="结转信息">
        <el-table-column prop="textNum" label="结转金额" width="120"></el-table-column>
        <el-table-column prop="theme" label="对应的预估变更" width="300"></el-table-column>
        <el-table-column prop="changeAttribute" label="对应的合同变更" width="120"></el-table-column>
      </el-table-column>
      <el-table-column prop="operation" label="操作" width="150"    fixed="right">
        <template slot-scope="scope" class="row">
          <el-button
            plain
            @click="goConfirm"
            type="success"
            size="small">
            完工确认
          </el-button>
          <el-button
            plain
            @click=""
            type="success"
            size="small">
            删除|发起审批
          </el-button>
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
    <el-row :data="statistical">
      <el-col :span="4">合同数:{{statistical.contractNumber}}</el-col>
      <el-col :span="4">有效签约金额:{{statistical.effectiveContract}}</el-col>
      <el-col :span="4">累计变更金额:{{statistical.cumulativeChange}}</el-col>
      <el-col :span="4">预估变更金额:{{statistical.forecastChanges}}</el-col>
      <el-col :span="4">已付款金额:{{statistical.paymentHasBeen}}</el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'visaChange',
    data() {
      return {
        showAdvancedSearch: false,
        value: '',
        options: [{
          value: '01',
          label: '状态1'
        }, {
          value: '02',
          label: '状态2'
        }, {
          value: '03',
          label: '状态3'
        }],
        form: {
          institutionalFramework: '',
          projectTarget: '',
          antistop: ''
        },
        tableData3: [
          {
            id: '123',
            state: '2016-05-07',
            approvalCompleteTime: '2016-05-07',
            textNum: 'CY-SY2-BG-1054',
            theme: '东西区背面2个橱窗侧边开捡修门 土建',
            changeAttribute: '设计变更',
            estimatedAmount: '500.00',
            orderNum: '50'
          },
          {
            id: '123',
            state: '2016-05-07',
            approvalCompleteTime: '2016-05-07',
            textNum: 'CY-SY2-BG-1054',
            theme: '东西区背面2个橱窗侧边开捡修门 土建',
            changeAttribute: '设计变更',
            estimatedAmount: '500.00',
            orderNum: '50'
          },
          {
            id: '123',
            state: '2016-05-07',
            approvalCompleteTime: '2016-05-07',
            textNum: 'CY-SY2-BG-1054',
            theme: '东西区背面2个橱窗侧边开捡修门 土建',
            changeAttribute: '设计变更',
            estimatedAmount: '500.00',
            orderNum: '50'
          }
        ],
        currentPage3: 5,
        statistical: {
          contractNumber: '1223',
          effectiveContract: '20160507',
          cumulativeChange: '20160507',
          forecastChanges: '4441054',
          paymentHasBeen: '888888'
        }
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      },
      goVisaBillingSearch(id) {
        console.log(id)
        this.$router.push({ name: '签证下发单查看', params: { id }})
      },
      goConfirm() {
        this.$router.push({ name: '完工确认' })
      },
      handleSelectionChange() {
        console.log('123')
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
