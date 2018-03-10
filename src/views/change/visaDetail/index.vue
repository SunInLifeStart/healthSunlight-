<template>
  <div class="piecerow_main">
      <!-- 操作行 -->
      <div class="operation">
         <el-row :gutter="20" style=" margin-left: -10px;  margin-right: 0px;  margin-top: 7px;">
          <el-col :span="24">
              <el-button size="mini" class="btnRight" icon="el-icon-document" type="text" >导出下发单</el-button>
              <el-button size="mini" class="btnRight" icon="el-icon-document" type="text" >下发</el-button>
          </el-col>
         </el-row>
      </div>
      <div class="piecerow">
           <!--基本信息-->
         <div>
           <div style="background-color: #EEF2F6">
             <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #e9e9e9;background-color: #FFFFFF;border-top-left-radius: 4px;border-top-right-radius: 4px"
                  @click="basicInfo = !basicInfo">
                <el-row>
                  <el-col :span="11" style="margin-left: 1%">
                    <span style="border-left: 2px solid #7986A9"></span>
                    <span class="dev1_font">基本信息</span>
                  </el-col>
                  <el-col :span="12" style="text-align: right;margin-left: 2%">
                    <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="basicInfo"></i>
                    <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!basicInfo"></i>
                  </el-col>
                </el-row>
            </div>
          </div>
          <div  v-show="basicInfo" >
              <div class="dev_show">
                <el-form  :rules="rules"  label-width="140px" class="demo-ruleForm">
                  <el-row :gutter="20">
                    <el-col :span="7">
                      <el-form-item label="文档编号" class="from-margin8">
                        <el-input v-model="form.textNum" size="small" placeholder="请输入内容"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="7" :offset="1"  class="from-margin8">
                       <el-form-item label="主题">
                          <el-input v-model="form.theme" size="small" placeholder="请输入内容"></el-input>
                       </el-form-item>
                    </el-col>
                    <el-col :span="7" :offset="1"  class="from-margin8">
                      <el-form-item label="项目分期">
                        <el-input v-model="form.projectOrder" size="small" placeholder="请输入内容"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row :gutter="20">
                    <el-col :span="7">
                       <el-form-item label="经办人" class="from-margin8">
                          <el-input v-model="form.responsiblePerson" size="small" placeholder="请输入内容"></el-input>
                       </el-form-item>
                    </el-col>
                    <el-col :span="7" :offset="1">
                      <el-form-item label="经办部门" class="from-margin8">
                         <el-input v-model="form.transactionDepartment" size="small" placeholder="请输入内容"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="7" :offset="1">
                       <el-form-item label="变更类型" class="from-margin8">
                          <el-select v-model="form.changeAttribute" size="small" placeholder="请选择">
                            <el-option label="设计变更" value="shanghai"></el-option>
                            <el-option label="Zone two" value="beijing"></el-option>
                          </el-select>
                       </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row :gutter="20" class="selectClass">
                    <el-col :span="7">
                      <el-form-item label="分类" class="from-margin8">
                        <el-select v-model="form.classify" size="small" placeholder="请选择">
                          <el-option label="职能和设计理解" value="shanghai"></el-option>
                          <el-option label="Zone two" value="beijing"></el-option>
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :span="7" :offset="1">
                      <el-form-item label="发起审批日期" class="from-margin8">
                        <el-input v-model="form.theme" size="small" placeholder="请输入内容"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col :span="7" :offset="1">
                      <el-form-item label="是否交叉扣款" class="from-margin8">
                        <el-radio-group v-model="form.crossDeductionsFlag" size="small" placeholder="请选择">
                          <el-radio label="是"></el-radio>
                          <el-radio label="否"></el-radio>
                        </el-radio-group>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row :gutter="20">
                    <el-col :span="7">
                       <el-form-item label="专业" class="from-margin8">
                          <el-input v-model="form.profession" size="small" placeholder="请输入内容"></el-input>
                       </el-form-item>
                    </el-col>
                    <el-col :span="7" :offset="1"  class="from-margin8">
                       <el-form-item label="诉求部门">
                           <el-input v-model="form.claimsDepartment" size="small" placeholder="请输入内容"></el-input>
                       </el-form-item>
                    </el-col>
                  </el-row>
                </el-form>
              </div>
          </div>
         </div>
          <!-- 变更事项 -->
          <div>
            <div class="dev1_border"></div>
            <div style="background-color: #EEF2F6">
              <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #e9e9e9;
              background-color: #FFFFFF;border-top-left-radius: 4px;border-top-right-radius: 4px"
                  @click="chagneItem = !chagneItem">
                <el-row>
                  <el-col :span="10" style="margin-left: 1%">
                    <span style="border-left: 2px solid #7986A9"></span>
                    <span class="dev1_font">变更事项</span>
                  </el-col>
                  <el-col :span="13" style="text-align: right;margin-left: 2%">
                    <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="chagneItem"></i>
                    <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!chagneItem"></i>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div  v-if="!chagneItem" class="dev_show">
              <el-table highlight-current-row :data="tableData" border
                        size="small" style="width: 98%;margin-left: 1%"
                        :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
                        :header-cell-style="{background:'#efefe0', 'text-align': 'center', color: '#a08e6e',fontSize:'13px',height:'40px',padding:'6px 0',fontWeight:'500'}">
                  <el-table-column type="index" label="序号" width="150"></el-table-column>
                  <el-table-column prop="changeContent" center label="变更内容" width="1035"></el-table-column>
              </el-table>
            </div>
          </div>
          <!-- 对应合同 -->
          <div>
             <div class="dev1_border"></div>
             <div style="background-color: #EEF2F6">
              <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #e9e9e9;
              background-color: #FFFFFF;border-top-left-radius: 4px;border-top-right-radius: 4px"
                  @click="contractItem = !contractItem">
                <el-row>
                  <el-col :span="10" style="margin-left: 1%">
                    <span style="border-left: 2px solid #7986A9"></span>
                    <span class="dev1_font">对应合同</span>
                  </el-col>
                  <el-col :span="13" style="text-align: right;margin-left: 2%">
                    <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="contractItem"></i>
                    <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!contractItem"></i>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div  v-if="!contractItem" class="dev_show">
              <el-table highlight-current-row :data="contracts" border
                        size="small" style="width: 98%;margin-left: 1%"
                        :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
                        :header-cell-style="{background:'#efefe0', 'text-align': 'center', color: '#a08e6e',fontSize:'13px',height:'40px',padding:'6px 0',fontWeight:'500'}">
                    <el-table-column prop="orderNum" label="下发单编号" width="130"></el-table-column>
                    <el-table-column prop="contractName" label="合同名称" width="200"></el-table-column>
                    <el-table-column prop="changeUnit" label="施工单位" width="200"></el-table-column>
                    <el-table-column prop="changeUnit" label="合同对应金额" width="200"></el-table-column>
                    <el-table-column prop="changeMoney" label="变更对应金额"
                                    width="200">
                      <template slot-scope="scope">
                        <div @click="dialogTableVisible = true">{{scope.row.changeMoney}}</div>
                      </template>
                    </el-table-column>
                    <el-table-column prop="scheduledTime" label="预计实施时间" width="200"></el-table-column>
                    <el-table-column prop="successTime" label="预计完成日期" width="200"></el-table-column>
                    <el-table-column prop="changesAs" label="变更事项" width="200"></el-table-column>
                    <el-table-column prop="completionConfirmation" label="完工确认工程师" width="200"></el-table-column>
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
            </div>
          </div>
          <!-- 附件 -->
          <div>
               <div class="dev1_border"></div>
             <div style="background-color: #EEF2F6">
              <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #e9e9e9;
              background-color: #FFFFFF;border-top-left-radius: 4px;border-top-right-radius: 4px"
                  @click="enclosureItem = !enclosureItem">
                <el-row>
                  <el-col :span="10" style="margin-left: 1%">
                    <span style="border-left: 2px solid #7986A9"></span>
                    <span class="dev1_font">附件</span>
                  </el-col>
                  <el-col :span="13" style="text-align: right;margin-left: 2%">
                    <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="enclosureItem"></i>
                    <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!enclosureItem"></i>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div  v-if="!enclosureItem" class="dev_show">
              <el-table highlight-current-row :data="contracts" border
                        size="small" style="width: 98%;margin-left: 1%"
                        :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
                        :header-cell-style="{background:'#efefe0', 'text-align': 'center', color: '#a08e6e',fontSize:'13px',height:'40px',padding:'6px 0',fontWeight:'500'}">
                    <el-table-column prop="orderNum" label="下发单编号" width="130"></el-table-column>
                    <el-table-column prop="contractName" label="合同名称" width="200"></el-table-column>
                    <el-table-column prop="changeUnit" label="施工单位" width="200"></el-table-column>
                    <el-table-column prop="changeUnit" label="合同对应金额" width="200"></el-table-column>
                    <el-table-column prop="changeMoney" label="变更对应金额"
                                    width="200">
                      <template slot-scope="scope">
                        <div @click="dialogTableVisible = true">{{scope.row.changeMoney}}</div>
                      </template>
                    </el-table-column>
                    <el-table-column prop="scheduledTime" label="预计实施时间" width="200"></el-table-column>
                    <el-table-column prop="successTime" label="预计完成日期" width="200"></el-table-column>
                    <el-table-column prop="changesAs" label="变更事项" width="200"></el-table-column>
                    <el-table-column prop="completionConfirmation" label="完工确认工程师" width="200"></el-table-column>
              </el-table>
              <el-dialog title="" :visible.sync="dialogTableVisible">
                <el-table :data="contracts">
                  <el-table-column prop="orderNum" label="附件类型"></el-table-column>
                  <el-table-column prop="orderNum" label="附件"></el-table-column>
                  <el-table-column prop="orderNum" label="备注"></el-table-column>
                  <el-table-column prop="orderNum" label="上传人"></el-table-column>
                  <el-table-column prop="orderNum" label="上传时间"></el-table-column>
                  <el-table-column prop="orderNum" label="操作"></el-table-column>
                </el-table>
              </el-dialog>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'visaDetail',
    data() {
      return {
        basicInfo: true,
        chagneItem: false, // 控制变更事项展示
        contractItem: false, // 控制对应合同展示
        enclosureItem: false, // 控制附件展示

        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ]
        },
        basicInfos: {
          contractNo: '',
          contractName: '',
          contractCodeName: '',
          contractTypeId: '',
          tenderType: '',
          inchargesbyId: '',
          inchargesbyDeptId: '',
          type: '',
          signingDate: '',
          region: '',
          resource: '',
          customerprojectname: ''
        },

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
  .selectClass >>> .el-input__inner{
    border:1px solid #C2D9AB;
    background-color:#FCFFFA;
  }
  .detail_dev1 {
    width: 2px;
    background-color: rgb(65, 73, 82);
    height: 16px;
    margin-top: 8px;
  }

  .dev1_z {
    position: absolute;
    top: 64%;
    font-size: 8px;
    color: #606266;
  }

  .dev1_span {
    margin-top: -16%;
    font-size: 12px;
    color: #999;
  }

  .dev1_font {
    margin-left: 2%;
    color: #60696b;
    font-size: 14px;
  }

  .class-a {
    border-bottom: 3px solid #657398;
    text-align: center;
    width: 7%;
  }

  .detail_dev2 {
    font-size: 8px;
    color: #9a9fa4;
    margin-top: 1%;
    padding-left: 10.3%;
    padding-bottom: 1%;
  }

  .dev_show {
    background-color: #FFF;
        padding-top: 1%;
  }

  /*右三角*/
  .triangle-right {
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-left: 12px solid;
    border-bottom: 12px solid transparent;
  }

  /*右上三角*/
  .triangle-topright {
    width: 0;
    height: 0;
    border-top: 12px solid;
    border-left: 12px solid transparent;
  }

  /*右下三角*/
  .triangle-bottomright {
    width: 0;
    height: 0;
    border-bottom: 12px solid;
    border-left: 12px solid transparent;
  }

  .from-margin8 {
    margin-bottom: 8px
  }

  .from-margin2 {
    margin-bottom: -3%
  }

  .el-tabs__active-bar {
    max-width: 100px;
    /*margin-left: 6%;*/
    position: absolute;
    bottom: 2px;
    left: 7%;
    height: 2px;
    background-color: #7986a9;
    z-index: 1;
    -webkit-transition: -webkit-transform .3s cubic-bezier(.645, .045, .355, 1);
    transition: -webkit-transform .3s cubic-bezier(.645, .045, .355, 1);
    transition: transform .3s cubic-bezier(.645, .045, .355, 1);
    transition: transform .3s cubic-bezier(.645, .045, .355, 1), -webkit-transform .3s cubic-bezier(.645, .045, .355, 1);
    list-style: none;
  }

  .el-tabs__item {
    padding: 0 20px;
    height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #393d46;
    position: relative;
  }
  .el-tabs__header {
    padding: 0;
    position: relative;
    margin: 0 0 0px;
  }

  .dev1_border {
    border: 6px solid #EEF2F6;
  }
  .dev1_border1 {
    border: 6px solid #FFFFFF;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .el-tabs__item.is-active {
    color: #7986a9;
  }
  .el-table .warning-row {
    background: #F5F7FA;
  }
  .float_center{
    position: relative;
    float: left;
    top: 10px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    color: white;
    width:20%
  }
  .position_color{
    width: 50%;
    position: absolute;
    left: 24%;
    top: 24px;
    color: rgb(0, 0, 0);
  }
  .first_last_radius :first-child{
    border-radius:8px 0 0 8px;
  }
  .first_last_radius :last-child{
    border-radius:0 8px 8px 0;
  }
  .piecerow_main {
    background-color:#edf2f7;
    padding: 10px 10px 0 10px;
    margin-top: 3%
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
   .el-table .interleave_row {
    background: #F5F7FA;
  }

  .el-table .success-row {
    background: #FAECD7;
  }
  .operation{
    background: white;
    height: 41px;
    border-bottom: 1px solid #E9E9E9;
    position: fixed;
    width: 87%;
    margin-top: -47px;
    z-index: 99;
    margin-left: -1%;
  }
  .btnRight{
    float: right;
    margin-right: 1%;
  }
</style>
