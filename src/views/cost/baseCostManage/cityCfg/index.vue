<template>
  <div>
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
            <el-col :span="8">
              <el-col :span="12">&nbsp</el-col>
              <el-col :span="12">
                <el-col :span="8"><el-button size="mini" @click="save">保存</el-button></el-col>
              </el-col>
            </el-col>
          </div>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="projectConfig" label="产品配置标准"></el-table-column>
            <el-table-column prop="price" label="价格基数"></el-table-column>
            <el-table-column prop="unit" label="单位"></el-table-column>
            <el-table-column prop="config" label="配置"></el-table-column>
            <el-table-column prop="standardConfig" label="标准配置"></el-table-column>
            <el-table-column prop="referencePrice" label="参考价格上限"></el-table-column>
            <el-table-column prop="remark" label="备注"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane disabled label="花园洋房（9层以下）" name="second"></el-tab-pane>
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
    },
    methods: {
      /**
       * 保存提示
       */
      save() {
        this.$confirm('是否要保存数据？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '保存成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消保存!'
          })
        })
      }
    }
  }
</script>

<style scoped>
</style>
