<template>
  <div>
    <span style="float: left; margin-top: 10px;">层级选项:</span>
    <div class="block" style="width: 500px;float: left; margin-left: 100px;">
      <el-slider v-model="value8" show-input :max="3" :min="1" show-stops></el-slider>
    </div>
    <div style="float: right">
      <el-button>新增</el-button>
      <el-button>删除</el-button>
      <el-button>保存</el-button>
    </div>
    <el-table :data="specialItem.totalIndex" border style="width: 100%">
      <el-table-column type="index" label="序号" width="80"></el-table-column>
      <!--<el-table-column prop="rank" label="级别" width="180"></el-table-column>-->
      <el-table-column prop="specialItem" label="特殊事项" width="180"></el-table-column>
      <el-table-column prop="estimated" label="估算变量"></el-table-column>
      <el-table-column prop="measurement" label="单位"></el-table-column>
      <el-table-column prop="estimated" label="估算规则"></el-table-column>
      <el-table-column prop="estimated" label="参考成本（万元）"></el-table-column>
      <el-table-column prop="estimatePrice" label="估算单价"></el-table-column>
      <el-table-column prop="estimatePrice" label="实际成本"></el-table-column>
      <el-table-column prop="estimatePrice" label="备注"></el-table-column>

      <!--<el-table-column prop="influenceEstimated" label="影响变量估算"></el-table-column>-->
      <!--<el-table-column prop="imputedCost" label="估算参考成本"></el-table-column>-->
      <!--<el-table-column prop="cost" label="最终成本"></el-table-column>-->
      <!--<el-table-column prop="remarks" label="备注"></el-table-column>-->
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value8: 0,
        specialItem: {
          totalIndex: [
            {
              rank: '1',
              specialItem: '开发成本',
              estimated: '19,050',
              measurement: '项',
              influenceEstimated: '1、高压线迁移费用差不多1000元/m',
              estimatePrice: '32E文',
              imputedCost: '223',
              cost: '322223',
              remarks: '做差值',
              children: [
                {
                  rank: '22',
                  specialItem: 'sda',
                  estimated: '19050',
                  measurement: '项',
                  influenceEstimated: '1、高压线迁移费用差不多1000元/m',
                  estimatePrice: '1111s',
                  imputedCost: '223',
                  cost: '322223',
                  remarks: '做差值',
                  children: [
                    {
                      rank: '23',
                      specialItem: 'sda',
                      estimated: '19050',
                      measurement: '项',
                      influenceEstimated: '1、高压线迁移费用差不多1000元/m',
                      estimatePrice: '1111s',
                      imputedCost: '223',
                      cost: '322223',
                      remarks: '做差值'
                    },
                    {
                      rank: '24',
                      specialItem: 'sda',
                      estimated: '19050',
                      measurement: '项',
                      influenceEstimated: '1、高压线迁移费用差不多1000元/m',
                      estimatePrice: '1111s',
                      imputedCost: '223',
                      cost: '322223',
                      remarks: '做差值'
                    }]
                },
                {
                  rank: '25',
                  specialItem: 'sda',
                  estimated: '19050',
                  measurement: '项',
                  influenceEstimated: '1、高压线迁移费用差不多1000元/m',
                  estimatePrice: '1111s',
                  imputedCost: '223',
                  cost: '322223',
                  remarks: '做差值'
                }
              ]
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>

</style>
