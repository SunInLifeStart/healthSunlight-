<template>
  <div>
      <!-- 查询条件 -->
      <div class="investmentClass">
          <el-form  label-width="120px">
            <el-row :gutter="0">
              <el-col :span="5">
                <el-form-item label="组织机构:">
                  <el-select v-model="keywords.organization"  size="small" placeholder="请选择">
                    <el-option
                      v-for="organization in organizations"
                      :key="organization.code"
                      :label="organization.value"
                      :value="organization.code">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="项目分期:">
                  <el-select v-model="keywords.project"  size="small" placeholder="请选择">
                    <el-option
                      v-for="project in projects"
                      :key="project.code"
                      :label="project.value"
                      :value="project.code">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="关键词:">
                      <el-input v-model="keywords.word"  size="small" placeholder="清输入"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="4"  class="div-font">
                <el-button-group style="margin-top: 4px;margin-left: 4px;">
                  <el-button size="small" @click="findChanges" icon="el-icon-search" ></el-button>
                  <el-button size="small" @click="showAdvancedSearch = !showAdvancedSearch">高级</el-button>
                </el-button-group>
              </el-col>
            </el-row>
             <!-- 高级查询条件 -->
            <div v-if="showAdvancedSearch">
                 <el-row>
                    <el-col :span="5">
                      <el-form-item label="状态:">
                        <el-select v-model="keywords.state" size="small" collapse-tags multiple placeholder="请选择">
                          <el-option
                            v-for="state in states"
                            :key="state.code"
                            :label="state.value"
                            :value="state.code">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="部门:">
                        <el-select v-model="keywords.department" size="small" placeholder="请选择">
                          <el-option
                            v-for="department in departments"
                            :key="department.code"
                            :label="department.value"
                            :value="department.code">
                          </el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
               </el-row>
                <!-- 多条件精确查询 -->
              <el-row>
                 <el-col :span="15">
                    <template v-for="accurate in keywords.accurates">
                        <el-row>
                          <el-col :span="8">
                            <el-form-item label="列名:">
                              <el-select v-model="accurate.columnName"  @change="changeColumnName"  size="small" filterable placeholder="请选择">
                                <el-option
                                  v-for="columnName in columnNames"
                                  :key="columnName.code"
                                  :label="columnName.value"
                                  :value="columnName.code"
                                  :disabled="columnName.disabled">
                                </el-option>
                              </el-select>
                            </el-form-item>
                          </el-col>
                          <el-col :span="8">
                            <el-form-item label="条件:">
                              <el-select v-model="accurate.condtion" size="small" filterable placeholder="请选择">
                                <el-option
                                  v-for="condtion in condtions"
                                  :key="condtion.code"
                                  :label="condtion.value"
                                  :value="condtion.code">
                                </el-option>
                              </el-select>
                            </el-form-item>
                          </el-col>
                          <el-col :span="8">
                            <el-form-item label="内容:">
                              <el-input v-model="accurate.content" size="small" placeholder="请出入内容"></el-input>
                            </el-form-item>
                          </el-col>
                        </el-row>
                    </template>
                  </el-col>
                  <el-col :span="5"  style="margin-top: 4px;margin-left: 10px;">
                    <el-button style="background-color: #46A0FC;" type="primary" size="small" icon="el-icon-circle-plus-outline" @click="addAccurate"></el-button>
                    <el-button v-show="keywords.accurates.length!=1" type="danger" size="small" icon="el-icon-remove-outline" @click="delAccurate"></el-button>
                  </el-col>
              </el-row>
            </div>
          </el-form>
      </div>
        <!-- 底部汇总信息展示 -->
       <div class="el-alert--success reminderBorder">
          <span class="reminder">合同数 </span><span class="reminderNum"> {{statistical.contractNumber | currency(2,',')}}</span>
          <span class="reminder">有效签约金额 </span><span class="reminderNum">{{statistical.effectiveContract}}</span>
          <span class="reminder">累计变更金额 </span><span class="reminderNum">{{statistical.cumulativeChange}}</span>
          <span class="reminder">预估变更金额 </span><span class="reminderNum">{{statistical.forecastChanges}}</span>
          <span class="reminder">已付款金额 </span><span class="reminderNum">{{statistical.paymentHasBeen}}</span>
      </div>
         <!-- 台账列表 -->
       <el-row :gutter="20" style="margin-top: 20px;">
          <el-col :span="24">
              <el-button size="mini" class="btnRight" icon="el-icon-document" type="text" >导出</el-button>
              <el-button size="mini" @click="newVisa" class="btnRight" icon="el-icon-circle-plus-outline" type="text" >新增</el-button>
          </el-col>
       </el-row>
        <el-table
            border
            size="small"
            :default-sort="{prop: 'approvalStatus', order: 'descending'}"
            :data="changes"
            @row-dblclick="goVisaDetail($event)"
            :row-class-name="tableRowClassName"
            :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
            :header-cell-style="{background:'#efefe0', 'text-align': 'center', color: '#a08e6e',fontSize:'13px',padding:'3px 0',fontWeight:'500'}">
          <el-table-column type="index" fixed="left" label="序号"   width="50"></el-table-column>
          <!-- <el-table-column prop="state" fixed="left" label="合同变更" width="80"></el-table-column> -->
          <el-table-column prop="state" fixed="left" label="状态" width="80"></el-table-column>
          <el-table-column label="变更签证信息" fixed="left"  align="center" width="560" >
              <el-table-column prop="textNum"  label="文档编号"  width="140">
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="goVisaDetail(scope.row.id)">{{scope.row.textNum}}</el-button>
                  </template>
              </el-table-column>
              <el-table-column prop="theme"  label="主题" width="150"></el-table-column>
              <el-table-column prop="estimatedAmount"  label="预估金额" width="90"></el-table-column>
              <el-table-column prop="changeAttribute"  label="变更类型" width="80"></el-table-column>
              <el-table-column prop="approvalCompleteTime"  label="审批完成时间" width="100"></el-table-column>
          </el-table-column>
          <el-table-column label="下发单信息" align="center">
          <el-table-column prop="textNum" label="下发单编号" width="140">
            <template slot-scope="scope">
                  <div v-for="issued in scope.row.issueds" style="border-bottom: 1px solid #EBEEF5;">
                    {{issued.num}}
                  </div>
            </template>
            <!-- <template slot-scope="scope">
              <el-button type="text" size="small" @click="goVisaDetail(scope.row.id)">{{scope.row.textNum}}</el-button>
            </template> -->
          </el-table-column>
          <el-table-column prop="theme" label="合同名称" width="150"></el-table-column>
          <el-table-column prop="changeAttribute" label="是否完工确认" width="100"></el-table-column>
          </el-table-column>
          <el-table-column align="center" label="结转信息">
          <el-table-column prop="textNum" label="结转金额" width="120"></el-table-column>
          <el-table-column prop="theme" label="对应的预估变更" width="150"></el-table-column>
          <el-table-column prop="changeAttribute" label="对应的合同变更" width="100"></el-table-column>
          </el-table-column>
          <el-table-column prop="operation" label="操作" width="200"    fixed="right">
            <template slot-scope="scope" class="row">
              <!-- <el-button
                plain
                @click="goConfirm"
                type="success"
                size="small">
                完工确认
              </el-button> -->
              <el-button
                plain
                @click=""
                size="mini">
                删除
              </el-button>
              <el-button
                plain
                @click=""
                size="mini" >
                发起审批
              </el-button>
            </template>
          </el-table-column>
       </el-table>
      <!-- 分页 -->
       <div v-show="this.changes.length>1">
           <el-pagination
                style=""
                small
                class="paginate"
                :page-sizes="[10,20,30]"
                :page-size="100"
                background
                @size-change="pageSizeChange"
                @current-change="goPage"
                layout="total, sizes, prev, pager, next"
                :total="1000">
            </el-pagination>
      </div>
   </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'visaChange',
  data() {
    return {
        //  查询条件
      keywords: {
        pageSize: '10', // 每页记录条数
        pageNum: '1', // 页数
        organization: '', // 组织机构
        project: '', // 项目分期
        word: '', // 关键词

        agent: '1', // 经办人
        state: '', // 状态--审批状态
        department: '', // 部门
        contractItem: '', // 合同类别
        accurates: [
          {
            columnName: '', // 列名
            condtion: '', // 条件
            content: ''// 内容
          }
        ]
      },
         // -------模拟数据------
        // 条件
      condtions: [
          { code: '>', value: '大于' },
          { code: '<', value: '小于' },
          { code: '=', value: '等于' },
          { code: '>=', value: '大于等于' },
          { code: '<=', value: '小于等于' },
          { code: 'like%', value: '模糊' }
      ],

        // 列名
      columnNames: [
        { code: 'CONTRACTAMT', value: '有效签约金额', disabled: false },
        { code: 'CONTRACTVOAMT', value: '累计变更金额', disabled: false },
        { code: 'ESTIMATEVOAMT', value: '预估变更金额', disabled: false },
        { code: 'DOCAMT', value: '已申请金额', disabled: false },
        { code: 'PAYMENTAMT', value: '已付款金额', disabled: false },
        { code: 'CONTRACTSUM', value: '合同总额', disabled: false },
        { code: 'RESERVEDBALANCE', value: '预留金余额', disabled: false },
        { code: 'INCHARGESBYID', value: '经办人', disabled: false },
        { code: 'TENDERTYPE', value: '形成方式', disabled: false },
        { code: 'CONTRACTNO', value: '合同编号', disabled: false },
        { code: 'VALUATIONMODE', value: '计价模式', disabled: false },
        { code: 'SIGNINGDATE', value: '签约日期', disabled: false },
        { code: 'SIGNOFFDATE', value: '结算日期', disabled: false },
        { code: 'SUPPLIERNAME', value: '供方单位', disabled: false }
      ],
        // 合同类别
      contractItems: [
        { code: '01', value: '合同类别1' },
        { code: '02', value: '合同类别2' },
        { code: '03', value: '合同类别3' }
      ],
      // 状态
      states: [
        { code: '01', value: '草稿' },
        { code: '02', value: '已驳回' },
        { code: '03', value: '审批中' },
        { code: '04', value: '已审批' }
      ],
         // 部门
      departments: [
        { code: '01', value: '部门1' },
        { code: '02', value: '部门2' },
        { code: '03', value: '部门3' }
      ],
      // 项目分期
      projects: [
        { code: '01', value: '项目分期1' },
        { code: '02', value: '项目分期2' }
      ],
      // 组织机构
      organizations: [
       { code: '01', value: '组织机构1' },
       { code: '02', value: '组织机构2' }
      ],

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
      changes: [],
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
    ...mapActions([
      'FindChanges'
    ]),
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    newVisa() {
      this.$router.push({ name: '新增签证' })
    },
    goVisaDetail(obj) {
      // 对于“草稿”状态，进入的是编辑页面，对于其他状态，进入查看页面，各要素只读
      // var keyword = {}(obj.state === '草稿') ? keyword.disabled = false : keyword.disabled = true
      this.$router.push({ name: '签证详情', params: { obj }})
    },
    goConfirm() {
      this.$router.push({ name: '完工确认' })
    },
    handleSelectionChange() {
      console.log('123')
    },
    pageSizeChange(val) {
      this.keywords.pageSize = val// 每页记录条数
      this.findChanges()
    },
    // 选择页码
    goPage(val) {
      this.keywords.pageNum = val// 页数
      this.findChanges()
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 3) {
        return 'selected'
      }
      return ''
    },
      // 查询变更签证列表
    findChanges() {
      this.FindChanges(this.keywords).then((data) => {
        this.changes = data.data
        console.log(this.changes)
      })
    },
       // 禁止已经选择的列名
    changeColumnName() {
      // 先将下拉数据全部设置为展示
      this.columnNames.forEach(obj => {
        obj.disabled = false
      }
         )
      // 判断哪些已展示，然后禁用
      this.keywords.accurates.forEach(obj => {
        this.columnNames.forEach(obj1 => {
          if (obj.columnName === obj1.code) {
            obj1.disabled = true
          }
        }
        )
      })
    },
    addAccurate() {
      var obj = {
        columnName: '',
        condtion: '',
        content: ''
      }
      this.keywords.accurates.push(obj)
    },
    delAccurate() {
      if (this.keywords.accurates.length > 1) {
        this.keywords.accurates.pop()
        // 更新一下下拉禁用项目
        this.changeColumnName()
      }
    }
  }
}
</script>

<style scoped>
  /**
    分页位置样式
   */
  .paginate{
    float: right;
    margin-top: 20px;
    margin-right: 10px;
  }
  .el-col-18{
    margin-top: -20px;
  }
  /**
    搜索按钮样式
   */
  .searchBtn{
    margin-top: 5px;
    background-color: #7986a9;
    color: white;
  }
  /**
    form样式
   */
  .el-form-item{
    margin-bottom: 0;
  }
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
  .btnRight{
    float: right;
    margin-right: 1%;
  }
   .el-table .interleave_row {
    background: #F5F7FA;
  }

  .el-table .success-row {
    background: #FAECD7;
  }
</style>
