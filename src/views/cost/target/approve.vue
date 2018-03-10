<template>
  <div>
    <el-button>导出</el-button>
    <el-button>保存</el-button>
    <el-button>发起审批</el-button>
    <el-tabs type="border-card">
      <el-tab-pane label="设计费限额">
        <el-table
          :data="tableData3"
          :cell-style="({row, column, rowIndex, columnIndex}) => (rowIndex === 0 && columnIndex === 3)?{background: 'white', padding: 0}:{}"
          :span-method="arraySpanMethod"
          style="width: 100%">
          <el-table-column
            prop="costName"
            align="center"
            label="项目设计费限额单价对比分析">
            <el-table-column prop="costPrice" label="费项">
            </el-table-column>
            <el-table-column
              prop="costPrice"
              label="基准成本单价">
            </el-table-column>
            <el-table-column
              prop="zip"
              label="本项目单价">
            </el-table-column>
          </el-table-column>
          <el-table-column
            :class-name="'table-column'"
            align="center"
            label="含量、单价对比">
            <el-table-column
              prop="value1"
              align="center"
              label="0.50">
              <template slot-scope="scope">
                <el-row v-if="scope.row.value1" type="center">
                  <el-col :span="12">
                    <div class="chart-border-red"></div>
                  </el-col>
                  <el-col :span="12">
                    {{scope.row.value1}}
                  </el-col>
                </el-row>
                <span v-else>
                  <chart id="A0002" height='200%' width='300%' :option="option2" style="margin-left: -12px"></chart>
                </span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="1.00">
              <template slot-scope="scope">
                <el-row v-if="scope.row.value2" type="center">
                  <el-col :span="12">
                    <div class="chart-border-blue"></div>
                  </el-col>
                  <el-col :span="12">
                    {{scope.row.value2}}
                  </el-col>
                </el-row>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="1.50">
              <template slot-scope="scope">
                <el-row v-if="scope.row.value3" type="center">
                  <el-col :span="12">
                    <div class="chart-border-yellow"></div>
                  </el-col>
                  <el-col :span="12">
                    {{scope.row.value3}}
                  </el-col>
                </el-row>
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>
        <!--<div style="float: right;position:relative;margin-top: -145px">-->
        <!--<chart id="A0002" height='500px' width='700px' :option="option2"></chart>-->
        <!--</div>-->
      </el-tab-pane>
      <el-tab-pane label="负合约规划">
        <span style="float: left">层级选项</span>
        <div class="block" style="width: 500px;float: left; margin-left: 100px;">
          <el-slider
            v-model="value8"
            show-input
            :max="6"
            :min="1"
            show-stops>
          </el-slider>
        </div>
        <el-table
          :data="areasInformation"
          border
          style="width: 100%">
          <el-table-column
            prop="product"
            label="费项/合约规划"
            width="180">
          </el-table-column>
          <el-table-column
            prop="measurement"
            label="规划金额"
            width="180">
          </el-table-column>
          <el-table-column
            prop="inAmount"
            label="已使用金额">
          </el-table-column>
          <el-table-column
            prop="remarks"
            label="备注">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="基准对比">
        <!--<div style="width: 40%;float: left">-->
        <!--<el-table-->
        <!--:data="tableData"-->
        <!--border-->
        <!--style="width: 100%">-->
        <!--<el-table-column-->
        <!--type="index"-->
        <!--label="序号"-->
        <!--width="100">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
        <!--prop="project"-->
        <!--label="项目"-->
        <!--width="180">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
        <!--prop="manageCaliber"-->
        <!--label="管理口径单方">-->
        <!--</el-table-column>-->
        <!--</el-table>-->
        <!--<div>-->
        <!--<chart id="A0001" height='500px' width='700px' :option="option"></chart>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class='chart-container' style="float: left">-->
        <!--<chart id="A0002" height='500px' width='700px' :option="option2"></chart>-->
        <!--</div>-->
        <div style="height: 350px">
          <span>目标成本管理口径单方对比分析</span>
          <span>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </span>
          <div style="margin-top: 15px">
            <el-table
              :data="tableData3"
              border
              size="small"
              style="width: 40%">
              <el-table-column prop="zip" label="序号">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="项目">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="管理口径单方">
              </el-table-column>
            </el-table>
            <div style="float: right;position:relative;margin-top: -85px">
              <chart height='300px' width='500px' :option="option1"></chart>
            </div>
          </div>
        </div>
        <div>
          <span>目标成本特征图</span>
          <span><chart id="A0004" height='300px' width='700px' :option="option3"></chart></span>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import Chart from '@/components/Charts/index'

  export default {
    name: 'approve',
    components: { Chart },
    data() {
      return {
        options: [
          {
            value: '选项1',
            label: '高层'
          }
        ],
        option: {
          title: {
            sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function(params) {
              var tar
              if (params[1].value !== '-') {
                tar = params[1]
              } else {
                tar = params[0]
              }
              return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
            }
          },
          legend: {
            data: ['支出', '收入']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            splitLine: { show: false },
            data: (function() {
              var list = []
              for (var i = 1; i <= 11; i++) {
                list.push('11月' + i + '日')
              }
              return list
            })()
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '辅助',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                normal: {
                  barBorderColor: 'rgba(0,0,0,0)',
                  color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                  barBorderColor: 'rgba(0,0,0,0)',
                  color: 'rgba(0,0,0,0)'
                }
              },
              data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
            },
            {
              name: '收入',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
            },
            {
              name: '支出',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'bottom'
                }
              },
              data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
            }
          ]
        },
        option1: {
          title: {
            text: '阶梯瀑布图',
            subtext: 'From ExcelHome',
            sublink: 'http://e.weibo.com/1341556070/Aj1J2x5a5'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function(params) {
              var tar
              if (params[1].value !== '-') {
                tar = params[1]
              } else {
                tar = params[0]
              }
              return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value
            }
          },
          legend: {
            data: ['支出', '收入']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            splitLine: { show: false },
            data: (function() {
              var list = []
              for (var i = 1; i <= 11; i++) {
                list.push('11月' + i + '日')
              }
              return list
            })()
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '辅助',
              type: 'bar',
              stack: '总量',
              itemStyle: {
                normal: {
                  barBorderColor: 'rgba(0,0,0,0)',
                  color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                  barBorderColor: 'rgba(0,0,0,0)',
                  color: 'rgba(0,0,0,0)'
                }
              },
              data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
            },
            {
              name: '收入',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
            },
            {
              name: '支出',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'bottom'
                }
              },
              data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
            }
          ]
        },
        option2: {
          grid: {
            show: false,
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '0%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            axisLine: {
              show: false

            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitLine: {
              show: false
            },
            max: 4,
            min: 0,
            data: [0, 1, 2, 3, 4]
          },
          yAxis: {
            type: 'value',
            axisLine: {
              show: false

            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitLine: {
              show: true,
              interval: 1
            },
            boundaryGap: false,
            data: [0, 1, 2, 3, 4]
          },
          series: [
            {
              name: 'baseic',
              type: 'line',
              showSymbol: false,
              lineStyle: {
                normal: {
                  width: 3,
                  shadowColor: 'rgba(0,0,0,0.4)',
                  shadowBlur: 10,
                  shadowOffsetY: 10
                }
              },
              data: [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4]]
            },
            {
              name: '1',
              type: 'line',
              smooth: true,
              showSymbol: false,
              lineStyle: {
                color: '#81D740',
                normal: {
                  width: 3,
                  shadowColor: 'rgba(0,0,0,0.4)',
                  shadowBlur: 10,
                  shadowOffsetY: 10
                }
              },
              data: [[1.2, 0], [1.5, 1.1], [2.5, 1.8], [0.5, 2.8], [3.5, 4]]
            },
            {
              name: '2',
              type: 'line',
              smooth: true,
              showSymbol: false,
              lineStyle: {
                normal: {
                  width: 3,
                  shadowColor: 'rgba(0,0,0,0.4)',
                  shadowBlur: 10,
                  shadowOffsetY: 10
                }
              },
              data: [[1.8, 0], [2.5, 1.3], [1.5, 1.6], [3.5, 2.8], [0.5, 4]]
            }
          ]
        },
        areasInformation: [
          {
            product: '合计',
            measurement: '-0.01',
            inAmount: '3',
            remarks: '19,050'
          }
        ],
        value: '',
        value8: 0,
        tableData3: [{
          costName: '费项名称',
          costPrice: '123',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          costName: '费项名称',
          costPrice: '123',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          costName: '费项名称',
          costPrice: '123',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          costName: '费项名称',
          costPrice: '123',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          costName: '费项名称',
          costPrice: '含量比=项目含量/基准成本含量',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          value1: '基准值',
          value2: '含量比',
          value3: '单价比'
        },
        {
          costName: '费项名称',
          costPrice: '单价比=项目单价/基准成本单价',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        tableData: [{
          project: '基准成本',
          manageCaliber: '3200'
        }],
        option3: {
          title: {
            text: '含土地费'
          },
          tooltip: {
            trigger: 'item',
            formatter: function(params, ticket, callback) {
              var res = params.name + ' : ' + params.value
              return res
            }
          },
          yAxis: {
            data: ['土地费', '前期工程费', '配套设施费', '基础设施费'].reverse()
          },
          xAxis: {
            position: 'top',
            interval: 500
          },
          series: [
            {
              type: 'bar',
              data: [
                { value: 3200, name: '第一' },
                { value: 3100, name: '第二' },
                { value: 3000, name: '第三' },
                { value: 2900, name: '第四' }
              ].reverse()
            }
          ]
        }
      }
    },
    methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        // 和并列
        if (rowIndex === 0 && columnIndex === 3) {
          return [4, 3]
        }
        if (rowIndex === 4) {
          if (columnIndex === 3 || columnIndex === 4 || columnIndex === 5) {
            return [2, 1]
          }
        }
        // 最后合并行
        if (rowIndex === 4 || rowIndex === 5) {
          if (columnIndex === 0) {
            return [1, 3]
          } else if (columnIndex === 1 || columnIndex === 2) {
            return [0, 0]
          }
        }
      }
    }

  }
</script>

<style>
  .chart-container {
    position: relative;
    padding: 20px;
  }

  .table-column {
    background: white;
    padding: 0;
  }

  .chart-border-red {
    border: 2px solid red;
    margin-top: 10%;
    width: 70%;
    margin-left: 30%;
  }
  .chart-border-blue {
    border: 2px solid blue;
    margin-top: 10%;
    width: 70%;
    margin-left: 30%;
  }
  .chart-border-yellow {
    border: 2px solid yellow;
    margin-top: 10%;
    width: 70%;
    margin-left: 30%;
  }
</style>
