<template>
  <div class="piecerow_main">
    <div class="piecerow">
      <el-tabs>
        <el-tab-pane label="投模成本" >
          <div class="betweenBack"></div>
          <div class="investmentClass">
            <el-form  :model="form" :rules="rules" ref="ruleForm" class="demo-ruleForm" label-width="120px" style="margin: 15px 0 15px 0;">
              <el-row :gutter="20">
                <el-col :span="6">
                  <el-form-item label="城市:" size="small" prop="organization">
                    <el-select v-model="ruleForm.name" placeholder="请选择活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="业态:">
                    <el-select v-model="ruleForm.region" size="small" placeholder="请选择活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="配置:">
                    <el-select v-model="ruleForm.region" size="small" placeholder="请选择活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="5" :offset="1" class="div-font">
                  <el-button @click="getTableTree"  icon="el-icon-search"  size="mini" class="searchBtn">搜索</el-button>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <el-row :gutter="20" style="margin-top: 20px;">
            <el-col :span="24">
              <el-button size="mini" style="margin-left :1%" class="btnLeft" icon="el-icon-delete" type="text" ype="info" @click="goVersion('add')">新增</el-button>
              <el-button size="mini" class="btnLeft" icon="el-icon-delete" type="text"  @click="deleteStandardCost" ype="info"
                         :disabled="currentRow.approvedstate !== '草稿' && currentRow.approvedstate !== '驳回'" >删除</el-button>
              <el-button size="mini" class="btnRight" icon="el-icon-delete" type="text" @click="delCost" >导出</el-button>
              <el-button size="mini" class="btnRight" icon="el-icon-document" type="text" @click="approveCourse" >审批过程</el-button>
              <el-button size="mini" class="btnRight" icon="el-icon-circle-plus-outline" type="text" @click="addCost" >发起审批</el-button>
            </el-col>
          </el-row>
          <el-table highlight-current-row :data="baseCostManage.baseTable" border
                    @current-change="handleCurrentChange"
                    @row-dblclick="goVersion"
                    size="small"
                    :row-class-name="tableRowClassName"
                    :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
                    :header-cell-style="{background:'#efefe0', 'text-align': 'center', color: '#a08e6e',fontSize:'13px',height:'40px',padding:'6px 0',fontWeight:'500'}">
            <el-table-column type="index" label="序号" align="center"></el-table-column>
            <el-table-column prop="versionid" label="版本号" align="center"></el-table-column>
            <el-table-column prop="approvedstate" label="审批状态" align="center"></el-table-column>
            <el-table-column prop="effectivestate" label="生效状态" align="center"></el-table-column>
            <el-table-column prop="approvedate" label="审批时间" align="center"></el-table-column>
            <el-table-column prop="cityname" label="城市" align="center"></el-table-column>
            <el-table-column prop="producttypename" label="业态" align="center"></el-table-column>
            <el-table-column prop="constructioncfg" label="配置" align="center"></el-table-column>
            <el-table-column prop="glcaliberunit" label="管理口径单方" align="center"></el-table-column>
            <el-table-column prop="cwcaliberunit" label="财务口径单方" align="center"></el-table-column>
            <el-table-column prop="handlename" label="经办人" align="center"></el-table-column>
            <el-table-column prop="remark" label="说明" align="center" show-overflow-tooltip></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="模板管理" disabled>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
  <!--<div>-->
    <!--<div v-if="!isTemplate">-->
      <!--<el-row :gutter="20">-->
        <!--<el-col :span="6">&nbsp</el-col>-->
        <!--<el-col :span="5">-->
          <!--<el-col :span="8">-->
            <!--<div class="div-font">城市</div>-->
          <!--</el-col>-->
          <!--<el-col :span="16">-->
            <!--<div>-->
              <!--<el-cascader size="small" v-model="baseCostManage.baseTableKeyWords.cityid"-->
                           <!--:options="baseCostManage.options" :props="baseCostManage.props"></el-cascader>-->
            <!--</div>-->
          <!--</el-col>-->
        <!--</el-col>-->
        <!--<el-col :span="5">-->
          <!--<el-col :span="8">-->
            <!--<div class="div-font">业态</div>-->
          <!--</el-col>-->
          <!--<el-col :span="16">-->
            <!--<div>-->
              <!--<el-cascader size="small" v-model="baseCostManage.baseTableKeyWords.producttypeid"-->
                           <!--:options="baseCostManage.formatOptions"-->
                           <!--:props="baseCostManage.formatProps"></el-cascader>-->
            <!--</div>-->
          <!--</el-col>-->
        <!--</el-col>-->
        <!--<el-col :span="5">-->
          <!--<el-col :span="8">-->
            <!--<div class="div-font">配置</div>-->
          <!--</el-col>-->
          <!--<el-col :span="16">-->
            <!--<el-cascader size="small" v-model="baseCostManage.baseTableKeyWords.constructioncfg"-->
                         <!--:options="baseCostManage.configurationOptions"-->
                         <!--:props="baseCostManage.configurationProps"></el-cascader>-->
          <!--</el-col>-->
        <!--</el-col>-->
        <!--<el-col :span="3">-->
          <!--<div class="div-font">-->
            <!--<el-button size="mini" icon="el-icon-search" @click="getTableTree"></el-button>-->
          <!--</div>-->
        <!--</el-col>-->
      <!--</el-row>-->
    <!--</div>-->
    <!--<el-tabs type="border-card" @tab-click="tabsChange">-->
      <!--<el-tab-pane label="基准成本">-->
        <!--<div style="margin-top: 15px">-->
          <!--<el-row :gutter="20">-->
            <!--<el-col :span="8">-->
              <!--<el-col :span="6">-->
                <!--<el-button size="mini" ype="info" @click="goVersion('add')" plain>新增</el-button>-->
              <!--</el-col>-->
              <!--<el-col :span="6">-->
                <!--<el-button size="mini" ype="info" plain-->
                           <!--@click="deleteStandardCost"-->
                           <!--:disabled="currentRow.approvedstate !== '草稿' && currentRow.approvedstate !== '驳回'">删除-->
                <!--</el-button>-->
              <!--</el-col>-->
            <!--</el-col>-->
            <!--<el-col :span="8">&nbsp</el-col>-->
            <!--<el-col :span="8">-->
              <!--<el-col :span="6">-->
                <!--<el-button size="mini" ype="info" plain>导出</el-button>-->
              <!--</el-col>-->
              <!--<el-col :span="6">-->
                <!--<el-button size="mini" ype="info" plain>审批过程</el-button>-->
              <!--</el-col>-->
              <!--<el-col :span="6">-->
                <!--<el-button size="mini" ype="info" plain>发起审批</el-button>-->
              <!--</el-col>-->
            <!--</el-col>-->
          <!--</el-row>-->
          <!--<el-table highlight-current-row :data="baseCostManage.baseTable" border-->
                    <!--@current-change="handleCurrentChange"-->
                    <!--@row-dblclick="goVersion"-->
                    <!--size="small"-->
                    <!--:row-class-name="tableRowClassName"-->
                    <!--:cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"-->
                    <!--:header-cell-style="{background:'#efefe0', 'text-align': 'center', color: '#a08e6e',fontSize:'13px',height:'40px',padding:'6px 0',fontWeight:'500'}">-->
            <!--<el-table-column type="index" label="序号" align="center"></el-table-column>-->
            <!--<el-table-column prop="versionid" label="版本号" align="center"></el-table-column>-->
            <!--<el-table-column prop="approvedstate" label="审批状态" align="center"></el-table-column>-->
            <!--<el-table-column prop="effectivestate" label="生效状态" align="center"></el-table-column>-->
            <!--<el-table-column prop="approvedate" label="审批时间" align="center"></el-table-column>-->
            <!--<el-table-column prop="cityname" label="城市" align="center"></el-table-column>-->
            <!--<el-table-column prop="producttypename" label="业态" align="center"></el-table-column>-->
            <!--<el-table-column prop="constructioncfg" label="配置" align="center"></el-table-column>-->
            <!--<el-table-column prop="glcaliberunit" label="管理口径单方" align="center"></el-table-column>-->
            <!--<el-table-column prop="cwcaliberunit" label="财务口径单方" align="center"></el-table-column>-->
            <!--<el-table-column prop="handlename" label="经办人" align="center"></el-table-column>-->
            <!--<el-table-column prop="remark" label="说明" align="center" show-overflow-tooltip></el-table-column>-->
          <!--</el-table>-->
        <!--</div>-->
      <!--</el-tab-pane>-->
      <!--<el-tab-pane label="模板管理">-->
        <!--<div style="margin-top: 15px">-->
          <!--<el-row :gutter="20">-->
            <!--<el-col :span="8">-->
              <!--<el-col :span="6">-->
                <!--<el-button size="mini" ype="info" plain>新增</el-button>-->
              <!--</el-col>-->
              <!--<el-col :span="6">-->
                <!--<el-button size="mini" ype="info" plain>修改</el-button>-->
              <!--</el-col>-->
              <!--<el-col :span="6">-->
                <!--<el-button size="mini" ype="info" plain>删除</el-button>-->
              <!--</el-col>-->
              <!--<el-col :span="6">-->
                <!--<el-button size="mini" ype="info" plain>生效</el-button>-->
              <!--</el-col>-->
            <!--</el-col>-->
            <!--<el-col :span="8">&nbsp</el-col>-->
            <!--<el-col :span="8">-->
              <!--<el-col :span="6">-->
                <!--<el-button size="mini" ype="info" plain>发起审批</el-button>-->
              <!--</el-col>-->
              <!--<el-col :span="6">-->
                <!--<el-button size="mini" ype="info" plain>审批过程</el-button>-->
              <!--</el-col>-->
            <!--</el-col>-->
          <!--</el-row>-->
          <!--<el-table size="small" border :data="baseCostManage.baseTable"-->
                    <!--:row-class-name="tableRowClassName"-->
                    <!--:cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"-->
                    <!--:header-cell-style="{background:'#efefe0', 'text-align': 'center', color: '#a08e6e',fontSize:'13px',height:'40px',padding:'6px 0',fontWeight:'500'}" style="width: 99%">-->
            <!--<el-table-column prop="serialno" label="版本编号"></el-table-column>-->
            <!--<el-table-column prop="versionid" label="版本状态"></el-table-column>-->
            <!--<el-table-column prop="handlername" label="编制人"></el-table-column>-->
            <!--<el-table-column prop="producttypename" label="批准人"></el-table-column>-->
            <!--<el-table-column prop="approvedate" label="生效日期"></el-table-column>-->
            <!--<el-table-column prop="cityname" label="失效日期"></el-table-column>-->
            <!--<el-table-column prop="approvedstate" label="审批状态"></el-table-column>-->
            <!--<el-table-column prop="remark" label="说明"></el-table-column>-->
          <!--</el-table>-->
        <!--</div>-->
      <!--</el-tab-pane>-->
    <!--</el-tabs>-->
  <!--</div>-->


</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['$cost'])
    },
    data() {
      return {
        value: '',
        params: {},
        isTemplate: false,
        currentRow: {},
        baseCostManage: {
          baseTableKeyWords: {
            cityid: [],
            producttypeid: [],
            constructioncfg: []
          },
          options: [
            {
              label: '龙湖',
              cities: []
            }, {
              label: '大明湖',
              cities: []
            }],
          props: {
            value: 'label',
            children: ''
          },
          formatOptions: [
            {
              label: '跨期',
              cities: []
            }, {
              label: '不跨期',
              cities: []
            }],
          formatProps: {
            value: 'label',
            children: ''
          },
          configurationOptions: [
            {
              label: '龙湖1',
              cities: []
            }, {
              label: '大明湖2',
              cities: []
            }],
          configurationProps: {
            value: 'cityLabel',
            children: ''
          },
          baseTable: []
        },
        // 规则
        rules: {
          organization: [
            { required: true, message: '请选择组织机构', trigger: 'change' }
          ]
        },
        form: {
          id: '',
          organization: '',
          contactName: '',
          project: '',
          contractNum: ''
        },
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    created: function() {
      // this.$store.dispatch('FindStandardCost', { standardcostid: 123 }).then(data => {
      //   this.baseCostManage.baseTable = data
      // })
    },
    methods: {
      // 新增
      addCost() {
      },
      // 删除
      delCost() {
      },
      // 审批
      approveCourse() {
      },
      tableRowClassName({ row, rowIndex }) {
        if (rowIndex === 1) {
          return 'warning-row'
        }
        return ''
      },
      tabsChange(tab) {
        if (tab.label === '模板管理') {
          this.isTemplate = true
        } else {
          this.isTemplate = false
        }
      },
      // 更改选中行
      handleCurrentChange(val) {
        this.currentRow = val
      },
      // 跳转编制说明
      goVersion(currentRow) {
        if (this.baseCostManage.baseTableKeyWords.cityid.length === 0) {
          this.$message('请选择城市')
          return
        }
        if (currentRow !== 'add') {
          this.params = {
            standardCostId: this.currentRow.standardcostid,
            isDisabled: this.currentRow.approvedstate !== '草稿' && this.currentRow.approvedstate !== '驳回'
          }
        } else {
          this.params = {
            standardCostId: 'standardCostId',
            isDisabled: 'false'
          }
        }
        this.$router.push({
          name: '编制说明',
          params: this.params
        })
      },
      // 获得列表数据
      getTableTree() {
        if (this.baseCostManage.baseTableKeyWords.cityid.length === 0) {
          this.$message('请选择城市')
          return
        }
        this.$store.dispatch('FindStandardCost', this.baseCostManage.baseTableKeyWords).then(data => {
          this.baseCostManage.baseTable = this.$cost.standardCost.standardCosts
        })
      },
      // 删除列表数据
      deleteStandardCost() {
        this.$store.dispatch('DeleteStandardCost', { standardcostid: this.currentRow.standardcostid }).then(data => {
          if (data.resultcode === '000') {
            this.currentRow = {}
            this.$message({
              message: '删除成功',
              type: 'success'
            })
          } else {
            this.$message.error('删除失败')
          }
        })
      }
    }
  }
</script>

<style scoped>
  .el-row {
    margin: 8px;
  }

  .div-font {
    padding-top: 8px;
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
  .investmentClass >>> .el-form-item__error{
    top: 90%;
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
  .betweenBack{
    height: 10px;
    background-color: #edf2f7;
  }
</style>
