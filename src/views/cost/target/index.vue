<template>
  <div style="background-color: #EEF2F6;padding: 8px">
    <el-tabs style="background-color: #ffffff;">
      <el-tab-pane label="目标成本">
        <div style="border-bottom: solid 1px #ebeef5">
          <!--表单校验-->
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-row :gutter="20">
              <el-col :span="5">
                <el-form-item label="大业态" prop="format">
                  <el-select v-model="ruleForm.format" size="small" clearable placeholder="请选择大业态">
                    <el-option
                      v-for="item in budgetAdj.options1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="组织机构" prop="organize">
                  <el-select v-model="ruleForm.organize" size="small" clearable placeholder="请选择组织机构">
                    <el-option
                      v-for="item in budgetAdj.options1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="项目名称" prop="name">
                  <el-select v-model="ruleForm.name" size="small" clearable placeholder="请选择组织机构">
                    <el-option
                      v-for="item in budgetAdj.projectOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="分期" prop="periodization">
                  <el-select v-model="ruleForm.periodization" size="small" clearable placeholder="请选择组织机构">
                    <el-option
                      v-for="item in budgetAdj.agingOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <!--<el-form-item>-->
                  <el-button @click="targetSearch('ruleForm','search')" icon="el-icon-search"  size="mini" type="primary">搜索</el-button>
                <!--</el-form-item>-->
              </el-col>
            </el-row>
          </el-form>
          <!--按钮-->
          <el-row :gutter="20">
            <el-col :span="8" :push="16">
              <el-button size="mini" icon="el-icon-circle-plus-outline" type="text" @click="targetSearch('ruleForm')">新增</el-button>
              <el-button size="mini" icon="el-icon-delete" type="text" @click="" :disabled="delBtnFlag">删除</el-button>
              <el-button size="mini" icon="el-icon-document" type="text" @click="" :disabled="delBtnFlag">发起审批</el-button>
              <el-button size="mini" icon="el-icon-document" type="text" @click="">审批过程</el-button>
            </el-col>
          </el-row>
          <div style="padding: 0 8px 8px 8px">
              <el-table
                :data="$cost.targetCost.costInformation"
                border
                size="small"
                highlight-current-row
                @current-change="handleCurrentChange"
                @row-dblclick="goVersion"
                :default-sort = "{prop: 'approvedate', order: 'descending'}"
                :header-cell-style="{background:'#E8F4F9', 'text-align': 'center', color: '#7986a9',fontSize:'13px',padding:'3px 0',fontWeight:'500'}">
                <el-table-column
                  type="index"
                  label="序号"
                >
                </el-table-column>
                <el-table-column
                  prop="recordstatus"
                  label="状态"
                >
                </el-table-column>
                <el-table-column
                  prop="versionname"
                  label="版本">
                </el-table-column>
                <el-table-column
                  prop="budgetamt"
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
                  prop="valueof"
                  label="货值(万元)">
                </el-table-column>
                <el-table-column
                  prop="netinterestrate"
                  label="净利率">
                </el-table-column>
                <el-table-column
                  prop="grossMargin"
                  label="毛利率">
                </el-table-column>
                <el-table-column
                  prop="irr"
                  label="IRR">
                </el-table-column>
                <el-table-column
                  prop="modifyuserid"
                  label="经办人">
                </el-table-column>
                <el-table-column
                  prop="modifydate"
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
      <el-tab-pane label="模板管理" disabled></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import Chart from '@/components/Charts/index'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: { Chart },
    data() {
      return {
        value: '',
        budgetAdj: {
          projectOptions: [
            {
              label: '龙湖',
              value: '选项1'
            }, {
              label: '大明湖',
              value: '选项2'
            }],
          options1: [
            {
              label: '龙湖',
              value: '选项1'
            },
            {
              label: '大明湖',
              value: '选项2'
            }
          ],
          agingOptions: [
            {
              label: '跨期',
              value: '选项1'
            }, {
              label: '不跨期',
              value: '选项2'
            }]
        },
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
        options: '',
        // 检验
        ruleForm: {
          format: '',
          organize: '',
          name: '',
          periodization: ''
        },
        rules: {
          format: [
            { required: true, message: '请选择组织机构', trigger: 'change' }
          ],
          organize: [
            { required: true, message: '请选择组织机构', trigger: 'change' }
          ],
          name: [
            { required: true, message: '请选择项目名称', trigger: 'change' }
          ],
          periodization: [
            { required: true, message: '请选择分期', trigger: 'change' }
          ]
        },
        delBtnFlag: true
      }
    },
    computed: {
      ...mapGetters([
        '$cost',
        '$targetCost'
      ])
    },
    methods: {
      ...mapActions([
        'getCostInformation'
      ]),
      radioEvent() {
        this.showFlag = false
        this.adapterSelected = this.radio
      },
      goVersion(currentRow) {
        this.handleCurrentChange(currentRow)
        window.open(window.origin + '/#/targetCost/version/' + currentRow.budgetcostid + '/' + this.delBtnFlag, '_blank')
      },
      handleCurrentChange(currentRow) {
        if (currentRow.recordstatus === '审批中' || currentRow.recordstatus === '已审批') {
          this.delBtnFlag = true
        } else {
          this.delBtnFlag = false
        }
      },
      // 查询
      targetSearch(formName, type) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 点击查询按钮
            if (type === 'search') {
              // 查询调接口
              this.getCostInformation({ 'searchTarget': this.ruleForm })
            } else {
              window.open(window.origin + '/#/targetCost/version/0/false', '_blank')
            }
          } else {
            console.log('error submit!!')
            return false
          }
        })
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
