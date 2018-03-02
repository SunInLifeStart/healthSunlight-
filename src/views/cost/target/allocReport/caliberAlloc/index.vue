<template>
  <div>
    <el-button>计算</el-button>
    <el-button>保存</el-button>
    <!--<el-button>发起审批</el-button>-->
    <el-table :data="caliberAlloc.table" :span-method="objectSpanMethod" size="small" border
              style="width: 100%;text-align: center">
      <el-table-column fixed prop="shareContent" label="分摊内容"></el-table-column>
      <el-table-column fixed width="180" prop="itemizedContent" label="细项分摊内容"></el-table-column>
      <el-table-column prop="" label="各业态指标">
        <el-table-column prop="highRise" label="高层（18层以上，但<100M)"></el-table-column>
        <el-table-column prop="townhouse" label="联排别墅"></el-table-column>
        <el-table-column prop="salesBusiness" label="销售商业"></el-table-column>
        <el-table-column prop="total" label="合计(m2，万元)"></el-table-column>
        <!--<el-table-column prop="gardenHouse" width="180" label="花园洋房（9层以下）"></el-table-column>-->
        <!--<el-table-column prop="stackedTownhouses" label="叠拼别墅"></el-table-column>-->
        <!--<el-table-column prop="superTall" label="高层(18层以上，但<100m)"></el-table-column>-->
        <!--<el-table-column prop="praetorium" label="独栋别墅"></el-table-column>-->
        <!--<el-table-column prop="affordableHouses" width="180" label="廉（公）租房/经济适用房"></el-table-column>-->
        <!--<el-table-column prop="condo" width="180" label="限价房/自住型商品房">z</el-table-column>-->
        <!--<el-table-column prop="commercial" width="180" label="持有商业"></el-table-column>-->
        <!--<el-table-column prop="sohoLeveling" width="180" label="SOHO（平层100米以内）"></el-table-column>-->
        <!--<el-table-column prop="sohoPycnocline" width="180" label="SOHO（跃层100米以内）"></el-table-column>-->
        <!--<el-table-column prop="sohoLevelingHigh" width="180" label="SOHO（平层超高层）"></el-table-column>-->
        <!--<el-table-column prop="sohoPycnoclineHigh" width="180" label="SOHO（跃层超高层）"></el-table-column>-->
        <!--<el-table-column prop="budgetHotel" width="180" label="快捷酒店"></el-table-column>-->
        <!--<el-table-column prop="starredHotel" width="180" label="星级酒店"></el-table-column>-->
        <!--<el-table-column prop="officeBuilding" width="180" label="写字楼（100米以内）"></el-table-column>-->
        <!--<el-table-column prop="officeBuildingHigh" width="180" label="写字楼（超高层）"></el-table-column>-->
        <!--<el-table-column prop="carport" width="180" label="非人防车库"></el-table-column>-->
        <!--<el-table-column prop="storeroom" width="180" label="储藏室"></el-table-column>-->
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        caliberAlloc: {
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
