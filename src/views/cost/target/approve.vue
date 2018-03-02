<template>
  <div>
    <el-button>导出</el-button>
    <el-button>保存</el-button>
    <el-button>发起审批</el-button>
    <el-tabs type="border-card">
      <el-tab-pane label="设计费限额">
        <el-table
          :data="tableData3"
          style="width: 40%">
          <el-table-column
              prop="costName"
              align="center"
              label="项目设计费限额单价对比分析">
              <el-table-column  prop="zip"label="费项">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="基准成本单价">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="本项目单价">
              </el-table-column>
            </el-table-column>
        </el-table>
       <div  style="float: right;position:relative;margin-top: -145px">
         <chart id="A0002" height='500px' width='700px' :option="option2"></chart>
        </div>
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
            <span >目标成本管理口径单方对比分析</span>
            <span>
              <el-select v-model="value" placeholder="请选择" >
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
                <el-table-column  prop="zip"label="序号">
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
              <div  style="float: right;position:relative;margin-top: -85px">
                <chart  height='300px' width='500px' :option="option1"></chart>
              </div>
            </div>
          </div>
        <div>
          <span >目标成本特征图</span>
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
          title: {
            text: '一天用电量分布',
            subtext: '纯属虚构'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          toolbox: {
            show: true,
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} W'
            },
            axisPointer: {
              snap: true
            }
          },
          visualMap: {
            show: false,
            dimension: 0,
            pieces: [{
              lte: 6,
              color: 'green'
            }, {
              gt: 6,
              lte: 8,
              color: 'red'
            }, {
              gt: 8,
              lte: 14,
              color: 'green'
            }, {
              gt: 14,
              lte: 17,
              color: 'red'
            }, {
              gt: 17,
              color: 'green'
            }]
          },
          series: [
            {
              name: '用电量',
              type: 'line',
              smooth: true,
              data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
              markArea: {
                data: [[{
                  name: '早高峰',
                  xAxis: '07:30'
                }, {
                  xAxis: '10:00'
                }], [{
                  name: '晚高峰',
                  xAxis: '17:30'
                }, {
                  xAxis: '21:15'
                }]]
              }
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
    }

  }
</script>

<style scoped>
  .chart-container {
    position: relative;
    padding: 20px;
  }
</style>
