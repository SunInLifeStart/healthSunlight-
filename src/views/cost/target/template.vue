<template>
  <div>
    <el-row>
      <el-col :span="7" :offset="17" style="margin-bottom: 5px">
        <el-button>发起审批</el-button>
        <el-button>导出</el-button>
        <el-button>保存</el-button>
      </el-col>
    </el-row>
    <span style="float: left; margin-top: 10px;">层级选项:</span>
    <div class="block" style="width: 500px;float: left; margin-left: 100px;">
      <el-slider v-model="value8" show-input :max="3" :min="1" show-stops></el-slider>
    </div>
    <el-table
      border
      size="small"
      :data="temp.table"
      style="width: 99%">
      <el-table-column
        prop="hierarchy"
        label="层级"
        >
      </el-table-column>
      <el-table-column
        prop="accountCode"
        label="成本科目名称"
        >
      </el-table-column>
      <el-table-column
        prop="listingModule"
        label="清单模块">
      </el-table-column>
      <el-table-column
        prop="moduleName"
        label="模块名称">
      </el-table-column>
      <el-table-column
        prop="formats"
        label="业态">
      </el-table-column>
      <el-table-column
        prop="isStart"
        label="是否启用">
      </el-table-column>
      <el-table-column
        prop="shareWay"
        label="分摊方式">
      </el-table-column>
      <el-table-column
        prop="use"
        label="使用方式">
      </el-table-column>
      <el-table-column
        prop="assessment"
        label="跨期分摊方式">
      </el-table-column>
      <el-table-column
        prop=""
        label="原始指标">
      </el-table-column>
      <el-table-column
        prop="serviceFee"
        label="建造技术服务费">
      </el-table-column>
      <el-table-column
        prop=""
        label="科目大类">
      </el-table-column>
      <el-table-column
        prop=""
        label="核算明细">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value8: 0,
        temp: {
          table: [{
            hierarchy: '1',
            accountCode: '1-1',
            listingModule: 'GYQ',
            moduleName: '高压线迁移',
            formats: '通用',
            isStart: '是',
            shareWay: '占地面积',
            use: '共用',
            assessment: '占地面积比',
            serviceFee: '否'
          }]
        }
      }
    }
  }
</script>

<style scoped>

</style>
