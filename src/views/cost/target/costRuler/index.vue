<template>
  <div>
    <div style="text-align: right;padding-right: 2%;padding-top: 1%">
      <el-button>计算</el-button>
      <el-button>保存</el-button>
    </div>
    <el-row>
      <el-col :span="11" :offset="1" style="margin-top: 1%">
        <el-card class="box-card">
          <div>
            <span>项目成功标尺：关键指标变化</span>
              <chart id="A0001" height='300px' width='100%' :option="option"></chart>
            <div style="margin-top: 8px">
              <el-table
                :data="tableData"
                border
                size="small"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="全项目">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="货值">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="净利率">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="毛利率">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="IRR（%）">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="11" :offset="1" style="margin-top: 1%">
        <el-card class="box-card">
          <div>
            <span>业态关键指标变化：高层(18层以上，<100m)(精美)关键指标变化</span>
            <chart id="A0002" height='300px' width='100%' :option="option"></chart>
            <div style="margin-top: 8px">
              <el-table
                :data="tableData"
                border
                size="small"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="高层">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="售价">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="成本">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="毛利率">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="11" :offset="1" style="margin-top: 1%">
        <el-card class="box-card">
          <div>
            <span>业态关键指标变化：花园洋房(9房以下)(精美)关键指标变化</span>
            <chart id="A0003" height='300px' width='100%' :option="option"></chart>
            <div style="margin-top: 8px">
              <el-table
                :data="tableData"
                border
                size="small"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="高层">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="售价">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="成本">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="毛利率">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="11" :offset="1" style="margin-top: 1%">
        <el-card class="box-card">
          <div>
            <span>业态关键指标变化：销售商业关键指标变化</span>
            <chart id="A0004" height='300px' width='100%' :option="option"></chart>
            <div style="margin-top: 8px">
              <el-table
                :data="tableData"
                border
                size="small"
                style="width: 100%">
                <el-table-column
                  prop="date"
                  label="高层">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="售价">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="成本">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="毛利率">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Chart from '@/components/Charts/index'

  export default {
    name: 'costRuler',
    components: { Chart },
    data() {
      return {
        option: {
          title: [{
            text: '每日签约和解约客户数量',
            left: '35%',
            top: '3%',
            textStyle: {
              color: '#fff'
            }
          }],
          backgroundColor: '#424956',
          color: ['#f9882c', '#24c5fb'],
          textStyle: {
            color: '#fff'
          },
          legend: {
            right: 10,
            width: 500,
            itemWidth: 40,
            textStyle: {
              color: '#d7d7d7'
            },
            data: ['签约人数', '解约人数']
          },
          xAxis: [{
            type: 'category',
            axisTick: {
              show: false
            },

            data: ['启动版1', '施工图预算', '其他调整', '1月4日', '1月5日', '1月6日', '1月7日', '1月8日', '1月9日']
          }],
          yAxis: {
            'axisLine': {
              lineStyle: {
                color: '#c0576d'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#c0576d'
              }
            },
            'axisTick': {
              'show': false
            },
            axisLabel: {
              textStyle: {
                color: '#ffd285'
              }
            },
            type: 'value'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          series: [{
            name: '签约人数',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 6,
                color: '#ffd285'
              }
            },
            data: [120, 50, 60, 50, 15, 50, 30, 50, 20]
          }, {
            name: '解约人数',
            type: 'bar',
            barWidth: 15,
            itemStyle: {
              normal: {
                barBorderRadius: 6,
                color: '#ec4863'
              }
            },
            data: [66, 35, 58, 0, 0, 0, 0, 47, 0]
          }]
        },
        tableData: [
          {
            date: '上次值',
            name: '1023300',
            address: '11'
          },
          {
            date: '本次值',
            name: '1023300',
            address: '11'
          },
          {
            date: '差异',
            name: '1023300',
            address: '11'
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .container_style {
    display: inline-block;
    width: 45%
  }

  .chart-container {
    position: relative;
    padding: 20px;
    width: 100%
  }
</style>
