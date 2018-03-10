<template>

  <div class="piecerow_main">
    <div class="piecerow">
      <el-tabs>
        <el-tab-pane label="高层">
          <div class="betweenBack"></div>
          <el-row>
            <el-col :span="16" class="card_section">
              <el-col :span="4" style="line-height: 2;font-size: 14px">层级选项：</el-col>
              <el-col :span="18" style="margin-left: -9%">
                <el-pagination background layout="pager" :current-page.sync="level" @current-change="changeLevel(level)"
                               :total="30"></el-pagination>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="10" :offset="14">
                <el-button size="mini" class="addBtn" @click="save">保存</el-button>
              </el-col>
            </el-col>
          </el-row>

          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="projectConfig" label="产品配置标准"></el-table-column>
            <el-table-column prop="price" label="价格基数"></el-table-column>
            <el-table-column prop="unit" label="单位"></el-table-column>
            <el-table-column prop="config" label="配置"></el-table-column>
            <el-table-column prop="standardConfig" label="标准配置"></el-table-column>
            <el-table-column prop="referencePrice" label="参考价格上限"></el-table-column>
            <el-table-column prop="remark" label="备注"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="花园洋房（9层以下）" disabled></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'productCfg',
    data() {
      return {
        value8: 0,
        level: 2,
        tableData: [
          {
            oneNum: '门窗、百叶', // 一级
            twoNum: '外窗形式', // 二级
            threeNum: '门窗面积', // 三级
            price: '门窗面积', // 价格
            unit: '元/m', // 单位
            config: '配置', // 配置
            standardConfig: '型材：优选塑钢供给、铝合金', // 标准配置
            referencePrice: '550', // 参考价格上限
            practicalConfig: '型材：优选塑钢供给、铝合金', // 实际配置
            practicalPrice: '1200', // 实际价格
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
      },
      // 层级选项控制
      changeLevel(level) {
        this.level = level
      }
    }
  }
</script>

<style scoped>
  /**
标题的背景色，和高度
*/
  .piecerow >>> .el-tabs__item.is-active {
    color: #7986a9;
  }

  .piecerow >>> .el-tabs__active-bar {
    background-color: #7986a9;
  }

  .piecerow >>> .el-tabs__item.is-active:hover {
    color: #7986a9;
  }

  .piecerow >>> .el-tabs__nav {
    margin-left: 10px;
  }

  .piecerow >>> .el-tabs__header {
    margin: 0;
  }

  .piecerow {
    background-color: white;
    margin-bottom: 10px;
    border-radius: 4px;
    color: #333;
    font-size: 14px;
  }

  .piecerow_main {
    background-color: #edf2f7;
    padding: 10px 10px 0 10px;
  }

  .investmentClass >>> .el-form-item__error {
    top: 90%;
  }

  /**
  高级查询样式
 */
  .investmentClass {
    font-size: 13px;
    border: 1px solid #D5D5D5;
    border-left-style: none;
    border-top-style: none;
    border-right-style: none;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  }

  /**
    高级查询,input样式调整
   */
  .investmentClass >>> .el-collapse-item__content {
    padding-bottom: 0;
    font-size: 12px;
    color: #333;
  }

  .investmentClass >>> .el-col-6, .el-col-5 {
    height: 40px;
  }

  .investmentClass >>> .el-collapse-item__arrow {
    position: absolute;
    right: 65px;
  }

  .betweenBack {
    height: 10px;
    background-color: #edf2f7;
  }
</style>
