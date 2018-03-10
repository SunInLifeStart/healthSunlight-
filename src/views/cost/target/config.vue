<template>
  <el-tabs>
    <el-tab-pane label="高层">
      <div>
        <el-col :span="16" class="card_section">
          <div style="width: 60%;">
            <div class="hierarchy">层级选项：</div>
            <div class="paging">
              <el-pagination
                background
                layout="pager"
                :current-page.sync="level"
                @current-change="changeLevel(level)"
                :total="30">
              </el-pagination>
            </div>
          </div>
        </el-col>
        <el-col :span="8" class="spanClass">
          <el-col :span="14">&nbsp</el-col>
          <el-col :span="10">
            <el-button size="mini" type="text" class="addBtn">保存</el-button>
          </el-col>
        </el-col>
      </div>
      <!--弹框-->
      <el-dialog title="外立面门窗配置" :visible.sync="showFlag" style="width:130%;left:-145px">
        <p style="margin: 0 10px 10px 20px;float: right">单价 : 578元/平方米</p>
        <p style="margin: 0;float: right">计算方式 : 外窗洞口面积单方</p>
        <el-table
          border
          size="small"
          style="width: 99%">
          <el-table-column
            type="index"
            label="序号"
          >
          </el-table-column>
          <el-table-column
            prop=""
            label="类别"
          >
          </el-table-column>
          <el-table-column
            prop=""
            label="材料/品牌名称">
          </el-table-column>
          <el-table-column
            prop=""
            label="规格/型号">
          </el-table-column>
          <el-table-column
            prop=""
            label="净用量">
          </el-table-column>
          <el-table-column
            prop=""
            label="损耗率（%）">
          </el-table-column>
          <el-table-column
            prop=""
            label="用量">
          </el-table-column>
          <el-table-column
            prop=""
            label="单位">
          </el-table-column>
          <el-table-column
            prop=""
            label="单价（元）">
          </el-table-column>
          <el-table-column
            prop=""
            label="金额（元）">
          </el-table-column>
          <el-table-column
            prop=""
            label="备注">
          </el-table-column>
        </el-table>
      </el-dialog>
      <!--表格-->
      <!--<el-table :data="$cost.targetCost.projectConfigurationSchedule" size="small" border highlight-current-row style="width: 100%">-->
        <!--<el-table-column property="address" align="center" label="产品配置标准"></el-table-column>-->
        <!--<el-table-column property="priceBasis" label="价格基数" width="120"></el-table-column>-->
        <!--<el-table-column property="units" label="单位" width="120"></el-table-column>-->
        <!--<el-table-column property="towerDeploy" label="配置" width="120"></el-table-column>-->
        <!--<el-table-column property="towerStandardLayout" label="标准配置" width="120"></el-table-column>-->
        <!--<el-table-column property="towerPriceCeiling" label="参考价格上限" width="120"></el-table-column>-->
        <!--<el-table-column property="towerActualAllocation" label="实际配置" width="120">-->
          <!--<template slot-scope="scope">-->
            <!--<el-button type="text" size="small" @click="showFlag = true">{{scope.row.towerActualAllocation}}</el-button>-->
          <!--</template>-->
        <!--</el-table-column>-->
        <!--<el-table-column prperty="towerRealPrice" label="实际价格" width="120"></el-table-column>-->
        <!--<el-table-column prperty="towerRealPrice" label="备注" width="120"></el-table-column>-->
      <!--</el-table>-->

      <tree-table :data="$cost.targetCost.projectConfigurationSchedule" :columns="columns"
                  :type="'col'" :rowCallback="handleCurrentChange" :evalFunc="func" :evalArgs="args"
                  :stripe="true" :showLevel='level' border>
      </tree-table>
    </el-tab-pane>
    <el-tab-pane label="花园洋房（9层以下）"></el-tab-pane>
  </el-tabs>

</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  import treeTable from '@/components/TreeTable'
  import treeToArray from '@/components/treeTable/customEval'
  export default {
    data() {
      return {
        showFlag: false,
        radio: '',
        level: 1,
        columns: [
          {
            title: '产品配置标准',
            value: 'productconfig',
            type: 'text',
            width: 200,
            fixed: 'left'
          }, {
            title: '价格基数',
            value: 'pricebasedata',
            type: 'text',
            width: 100
          }, {
            title: '单位',
            value: 'dataunit',
            type: 'text',
            width: 100
          }, {
            title: '配置',
            value: 'constructconfig',
            type: 'text',
            width: 100
          }, {
            title: '标准配置',
            value: 'standardconfig',
            type: 'text',
            width: 200
          }, {
            title: '参考价格上限',
            value: 'referenceprice',
            type: 'text',
            width: 100
          }, {
            title: '实际配置',
            value: 'actualconfig',
            type: 'input',
            width: 200,
            colClass: 'bg_lightBlue'
          }, {
            title: '实际价格',
            value: 'actualprice',
            type: 'input',
            width: 100,
            colClass: 'bg_lightBlue'
          }, {
            title: '备注',
            value: 'remark',
            type: 'input',
            width: 100,
            colClass: 'bg_lightBlue'
          }
        ],
        func: treeToArray,
        args: [null, null, true, 'timeLine']
      }
    },
    computed: {
      ...mapGetters([
        '$cost'
      ])
    },
    created() {
      this.getProjectConfigurationSchedule()
    },
    methods: {
      ...mapActions([
        'getProjectConfigurationSchedule'
      ]),
      radioEvent() {
        this.showFlag = false
        this.adapterSelected = this.radio
      },
      open() {
        this.$alert('这是一段内容', '外立面门窗配置', {
          confirmButtonText: '确定'
        })
      },
      // 层级选项控制
      changeLevel(level) {
        console.log(level)
        this.level = level
      },
      handleCurrentChange(val) {
        this.selectValue = val
        this.addBtnFlag = true
        this.delBtnFlag = true
        if (this.selectValue && this.selectValue.addFlag) {
          this.delBtnFlag = false
          this.addBtnFlag = false
        }
      }
    },
    components: { treeTable }
  }
</script>

<style scoped>
  .paging{
    margin-left: 80px;
    margin-top: -23px;
    margin-bottom: 10px;
  }
  /**
    层级选项
   */
  .hierarchy{
    margin-left: 10px;
    font-size: 14px;
  }
</style>
