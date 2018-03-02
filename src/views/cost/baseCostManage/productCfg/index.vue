<template>
  <div style="position: relative;padding: 8px">
    <div style="position: absolute;top:4px;right:40px;z-index: 1;">
      <el-button type="primary" size="small">保存</el-button>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="高层" name="first">
        <div>
          <div style="margin: 15px;">
            <el-col :span="16">
              <div style="width: 60%;">
                <span>层级选项：</span>
                <div style=" margin-left: 100px;margin-top: -30px">
                  <el-slider v-model="value8" :step="1" :max="5" :min="1" show-stops show-input></el-slider>
                </div>
              </div>
            </el-col>
          </div>
          <el-table highlight-current-row :data="tableData" border
                    :header-cell-style="{background:'#7A86A7',color:'#FFF',borderColor:'rgb(116, 127, 154)'}">
            <el-table-column prop="oneNum" label="产品配置标准" align="center"></el-table-column>
            <el-table-column prop="twoNum" label="价格基数" align="center"></el-table-column>
            <el-table-column prop="unit" label="单位" align="center"></el-table-column>
            <el-table-column prop="referencePrice" label="配置" align="center"></el-table-column>
            <el-table-column prop="gradeStandardConfig" label="标准配置" align="center"></el-table-column>
            <el-table-column prop="config" label="参考价格上限" align="center"></el-table-column>
            <el-table-column prop="practicalPrice" label="实际配置" align="center"></el-table-column>
            <el-table-column prop="practicalPrice" label="实际价格" align="center"></el-table-column>
            <el-table-column prop="gradePracticalConfig" label="备注" align="center"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <!--<el-tab-pane label="花园洋房（9层以下）" name="second"></el-tab-pane>-->
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: 'productCfg',
    data() {
      return {
        value8: 0,
        tableData: [
          {
            oneNum: '门窗、百叶',    // 一级
            twoNum: '外窗形式',   // 二级
            threeNum: '门窗面积',    // 三级
            price: '门窗面积',    // 价格
            unit: '元/m',    // 单位
            config: '配置', // 配置
            standardConfig: '型材：优选塑钢供给、铝合金', // 标准配置
            referencePrice: '550', // 参考价格上限
            practicalConfig: '型材：优选塑钢供给、铝合金', // 实际配置
            practicalPrice: '1200',  // 实际价格
            gradeConfig: '',
            gradeStandardConfig: '型材：优选塑钢供给、铝合', // 标准配置
            gradeReferencePrice: '550', // 参考价格上限
            gradePracticalConfig: '型材：优选塑钢供给、铝合', // 实际配置
            gradePracticalPrice: '1200', // 实际价格
            remark: '备注' // 备注
          }
        ],
        activeName: 'first'
      }
    }
  }
</script>

<style scoped>
</style>
