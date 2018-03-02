<template>
  <el-tabs type="border-card">
    <el-tab-pane label="高层">
    <span style="float: left; margin-top: 10px;">层级选项:</span>
    <div class="block" style="width: 500px;float: left; margin-left: 100px;">
      <el-slider v-model="value8" show-input :max="3" :min="1" show-stops></el-slider>
    </div>
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
    <div style="float: right">
        <el-button>保存</el-button>
    </div>
    <el-table :data="cfg.table" size="small" border highlight-current-row style="width: 100%">
      <el-table-column property="address" align="center" label="产品配置标准"></el-table-column>
      <el-table-column property="priceBasis" label="价格基数" width="120"></el-table-column>
      <el-table-column property="units" label="单位" width="120"></el-table-column>
      <el-table-column property="towerDeploy" label="配置" width="120"></el-table-column>
      <el-table-column property="towerStandardLayout" label="标准配置" width="120"></el-table-column>
      <el-table-column property="towerPriceCeiling" label="参考价格上限" width="120"></el-table-column>
      <el-table-column property="towerActualAllocation" label="实际配置" width="120">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="showFlag = true">{{scope.row.towerActualAllocation}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prperty="towerRealPrice" label="实际价格" width="120"></el-table-column>
      <el-table-column prperty="towerRealPrice" label="备注" width="120"></el-table-column>

      <!--<el-table-column property="name" label="高层" width="120">-->
      <!--</el-table-column>-->
      <!--<el-table-column property="date" label="花园洋房（9层以下）">-->
      <!--<el-table-column property="gardenHouseDeploy" label="配置" width="120"></el-table-column>-->
      <!--<el-table-column property="gardenHouseStandardLayout" label="标准配置" width="120"></el-table-column>-->
      <!--<el-table-column property="gardenHousePriceCeiling" label="参考价格上限" width="120"></el-table-column>-->
      <!--<el-table-column property="gardenHouseActualAllocation" label="实际配置"></el-table-column>-->
      <!--<el-table-column property="gardenHouseRealPrice" label="实际价格" width="120"></el-table-column>-->
      <!--</el-table-column>-->

      </el-table>
     </el-tab-pane>
    <el-tab-pane label="花园洋房（9层以下）"></el-tab-pane>
  </el-tabs>

</template>
<script>
  export default {
    data() {
      return {
        value8: 0,
        cfg: {
          table: [
            {
              CGDCCOne: '外立面',
              CGDCCTwo: '门窗、百页',
              CGDCCThree: '门窗',
              priceBasis: '门窗面积',
              units: '元/m²',
              towerDeploy: 'P3',
              towerStandardLayout: '型材：铝合金：坚朗',
              towerPriceCeiling: '550',
              towerActualAllocation: '五金：坚朗',
              towerRealPrice: '1200',
              gardenHouseDeploy: 'P3',
              gardenHouseStandardLayout: '铝合金五金：坚朗',
              gardenHousePriceCeiling: '600',
              gardenHouseActualAllocation: '铝合金',
              gardenHouseRealPrice: '1200'
            },
            {
              CGDCCOne: '外立面',
              CGDCCTwo: '门窗、百页',
              CGDCCThree: '门窗',
              priceBasis: '门窗面积',
              units: '元/m²',
              towerDeploy: 'P3',
              towerStandardLayout: '型材：铝合金：坚朗',
              towerPriceCeiling: '550',
              towerActualAllocation: '五金：坚朗',
              towerRealPrice: '1200',
              gardenHouseDeploy: 'P3',
              gardenHouseStandardLayout: '铝合金五金：坚朗',
              gardenHousePriceCeiling: '600',
              gardenHouseActualAllocation: '铝合金',
              gardenHouseRealPrice: '1200'
            }
          ]
        },
        showFlag: false,
        radio: ''
      }
    },
    methods: {
      radioEvent() {
        this.showFlag = false
        this.adapterSelected = this.radio
      },
      open() {
        this.$alert('这是一段内容', '外立面门窗配置', {
          confirmButtonText: '确定'
        })
      }
    }
  }
</script>

<style scoped>

</style>
