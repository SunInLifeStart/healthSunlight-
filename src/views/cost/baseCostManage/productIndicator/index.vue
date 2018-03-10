<template>
  <div class="piecerow_main">
    <div class="piecerow">
      <el-tabs>
        <el-tab-pane label="总体指标">
          <div class="betweenBack"></div>
          <el-row :gutter="20" style="margin-top: 20px;">
            <el-col :span="24">
              <el-button size="mini" class="btnRight" icon="el-icon-document" type="text" @click="">导入面积
              </el-button>
              <el-button size="mini" class="btnRight" icon="el-icon-delete" type="text" @click="">导出</el-button>
              <el-button size="mini" class="btnRight" icon="el-icon-circle-plus-outline" type="text" @click="">保存</el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <p>总体指标</p>
              <el-table highlight-current-row :data="tableData" border
                        size="small" style="width: 98%;margin-left: 1%"
                        :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
                        :header-cell-style="{background:'#E8F4F9', 'text-align': 'center', color: '#7986a9',fontSize:'13px',padding:'6px 0',fontWeight:'500'}">
                <el-table-column type="index" width="100px" label="序号" align="center"></el-table-column>
                <el-table-column prop="indicatorname" label="指标名称" align="center"></el-table-column>
                <el-table-column prop="indicatorvalue" label="数量" align="center"></el-table-column>
                <el-table-column prop="indicatorunit" label="单位" align="center"></el-table-column>
                <el-table-column prop="" label="备注" align="center"></el-table-column>
              </el-table>
            </el-col>
            <el-col :span="12">
              <!--右半部分-->
              <p>主要材料价格（不含税）</p>
              <el-table highlight-current-row :data="tableData1" border
                        size="small" style="width: 98%;margin-left: 1%"
                        :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
                        :header-cell-style="{background:'#E8F4F9', 'text-align': 'center', color: '#7986a9',fontSize:'13px',padding:'6px 0',fontWeight:'500'}">
                <el-table-column prop="serialno" width="100px" label="序号" align="center"></el-table-column>
                <el-table-column prop="matpricename" label="项目" align="center"></el-table-column>
                <el-table-column prop="materialsprice" label="数据" align="center"></el-table-column>
                <el-table-column prop="materialsunit" label="单位" align="center"></el-table-column>
                <el-table-column prop="remark" label="备注" align="center"></el-table-column>
              </el-table>
              <p>市政输入条件</p>
              <el-table highlight-current-row :data="tableData2" border
                        size="small" style="width: 98%;margin-left: 1%"
                        :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
                        :header-cell-style="{background:'#E8F4F9', 'text-align': 'center', color: '#7986a9',fontSize:'13px',padding:'6px 0',fontWeight:'500'}">
                <el-table-column type="index" width="100px" label="序号" align="center"></el-table-column>
                <el-table-column prop="utilityconditions" label="水电气条件" align="center"></el-table-column>
                <el-table-column prop="utilityconditionsdata" label="数据" align="center"></el-table-column>
                <el-table-column prop="utilityconditionsunit" label="单位" align="center"></el-table-column>
                <el-table-column prop="remark" label="备注" align="center"></el-table-column>
              </el-table>

              <p>景观指标</p>
              <el-table highlight-current-row :data="tableData3" border
                        size="small" style="width: 98%;margin-left: 1%"
                        :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
                        :header-cell-style="{background:'#E8F4F9', 'text-align': 'center', color: '#7986a9',fontSize:'13px',padding:'6px 0',fontWeight:'500'}">
                <el-table-column prop="viewindicatorid" width="100px" label="序号" align="center"></el-table-column>
                <el-table-column prop="viewindicator" label="景观指标" align="center"></el-table-column>
                <el-table-column prop="viewarea" label="面积" align="center"></el-table-column>
                <el-table-column prop="viewunit" label="单位" align="center"></el-table-column>
                <el-table-column prop="viewpercent" label="占比" align="center"></el-table-column>
                <el-table-column prop="remark" label="备注" align="center"></el-table-column>
              </el-table>
              <p>土方平衡</p>
              <el-table highlight-current-row :data="tableData4" border
                        size="small" style="width: 98%;margin-left: 1%"
                        :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
                        :header-cell-style="{background:'#E8F4F9', 'text-align': 'center', color: '#7986a9',fontSize:'13px',padding:'6px 0',fontWeight:'500'}">
                <el-table-column type="index" width="100px" label="序号" align="center"></el-table-column>
                <el-table-column prop="standardearthworkid" label="场内土方平衡情况" align="center"></el-table-column>
                <el-table-column prop="utilitycondition" label="数据" align="center"></el-table-column>
                <el-table-column prop="earthworkunit" label="单位" align="center"></el-table-column>
                <el-table-column prop="remark" label="备注" align="center"></el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="业态面积">
          <el-row>
            <el-col :span="16" class="card_section">
              <el-col :span="4" style="line-height: 2;font-size: 14px">层级选项：</el-col>
              <el-col :span="18" style="margin-left: -9%">
                <el-pagination background layout="pager" :current-page.sync="level" @current-change="changeLevel(level)"
                               :total="30"></el-pagination>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="14">&nbsp</el-col>
              <el-col :span="10">
                <el-switch v-model="ruleForm.delivery"></el-switch>
                显示全部
              </el-col>
            </el-col>
          </el-row>
          <tree-table :data="data" :columns="columns" :type="'col'" :rowCallback="handleCurrentChange" :evalFunc="func"
                      :evalArgs="args"
                      :stripe="true" :selection-change="CalculateCost(data)" :showLevel='level' border>
          </tree-table>
        </el-tab-pane>
        <el-tab-pane label="业态属性" >
          <el-row>
            <el-col :span="16" class="card_section">
              <el-col :span="4" style="line-height: 2;font-size: 14px">层级选项：</el-col>
              <el-col :span="18" style="margin-left: -9%">
                <el-pagination background layout="pager" :current-page.sync="level" @current-change="changeLevel(level)"
                               :total="30"></el-pagination>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="14">&nbsp</el-col>
              <el-col :span="10">
                <el-switch v-model="ruleForm.delivery"></el-switch>
                显示全部
              </el-col>
            </el-col>
          </el-row>
          <tree-table :data="data1" :columns="columns1" :type="'col'" :rowCallback="handleCurrentChange" :evalFunc="func"
                      :evalArgs="args"
                      :stripe="true" :selection-change="CalculateCost(data)" :showLevel='level' border>
          </tree-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>


  <!--<div>-->
    <!--<el-row :gutter="20" style="position: absolute;-->
    <!--top: 7.5%;-->
    <!--z-index: 999;-->
    <!--right: 0;">-->
      <!--<el-col :span="8">-->
        <!--<el-upload action="https://jsonplaceholder.typicode.com/posts/"-->
                   <!--:on-preview="handlePreview" :on-remove="handleRemove"-->
                   <!--:before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed">-->
          <!--<div :file-list="fileList">-->
          <!--</div>-->
          <!--<el-button size="small" type="primary">导入面积</el-button>-->
        <!--</el-upload>-->
      <!--</el-col>-->
      <!--<el-col :span="6">-->
        <!--<el-button size="small">导出</el-button>-->
      <!--</el-col>-->
      <!--<el-col :span="6">-->
        <!--<el-button size="small">保存</el-button>-->
      <!--</el-col>-->
    <!--</el-row>-->

    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--<el-tabs type="border-card">-->
      <!--<el-tab-pane label="总体指标">-->
        <!--<div>-->
          <!--<el-container>-->
            <!--&lt;!&ndash;左半部分&ndash;&gt;-->
            <!--<el-col :span="12">-->
              <!--<p>总体指标</p>-->
              <!--<el-table highlight-current-row :data="tableData" border-->
                        <!--size="small" style="width: 98%;margin-left: 1%"-->
                        <!--:cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"-->
                        <!--:header-cell-style="{background:'#E8F4F9', 'text-align': 'center', color: '#7986a9',fontSize:'13px',padding:'6px 0',fontWeight:'500'}">-->
                <!--<el-table-column type="index" width="100px" label="序号" align="center"></el-table-column>-->
                <!--<el-table-column prop="indicatorname" label="指标名称" align="center"></el-table-column>-->
                <!--<el-table-column prop="indicatorvalue" label="数量" align="center"></el-table-column>-->
                <!--<el-table-column prop="indicatorunit" label="单位" align="center"></el-table-column>-->
                <!--<el-table-column prop="" label="备注" align="center"></el-table-column>-->
              <!--</el-table>-->
            <!--</el-col>-->
            <!--<el-col :span="12">-->
              <!--&lt;!&ndash;右半部分&ndash;&gt;-->
              <!--<p>主要材料价格（不含税）</p>-->
              <!--<el-table highlight-current-row :data="tableData1" border-->
                        <!--size="small" style="width: 98%;margin-left: 1%"-->
                        <!--:cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"-->
                        <!--:header-cell-style="{background:'#E8F4F9', 'text-align': 'center', color: '#7986a9',fontSize:'13px',padding:'6px 0',fontWeight:'500'}">-->
                <!--<el-table-column prop="serialno" width="100px" label="序号" align="center"></el-table-column>-->
                <!--<el-table-column prop="matpricename" label="项目" align="center"></el-table-column>-->
                <!--<el-table-column prop="materialsprice" label="数据" align="center"></el-table-column>-->
                <!--<el-table-column prop="materialsunit" label="单位" align="center"></el-table-column>-->
                <!--<el-table-column prop="remark" label="备注" align="center"></el-table-column>-->
              <!--</el-table>-->
              <!--<p>市政输入条件</p>-->
              <!--<el-table highlight-current-row :data="tableData2" border-->
                        <!--size="small" style="width: 98%;margin-left: 1%"-->
                        <!--:cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"-->
                        <!--:header-cell-style="{background:'#E8F4F9', 'text-align': 'center', color: '#7986a9',fontSize:'13px',padding:'6px 0',fontWeight:'500'}">-->
                <!--<el-table-column type="index" width="100px" label="序号" align="center"></el-table-column>-->
                <!--<el-table-column prop="utilityconditions" label="水电气条件" align="center"></el-table-column>-->
                <!--<el-table-column prop="utilityconditionsdata" label="数据" align="center"></el-table-column>-->
                <!--<el-table-column prop="utilityconditionsunit" label="单位" align="center"></el-table-column>-->
                <!--<el-table-column prop="remark" label="备注" align="center"></el-table-column>-->
              <!--</el-table>-->

              <!--<p>景观指标</p>-->
              <!--<el-table highlight-current-row :data="tableData3" border-->
                        <!--size="small" style="width: 98%;margin-left: 1%"-->
                        <!--:cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"-->
                        <!--:header-cell-style="{background:'#E8F4F9', 'text-align': 'center', color: '#7986a9',fontSize:'13px',padding:'6px 0',fontWeight:'500'}">-->
                <!--<el-table-column prop="viewindicatorid" width="100px" label="序号" align="center"></el-table-column>-->
                <!--<el-table-column prop="viewindicator" label="景观指标" align="center"></el-table-column>-->
                <!--<el-table-column prop="viewarea" label="面积" align="center"></el-table-column>-->
                <!--<el-table-column prop="viewunit" label="单位" align="center"></el-table-column>-->
                <!--<el-table-column prop="viewpercent" label="占比" align="center"></el-table-column>-->
                <!--<el-table-column prop="remark" label="备注" align="center"></el-table-column>-->
              <!--</el-table>-->
              <!--<p>土方平衡</p>-->
              <!--<el-table highlight-current-row :data="tableData4" border-->
                        <!--size="small" style="width: 98%;margin-left: 1%"-->
                        <!--:cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"-->
                        <!--:header-cell-style="{background:'#E8F4F9', 'text-align': 'center', color: '#7986a9',fontSize:'13px',padding:'6px 0',fontWeight:'500'}">-->
                <!--<el-table-column type="index" width="100px" label="序号" align="center"></el-table-column>-->
                <!--<el-table-column prop="standardearthworkid" label="场内土方平衡情况" align="center"></el-table-column>-->
                <!--<el-table-column prop="utilitycondition" label="数据" align="center"></el-table-column>-->
                <!--<el-table-column prop="earthworkunit" label="单位" align="center"></el-table-column>-->
                <!--<el-table-column prop="remark" label="备注" align="center"></el-table-column>-->
              <!--</el-table>-->
            <!--</el-col>-->
          <!--</el-container>-->
        <!--</div>-->
      <!--</el-tab-pane>-->
      <!--&lt;!&ndash;业态面积&ndash;&gt;-->
      <!--<el-tab-pane label="业态面积">-->
        <!--<el-row>-->
          <!--<el-col :span="16" class="card_section">-->
            <!--<el-col :span="4" style="line-height: 2;font-size: 14px">层级选项：</el-col>-->
            <!--<el-col :span="18" style="margin-left: -9%">-->
              <!--<el-pagination background layout="pager" :current-page.sync="level" @current-change="changeLevel(level)"-->
                             <!--:total="30"></el-pagination>-->
            <!--</el-col>-->
          <!--</el-col>-->
          <!--<el-col :span="8">-->
            <!--<el-col :span="14">&nbsp</el-col>-->
            <!--<el-col :span="10">-->
              <!--<el-switch v-model="ruleForm.delivery"></el-switch>-->
              <!--显示全部-->
            <!--</el-col>-->
          <!--</el-col>-->
        <!--</el-row>-->
        <!--<tree-table :data="data" :columns="columns" :type="'col'" :rowCallback="handleCurrentChange" :evalFunc="func"-->
                    <!--:evalArgs="args"-->
                    <!--:stripe="true" :selection-change="CalculateCost(data)" :showLevel='level' border>-->
        <!--</tree-table>-->
      <!--</el-tab-pane>-->
      <!--&lt;!&ndash;业态属性&ndash;&gt;-->
      <!--<el-tab-pane label="业态属性">-->
        <!--<el-row>-->
          <!--<el-col :span="16" class="card_section">-->
            <!--<el-col :span="4" style="line-height: 2;font-size: 14px">层级选项：</el-col>-->
            <!--<el-col :span="18" style="margin-left: -9%">-->
              <!--<el-pagination background layout="pager" :current-page.sync="level" @current-change="changeLevel(level)"-->
                             <!--:total="30"></el-pagination>-->
            <!--</el-col>-->
          <!--</el-col>-->
          <!--<el-col :span="8">-->
            <!--<el-col :span="14">&nbsp</el-col>-->
            <!--<el-col :span="10">-->
              <!--<el-switch v-model="ruleForm.delivery"></el-switch>-->
              <!--显示全部-->
            <!--</el-col>-->
          <!--</el-col>-->
        <!--</el-row>-->
        <!--<tree-table :data="data1" :columns="columns1" :type="'col'" :rowCallback="handleCurrentChange" :evalFunc="func"-->
                    <!--:evalArgs="args"-->
                    <!--:stripe="true" :selection-change="CalculateCost(data)" :showLevel='level' border>-->
        <!--</tree-table>-->
      <!--</el-tab-pane>-->
    <!--</el-tabs>-->
  <!--</div>-->
</template>

<script>
  import { mapActions } from 'vuex'
  import treeTable from '@/components/TreeTable'
  import treeToArray from '@/components/treeTable/customEval'
  // import { mapGetters } from 'vuex'

  export default {
    components: { treeTable },
    // computed: {
    //   ...mapGetters(['cost'])
    // },
    data() {
      return {
        fileList: [{ name: '', url: '' }],
        ruleForm: {
          delivery: false
        },
        productIndicator: {
          basicInfo: [
            {
              content: 'sss',
              price: '123',
              remakes: 'sdasd'
            }
          ],
          mainContract: [
            {
              projectPlan: '222',
              data: 'sda',
              units: 'sda',
              remakes: 'sdasd'
            }
          ],
          totalIndex: [
            {

              target: 'daasd',
              number: 100,
              units: '平',
              children: [
                {
                  target: '问问',
                  number: 100,
                  units: '平'
                }
              ]
            },
            {
              target: '啊实打实',
              number: 100,
              units: 'cm'
            }
          ],
          civicismCondition: [
            {
              utilities: 'YY',
              data: '啊实打实',
              units: 'M',
              remakes: '试试'
            },
            {
              utilities: 'YY',
              data: '啊实打实',
              units: 'M',
              remakes: '试试'
            }
          ],
          landscape: [
            {
              scenery: 'ss',
              area: 'dd',
              units: '%',
              proportion: '20',
              remakes: 'sssa'
            },
            {
              scenery: 'ss',
              area: 'dd',
              units: '%',
              proportion: '20',
              remakes: 'sssa'
            }
          ],
          earthworkBalance: [
            {
              utilities: 'YY',
              data: '啊实打实',
              units: 'M',
              remakes: '试试'
            },
            {
              utilities: 'YY',
              data: '啊实打实',
              units: 'M',
              remakes: '试试'
            }
          ]
        },
        cfg: {
          fixed: true,
          maxHeight: 400
        },
        value8: 0,
        tableData: [],
        tableData1: [],
        tableData2: [],
        tableData3: [],
        tableData4: [],
        tableData5: [],
        data: [{}],
        data1: [{}],
        columns: [
          {
            title: '产品户型',
            value: 'producttypename',
            type: 'text',
            width: 300,
            index: 0,
            fixed: 'left',
            // 整列样式 可选
            colClass: 'font-center'
          },
          {
            title: '地上建筑面积',
            value: 'areaonroad',
            type: 'text',
            width: 200,
            index: 2,
            focus: false
          }, {
            title: '地上赠送面积',
            value: 'areagivonroad',
            type: 'input',
            width: 200,
            index: 3,
            // 整列样式 可选
            colClass: 'bg_lightBlue'
          }, {
            title: '地下建筑面积',
            value: 'areaunroad',
            type: 'input',
            width: 200,
            index: 4,
            focus: false
          }, {
            title: '地下赠送面积',
            value: 'areagivunroad',
            type: 'input',
            width: 200,
            index: 5,
            focus: false
          }, {
            title: '总建筑面积',
            value: 'saleareaonroad',
            type: 'input',
            width: 200,
            index: 6,
            focus: false
          }, {
            title: '建面面积单价（元）',
            value: 'saleareaunroad',
            type: 'input',
            width: 200,
            index: 7,
            focus: false
          }, {
            title: '地上实际建筑面积(m2)',
            value: 'rentareaonroad',
            type: 'input',
            width: 200,
            index: 8,
            focus: false
          }, {
            title: '地上建筑面积',
            value: 'rentareaunroad',
            type: 'input',
            width: 200,
            index: 9,
            focus: false
          }, {
            title: '地上实际建筑',
            value: 'jzarea',
            type: 'input',
            width: 200,
            index: 10,
            focus: false
          }, {
            title: '小计',
            value: 'createdate',
            type: 'input',
            width: 200,
            index: 10,
            focus: false
          }
        ],
        columns1: [
          {
            title: '产品户型',
            value: 'producttypename',
            type: 'text',
            width: 300,
            index: 0,
            fixed: 'left',
            // 整列样式 可选
            colClass: 'font-center'
          },
          {
            title: '栋数',
            value: 'buildingamt',
            type: 'text',
            width: 200,
            index: 2,
            focus: false
          }, {
            title: '层数',
            value: 'flooramt',
            type: 'input',
            width: 200,
            index: 3,
            // 整列样式 可选
            colClass: 'bg_lightBlue'
          }, {
            title: '总层数',
            value: 'allflooramt',
            type: 'input',
            width: 200,
            index: 4,
            focus: false
          }, {
            title: '单元数',
            value: 'unitamt',
            type: 'input',
            width: 200,
            index: 5,
            focus: false
          }, {
            title: '电梯数',
            value: 'elevatoramt',
            type: 'input',
            width: 200,
            index: 6,
            focus: false
          }, {
            title: '户数',
            value: 'useramt',
            type: 'input',
            width: 200,
            index: 7,
            focus: false
          }, {
            title: '车库门数量',
            value: 'garageamt',
            type: 'input',
            width: 200,
            index: 8,
            focus: false
          }, {
            title: '基地面积（数据绑定有问题）',
            value: 'floorhight',
            type: 'input',
            width: 200,
            index: 9,
            focus: false
          }
        ],
        level: 1,
        func: treeToArray,
        args: [null, null, true, 'timeLine']
      }
    },
    created: function() {
      this.$store.dispatch('LookStandardCostProPlanTotalIndex', { standardcostid: 123 }).then(data => {
        // console.log(this.cost.$standardCost.viewIndicators, 12)
        this.tableData = data.projectIndicators[0].standardIndicatorDtoList
        this.tableData1 = data.projectIndicators[0].standardmatpriceDtoList
        this.tableData2 = data.projectIndicators[0].standardmunicipalearthDtoList
        this.tableData3 = data.projectIndicators[0].standardviewindicatorDtoList
        this.tableData4 = data.projectIndicators[0].standardearthworkDtoList
      })
      this.$store.dispatch('LookCmprotypeAreaForDto', { standardcostid: 123 }).then(data => {
        this.data = data.cmStandardProtypeAreaSearchVoList
      })
      this.$store.dispatch('LookProtypeAttributeDto', { standardcostid: 123 }).then(data => {
        this.data1 = data.cmStandardProtypeAttributeVoList
      })
    },
    methods: {
      ...mapActions(['GetSpecialItem', 'CalculateCost', 'SaveSpecialItem']),
      // 行选中回调，判断是否可以增加
      handleCurrentChange(val) {
        this.selectValue = val
        this.addBtnFlag = true
        this.delBtnFlag = true
        if (this.selectValue && this.selectValue.addFlag) {
          this.delBtnFlag = false
          this.addBtnFlag = false
        } else {
          if (val && val.level === 1) {
            console.log('第一层不可添加')
          } else {
            this.findIndex(this.data, val)
          }
        }
      },
      findIndex(item, value) {
        var haveChildrenFlag = true
        var lastChildrenFlag = false
        for (let i = 0; i < item.length; i++) {
          if (value && item[i]) {
            if (value.id === item[i].id) { // 判断是否id相等，为找到i
              if ((item.length - 1) === i) { // 判断是否为最后一项
                lastChildrenFlag = true
              }
            }
          }
          if (item[i].children) {
            if (item[i].children.length > 0) {
              this.findIndex(item[i].children, value)
            }
            haveChildrenFlag = false
          }
          // 如果同级没有子级，并且是最后一项，新增按钮可以点击
          if (haveChildrenFlag && lastChildrenFlag) {
            this.addBtnFlag = false
          }
        }
      },
      // 增加方法
      addSpecialItem() {
        this.findSpecialItem(this.data, this.selectValue.id)
      },
      // 递归查询，符合条件的项增加
      findSpecialItem(item, id) {
        for (let i = 0; i < item.length; i++) {
          if (id === item[i].id) {
            var itemCopy = this.addCostCode(item[i])
            item.push(
              {
                id: `${this.idFlag++}`,
                costcode: itemCopy, // 唯一标识
                checked: false,
                costcodename: '',
                budgetvariable: '',
                specialunit: '',
                calculationRule: '',
                budgetCost: '',
                budgetUnitPrice: '',
                actualCost: '',
                referenceunitprice: '',
                remark: '',
                event: '事件5',
                comment: '无',
                addFlag: true
              }
            )
            this.addBtnFlag = true
            console.log('成功')
          }
          if (item[i].children) {
            if (item[i].children.length > 0) {
              this.findSpecialItem(item[i].children, id)
            }
          }
        }
      },
      // 序号+1
      addCostCode(item) {
        var itemCopy = item.costcode.split('.')
        var num = parseInt(itemCopy[itemCopy.length - 1].substring(0, itemCopy.length - 1)) + 1
        itemCopy.pop()
        if (num < 10) {
          num = '0' + num
        }
        itemCopy.push(num + ')')
        itemCopy = itemCopy.join('.')
        return itemCopy
      },
      // 删除方法
      delSpecialItem() {
        this.delSelectItem(this.data, this.selectValue.id)
      },
      // 递归找到位置，删除方法
      delSelectItem(item, id) {
        for (let i = 0; i < item.length; i++) {
          if (id === item[i].id) {
            item.splice(item.length - 1, 1)
            break
          }
          if (item[i].children) {
            if (item[i].children.length > 0) {
              this.delSelectItem(item[i].children, id)
            }
          }
        }
      },
      // 层级选项控制
      changeLevel(level) {
        console.log(level)
        this.level = level
      },
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePreview(file) {
        console.log(file + '蜘蛛人')
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 $ { file.name }？`)
      },
      beforeAvatarUpload(file) {
        var testmsg = file.name.substring(file.name.lastIndexOf('.') + 1)
        const extension = testmsg === 'xls'
        const extension2 = testmsg === 'xlsx'
        const isLt2M = file.size / 1024 / 1024 < 10
        if (!extension && !extension2) {
          this.$message({
            message: '上传文件只能是 xls、xlsx格式!',
            type: 'warning'
          })
        }
        if (!isLt2M) {
          this.$message({
            message: '上传文件大小不能超过 10MB!',
            type: 'warning'
          })
        }
        return extension || extension2 && isLt2M
      }
    }
  }
</script>

<style scoped>
  .font-center {
    text-align: center;
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
