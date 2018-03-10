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
    <el-dialog title="" :visible.sync="showCriterion" style="width:83%;left:249px">
      <div>
        <div>
          <p>当前项目引入以下基准成本模板，是否确认引入此模板：</p>
          <span>北京丰台区高层平层</span>
        </div>
        <div style="margin-top: 50px">
           <el-row :gutter="20">
           <el-col :span="6":push="4" ><el-button  @click="closeCriterion">确认</el-button></el-col>
           <el-col :span="6" :push="7"><el-button @click="closeCriterion">取消</el-button></el-col>
         </el-row>
        </div>
      </div>
    </el-dialog>
    <el-tabs v-model="activeName">
      <el-tab-pane label="总体指标" name="总体指标">
          <el-container>
            <el-main>
             <div style="margin-bottom: 13px">总体指标</div>
              <tree-table :data="planning.data" :columns="planning.columns" :showLevel='planning.level' :type="'col'" :evalFunc="planning.func" :evalArgs="planning.args" :maxHeight="700" :stripe="true" border>
              </tree-table>
            </el-main>
            <el-aside width="400px">
              <p>主要材料价格（不含税）</p>
              <template>
                <el-table size="small" border :data="planIndicator.mainContract" style="width: 100%">
                  <el-table-column type="index" label="序号"></el-table-column>
                  <el-table-column prop="matpricename" label="项目"></el-table-column>
                  <el-table-column prop="materialsprice" label="数据"></el-table-column>
                  <el-table-column prop="materialsunit" label="单位"></el-table-column>
                  <el-table-column prop="remark" label="备注"></el-table-column>
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
      </el-tab-pane>
      <!--业态面积-->
      <el-tab-pane label="业态面积" name="业态面积">
        <el-row >
          <el-col :span="16" >
            <div style="width: 60%;">
              <div class="hierarchy" >层级选项：</div>
              <div class="paging" >
                <el-pagination
                  background
                  layout="pager"
                  :current-page.sync="formatArea.level"
                  @current-change="changeFormatAreaLevel(formatArea.level)"
                  :total="30">
                </el-pagination>
              </div>
            </div>
          </el-col>
          <tree-table :data="formatArea.data" :columns="formatArea.columns" :type="'col'"  :evalFunc="formatArea.func" :evalArgs="formatArea.args"
                      :stripe="true" :showLevel='formatArea.level' border>
          </tree-table>
        </el-row>
      </el-tab-pane>
      <!--业态属性-->
      <el-tab-pane label="业态属性" name="业态属性">
        <el-row >
          <el-col :span="16" >
            <div style="width: 60%;">
              <div class="hierarchy">层级选项：</div>
              <div class="paging" >
                <el-pagination
                  background
                  layout="pager"
                  :current-page.sync="formatAttribute.level"
                  @current-change="changeFormatAttributeLevel(formatAttribute.level)"
                  :total="30">
                </el-pagination>
              </div>
            </div>
          </el-col>
          <tree-table :data="formatAttribute.data" :columns="formatAttribute.columns" :type="'col'"  :evalFunc="formatAttribute.func" :evalArgs="formatAttribute.args"
                      :stripe="true" :showLevel='formatAttribute.level' border>
          </tree-table>
        </el-row>
      </el-tab-pane>
      <!--标签页上部开关按钮-->
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
      <!--标签页上部操作按钮-->
      <el-tab-pane disabled >
        <span slot="label" class="label-slot">
           <el-button @click="showCriterion = true">引入基准</el-button>
           <el-button @click="showFlag = true">导入面积</el-button>
           <el-button>导出</el-button>
           <el-button>保存</el-button>
        </span>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import treeTable from '@/components/TreeTable'
  import treeToArray from '@/components/treeTable/customEval'
  export default {
    components: { treeTable },
    data() {
      return {
        // 总体指标treeTable
        planning: {
          level: 1,
          data: [{}],
          columns: [
            {
              title: '序号',
              value: 'costcode',
              type: 'text',
              width: 100,
              fixed: 'left'
            },
            {
              title: '指标名称',
              value: 'typename',
              type: 'text',
              width: 200
            },
            {
              title: '数量',
              value: 'propertytypevalue',
              type: 'input',
              width: 200
            },
            {
              title: '单位',
              value: 'propertytypeunit',
              type: 'text',
              width: 200
            },
            {
              title: '备注',
              value: 'remark',
              type: 'text',
              width: 200
            }
          ],
          func: treeToArray,
          args: [null, null, true, 'timeLine'],
          newItem: ''
        },
        formatArea: {
          level: 2,
          data: [{}],
          columns: [
            {
              title: '产品类型',
              value: 'typename',
              type: 'text',
              width: 100,
              fixed: 'left'
            },
            {
              title: '标签',
              value: 'tagname',
              type: 'select',
              options: [
                {
                  value: '1',
                  label: '平层'
                },
                {
                  value: '2',
                  label: '跃层'
                }
              ],
              width: 200,
              sortable: false
            },
            {
              title: '所属组团',
              value: 'group',
              type: 'input',
              width: 200
            },
            {
              title: '栋数',
              value: 'lds',
              type: 'input',
              width: 200
            },
            {
              title: '层数',
              value: 'propertytypeunit',
              type: 'input',
              width: 200
            },
            {
              title: '总层数',
              value: 'zcs',
              type: 'input',
              width: 200
            },
            {
              title: '电梯数',
              value: 'dts',
              type: 'input',
              width: 200
            },
            {
              title: '单元数',
              value: 'dys',
              type: 'input',
              width: 200
            },
            {
              title: '户数',
              value: 'hs',
              type: 'input',
              width: 200
            },
            {
              title: '车库门数量',
              value: 'ckmsl',
              type: 'input',
              width: 200
            },
            {
              title: '基地面积',
              value: 'jdmj',
              type: 'input',
              width: 200
            },
            {
              title: '机械停车位数量',
              value: 'jxtcwsl',
              type: 'input',
              width: 200
            },
            {
              title: '层高',
              value: 'floorheight',
              type: 'input',
              width: 200
            },
            {
              title: '高度比',
              value: 'aspectratio',
              type: 'input',
              width: 200
            },
            {
              title: '体型系统',
              value: 'shapesys',
              type: 'input',
              width: 200
            },
            {
              title: '建筑高度',
              value: 'buildingheight',
              type: 'input',
              width: 200
            },
            {
              title: '户型面积',
              value: 'familyarea',
              type: 'input',
              width: 200
            },
            {
              title: '建安配置名称',
              value: 'constructconfigname',
              type: 'input',
              width: 200
            },
            {
              title: '精装配置名称',
              value: 'jzconfigname',
              type: 'input',
              width: 200
            },
            {
              title: '景观面积',
              value: 'jgconfig',
              type: 'input',
              width: 200
            },
            {
              title: '赠送率',
              value: 'givrate',
              type: 'input',
              width: 200
            }
          ],
          func: treeToArray,
          args: [null, null, true, 'timeLine'],
          newItem: ''
        },
        formatAttribute: {
          level: 2,
          data: [{}],
          columns: [
            {
              title: '产品类型',
              value: 'typename',
              type: 'text',
              width: 100,
              fixed: 'left'
            },
            {
              title: '标签',
              value: 'tagname',
              type: 'select',
              options: [
                {
                  value: '1',
                  label: '平层'
                },
                {
                  value: '2',
                  label: '跃层'
                }
              ],
              width: 200,
              sortable: false
            },
            {
              title: '所属组团',
              value: 'group',
              type: 'input',
              width: 200
            },
            {
              title: '栋数',
              value: 'lds',
              type: 'input',
              width: 200
            },
            {
              title: '层数',
              value: 'propertytypeunit',
              type: 'input',
              width: 200
            },
            {
              title: '总层数',
              value: 'zcs',
              type: 'input',
              width: 200
            },
            {
              title: '电梯数',
              value: 'dts',
              type: 'input',
              width: 200
            },
            {
              title: '单元数',
              value: 'dys',
              type: 'input',
              width: 200
            },
            {
              title: '户数',
              value: 'hs',
              type: 'input',
              width: 200
            },
            {
              title: '车库门数量',
              value: 'ckmsl',
              type: 'input',
              width: 200
            },
            {
              title: '基地面积',
              value: 'jdmj',
              type: 'input',
              width: 200
            },
            {
              title: '机械停车位数量',
              value: 'jxtcwsl',
              type: 'input',
              width: 200
            },
            {
              title: '层高',
              value: 'floorheight',
              type: 'input',
              width: 200
            },
            {
              title: '高度比',
              value: 'aspectratio',
              type: 'input',
              width: 200
            },
            {
              title: '体型系统',
              value: 'shapesys',
              type: 'input',
              width: 200
            },
            {
              title: '建筑高度',
              value: 'buildingheight',
              type: 'input',
              width: 200
            },
            {
              title: '户型面积',
              value: 'familyarea',
              type: 'input',
              width: 200
            },
            {
              title: '建安配置名称',
              value: 'constructconfigname',
              type: 'input',
              width: 200
            },
            {
              title: '精装配置名称',
              value: 'jzconfigname',
              type: 'input',
              width: 200
            },
            {
              title: '景观面积',
              value: 'jgconfig',
              type: 'input',
              width: 200
            },
            {
              title: '赠送率',
              value: 'givrate',
              type: 'input',
              width: 200
            }
          ],
          func: treeToArray,
          args: [null, null, true, 'timeLine'],
          newItem: ''
        },
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
        showCriterion: false,
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
      ...mapActions([
        'GetPlanningOverallTreeTable',
        'getPlanningOverallIndexMainPriceNo',
        'GetFormatAttributeTreeTable',
        'GetFormatAreaTreeTable'
      ]),
      radioEvent() {
        this.showFlag = false
        this.adapterSelected = this.radio
      },
      closeCriterion() {
        this.showCriterion = false
      },
      // 层级选项控制
      changeFormatAreaLevel(level) {
        this.formatArea.level = level
      },
      changeFormatAttributeLevel(level) {
        this.formatArea.level = level
      }
    },
    created: function() {
      // 总体指标 treeTable 信息
      this.GetPlanningOverallTreeTable().then((data) => {
        // 表头 列信息
        this.planning.data = data.data.items
      })
      // 业态面积
      this.GetFormatAreaTreeTable().then((data) => {
        // 表头 列信息
        this.formatArea.data = data.data.items
      })
      // 业态属性
      this.GetFormatAttributeTreeTable().then((data) => {
        // 表头 列信息
        this.formatAttribute.data = data.data.items
      })
      // 获取主要材料价格（不含税）
      this.getPlanningOverallIndexMainPriceNo().then((data) => {
        this.planIndicator.mainContract = data
      })
      //
    }
  }
</script>

<style scoped>
  .label-slot{
    margin-left:500px;
  }
  .label-slot button{
    padding: 8px;
  }
  /**
  层级样式
   */
  .hierarchy{
    float: left;
    margin-top: 20px;
    margin-left: 10px;
    font-size: 14px;
  }
  .paging{
    float: left;
    margin-top: 13px;
  }
</style>
