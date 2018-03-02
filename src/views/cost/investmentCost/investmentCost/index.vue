<template>
  <div>
    <el-tabs type="border-card">
    <el-tab-pane label="投模成本">
      <div>
        <div style="margin-top: 15px">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-col :span="8">
                <el-button size="mini" type="primary" @click="addCost">新增</el-button>
              </el-col>
              <el-col :span="8">
                <el-button size="mini" type="primary" @click="AddCostVersion">新增版本</el-button>
              </el-col>
              <el-col :span="8">
                <el-button size="mini" type="primary" @click="delCost">删除</el-button>
              </el-col>
            </el-col>
            <el-col :span="8">&nbsp</el-col>
            <el-col :span="8">
              <el-col :span="12">
                <el-button size="mini" type="primary" @click="approveCourse">审批过程</el-button>
              </el-col>
            </el-col>
          </el-row>
          <el-table
            :data="costTable"
            border
            @row-click="goVersion"
            style="width: 100%">
            <el-table-column
              type="index"
              label="序号">
            </el-table-column>
            <el-table-column
              prop="approvedstate"
              label="状态">
            </el-table-column>
            <el-table-column
              prop="approvedate"
              label="审批时间">
            </el-table-column>
            <el-table-column
              prop="cityid"
              label="城市">
            </el-table-column>
            <el-table-column
              prop="area"
              width="200"
              label="区域">
            </el-table-column>
            <el-table-column
              prop="landcode"
              label="地块编号">
            </el-table-column>
            <el-table-column
              prop="landname"
              label="地块名称">
            </el-table-column>
            <el-table-column
              prop="planname"
              width="200"
              label="方案名称">
            </el-table-column>
            <el-table-column
              prop="landarea"
              label="地块面积">
            </el-table-column>
            <el-table-column
              prop="costamt"
              label="金额">
            </el-table-column>
            <el-table-column
              prop="glcaliberunit"
              label="管理口径单位">
            </el-table-column>
            <el-table-column
              prop="cwcaliberunit"
              label="财务口径单位">
            </el-table-column>
            <el-table-column
              prop="createuserid"
              label="经办人">
            </el-table-column>
            <el-table-column
              prop="versionremark"
              label="版本">
            </el-table-column>
            <el-table-column
              prop="remark"
              label="说明">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-col :span="8">总数：{{total}}</el-col>
          <el-col :span="8">金额：{{sum|currency}}</el-col>
          <el-col :span="8">面积：{{acreage}}</el-col>
        </el-col>
        <el-col :span="16">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="模板管理" disabled="true">
      <div class="block">
        <el-slider
          v-model="value"
          :step="1"
          :max="5"
          :min="1"
          show-stops
          show-input>
        </el-slider>
      </div>
    </el-tab-pane>
    <el-tab-pane disabled>
        <div slot="label" class="label-slot" style="display: inline-block; margin-bottom: -5px; margin-top: 5px;">
            <el-row :gutter="20">
              <el-col :span="7">
                <el-col :span="8">
                  <div class="div-font">组织机构</div>
                </el-col>
                <el-col :span="16">
                  <div>
                    <el-select v-model="form.organization" placeholder="请选择">
                      <el-option
                        v-for="organization in organizations"
                        :key="organization.value"
                        :label="organization.label"
                        :value="organization.value">
                      </el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="5">
                <el-col :span="8">
                  <div class="div-font">城市</div>
                </el-col>
                <el-col :span="16">
                  <div>
                    <el-select v-model="form.cityId" placeholder="请选择">
                      <el-option
                        v-for="city in cities"
                        :key="city.value"
                        :label="city.label"
                        :value="city.value">
                      </el-option>
                    </el-select>
                  </div>
                </el-col>
              </el-col>
              <el-col :span="5">
                <el-col :span="8">
                  <div class="div-font">地块名称</div>
                </el-col>
                <el-col :span="16">
                  <el-input v-model="form.landname"></el-input>
                </el-col>
              </el-col>
              <el-col :span="2" class="div-font">
                <el-button icon="el-icon-search" @click="investmentSearch"></el-button>
              </el-col>
            </el-row>
        </div>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        costTable: [],
        currentPage: 4,
        total: 400, // 总数
        sum: 1000000, // 金额
        acreage: 10000, // 面积
        value: 0,
        form: {
          cityId: '',
          organization: '',
          landname: ''
        },
        organizations: [{
          value: '选项2',
          label: '杭州龙湖'
        }, {
          value: '选项3',
          label: '集团总部'
        }, {
          value: '选项4',
          label: '上海龙湖'
        }],
        cities: [{
          value: '选项2',
          label: '所有'
        }, {
          value: '选项3',
          label: '嘉兴'
        }, {
          value: '选项4',
          label: '绍兴'
        }]
      }
    },
    methods: {
      ...mapActions(['GetHomePage', 'AddCostVersion']),
      goVersion() {
        this.$router.push({ path: '/InvestmentVersion' })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      },
      // 查询
      investmentSearch() {
        this.GetHomePage().then((data) => {
          this.costTable = data
        })
      },
      // 新增
      addCost() {
      },
      // 删除
      delCost() {
      },
      // 审批
      approveCourse() {
      }
    }
  }
</script>

<style scoped>
  .block {
    width: 40%;
  }
</style>
