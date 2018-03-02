<template>
  <div>
    <span style="float: left">层级选项</span>
    <div class="block" style="width: 500px;float: left; margin-left: 100px;">
      <el-slider v-model="value8" show-input :max="6" :min="1" show-stops></el-slider>
    </div>
    <div style="float: right">
      <el-button @click="dialogTableVisible = true">引入参考项</el-button>
      <el-button>计算并保存</el-button>
      <!--<el-button>发起审批</el-button>-->
    </div>
    <!--引入参考项-->
    <el-dialog title="" :visible.sync="dialogTableVisible">
      <el-row :gutter="24">
        <el-form :model="form">
          <el-col :span="8">
            <el-form-item label="组织机构" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="项目名称" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="分期" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>

      <el-table :data="tableData3" border>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column property="name" label="创建时间"></el-table-column>
        <el-table-column property="address" label="城市"></el-table-column>
        <el-table-column property="address" label="区域"></el-table-column>
        <el-table-column property="address" label="地块编号"></el-table-column>
        <el-table-column property="address" label="地块名称"></el-table-column>
        <el-table-column property="address" label="方案名称"></el-table-column>
        <el-table-column property="address" label="地块面积"></el-table-column>
        <el-table-column property="address" label="金额"></el-table-column>
        <el-table-column property="address" label="管理口径单方"></el-table-column>
        <el-table-column property="address" label="财务口径单方"></el-table-column>
        <el-table-column property="address" label="经办人"></el-table-column>
      </el-table>
    </el-dialog>

    <el-table :data="tableData3" height="250" border highlight-current-row style="width: 100%">
      <el-table-column prop="costItem" label="费项"></el-table-column>
      <el-table-column prop="costProject." label="成本项目"></el-table-column>
      <el-table-column prop="definitionIndicator" label="原始指标说明"></el-table-column>
      <el-table-column prop="workAmount" label="工程量"></el-table-column>
      <el-table-column prop="unit" label="单位"></el-table-column>
      <el-table-column prop="price" label="单价(元)"></el-table-column>
      <el-table-column prop="total" label="合价(万元)"></el-table-column>
      <el-table-column prop="constructionTime" label="建筑面积平米造价(元/平米)"></el-table-column>
      <el-table-column prop="actualConstruction" label="实际建筑面积平米造价(元/平米)"></el-table-column>
      <!--<el-table-column prop="noSpecialIssue" label="(合价)不含特殊事项"></el-table-column>-->
      <!--<el-table-column prop="specialIssue" label="特殊事项"></el-table-column>-->
      <el-table-column prop="canRental" label="可租售平米造价(元/平米)"></el-table-column>
      <el-table-column prop="activityBased" label="基准成本">
        <el-table-column prop="price" label="单价"></el-table-column>
        <!--<el-table-column prop="coefficient" label="系数"></el-table-column>-->
      </el-table-column>
      <el-table-column prop="aProject" label="丁桥名景台一期">
        <el-table-column prop="price" label="单价"></el-table-column>
        <!--<el-table-column prop="coefficient" label="系数"></el-table-column>-->
      </el-table-column>
      <el-table-column prop="costDescription" label="成本费用说明"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'noConstructionBudget',
    data() {
      return {
        tableData3: [{
          costItem: '01'
        }],
        dialogTableVisible: false,
        value8: 0,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>
