<template>
  <div>
    <span style="float: left">层级选项</span>
    <div class="block" style="width: 500px;float: left; margin-left: 100px;">
      <el-slider v-model="value8" show-input :max="6" :min="1" show-stops></el-slider>
    </div>
    <div style="float: right">
      <el-button>计算</el-button>
      <el-button>保存</el-button>
      <!--<el-button>发起审批</el-button>-->
    </div>
    <el-row :gutter="20">
      <el-col :span="16">
        <el-table :data="caliberManage.table" border highlight-current-row>
          <el-table-column prop="freeName" label="分摊内容"></el-table-column>
          <el-table-column prop="lastTargetCost" label="细项分摊内容"></el-table-column>
          <el-table-column prop="lastTargetCost" label="高层(18层以上，但<100m)"></el-table-column>
          <el-table-column prop="lastTargetCost" label="联排别墅"></el-table-column>
          <el-table-column prop="lastTargetCost" label="销售商业"></el-table-column>
          <el-table-column prop="lastTargetCost" label="非人防车库"></el-table-column>
          <el-table-column prop="lastTargetCost" label="合计(m2，万元)"></el-table-column>
        </el-table>
      </el-col>
      <!--<el-col :span="8">-->
        <!--<el-table :data="caliberManage.table" highlight-current-row>-->
          <!--<el-table-column type="index" label=""></el-table-column>-->
          <!--<el-table-column prop="lastTargetCost" label=""></el-table-column>-->
        <!--</el-table>-->
      <!--</el-col>-->
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value8: 0,
        caliberManage: {
          table: [
            {
              shareContent: '规划指标（m2)',
              itemizedContent: '用地面积',
              superTall: '混凝土框架',
              highRise: '39,073',
              gardenHouse: '0%',
              stackedTownhouses: '0%',
              townhouse: '0%',
              praetorium: '0%',
              affordableHouses: '2',
              condo: '3',
              commercial: '3',
              sohoLeveling: '3',
              sohoPycnocline: '3',
              sohoLevelingHigh: '3',
              sohoPycnoclineHigh: '3',
              salesBusiness: '3',
              budgetHotel: '3',
              starredHotel: '3',
              officeBuilding: '3',
              officeBuildingHigh: '3',
              carport: '3',
              storeroom: '3',
              total: '39,073'
            },
            {
              shareContent: '',
              itemizedContent: '可租售面积',
              superTall: '0',
              highRise: '91,800',
              gardenHouse: '10.71%',
              stackedTownhouses: '10.71%',
              townhouse: '10.71%',
              praetorium: '10.71%',
              affordableHouses: '10.71%',
              condo: '10.71%',
              commercial: '10.71%',
              sohoLeveling: '10.71%',
              sohoPycnocline: '10.71%',
              sohoLevelingHigh: '10.71%',
              sohoPycnoclineHigh: '10.71%',
              salesBusiness: '10.71%',
              budgetHotel: '10.71%',
              starredHotel: '10.71%',
              officeBuilding: '10.71%',
              officeBuildingHigh: '10.71%',
              carport: '10.71%',
              storeroom: '10.71%',
              total: '180,151'
            },
            {
              shareContent: '',
              itemizedContent: '其中：地上可租售',
              superTall: '',
              highRise: '91,800',
              gardenHouse: '-',
              stackedTownhouses: '-',
              townhouse: '-',
              praetorium: '-',
              affordableHouses: '-',
              condo: '-',
              commercial: '-',
              sohoLeveling: '-',
              sohoPycnocline: '-',
              sohoLevelingHigh: '-',
              sohoPycnoclineHigh: '-',
              salesBusiness: '-',
              budgetHotel: '-',
              starredHotel: '-',
              officeBuilding: '-',
              officeBuildingHigh: '-',
              carport: '-',
              storeroom: '-',
              total: '-'
            },
            {
              shareContent: '开发成本（元/平米）',
              itemizedContent: '用地面积',
              superTall: '混凝土框架',
              highRise: '39,073',
              gardenHouse: '0%',
              stackedTownhouses: '0%',
              townhouse: '0%',
              praetorium: '0%',
              affordableHouses: '2',
              condo: '3',
              commercial: '3',
              sohoLeveling: '3',
              sohoPycnocline: '3',
              sohoLevelingHigh: '3',
              sohoPycnoclineHigh: '3',
              salesBusiness: '3',
              budgetHotel: '3',
              starredHotel: '3',
              officeBuilding: '3',
              officeBuildingHigh: '3',
              carport: '3',
              storeroom: '3',
              total: '39,073'
            },
            {
              shareContent: '',
              itemizedContent: '可租售面积',
              superTall: '0',
              highRise: '91,800',
              gardenHouse: '10.71%',
              stackedTownhouses: '10.71%',
              townhouse: '10.71%',
              praetorium: '10.71%',
              affordableHouses: '10.71%',
              condo: '10.71%',
              commercial: '10.71%',
              sohoLeveling: '10.71%',
              sohoPycnocline: '10.71%',
              sohoLevelingHigh: '10.71%',
              sohoPycnoclineHigh: '10.71%',
              salesBusiness: '10.71%',
              budgetHotel: '10.71%',
              starredHotel: '10.71%',
              officeBuilding: '10.71%',
              officeBuildingHigh: '10.71%',
              carport: '10.71%',
              storeroom: '10.71%',
              total: '180,151'
            },
            {
              shareContent: '',
              itemizedContent: '其中：地上可租售',
              superTall: '',
              highRise: '91,800',
              gardenHouse: '-',
              stackedTownhouses: '-',
              townhouse: '-',
              praetorium: '-',
              affordableHouses: '-',
              condo: '-',
              commercial: '-',
              sohoLeveling: '-',
              sohoPycnocline: '-',
              sohoLevelingHigh: '-',
              sohoPycnoclineHigh: '-',
              salesBusiness: '-',
              budgetHotel: '-',
              starredHotel: '-',
              officeBuilding: '-',
              officeBuildingHigh: '-',
              carport: '-',
              storeroom: '-',
              total: '-'
            }
          ]
        }
      }
    },
    methods: {
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
