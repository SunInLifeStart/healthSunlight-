<template>
  <div>
    <el-dialog title="面积导入" :visible.sync="showFlag" style="width:83%;left:249px">
      <p>导入方式：</p>
      <el-tabs tab-position="left" style="height: 122px;border: 1px solid #ddd;">
        <el-tab-pane label="从投模引入面积">
          <ul>
            <li>版本1</li>
            <li>版本2</li>
            <li>版本3</li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="从龙湖通引入面积">
          <ul>
            <li>版本4</li>
            <li>版本5</li>
            <li>版本6</li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="手动Excel导入">成本面积.csv</el-tab-pane>
      </el-tabs>
      <p>引入说明：</p>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容">
      </el-input>
      <div style="padding-top:20px;text-align: center">
        <el-button type="primary" size="small" @click="radioEvent()">确定</el-button>
      </div>
      <el-row :gutter="20">
        <el-col :span="8">
          <div >研发指标版本</div>
        </el-col>
        <el-col :span="16">
          <el-select v-model="value4" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
    </el-dialog>
    <el-tabs type="border-card" v-model="activeName">
      <el-tab-pane label="总体指标" name="总体指标">
        <div>
          <el-container>
            <el-main>
              <p>总体指标</p>
              <el-table :data="planIndicator.totalIndex" border size="small" style="width: 100%">
                <el-table-column type="index" label="序号"></el-table-column>
                <el-table-column prop="number" label="指标名称"></el-table-column>
                <el-table-column prop="number" label="数量"></el-table-column>
                <el-table-column prop="number" label="单位"></el-table-column>
                <el-table-column prop="units" label="备注"></el-table-column>
              </el-table>
            </el-main>
            <el-aside width="400px">
              <p>主要材料价格（不含税）</p>
              <template>
                <el-table size="small" border :data="planIndicator.mainContract" style="width: 100%">
                  <el-table-column type="index" label="序号"></el-table-column>
                  <el-table-column prop="projectPlan" label="项目"></el-table-column>
                  <el-table-column prop="data" label="数据"></el-table-column>
                  <el-table-column prop="units" label="单位"></el-table-column>
                  <el-table-column prop="remakes" label="备注"></el-table-column>
                </el-table>
              </template>
              <p>市政输入条件</p>
              <template>
                <el-table size="small" border :data="planIndicator.basicInfo" style="width: 100%">
                  <el-table-column type="index" label="序号"></el-table-column>
                  <el-table-column prop="content" label="水电气条件"></el-table-column>
                  <el-table-column prop="price" label="数据"></el-table-column>
                  <el-table-column prop="price" label="单位"></el-table-column>
                  <el-table-column prop="remakes" label="备注"></el-table-column>
                </el-table>
              </template>
              <p>景观指标</p>
              <template>
                <el-table size="small" border :data="planIndicator.basicInfo" style="width: 100%">
                  <el-table-column type="index" label="序号"></el-table-column>
                  <el-table-column prop="content" label="景观指标"></el-table-column>
                  <el-table-column prop="price" label="面积"></el-table-column>
                  <el-table-column prop="price" label="单位"></el-table-column>
                  <el-table-column prop="price" label="占比"></el-table-column>
                  <el-table-column prop="remakes" label="备注"></el-table-column>
                </el-table>
              </template>
              <p>土方平衡</p>
              <template>
                <el-table size="small" border :data="planIndicator.basicInfo" style="width: 100%">
                  <el-table-column type="index" label="序号"></el-table-column>
                  <el-table-column prop="content" label="场内土方平衡情况"></el-table-column>
                  <el-table-column prop="price" label="数据"></el-table-column>
                  <el-table-column prop="price" label="单位"></el-table-column>
                  <el-table-column prop="remakes" label="备注"></el-table-column>
                </el-table>
              </template>
            </el-aside>
          </el-container>
        </div>
        <!--<div>-->
        <!--<el-container>-->
        <!--<el-main>-->
        <!--<el-row :gutter="20">-->
        <!--<el-col :span="12">-->
        <!--<p>景观指标</p>-->
        <!--<el-table size="small" border :data="planIndicator.landscape" style="width: 100%">-->
        <!--<el-table-column type="index" label="序号"></el-table-column>-->
        <!--<el-table-column prop="scenery" label="景观指标"></el-table-column>-->
        <!--<el-table-column prop="area" label="面积"></el-table-column>-->
        <!--<el-table-column prop="units" label="单位"></el-table-column>-->
        <!--<el-table-column prop="proportion" label="占比"></el-table-column>-->
        <!--<el-table-column prop="remakes" label="备注"></el-table-column>-->
        <!--</el-table>-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
        <!--<p>土方平衡</p>-->
        <!--<el-table size="small" border :data="planIndicator.earthworkBalance" style="width: 100%">-->
        <!--<el-table-column type="index" label="序号"></el-table-column>-->
        <!--<el-table-column prop="utilities" label="水电气条件"></el-table-column>-->
        <!--<el-table-column prop="data" label="数据"></el-table-column>-->
        <!--<el-table-column prop="units" label="单位"></el-table-column>-->
        <!--<el-table-column prop="remakes" label="备注"></el-table-column>-->
        <!--</el-table>-->
        <!--</el-col>-->
        <!--</el-row>-->

        <!--</el-main>-->
        <!--<el-aside width="400px">-->
        <!--<p>市政输入条件</p>-->
        <!--<el-table size="small" border :data="planIndicator.civicismCondition" style="width: 100%">-->
        <!--<el-table-column type="index" label="序号"></el-table-column>-->
        <!--<el-table-column prop="utilities" label="水电气条件"></el-table-column>-->
        <!--<el-table-column prop="data" label="数据"></el-table-column>-->
        <!--<el-table-column prop="units" label="单位"></el-table-column>-->
        <!--<el-table-column prop="remakes" label="备注"></el-table-column>-->
        <!--</el-table>-->
        <!--</el-aside>-->
        <!--</el-container>-->
        <!--</div>-->
      </el-tab-pane>
      <!--业态面积-->
      <el-tab-pane label="业态面积" name="业态面积">
        <el-table :data="planIndicator.table" size="small" border style="width: 100%; margin-top: 20px">
          <el-table-column fixed prop="shareContent" label="产品类型"></el-table-column>
          <el-table-column width="180" fixed prop="itemizedContent" label="标签"></el-table-column>
          <el-table-column prop="" width="180" label="地上建筑面积"></el-table-column>
          <el-table-column prop="superTall" width="180" label="地下建筑面积"></el-table-column>
          <el-table-column prop="highRise" width="180" label="地上赠送面积"></el-table-column>
          <el-table-column prop="" width="180" label="地下赠送面积"></el-table-column>
          <el-table-column prop="highRise" width="180" label="总建筑面积"></el-table-column>
          <el-table-column prop="" label="地上实际建筑面积">
            <el-table-column prop="smallTop" width="180" label="地上建筑面积+地上赠送"></el-table-column>
            <el-table-column prop="smallTop" width="180" label="地上实际建筑面积差"></el-table-column>
            <el-table-column prop="smallTop" width="180" label="小计"></el-table-column>
          </el-table-column>
          <el-table-column prop="" label="地下实际建筑面积">
            <el-table-column prop="smallTop" width="180" label="地下建筑面积+地下赠送"></el-table-column>
            <el-table-column prop="smallTop" width="180" label="地下实际建筑面积差"></el-table-column>
            <el-table-column prop="smallTop" width="180" label="小计"></el-table-column>
          </el-table-column>
          <el-table-column prop="" label="总实际建筑面积（m2）">
            <el-table-column prop="smallTop" width="180" label="建筑面积+赠送面积"></el-table-column>
            <el-table-column prop="smallTop" width="180" label="总实际建筑面积差"></el-table-column>
            <el-table-column prop="smallTop" width="180" label="小计"></el-table-column>
          </el-table-column>
          <el-table-column prop="" label="可租售面积（m2）">
            <el-table-column prop="smallTop" width="180" label="地上可售"></el-table-column>
            <el-table-column prop="smallTop" width="180" label="地下可售"></el-table-column>
            <el-table-column prop="smallTop" width="180" label="地上可租"></el-table-column>
            <el-table-column prop="smallTop" width="180" label="地下可租"></el-table-column>
          </el-table-column>
          <el-table-column prop="" label="户内精装修（m2）">
            <el-table-column prop="smallTop" width="180" label="精装修面积"></el-table-column>
            <el-table-column prop="smallTop" width="180" label="精装修地上可租售面积"></el-table-column>
            <el-table-column prop="smallTop" width="180" label="精装修地下可租售面积"></el-table-column>
            <el-table-column prop="smallTop" width="180" label="精装修对应建筑面积"></el-table-column>
            <el-table-column prop="smallTop" width="180" label="精装修对应实际建筑面积"></el-table-column>
            <el-table-column prop="smallTop" width="180" label="精装修户数"></el-table-column>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <!--业态属性-->
      <el-tab-pane label="业态属性" name="业态属性">
        <el-radio label="1">显示全部</el-radio>
        <el-table :data="planIndicator.table" size="small" border style="width: 100%; margin-top: 20px">
          <el-table-column fixed prop="shareContent" label="产品类型"></el-table-column>
          <el-table-column width="180" fixed prop="itemizedContent" label="标签"></el-table-column>
          <el-table-column width="180"  prop="itemizedContent" label="所属组团"></el-table-column>
          <el-table-column width="180"  prop="itemizedContent" label="栋数"></el-table-column>
          <el-table-column width="180"  prop="itemizedContent" label="层数"></el-table-column>
          <el-table-column width="180"  prop="itemizedContent" label="总层数"></el-table-column>
          <el-table-column width="180"  prop="itemizedContent" label="单元数"></el-table-column>
          <el-table-column width="180"  prop="itemizedContent" label="电梯数"></el-table-column>
          <el-table-column width="180"  prop="itemizedContent" label="户数"></el-table-column>
          <el-table-column width="180"  prop="itemizedContent" label="车库门数量"></el-table-column>
          <el-table-column width="180"  prop="itemizedContent" label="基地面积"></el-table-column>
          <el-table-column width="180"  prop="itemizedContent" label="机械停车位数量"></el-table-column>
          <el-table-column width="180"  prop="itemizedContent" label="层高"></el-table-column>
          <el-table-column width="180"  prop="itemizedContent" label="高宽比"></el-table-column>
          <el-table-column width="180"  prop="itemizedContent" label="体型系统"></el-table-column>
          <el-table-column width="180"  prop="itemizedContent" label="建筑高度"></el-table-column>
          <el-table-column width="180"  prop="itemizedContent" label="户型面积"></el-table-column>
          <el-table-column width="180"  prop="itemizedContent" label="建安配置"></el-table-column>
          <el-table-column width="180"  prop="itemizedContent" label="精装配置"></el-table-column>
          <el-table-column width="180"  prop="itemizedContent" label="景观配置"></el-table-column>
          <el-table-column width="180"  prop="itemizedContent" label="赠送率"></el-table-column>
          <el-table-column width="180"  prop="itemizedContent" label="结构形式"></el-table-column>
          <!--<el-table-column prop="" align="center" label="各业态指标">-->
          <!--<el-table-column prop="superTall" width="180" label="超高层>100m"></el-table-column>-->
          <!--<el-table-column prop="highRise" width="180" label="高层（18层以上，但<100M)"></el-table-column>-->
          <!--<el-table-column prop="smallTop" width="180" label="小高层（10-18层)"></el-table-column>-->
          <!--<el-table-column prop="gardenHouse" width="180" label="花园洋房（9层以下）"></el-table-column>-->
          <!--<el-table-column prop="stackedTownhouses" label="叠拼别墅"></el-table-column>-->
          <!--<el-table-column prop="townhouse" width="180" label="联排别墅"></el-table-column>-->
          <!--<el-table-column prop="praetorium" label="独栋别墅"></el-table-column>-->
          <!--<el-table-column prop="affordableHouses" width="180" label="廉（公）租房/经济适用房"></el-table-column>-->
          <!--<el-table-column prop="condo" width="180" label="限价房/自住型商品房"></el-table-column>-->
          <!--<el-table-column prop="commercial" width="180" label="持有商业"></el-table-column>-->
          <!--<el-table-column prop="sohoLeveling" width="180" label="SOHO（平层100米以内）"></el-table-column>-->
          <!--<el-table-column prop="sohoPycnocline" width="180" label="SOHO（跃层100米以内）"></el-table-column>-->
          <!--<el-table-column prop="sohoLevelingHigh" width="180" label="SOHO（平层超高层）"></el-table-column>-->
          <!--<el-table-column prop="sohoPycnoclineHigh" width="180" label="SOHO（跃层超高层）"></el-table-column>-->
          <!--<el-table-column prop="salesBusiness" label="销售商业"></el-table-column>-->
          <!--<el-table-column prop="budgetHotel" label="快捷酒店"></el-table-column>-->
          <!--<el-table-column prop="starredHotel" width="180" label="星级酒店"></el-table-column>-->
          <!--<el-table-column prop="officeBuilding" width="180" label="写字楼（100米以内）"></el-table-column>-->
          <!--<el-table-column prop="officeBuildingHigh" width="180" label="写字楼（超高层）"></el-table-column>-->
          <!--<el-table-column prop="total" width="180" label="合计(m2，万元)"></el-table-column>-->
          <!--</el-table-column>-->
        </el-table>
      </el-tab-pane>

      <el-tab-pane disabled  v-show="false" v-if="activeName!=='总体指标'" style="display:none">
        <span slot="label">
           <el-switch
             v-model="value2"
             active-color="#13ce66"
             inactive-color="#ddd">
           </el-switch>
          显示全部
        </span>
      </el-tab-pane>
      <el-tab-pane disabled>
        <span slot="label" class="label-slot">
           <el-button @click="showFlag = true">导入面积</el-button>
           <el-button>导出</el-button>
           <el-button>保存</el-button>
        </span>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: '总体指标',
        value2: true,
        planIndicator: {
          basicInfo: [
            {
              content: 'sss',
              price: '123',
              remakes: 'sdasd'
            }
          ],
          mainContract: [
            {
              projectPlan: '222',
              data: 'sda',
              units: 'sda',
              remakes: 'sdasd'
            }
          ],
          totalIndex: [
            {

              target: 'daasd',
              number: 100,
              units: '平',
              children: [
                {
                  target: '问问',
                  number: 100,
                  units: '平'
                }
              ]
            },
            {
              target: '啊实打实',
              number: 100,
              units: 'cm'
            }
          ],
          civicismCondition: [
            {
              utilities: 'YY',
              data: '啊实打实',
              units: 'M',
              remakes: '试试'
            },
            {
              utilities: 'YY',
              data: '啊实打实',
              units: 'M',
              remakes: '试试'
            }
          ],
          landscape: [
            {
              scenery: 'ss',
              area: 'dd',
              units: '%',
              proportion: '20',
              remakes: 'sssa'
            },
            {
              scenery: 'ss',
              area: 'dd',
              units: '%',
              proportion: '20',
              remakes: 'sssa'
            }
          ],
          earthworkBalance: [
            {
              utilities: 'YY',
              data: '啊实打实',
              units: 'M',
              remakes: '试试'
            },
            {
              utilities: 'YY',
              data: '啊实打实',
              units: 'M',
              remakes: '试试'
            }
          ],
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
        showFlag: false,
        radio: '',
        value4: '',
        options: [
          {
            value: 'AA',
            label: '一阶段启动会'
          }]
      }
    },
    methods: {
      radioEvent() {
        this.showFlag = false
        this.adapterSelected = this.radio
      }
    }
  }
</script>

<style scoped>
  .label-slot{
    margin-left: 250px;
  }
  .label-slot button{
    padding: 8px;
  }
</style>
