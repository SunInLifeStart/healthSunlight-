<template>

  <div class="piecerow_main">
    <div class="piecerow">
      <el-tabs v-model="activeName">
        <el-tab-pane label="东城区" disabled></el-tab-pane>
        <el-tab-pane label="西城区"name="second" >
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
                <el-button size="mini" type="text" class="addBtn">保存</el-button>
              </el-col>
            </el-col>
          </el-row>
          <el-table :data="tableData" border size="small" style="width: 100%">
            <el-table-column prop="expenseItem" label="费项"></el-table-column>
            <el-table-column prop="basedOn" label="成本项目"></el-table-column>
            <el-table-column prop="chargeState" label="计算基础"></el-table-column>
            <el-table-column prop="feeBasis" label="收费说明"></el-table-column>
            <el-table-column prop="" align="center" label="收费依据"></el-table-column>
            <el-table-column prop="units" align="center" label="单位"></el-table-column>
            <el-table-column prop="" label="高层"></el-table-column>
            <el-table-column prop="" label="多层"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="海淀区" disabled></el-tab-pane>
      </el-tabs>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        activeName: 'second',
        level: 1,
        tableData: [
          {
            expenseItem: '01-2',
            costItems: '前期工程费',
            basedOn: '总建筑面积',
            chargeState: '住宅150元/平方米,非住宅220/平方米 （2014年2月28日前拿地项目，按照原收费标准——住宅90元/M2,非住宅140元/M2标准缴纳）',
            feeBasis: '杭价费[2014]32号',
            units: '元/m²',
            barrioOne: '1',
            barrioTwo: '2',
            barrioThree: '3',
            barrioFour: '4'
          }
        ]
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
