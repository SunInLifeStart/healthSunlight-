<template>
  <div style="margin: 20px">
    <el-table :data="financeCostAlloc.table" :span-method="objectSpanMethod" size="small" border style="width: 100%; margin-top: 20px">
      <el-table-column fixed prop="shareContent" label="分摊内容"></el-table-column>
      <el-table-column width="180" fixed prop="itemizedContent" label="细项分摊内容"></el-table-column>
      <el-table-column prop="" align="center" label="各业态指标">
        <el-table-column prop="highRise" width="180" label="高层（18层以上，但<100M)"></el-table-column>
        <el-table-column prop="townhouse" width="180" label="联排别墅"></el-table-column>
        <el-table-column prop="salesBusiness" label="销售商业"></el-table-column>
        <el-table-column prop="total" width="180" label="合计(m2，万元)"></el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        financeCostAlloc: {
          table: [
            {
              shareContent: '规划指标（m2)',
              itemizedContent: '用地面积',
              superTall: '混凝土框架',
              highRise: '39,073',
              smallTop: '-',
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
              smallTop: '-',
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
              smallTop: '-',
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
              smallTop: '-',
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
              smallTop: '-',
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
              smallTop: '-',
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
        },
        value8: 0
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
