<template>
  <div>
    <el-col :span="14">
      <div style="width: 60%;">
        <span>层级选项：</span>
        <div style=" margin-left: 100px;margin-top: -20px">
          <el-pagination
            background
            layout="pager"
            :current-change="GetSpecialItem()"
            :total="30">
          </el-pagination>
        </div>
      </div>
    </el-col>
    <el-table
      :data="caliberAlloc.table"
      :span-method="objectSpanMethod"
      size="small"
      border
      style="width: 100%;text-align: center">
      <el-table-column
        fixed
        prop="shareContent"
        label="分摊内容">
      </el-table-column>
      <el-table-column
        fixed
        width="180"
        prop="itemizedContent"
        label="细项分摊内容">
      </el-table-column>
      <el-table-column
        prop="highRise"
        width="180"
        label="高层（18层以上，但<100M)">
      </el-table-column>
      <el-table-column
        prop="townhouse"
        width="180"
        label="联排别墅">
      </el-table-column>
      <el-table-column
        prop="salesBusiness"
        width="180"
        label="销售商业">
      </el-table-column>
      <el-table-column
        prop="carport"
        width="180"
        label="非人防车库">
      </el-table-column>
      <el-table-column
        prop="total"
        width="180"
        label="合计(m2，万元)">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        caliberAlloc: {
          table: [
            {
              shareContent: '规划指标（m2)',
              itemizedContent: '用地面积',
              highRise: '39,073',
              townhouse: '0%',
              salesBusiness: '3',
              carport: '3',
              total: '39,073'
            },
            {
              shareContent: '',
              itemizedContent: '可租售面积',
              highRise: '91,800',
              townhouse: '10.71%',
              salesBusiness: '10.71%',
              carport: '10.71%',
              total: '180,151'
            },
            {
              shareContent: '',
              itemizedContent: '其中：地上可租售',
              highRise: '91,800',
              townhouse: '-',
              salesBusiness: '-',
              carport: '-',
              total: '-'
            },
            {
              shareContent: '开发成本（元/平米）',
              itemizedContent: '用地面积',
              highRise: '39,073',
              townhouse: '0%',
              salesBusiness: '3',
              carport: '3',
              total: '39,073'
            },
            {
              shareContent: '',
              itemizedContent: '可租售面积',
              highRise: '91,800',
              townhouse: '10.71%',
              salesBusiness: '10.71%',
              carport: '10.71%',
              total: '180,151'
            },
            {
              shareContent: '',
              itemizedContent: '其中：地上可租售',
              highRise: '91,800',
              townhouse: '-',
              salesBusiness: '-',
              carport: '-',
              total: '-'
            }
          ]
        },
        value8: 0
      }
    },
    methods: {
      ...mapActions(['GetSpecialItem', 'CalculateCost', 'SaveSpecialItem']),
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 3 === 0) {
            return {
              rowspan: 3,
              colspan: 1
            }
          } else {
            return {
              rowspan: 0,
              colspan: 0
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
</style>
