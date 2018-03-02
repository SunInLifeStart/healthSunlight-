<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-row :gutter="5">
        <el-col :span="6">
          <el-form-item label="组织机构">
            <el-select v-model="form.organization">
              <el-option v-for="organization in user.organizations" :label="organization" :value="organization" :key="organization"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="项目分期">
            <el-select v-model="form.project">
              <el-option label="类别1" value="001"></el-option>
              <el-option label="类别2" value="002"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="关键词">
            <el-select v-model="form.contactName" filterable placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <!--<el-select v-model="form.contactName">-->
              <!--<el-option label="龙湖1" value="001"></el-option>-->
              <!--<el-option label="龙湖2" value="002"></el-option>-->
            <!--</el-select>-->
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button-group>
            <el-button icon="el-icon-search" @click="findContracts"></el-button>
            <el-button @click="showAdvancedSearch = !showAdvancedSearch">高级</el-button>
            <el-button>导出</el-button>
          </el-button-group>
        </el-col>
      </el-row>
      <el-row :gutter="10" v-if="showAdvancedSearch">
        <el-col :span="6">
          <el-form-item label="状态">
            <el-select
              v-model="form.screen"
              multiple
              collapse-tags
              placeholder="请选择">
              <el-option
                v-for="item in form.screens"
                :key="item"
                :label="item"
                :value="item">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="结算状态">
            <el-select v-model="form.contractNum" filterable placeholder="请选择">
              <el-option
                v-for="item in form.contractNums"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="合同类别">
            <el-select v-model="form.contractTypeId" filterable placeholder="请选择">
              <el-option
                v-for="item in form.contractTypeIds"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="" label-width="8px">
            <el-radio v-model="radio" label="1">我经办的</el-radio>
            <el-radio v-model="radio" label="2">全部</el-radio>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="10" v-if="showAdvancedSearch">
        <el-col :span="18">
          <template v-for="item in form.addConditions">
            <el-row :gutter="10">
              <el-col :span="8">
                <el-form-item label="列名">
                  <el-select v-model="item.columnName" filterable placeholder="请选择">
                    <el-option
                      v-for="item in form.responsiblePersons"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="条件">
                  <el-select v-model="item.condtion" filterable placeholder="请选择">
                    <el-option
                      v-for="item in form.ourUnits"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="内容">
                  <el-input v-model="item.content"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </template>

        </el-col>
        <el-col :span="6">
          <el-button @click="addCondition">新增条件</el-button>
        </el-col>
      </el-row>
    </el-form>

    <div class="el-alert el-alert--success is-center" v-if="$contract.pagination.total>0">
      合同数:【{{$contract.pagination.total}}】 有效签约金额:【3,036,464,000】 累计变更金额:【20,631.13】 预估变更金额:【141,509.43】 已付款金额:【3,036,464,000】
    </div>

    <el-table
      stripe
      height="520"
      highlight-current-row
      :default-sort="{prop: 'approvalStatus', order: 'descending'}"
      :data="$contract.contracts"
      :row-class-name="tableRowClassName"
      @row-dblclick="showContract($event.contractId)"
      v-loading="$contract.isFetchingContracts">
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column sortable prop="entiId" label="审批状态" width="102"></el-table-column>
      <el-table-column sortable prop="pointState" label="结算状态" width="102"></el-table-column>
      <el-table-column sortable prop="projectName" label="项目名称" width="140"></el-table-column>
      <el-table-column prop="contractName" label="合同名称" width="200">
        <template slot-scope="scope">
          <el-button type="text" @click="showContract(scope.row.contractId)">{{scope.row.contractName}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="contractAmt" label="有效签约金额" width="120"></el-table-column>
      <el-table-column prop="ContentPlaceHolderxGridExpensePlan_1" label="累计变更金额" width="120"></el-table-column>
      <el-table-column prop="ContentPlaceHolderxGridExpensePlan_2" label="预估变更金额" width="120"></el-table-column>
      <el-table-column prop="ContentPlaceHolderxGridExpensePlan_3" label="已申请金额" width="100"></el-table-column>
      <el-table-column prop="ContentPlaceHolderxGridExpensePlan_4" label="已付款金额" width="100"></el-table-column>
      <el-table-column prop="ContentPlaceHolderxGridExpensePlan_5" label="付款比例" width="80"></el-table-column>
      <el-table-column prop="contractSumamt" label="合同总额" width="80"></el-table-column>
      <el-table-column prop="reserveAmt" label="预留金余额" width="96"></el-table-column>
      <el-table-column prop="inchargesbyId" label="经办人" width="80"></el-table-column>
      <el-table-column prop="contractTypeId" label="合同类别" width="80"></el-table-column>
      <el-table-column prop="tenderType" label="形成方式" width="80"></el-table-column>
      <el-table-column prop="contractNo" label="合同编号" width="80"></el-table-column>
      <el-table-column prop="valuationmode" label="计价模式" width="80"></el-table-column>
      <el-table-column prop="signingate" label="签约日期" width="96"></el-table-column>
      <el-table-column prop="singoffdate" label="结算日期" width="88"></el-table-column>
      <el-table-column prop="signoffamt" label="结算金额" width="96"></el-table-column>
      <el-table-column prop="supplycompany" label="供方单位" width="180"></el-table-column>

      <!--<el-table-column label="操作" width="240">-->
        <!--<template slot-scope="scope">-->
          <!--<el-button-->
            <!--plain-->
            <!--@click="showContract(scope.row.contractId)"-->
            <!--type="primary"-->
            <!--size="small">-->
            <!--详情-->
          <!--</el-button>-->
          <!--<el-button-->
            <!--plain-->
            <!--@click="showPayments(scope.row.id)"-->
            <!--type="info"-->
            <!--size="small">-->
            <!--付款-->
          <!--</el-button>-->
          <!--<el-button-->
            <!--plain-->
            <!--@click="showChanges(scope.row.id)"-->
            <!--type="info"-->
            <!--size="small">-->
            <!--预估变更-->
          <!--</el-button>-->
        <!--</template>-->
      <!--</el-table-column>-->
    </el-table>

    <div style="text-align:right; padding:32px 8px" v-if="$contract.pagination.total>$contract.pagination.pageSize">
      <el-pagination
        @size-change="handleSizeChange"
        :current-page="$contract.pagination.pageIndex"
        :page-sizes="[10, 20, 50, 100, 200]"
        :page-size="$contract.pagination.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="$contract.pagination.total">
      </el-pagination>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      showAdvancedSearch: false,
      radio: '1',
      form: {
        organization: '',
        contactName: '',
        project: '',
        contractNum: '',
        contractTypeId: '',
        addConditions: [{
          columnName: '',
          condtion: '',
          content: ''
        }],
        contractTypeIds: [{
          value: '选项1',
          label: '合同1'
        }, {
          value: '选项2',
          label: '合同2'
        }],
        contractNums: [{
          value: '选项1',
          label: '所有'
        }, {
          value: '选项2',
          label: '已结算'
        }, {
          value: '选项3',
          label: '未结算'
        }],
        statusAccounting: '',
        screen: [],
        screens: ['草稿', '已驳回', '审批中', '已审批'],
        freeTo: '',
        responsiblePerson: '',
        responsiblePersons: [{
          value: '选项1',
          label: '审批状态'
        }, {
          value: '选项2',
          label: '项目名称'
        }],
        transactionDepartment: '',
        dateSigning: '',
        ourUnit: '',
        ourUnits: [
          {
            value: '选项1',
            label: '大于'
          }, {
            value: '选项2',
            label: '大于等于'
          }, {
            value: '选项3',
            label: '等于'
          }, {
            value: '选项4',
            label: '小于等于'
          }, {
            value: '选项5',
            label: '小于'
          }
        ],
        supplierUnit: ''
      },
      options: [{
        value: '选项1',
        label: '龙湖1'
      }, {
        value: '选项2',
        label: '龙湖2'
      }, {
        value: '选项3',
        label: '龙湖3'
      }, {
        value: '选项4',
        label: '龙湖4'
      }, {
        value: '选项5',
        label: '龙湖5'
      }]
    }
  },
  computed: {
    ...mapGetters(['$contract', 'user'])
  },
  created() {
  },
  methods: {
    ...mapActions([
      'FindContracts'
    ]),
    findContracts() {
      if (this.form.organization === '') {
        this.$alert('组织机构不能为空！', '提示', {
          confirmButtonText: '确定',
          callback: action => {
          }
        })
      } else {
        this.FindContracts(this.form)
      }
    },
    showContract(id) {
      this.$router.push({ name: '合同信息', params: { id }})
    },
    showPayments(id) {
      this.$router.push({ name: '合同付款', params: { id }})
    },
    showChanges(id) {
      this.$router.push({ name: '预估变更', params: { id }})
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 3) {
        return 'selected'
      }
      return ''
    },
    addCondition() {
      var obj = {
        columnName: '',
        condtion: '',
        content: ''
      }
      this.form.addConditions.push(obj)
    }
  }
}
</script>

<style scoped>

</style>
