<template>
  <el-tabs type="border-card">
    <el-button >确认</el-button>
      <div>
        <div>
          <el-row :gutter="20">
            <el-col :span="7">
              <el-col :span="8">
                <div class="div-font">发票类型</div>
              </el-col>
              <el-col :span="16">
                <div>
                  <el-cascader
                    :options="investmentCost.select.options"
                    :props="investmentCost.select.props"
                  ></el-cascader>
                </div>
              </el-col>
            </el-col>
            <el-col :span="5">
              <el-col :span="8">
                <div class="div-font">发票号</div>
              </el-col>
              <el-col :span="16">
                <div>
                  <el-cascader
                    :options="investmentCost.select.cityOptions"
                    :props="investmentCost.select.cityProps"
                  ></el-cascader>
                </div>
              </el-col>
            </el-col>
            <el-col :span="5">
              <el-col :span="8">
                <div class="div-font">对方单位</div>
              </el-col>
              <el-col :span="16">
                <el-input></el-input>
              </el-col>
            </el-col>
            <el-col :span="6">
              <el-button-group>
                <el-button icon="el-icon-search"></el-button>
                <el-button @click="showAdvancedSearch = !showAdvancedSearch">高级</el-button>
              </el-button-group>
            </el-col>
          </el-row>
        </div>
        <div style="margin-top: 15px">
          <el-table
            :data="investmentCost.costTable"
            border
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
              prop="approvalTime"
              label="发票类型">
            </el-table-column>
            <el-table-column
              prop="cities"
              label="发票号">
            </el-table-column>
            <el-table-column
              prop="district"
              label="开票时间">
            </el-table-column>
            <el-table-column
              prop="landParcelNub"
              label="对方单位">
            </el-table-column>
            <el-table-column
              prop="landParcelName"
              label="含税金额">
            </el-table-column>
            <el-table-column
              prop="product"
              label="累计付款金额（含税）">
            </el-table-column>
            <el-table-column
              prop="landParcelArea"
              label="未付款付款金额（含税）">
            </el-table-column>
          </el-table>
        </div>
        <div style="margin-top: 15px">
          <el-row :gutter="20">
            <el-col :span="8">
              已选择的发票
            </el-col>
            <el-col :span="8">
              <el-col :span="8">
                <el-button size="mini" type="primary">删除</el-button>
              </el-col>
              <el-col :span="8">
                <el-button size="mini" type="primary">全部删除</el-button>
              </el-col>
              <el-col :span="8">
                <a :href="'#/contract/detail/' + 123 + '/payments/invoice'">新增</a>

              </el-col>
              <el-col :span="8">
                <el-button size="mini" type="primary">导入</el-button>
              </el-col>
            </el-col>
          </el-row>
          <el-table
            :data="investmentCost.costTable"
            border
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
              prop="approvalTime"
              label="发票类型">
            </el-table-column>
            <el-table-column
              prop="cities"
              label="发票号">
            </el-table-column>
            <el-table-column
              prop="district"
              label="开票时间">
            </el-table-column>
            <el-table-column
              prop="landParcelNub"
              label="对方单位">
            </el-table-column>
            <el-table-column
              prop="landParcelName"
              label="含税金额">
            </el-table-column>
            <el-table-column
              prop="product"
              label="累计付款金额（含税）">
            </el-table-column>
            <el-table-column
              prop="landParcelArea"
              label="未付款付款金额（含税）">
            </el-table-column>
          </el-table>
        </div>
      </div>
  </el-tabs>

</template>

<script>
  export default {
    data() {
      return {
        investmentCost: {
          select: {
            options: [
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
            cityOptions: [
              {
                label: '北京',
                cities: []
              }, {
                label: '上海',
                cities: []
              }],
            cityProps: {
              value: 'cityLabel',
              children: ''
            },
            value: ''
          },
          costTable: [
            {
              status: '已审批',
              approvalTime: '2018-01-01',
              cities: '嘉兴',
              district: '秀洲区',
              landParcelNub: 'Jx-sa213',
              landParcelName: '大大阿瓦撒旦是',
              product: 'planA',
              landParcelArea: '2000',
              sum: '5000000',
              managementUnit: '2000',
              financialUnit: '1000',
              handler: 'wln',
              edition: 'V1',
              remarks: '玩儿啊'
            }
          ],
          value: 0
        },
        currentPage: 4,
        total: 400, // 总数
        sum: 1000000, // 金额
        acreage: 10000 // 面积
      }
    },
    methods: {
      goVersion() {
        this.$router.push({ name: 'InvestmentVersion' })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      }
    }
  }
</script>

<style scoped>
  .block {
    width: 40%;
  }
</style>
