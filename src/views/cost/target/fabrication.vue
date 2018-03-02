<template>
  <div>
    <!--业态分摊-->
    <el-dialog title="" :visible.sync="dialogTableVisible">
      <div>目标成本金额（元）：123123</div>
      <el-table :data="tableData3" border>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column property="name" label="业态"></el-table-column>
        <el-table-column property="name" label="实际建筑面积"></el-table-column>
        <el-table-column property="name" label="按实际建筑面积分摊金额"></el-table-column>
      </el-table>
    </el-dialog>
    <el-tabs type="border-card">
      <el-tab-pane label="地基与基础工程">
        <el-button @click="dialogTableVisible = true">业态分摊</el-button>
        <el-button>导入A项目</el-button>
        <el-button>计算并保存</el-button>
        <el-table :data="tableData3" height="250" border highlight-current-row style="width: 100%">
          <el-table-column prop="costItem" label="费项"></el-table-column>
          <el-table-column prop="costProject." label="成本项目"></el-table-column>
          <!--<el-table-column prop="definitionIndicator" label="原始指标说明"></el-table-column>-->
          <el-table-column prop="activityBased" label="原始指标说明">
            <el-table-column prop="price" label="说明"></el-table-column>
            <el-table-column prop="coefficient" label="数值"></el-table-column>
          </el-table-column>
          <el-table-column prop="activityBased" label="系数">
            <el-table-column prop="price" label="数值"></el-table-column>
            <el-table-column prop="coefficient" label="单位"></el-table-column>
          </el-table-column>
          <el-table-column prop="activityBased" label="工程量">
            <el-table-column prop="price" label="数值"></el-table-column>
            <el-table-column prop="coefficient" label="单位"></el-table-column>
          </el-table-column>
          <el-table-column prop="price" label="单价(元)"></el-table-column>
          <el-table-column prop="total" label="合价(万元)"></el-table-column>
          <el-table-column prop="constructionTime" label="建筑面积平米造价(元/平米)"></el-table-column>
          <el-table-column prop="actualConstruction" label="实际建筑面积平米造价(元/平米)"></el-table-column>
          <el-table-column prop="canRental" label="可售建设面积平米造价（元/平米）"></el-table-column>
          <el-table-column prop="activityBased" label="基准成本">
            <el-table-column prop="price" label="系数"></el-table-column>
            <el-table-column prop="coefficient" label="单价"></el-table-column>
          </el-table-column>
          <el-table-column prop="aProject" label="A项目">
            <el-table-column prop="price" label="系数"></el-table-column>
            <el-table-column prop="coefficient" label="单价"></el-table-column>
          </el-table-column>
          <!--<el-table-column prop="workAmount" label="工程量"></el-table-column>-->
          <!--<el-table-column prop="unit" label="单位"></el-table-column>-->
          <!--<el-table-column prop="noSpecialIssue" label="(合价)不含特殊事项"></el-table-column>-->
          <!--<el-table-column prop="specialIssue" label="特殊事项"></el-table-column>-->
          <el-table-column prop="costDescription" label="成本费用说明（不能改）"></el-table-column>
          <el-table-column prop="costDescription" label="备注"></el-table-column>
        </el-table>
      </el-tab-pane>
      <!--高层列表-->
      <el-tab-pane label="高层">
        <span style="float: left">层级选项</span>
        <div class="block" style="width: 500px;float: left; margin-left: 100px;">
          <el-slider v-model="value8" show-input :max="6" :min="1" show-stops></el-slider>
        </div>
        <el-button @click="dialogTableVisible = true">计算</el-button>
        <el-button>保存</el-button>
        <el-table :data="tableData3" height="250" border highlight-current-row style="width: 100%">
        <el-table-column prop="costItem" label="费项"></el-table-column>
        <el-table-column prop="costProject." label="成本项目"></el-table-column>
        <!--<el-table-column prop="definitionIndicator" label="原始指标说明"></el-table-column>-->
        <el-table-column prop="activityBased" label="原始指标说明">
          <el-table-column prop="price" label="说明"></el-table-column>
          <el-table-column prop="coefficient" label="数值"></el-table-column>
        </el-table-column>
        <el-table-column prop="activityBased" label="系数">
          <el-table-column prop="price" label="数值"></el-table-column>
          <el-table-column prop="coefficient" label="单位"></el-table-column>
        </el-table-column>
        <el-table-column prop="activityBased" label="工程量">
          <el-table-column prop="price" label="数值"></el-table-column>
          <el-table-column prop="coefficient" label="单位"></el-table-column>
        </el-table-column>
        <el-table-column prop="price" label="单价(元)"></el-table-column>
        <el-table-column prop="total" label="合价(万元)"></el-table-column>
        <el-table-column prop="constructionTime" label="建筑面积平米造价(元/平米)"></el-table-column>
        <el-table-column prop="actualConstruction" label="实际建筑面积平米造价(元/平米)"></el-table-column>
        <el-table-column prop="canRental" label="可租售建设平米造价(元/平米)"></el-table-column>
        <el-table-column prop="activityBased" label="基准成本">
          <el-table-column prop="price" label="系数"></el-table-column>
          <el-table-column prop="coefficient" label="单价"></el-table-column>
        </el-table-column>
        <!--<el-table-column prop="workAmount" label="工程量"></el-table-column>-->
        <!--<el-table-column prop="unit" label="单位"></el-table-column>-->
        <!--<el-table-column prop="noSpecialIssue" label="(合价)不含特殊事项"></el-table-column>-->
        <!--<el-table-column prop="specialIssue" label="特殊事项"></el-table-column>-->
        <el-table-column prop="costDescription" label="成本费用说明（不能改）"></el-table-column>
        <el-table-column prop="costDescription" label="备注（测算说明）"></el-table-column>
      </el-table>
      </el-tab-pane>
      <!--洋房-->
      <el-tab-pane label="洋房">
        <span style="float: left">层级选项</span>
        <div class="block" style="width: 500px;float: left; margin-left: 100px;">
          <el-slider v-model="value8" show-input :max="6" :min="1" show-stops></el-slider>
        </div>
        <el-table :data="tableData3" height="250" border highlight-current-row style="width: 100%">
          <el-table-column prop="costItem" label="费项"></el-table-column>
          <el-table-column prop="costProject." label="成本项目"></el-table-column>
          <!--<el-table-column prop="definitionIndicator" label="原始指标说明"></el-table-column>-->
          <el-table-column prop="activityBased" label="原始指标说明">
            <el-table-column prop="price" label="说明"></el-table-column>
            <el-table-column prop="coefficient" label="数值"></el-table-column>
          </el-table-column>
          <el-table-column prop="activityBased" label="系数">
            <el-table-column prop="price" label="数值"></el-table-column>
            <el-table-column prop="coefficient" label="单位"></el-table-column>
          </el-table-column>
          <el-table-column prop="activityBased" label="工程量">
            <el-table-column prop="price" label="数值"></el-table-column>
            <el-table-column prop="coefficient" label="单位"></el-table-column>
          </el-table-column>
          <el-table-column prop="price" label="单价(元)"></el-table-column>
          <el-table-column prop="total" label="合价(万元)"></el-table-column>
          <el-table-column prop="constructionTime" label="建筑面积平米造价(元/平米)"></el-table-column>
          <el-table-column prop="actualConstruction" label="实际建筑面积平米造价(元/平米)"></el-table-column>
          <el-table-column prop="canRental" label="可租售平米造价(元/平米)"></el-table-column>
          <el-table-column prop="activityBased" label="基准成本">
            <el-table-column prop="price" label="系数"></el-table-column>
            <el-table-column prop="coefficient" label="单价"></el-table-column>
          </el-table-column>
          <!--<el-table-column prop="workAmount" label="工程量"></el-table-column>-->
          <!--<el-table-column prop="unit" label="单位"></el-table-column>-->
          <!--<el-table-column prop="noSpecialIssue" label="(合价)不含特殊事项"></el-table-column>-->
          <!--<el-table-column prop="specialIssue" label="特殊事项"></el-table-column>-->
          <el-table-column prop="costDescription" label="成本费用说明"></el-table-column>
          <el-table-column prop="costDescription" label="备注"></el-table-column>
        </el-table>
      </el-tab-pane>
      <!--非人防车库-->
      <el-tab-pane label="非人防车库">
        <span style="float: left">层级选项</span>
        <div class="block" style="width: 500px;float: left; margin-left: 100px;">
          <el-slider v-model="value8" show-input :max="6" :min="1" show-stops></el-slider>
        </div>
        <el-table :data="tableData3" height="250" border highlight-current-row style="width: 100%">
          <el-table-column prop="costItem" label="费项"></el-table-column>
          <el-table-column prop="costProject." label="成本项目"></el-table-column>
          <!--<el-table-column prop="definitionIndicator" label="原始指标说明"></el-table-column>-->
          <el-table-column prop="activityBased" label="原始指标说明">
            <el-table-column prop="price" label="说明"></el-table-column>
            <el-table-column prop="coefficient" label="数值"></el-table-column>
          </el-table-column>
          <el-table-column prop="activityBased" label="系数">
            <el-table-column prop="price" label="数值"></el-table-column>
            <el-table-column prop="coefficient" label="单位"></el-table-column>
          </el-table-column>
          <el-table-column prop="activityBased" label="工程量">
            <el-table-column prop="price" label="数值"></el-table-column>
            <el-table-column prop="coefficient" label="单位"></el-table-column>
          </el-table-column>
          <el-table-column prop="price" label="单价(元)"></el-table-column>
          <el-table-column prop="total" label="合价(万元)"></el-table-column>
          <el-table-column prop="constructionTime" label="建筑面积平米造价(元/平米)"></el-table-column>
          <el-table-column prop="actualConstruction" label="实际建筑面积平米造价(元/平米)"></el-table-column>
          <el-table-column prop="canRental" label="可租售平米造价(元/平米)"></el-table-column>
          <el-table-column prop="activityBased" label="基准成本">
            <el-table-column prop="price" label="系数"></el-table-column>
            <el-table-column prop="coefficient" label="单价"></el-table-column>
          </el-table-column>
          <!--<el-table-column prop="workAmount" label="工程量"></el-table-column>-->
          <!--<el-table-column prop="unit" label="单位"></el-table-column>-->
          <!--<el-table-column prop="noSpecialIssue" label="(合价)不含特殊事项"></el-table-column>-->
          <!--<el-table-column prop="specialIssue" label="特殊事项"></el-table-column>-->
          <el-table-column prop="costDescription" label="成本费用说明"></el-table-column>
          <el-table-column prop="costDescription" label="备注"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="人防车库">
        <span style="float: left">层级选项</span>
        <div class="block" style="width: 500px;float: left; margin-left: 100px;">
          <el-slider v-model="value8" show-input :max="6" :min="1" show-stops></el-slider>
        </div>
        <el-table :data="tableData3" height="250" border highlight-current-row style="width: 100%">
          <el-table-column prop="costItem" label="费项"></el-table-column>
          <el-table-column prop="costProject." label="成本项目"></el-table-column>
          <!--<el-table-column prop="definitionIndicator" label="原始指标说明"></el-table-column>-->
          <el-table-column prop="activityBased" label="原始指标说明">
            <el-table-column prop="price" label="说明"></el-table-column>
            <el-table-column prop="coefficient" label="数值"></el-table-column>
          </el-table-column>
          <el-table-column prop="activityBased" label="系数">
            <el-table-column prop="price" label="数值"></el-table-column>
            <el-table-column prop="coefficient" label="单位"></el-table-column>
          </el-table-column>
          <el-table-column prop="activityBased" label="工程量">
            <el-table-column prop="price" label="数值"></el-table-column>
            <el-table-column prop="coefficient" label="单位"></el-table-column>
          </el-table-column>
          <el-table-column prop="price" label="单价(元)"></el-table-column>
          <el-table-column prop="total" label="合价(万元)"></el-table-column>
          <el-table-column prop="constructionTime" label="建筑面积平米造价(元/平米)"></el-table-column>
          <el-table-column prop="actualConstruction" label="实际建筑面积平米造价(元/平米)"></el-table-column>
          <el-table-column prop="canRental" label="可租售平米造价(元/平米)"></el-table-column>
          <el-table-column prop="activityBased" label="基准成本">
            <el-table-column prop="price" label="系数"></el-table-column>
            <el-table-column prop="coefficient" label="单价"></el-table-column>
          </el-table-column>
          <!--<el-table-column prop="workAmount" label="工程量"></el-table-column>-->
          <!--<el-table-column prop="unit" label="单位"></el-table-column>-->
          <!--<el-table-column prop="noSpecialIssue" label="(合价)不含特殊事项"></el-table-column>-->
          <!--<el-table-column prop="specialIssue" label="特殊事项"></el-table-column>-->
          <el-table-column prop="costDescription" label="成本费用说明"></el-table-column>
          <el-table-column prop="costDescription" label="备注"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: 'constructionBudget',
    data() {
      return {
        value8: 0,
        tableData3: [{
          costItem: '01'
        }],
        dialogTableVisible: false
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>
