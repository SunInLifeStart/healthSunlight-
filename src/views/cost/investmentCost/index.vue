<template>
  <div class="piecerow_main">
    <div class="piecerow">
      <el-tabs>
        <el-tab-pane label="投模成本" >
          <div>
            <div class="betweenBack"></div>
            <div class="investmentClass">
              <el-form  :model="investmentCost.form" :rules="rules" ref="ruleForm" class="demo-ruleForm" label-width="120px" style="margin: 15px 0 15px 0;">
                <el-row :gutter="20">
                  <el-col :span="6">
                    <el-form-item label="组织机构:" prop="organization">
                      <el-select v-model="investmentCost.form.organization"  clearable size="small" placeholder="请选择">
                        <el-option
                          v-for="organization in organizations"
                          :key="organization.value"
                          :label="organization.label"
                          :value="organization.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="城市名称:">
                      <el-select v-model="investmentCost.form.cityId" clearable size="small" placeholder="请选择">
                        <el-option
                          v-for="city in cities"
                          :key="city.value"
                          :label="city.label"
                          :value="city.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="地块名称:">
                      <el-input v-model="investmentCost.form.landname"  size="small"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="5" :offset="1" class="div-font">
                    <el-button @click="investmentSearch('ruleForm')"  icon="el-icon-search"  size="mini" class="searchBtn">搜索</el-button>
                    <!--<span @click="ifShowDetails = !ifShowDetails">-->
                      <!--<span v-if="!ifShowDetails" style="margin-left: 20px;cursor:pointer;">更多搜索条件</span>-->
                      <!--<span v-if="ifShowDetails" style="margin-left: 20px;cursor:pointer;">关闭搜索条件</span>-->
                      <!--<i v-if="!ifShowDetails" class="el-icon-arrow-right" style="cursor:pointer;"></i>-->
                      <!--<i v-if="ifShowDetails" class="el-icon-arrow-down"  style="cursor:pointer;"></i>-->
                    <!--</span>-->
                  </el-col>
                </el-row>
              </el-form>
            </div>
            <el-row :gutter="20" style="margin-top: 20px;">
              <el-col :span="24">
                  <el-button size="mini" class="btnRight" icon="el-icon-document" type="text" @click="approveCourse" :disabled="approveCourseFlag">审批过程</el-button>
                  <el-button size="mini" class="btnRight" icon="el-icon-delete" type="text" @click="delCost" :disabled="delBtnFlag">删除</el-button>
                  <el-button size="mini" class="btnRight" icon="el-icon-circle-plus-outline" type="text" @click="goVersion({'investmentcostid' : 1})" :disabled="addVersion">新增版本</el-button>
                  <el-button size="mini" class="btnRight" icon="el-icon-circle-plus-outline" type="text" @click="addCost" :disabled="investmentCost.form.organization=='' || investmentCost.form.cityId==''">新增</el-button>
              </el-col>
            </el-row>
            <el-table
              :data="investmentCost.costHomePageData"
              border
              size="small"
              style="width: 98%;margin-left: 1%"
              @current-change="handleCurrentChange"
              highlight-current-row
              :default-sort = "{prop: 'approvedate', order: 'descending'}"
              @row-dblclick="goVersion"
              :row-class-name="tableRowClassName"
              :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
              :header-cell-style="{background:'#efefe0', 'text-align': 'center', color: '#a08e6e',fontSize:'13px',padding:'3px 0',fontWeight:'500'}"
            >
              <el-table-column
                type="index"
                width="100"
                align="center"
                label="序号">
              </el-table-column>
              <el-table-column
                prop="approvedstate"
                align="center"
                :show-overflow-tooltip="true"
                label="状态">
              </el-table-column>
              <el-table-column
                prop="approvedate"
                align="center"
                :show-overflow-tooltip="true"
                width="200"
                sortable
                label="审批时间">
              </el-table-column>
              <el-table-column
                prop="cityid"
                align="center"
                :show-overflow-tooltip="true"
                label="城市">
              </el-table-column>
              <el-table-column
                prop="area"
                width="100"
                align="center"
                :show-overflow-tooltip="true"
                label="区域">
              </el-table-column>
              <el-table-column
                prop="landcode"
                align="center"
                :show-overflow-tooltip="true"
                label="地块编号">
              </el-table-column>
              <el-table-column
                prop="landname"
                :show-overflow-tooltip="true"
                align="center"
                label="地块名称">
              </el-table-column>
              <el-table-column
                prop="planname"
                :show-overflow-tooltip="true"
                width="100"
                align="center"
                label="方案名称">
              </el-table-column>
              <el-table-column
                prop="landarea"
                align="center"
                :show-overflow-tooltip="true"
                label="地块面积">
              </el-table-column>
              <el-table-column
                prop="costamt"
                align="right"
                :show-overflow-tooltip="true"
                label="金额">
              </el-table-column>
              <el-table-column
                prop="landarea"
                align="center"
                width="150"
                :show-overflow-tooltip="true"
                label="管理口径单方">
              </el-table-column>
              <el-table-column
                prop="costamt"
                align="center"
                width="100"
                :show-overflow-tooltip="true"
                label="财务口径单方">
              </el-table-column>
              <el-table-column
                prop="createuserid"
                align="center"
                :show-overflow-tooltip="true"
                label="经办人">
              </el-table-column>
              <el-table-column
                prop="versionremark"
                align="center"
                :show-overflow-tooltip="true"
                label="版本">
              </el-table-column>
              <el-table-column
                prop="remark"
                align="center"
                :show-overflow-tooltip="true"
                label="说明">
              </el-table-column>
            </el-table>
              <el-pagination
                small
                class="paginate"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[20]"
                :page-size="100"
                background
                layout="total, sizes, prev, pager, next"
                :total="400">
              </el-pagination>
            <div class="el-alert--success reminderBorder">
              <span class="reminder">总数 </span><span class="reminderNum"> {{investmentCost.costHomePageData.length}}</span>
              <span class="reminder">总价 </span><span class="reminderNum"> {{investmentCost.costamtTotal | currency(2,',')}}</span>
              <span class="reminder">总面积 </span><span class="reminderNum">{{investmentCost.landareaTotal | currency}}</span>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="模板管理" disabled>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['investmentCost'])
    },
    data() {
      return {
        // 规则
        rules: {
          organization: [
            { required: true, message: '请选择组织机构', trigger: 'change' }
          ]
        },
        currentPage: 1,
        organizations: [{
          value: '选项2',
          label: '杭州龙湖'
        }, {
          value: '选项3',
          label: '集团总部'
        }, {
          value: '选项4',
          label: '上海龙湖'
        }],
        cities: [{
          value: '选项2',
          label: '所有'
        }, {
          value: '选项3',
          label: '嘉兴'
        }, {
          value: '选项4',
          label: '绍兴'
        }],
        approveCourseFlag: true, // 审批过程
        delBtnFlag: true, // 删除
        addVersion: true
      }
    },
    methods: {
      ...mapActions(['GetHomePage', 'AddCostVersion']),
      // 隔行背景色
      tableRowClassName({ row, rowIndex }) {
        if (rowIndex % 2 === 1) {
          return 'interleave_row'
        }
        return ''
      },
      // 页面跳转
      goVersion(row, event) {
        window.open(window.origin + '/#/investmentCost/detail/' + row.cityid, '_blank')
      },
      handleSizeChange(val) {
      },
      // 按钮disabled校验
      handleCurrentChange(value) {
        if (value.approvedstate === '草稿状态') {
          this.approveCourseFlag = false
          this.delBtnFlag = true
          this.addVersion = true
        } else if (value.approvedstate === '草稿' || value.approvedstate === '驳回') {
          this.approveCourseFlag = true
          this.delBtnFlag = false
          this.addVersion = true
        } else if (value.approvedstate === '已审批') {
          this.approveCourseFlag = true
          this.delBtnFlag = true
          this.addVersion = false
        }
      },
      // 查询
      investmentSearch(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.GetHomePage({ 'searchInvestment': this.investmentCost.form }).then(() => {
              if (this.investmentCost.costHomePageData.length > 0) {
                this.$message({
                  message: '查询成功',
                  type: 'success'
                })
              } else {
                this.$message({
                  message: '查询失败',
                  type: 'error'
                })
              }
            })
          } else {
            return false
          }
        })
      },
      // 新增
      addCost() {
      },
      // 删除
      delCost() {
      },
      // 审批
      approveCourse() {
      }
    }
  }
</script>
<style>
  .el-pagination.is-background .el-pager li.active{
    background-color: #4B627D;
  }
</style>
<style scoped>
  /**
    校验文字位置调整
  */
  .investmentClass >>> .el-form-item__error{
    top: 90%;
  }
  /**
    标题的背景色，和高度
  */
  .piecerow >>> .el-tabs__item.is-active{
    color:#7986a9;
  }
  .piecerow >>> .el-tabs__active-bar{
    background-color: #7986a9;
  }
  .piecerow >>> .el-tabs__item.is-active:hover{
    color: #7986a9;
  }
  .piecerow >>> .el-tabs__nav{
    margin-left: 10px;
  }
  .piecerow >>> .el-tabs__header{
    margin: 0;
  }
  /**
  分隔线
  */
  .betweenBack{
    height: 10px;
    background-color: #edf2f7;
  }
  .piecerow {
    background-color:white;
    margin-bottom: 10px;
    border-radius: 4px;
    color: #333;
    font-size: 14px;
  }
  .piecerow_main {
    background-color:#edf2f7;
    padding: 10px 10px 0 10px;
  }
  /**
    分页位置样式
   */
  .paginate{
    float: right;
    margin-top: 20px;
    margin-right: 10px;
    margin-bottom: 30px;
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
    font-size: 13px;
    border: 1px solid #D5D5D5;
    border-left-style: none;
    border-top-style: none;
    border-right-style: none;
    box-shadow: 0 2px 3px rgba(0,0,0,0.2);
  }
  /**
    总和提示信息样式
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
  /**
    按钮右浮动
   */
  .btnRight{
    float: right;
    margin-right: 1%;
  }
</style>
<style>
  .el-table .interleave_row {
    background: #F5F7FA;
  }
</style>
