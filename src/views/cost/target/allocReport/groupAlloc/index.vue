<template>
  <div>
    <span style="float: left">层级选项</span>
    <div class="block" style="width: 500px;float: left; margin-left: 100px;">
      <el-slider
        v-model="value8"
        show-input
        :max="5"
        :min="1"
        show-stops>
      </el-slider>
    </div>
    <div style="float: right">
      <el-button>保存并计算</el-button>
    </div><br /><br /><br />
    <el-container>
      <el-aside width="600px">
        <el-table
          :data="data"
          border
          size="small"
          style="width: 100%">
          <el-table-column
            prop="charge"
            label="费项/合约规划"
            width="180">
          </el-table-column>
          <el-table-column
            prop="sum"
            label="目标金额"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="分摊方式">
            <template slot-scope="scope">
              <el-select v-model="scope.row.address" clearable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
          </el-table-column>
        </el-table>
      </el-aside>
      <el-main>
        <el-table
          size="small"
          border
          :data="groupAlloc.table"
          style="width: 100%">
          <el-table-column
            prop=""
            label="1组团">
            <el-table-column
              prop="groupTowerOne"
              label="1#楼">
            </el-table-column>
            <el-table-column
              prop="groupTowerTwo"
              label="2#楼">
            </el-table-column>
            <el-table-column
              prop="groupTowerThree"
              label="3#楼">
            </el-table-column>
            <el-table-column
              prop="groupTowerFour"
              label="4#楼">
            </el-table-column>
            <el-table-column
              prop="groupTowerFive"
              label="5#楼">
            </el-table-column>


          </el-table-column>
          <el-table-column
            prop=""
            label="合计">

          </el-table-column>
          <el-table-column
            prop=""
            label="2组团">
            <el-table-column
              prop="groupTowerSix"
              label="6#楼">
            </el-table-column>
            <el-table-column
              prop="groupTowerSeven"
              label="7#楼">
            </el-table-column>
            <el-table-column
              prop="groupTowerEight"
              label="8#楼">
            </el-table-column>
            <el-table-column
              prop="groupTowerNine"
              label="9#楼">
            </el-table-column>
            <el-table-column
              prop="groupTowerTen"
              label="10#楼">
            </el-table-column>
          </el-table-column>

        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value8: 0,
        groupAlloc: {
          table: [
            {
              groupTowerOne: '1000',
              groupTowerTwo: '1000',
              groupTowerThree: '1000',
              groupTowerFour: '1000',
              groupTowerFive: '1000',
              groupTowerSix: '1000',
              groupTowerSeven: '1000',
              groupTowerEight: '1000',
              groupTowerNine: '1000',
              groupTowerTen: '1000'
            }, {
              groupTowerOne: '1000',
              groupTowerTwo: '1000',
              groupTowerThree: '1000',
              groupTowerFour: '1000',
              groupTowerFive: '1000',
              groupTowerSix: '1000',
              groupTowerSeven: '1000',
              groupTowerEight: '1000',
              groupTowerNine: '1000',
              groupTowerTen: '1000'
            }, {
              groupTowerOne: '1000',
              groupTowerTwo: '1000',
              groupTowerThree: '1000',
              groupTowerFour: '1000',
              groupTowerFive: '1000',
              groupTowerSix: '1000',
              groupTowerSeven: '1000',
              groupTowerEight: '1000',
              groupTowerNine: '1000',
              groupTowerTen: '1000'
            }, {
              groupTowerOne: '1000',
              groupTowerTwo: '1000',
              groupTowerThree: '1000',
              groupTowerFour: '1000',
              groupTowerFive: '1000',
              groupTowerSix: '1000',
              groupTowerSeven: '1000',
              groupTowerEight: '1000',
              groupTowerNine: '1000',
              groupTowerTen: '1000'
            }, {
              groupTowerOne: '1111',
              groupTowerTwo: '111',
              groupTowerThree: '111',
              groupTowerFour: '111',
              groupTowerFive: '111',
              groupTowerSix: '1111',
              groupTowerSeven: '1111',
              groupTowerEight: '111',
              groupTowerNine: '111',
              groupTowerTen: '11'
            }, {
              groupTowerOne: '2222',
              groupTowerTwo: '2222',
              groupTowerThree: '333',
              groupTowerFour: '3333',
              groupTowerFive: '222',
              groupTowerSix: '333',
              groupTowerSeven: '333',
              groupTowerEight: '333',
              groupTowerNine: '333',
              groupTowerTen: '333'
            }
          ]
        },
        data: [
          {
            charge: '开发成本（A.01）',
            sum: '3.083.357.651.60',
            children: [
              {
                charge: '土地费（A.01.01）',
                sum: '2.083.357.651.60'
              },
              {
                charge: '前期工程费（A.01.02）',
                sum: '51.357.651.60',
                children: [{
                  charge: '勘测，设计费(A.01.02.01)',
                  sum: '17.357.651.60'
                }, {
                  charge: '三通-平工程费(A.01.02.02)',
                  sum: '53.357.651.60'
                }]
              }
            ]
          }
        ],
        options: [
          {
            value: '1',
            label: '建筑面积分摊'
          },
          {
            value: '2',
            label: '可售面积分摊'
          },
          {
            value: '3',
            label: '实建面积分摊'
          }
        ]
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
