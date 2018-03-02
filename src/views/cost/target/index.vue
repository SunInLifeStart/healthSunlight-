<template>
  <div style="margin: 8px">
    <el-tabs type="border-card">
      <el-tab-pane label="目标成本">
        <div style="margin: 0px -16px 0 -16px; border-bottom: solid 1px #ebeef5;border-radius:0 0 4px 4px;">
          <el-row :gutter="20" >
                <el-col :span="7" :push="1">
                  <el-col :span="8">
                    <div class="div-font">组织机构：</div>
                  </el-col>
                  <el-col :span="16">
                    <div>
                      <el-cascader
                        size="small"
                        :options="budgetAdj.options1"
                        :props="budgetAdj.budgetAdjprops"
                      ></el-cascader>
                    </div>
                  </el-col>
                </el-col>
                <el-col :span="7" :push="1">
                  <el-col :span="8">
                    <div class="div-font">项目名称：</div>
                  </el-col>
                  <el-col :span="16">
                    <div>
                      <el-cascader
                        size="small"
                        :options="budgetAdj.projectOptions"
                        :props="budgetAdj.projectProps"
                      ></el-cascader>
                    </div>
                  </el-col>
                </el-col>
                <el-col :span="7" :push="1">
                  <el-col :span="6">
                    <div class="div-font">分期：</div>
                  </el-col>
                  <el-col :span="16">
                    <el-cascader
                      size="small"
                      :options="budgetAdj.agingOptions"
                      :props="budgetAdj.agingProps"
                    ></el-cascader>
                  </el-col>
                </el-col>
                <el-col :span="2">
                  <el-button size="small" icon="el-icon-search"></el-button>
                </el-col>
              </el-row>
          <el-dialog :visible.sync="showFlag" style="width:130%;left:-145px">
              <el-collapse v-model="activeNames">
                <el-collapse-item title="基本信息" name="1">
                  <div class="border-top">
                    <el-row :gutter="20">
                      <el-col :span="8">
                        <el-col :span="6">
                          <p>目标版本</p>
                        </el-col>
                        <el-col :span="18">
                          <el-input></el-input>
                        </el-col>
                      </el-col>
                      <el-col :span="8">
                        <el-col :span="6"><p>预算版本</p></el-col>
                        <el-col :span="18">
                          <el-select v-model="value" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                          </el-select>
                        </el-col>
                      </el-col>
                      <el-col :span="8">
                        <el-col :span="6"><p>预算金额(含土地费)</p></el-col>
                        <el-col :span="18">
                          <el-select v-model="value" placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                          </el-select>
                        </el-col>
                      </el-col>
                      <el-col :span="8">
                        <el-col :span="6">
                          <p>测算人</p>
                        </el-col>
                        <el-col :span="18">
                          <el-input></el-input>
                        </el-col>
                      </el-col>
                      <el-col :span="8">
                        <el-col :span="6">
                          <p>测算日期</p>
                        </el-col>
                        <el-col :span="18">
                          <el-input></el-input>
                        </el-col>
                      </el-col>
                      <el-col :span="8">
                        <el-col :span="6">
                          <p>预算金额(不含土地费)</p>
                        </el-col>
                        <el-col :span="18">
                          <el-input></el-input>
                        </el-col>
                      </el-col>
                      <el-col :span="8">
                        <el-col :span="6">
                          <p>其中的商业金额</p>
                        </el-col>
                        <el-col :span="18">
                          <el-input></el-input>
                        </el-col>
                      </el-col>
                      <el-col :span="24">
                        <el-col :span="2"><p>版本说明</p></el-col>
                        <el-col :span="22">
                          <el-input
                            type="textarea"
                            :autosize="{ minRows: 2, maxRows: 4}"
                            placeholder="请输入内容">
                          </el-input>
                        </el-col>
                      </el-col>
                    </el-row>
                  </div>
                  <div style="padding-top:20px;text-align: center">
                    <el-button type="primary" size="small" @click="radioEvent()">确定</el-button>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </el-dialog>
          <div style="padding: 0 8px 8px 8px">
              <el-row :gutter="20">
                <el-col :span="8" :push="16">
                  <el-col :span="6">
                    <el-button type="text" @click="showFlag = true"><span style="font-size: 22px">+</span>&nbsp新增</el-button>
                  </el-col>
                  <el-col :span="6">
                    <el-button type="text" ><span style="font-size: 22px">+</span>&nbsp版本删除</el-button>
                  </el-col>
                  <el-col :span="6">
                    <el-button type="text"><span style="font-size: 22px">+</span>&nbsp发起审批</el-button>
                  </el-col>
                  <el-col :span="6">
                    <el-button type="text"><span style="font-size: 22px">+</span>&nbsp审批过程</el-button>
                  </el-col>
                </el-col>

              </el-row>
              <el-table
                :data="budgetAdj.table"
                border
                size="small"
                @row-click="goVersion"
                style="width: 99%">
                <el-table-column
                  type="index"
                  label="序号"
                >
                </el-table-column>
                <el-table-column
                  prop="status"
                  label="状态"
                >
                </el-table-column>
                <el-table-column
                  prop="version"
                  label="版本">
                </el-table-column>
                <el-table-column
                  prop="targetCost"
                  label="目标成本金额">
                </el-table-column>
                <el-table-column
                  prop="managementUnit"
                  label="管理口径单方">
                </el-table-column>
                <el-table-column
                  prop="financialUnit"
                  label="财务口径单方">
                </el-table-column>
                <el-table-column
                  prop="changesAmount"
                  label="变动金额">
                </el-table-column>
                <el-table-column
                  prop="changesRatio"
                  label="变动比例">
                </el-table-column>
                <el-table-column
                  prop="value"
                  label="货值(万元)">
                </el-table-column>
                <el-table-column
                  prop="netProfitRatio"
                  label="净利率">
                </el-table-column>
                <el-table-column
                  prop="grossMargin"
                  label="毛利率">
                </el-table-column>
                <el-table-column
                  prop="IRR"
                  label="IRR">
                </el-table-column>
                <el-table-column
                  prop="handler"
                  label="经办人">
                </el-table-column>
                <el-table-column
                  prop="auditingDate"
                  label="审批日期">
                </el-table-column>
              </el-table>
            </div>
        </div>
        <div style="margin: 15px -16px 0 -16px">
          <el-card class="box-card">
          <chart id="A0001" height='400px' width='1200px' :option="option"></chart>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="模板管理" disabled="true">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-col :span="6">
              <el-button size="mini" ype="info" plain>新增</el-button>
            </el-col>
            <el-col :span="6">
              <el-button size="mini" ype="info" plain>修改</el-button>
            </el-col>
            <el-col :span="6">
              <el-button size="mini" ype="info" plain>删除</el-button>
            </el-col>
            <el-col :span="6">
              <el-button size="mini" ype="info" plain>生效</el-button>
            </el-col>
          </el-col>
          <el-col :span="8">&nbsp</el-col>
          <el-col :span="8">
            <el-col :span="6">
              &nbsp
            </el-col>
            <el-col :span="6">
              <el-button size="mini" ype="info" plain>发起审批</el-button>
            </el-col>
            <el-col :span="6">
              <el-button size="mini" ype="info" plain>审批过程</el-button>
            </el-col>
          </el-col>
        </el-row>
        <el-table
          :data="tableData"
          border
          size="small"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="版本编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="版本状态"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="编制人">
          </el-table-column>
          <el-table-column
            prop="address"
            label="批准人">
          </el-table-column>
          <el-table-column
            prop="address"
            label="生效日期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="失效日期">
          </el-table-column>
          <el-table-column
            prop="address"
            label="审批状态">
          </el-table-column>
          <el-table-column
            prop="address"
            label="说明">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import Chart from '@/components/Charts/index'

  export default {
    components: { Chart },
    data() {
      return {
        value: '',
        budgetAdj: {
          table: [
            {
              status: '已审批',
              version: 'BJ-LH2018',
              targetCost: '嘉兴',
              managementUnit: '秀洲区',
              financialUnit: 'Jx-sa213',
              changesAmount: '大大阿瓦撒旦是',
              changesRatio: 'planA',
              value: '2000',
              netProfitRatio: '5000000',
              grossMargin: '2000',
              IRR: '1000',
              handler: 'wln',
              approvalTime: '20160101',
              auditingDate: '20180216'
            }
          ],
          projectOptions: [
            {
              label: '龙湖',
              cities: []
            }, {
              label: '大明湖',
              cities: []
            }],
          projectProps: {
            value: 'cityLabel',
            children: ''
          },
          options1: [
            {
              label: '龙湖',
              cities: []
            }, {
              label: '大明湖',
              cities: []
            }],
          props: {
            value: 'label',
            children: ''
          },
          agingOptions: [
            {
              label: '跨期',
              cities: []
            }, {
              label: '不跨期',
              cities: []
            }],
          agingProps: {
            value: 'label',
            children: ''
          }
        },
        tableData: [{
          date: 'ASDAS123',
          name: 'ASDASD',
          address: 'SAD试试AS'
        }],
        option: {
          tooltip: {
            trigger: 'axis',
            formatter: function(params, ticket, callback) {
              var res = params[0].name

              for (var i = 0, l = params.length; i < l; i++) {
                if (params[i].seriesType === 'line') {
                  res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + 'h'
                } else {
                  res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '-') + '个'
                }
              }
              return res
            }
          },
          grid: {
            containLabel: true
          },
          legend: {
            data: ['净利率', '毛利率', 'IRR', '目标成本', '货值']
          },
          xAxis: [{
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: ['启动版1', '施工图预算板1', '其他调整2']
          }],
          yAxis: [{
            type: 'value',
            name: '单位（万元）',
            min: 0,
            position: 'left',
            axisLabel: {
              formatter: '{value} '
            }
          }, {
            type: 'value',
            name: '',
            min: 0,
            position: 'right',
            axisLabel: {
              formatter: '{value} %'
            }
          }],
          series: [{
            name: '净利率',
            type: 'line',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            lineStyle: {
              normal: {
                width: 3,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
              }
            },
            data: [1, 4, 8]
          },
          {
            name: '毛利率',
            type: 'line',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            lineStyle: {
              normal: {
                width: 3,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
              }
            },
            data: [3, 4, 5]
          },
          {
            name: 'IRR',
            type: 'line',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            lineStyle: {
              normal: {
                width: 3,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
              }
            },
            data: [1, 2, 3]
          },
          {
            name: '目标成本',
            type: 'bar',
            yAxisIndex: 1,
            barWidth: 20,
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: [2000, 3000, 40000]
          }, {
            name: '货值',
            type: 'bar',
            yAxisIndex: 1,
            barWidth: 20,
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: [4000, 5000, 50000]
          }]
        },
        showFlag: false,
        radio: '',
        activeNames: ['1'],
        options: ''
      }
    },
    methods: {
      radioEvent() {
        this.showFlag = false
        this.adapterSelected = this.radio
      },
      goVersion() {
        this.$router.push({ name: 'version' })
      }
    }
  }
</script>

<style scoped>
  .el-row {
    margin: 8px;
  }

  .div-font {
    padding-top: 8px;
  }

  .chart-container {
    position: relative;
    padding: 20px;
    width: 100%;
    height: 1000px;
  }

</style>
