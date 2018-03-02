<template>
  <div>
    <span style="float: left; margin-top: 10px;">层级选项:</span>
    <div class="block" style="width: 500px;float: left; margin-left: 100px;">
      <el-slider v-model="value8" show-input :max="2" :min="1" show-stops></el-slider>
    </div>
    <div style="float: right">
      <el-button>保存</el-button>
    </div>
    <el-table :data="buildStandard.table" border size="small" style="width: 100%">
      <el-table-column prop="product" label=""></el-table-column>
      <el-table-column prop="name" label=""></el-table-column>
      <el-table-column prop="superTall" width="180" label="超高层>100m"></el-table-column>
      <el-table-column prop="highRise" width="180" label="高层（18层以上，但<100M)"></el-table-column>
      <el-table-column prop="highRise" width="180" label="小高层（10-18层以上)"></el-table-column>
      <el-table-column prop="gardenHouse" width="180" label="花园洋房（9层以下"></el-table-column>
      <el-table-column prop="stackedTownhouses" label="叠拼别墅"></el-table-column>
      <el-table-column prop="townhouse" width="180" label="联排别墅"></el-table-column>
      <el-table-column prop="praetorium" label="独栋别墅"></el-table-column>
      <el-table-column prop="affordableHouses" width="180" label="廉（公）租房/经济适用房"></el-table-column>
      <el-table-column prop="condo" width="180" label="限价房/自住型商品房"></el-table-column>
      <el-table-column prop="sohoApartment" width="180" label="SOHO/酒店式公寓（100米以内）"></el-table-column>
      <el-table-column prop="sohoApartmentHigh" width="180" label="SOHO/酒店式公寓（超高层）"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        buildStandard: {
          table: [
            {
              product: '结构及粗装修',
              name: '结构形式',
              superTall: '混凝土框架',
              highRise: '混凝土框架剪力墙',
              gardenHouse: '混凝土框架剪力墙',
              stackedTownhouses: '混凝土框架（楼电梯间为剪力墙）',
              townhouse: '混凝土框架（楼电梯间为剪力墙）',
              praetorium: '混凝土框架（楼电梯间为剪力墙）',
              affordableHouses: '',
              condo: '',
              sohoApartment: '',
              sohoApartmentHigh: ''
            },
            {
              product: '门窗工程',
              name: '单元门',
              superTall: '无',
              highRise: '无',
              gardenHouse: '无',
              stackedTownhouses: '不锈钢+中空玻璃单元门禁门（幕墙做法',
              townhouse: '不锈钢+中空玻璃单元门禁门（幕墙做法',
              praetorium: '不锈钢+中空玻璃单元门禁门（幕墙做法',
              affordableHouses: '',
              condo: '',
              sohoApartment: '',
              sohoApartmentHigh: ''
            }
          ]
        },
        value8: 0
      }
    }
  }
</script>

<style scoped>

</style>
