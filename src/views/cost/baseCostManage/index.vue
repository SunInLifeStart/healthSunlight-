<template>
  <div>
    <div>
      <el-row :gutter="20">
        <el-col :span="6">&nbsp</el-col>
        <el-col :span="5">
          <el-col :span="8">
            <div class="div-font">城市</div>
          </el-col>
          <el-col :span="16">
            <div>
              <el-cascader size="small" :options="baseCostManage.options" :props="baseCostManage.props"></el-cascader>
            </div>
          </el-col>
        </el-col>
        <el-col :span="5">
          <el-col :span="8">
            <div class="div-font">业态</div>
          </el-col>
          <el-col :span="16">
            <div>
              <el-cascader size="small" :options="baseCostManage.formatOptions"
                           :props="baseCostManage.formatProps"></el-cascader>
            </div>
          </el-col>
        </el-col>
        <el-col :span="5">
          <el-col :span="8">
            <div class="div-font">配置</div>
          </el-col>
          <el-col :span="16">
            <el-cascader size="small" :options="baseCostManage.configurationOptions"
                         :props="baseCostManage.configurationProps"></el-cascader>
          </el-col>
        </el-col>
        <el-col :span="3">
          <div class="div-font">
            <el-button size="mini" icon="el-icon-search"></el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-tabs type="border-card">
      <el-tab-pane label="基准成本">
        <div style="margin-top: 15px">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-col :span="6">
                <el-button size="mini" ype="info" @click="goVersion" plain>新增</el-button>
              </el-col>
              <el-col :span="6">
                <el-button size="mini" ype="info" plain>删除</el-button>
              </el-col>
            </el-col>
            <el-col :span="8">&nbsp</el-col>
            <el-col :span="8">
              <el-col :span="6">
                <el-button size="mini" ype="info" plain>导出</el-button>
              </el-col>
              <el-col :span="6">
                <el-button size="mini" ype="info" plain>审批过程</el-button>
              </el-col>
              <el-col :span="6">
                <el-button size="mini" ype="info" plain>发起审批</el-button>
              </el-col>
            </el-col>
          </el-row>
          <el-table size="small" border :data="baseCostManage.baseTable"  @row-click="goVersion" style="width: 99%">
            <el-table-column type="index" label="序号"></el-table-column>
            <el-table-column prop="status" label="版本号231"></el-table-column>
            <el-table-column prop="approvalStatus" label="审批状态"></el-table-column>
            <el-table-column prop="takeEffect" label="生效状态"></el-table-column>
            <el-table-column prop="approvalTime" label="审批时间"></el-table-column>
            <el-table-column prop="cities" label="城市"></el-table-column>
            <el-table-column prop="format" label="业态"></el-table-column>
            <el-table-column prop="configuration" label="配置"></el-table-column>
            <el-table-column prop="managementCaliber" label="管理口径单方"></el-table-column>
            <el-table-column prop="managementFinancial" label="财务口径单方"></el-table-column>
            <el-table-column prop="handler" label="经办人"></el-table-column>
            <el-table-column prop="remakes" label="说明"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="模板管理" disabled="true">
        <div style="margin-top: 15px">
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
                <el-button size="mini" ype="info" plain>发起审批</el-button>
              </el-col>
              <el-col :span="6">
                <el-button size="mini" ype="info" plain>审批过程</el-button>
              </el-col>
            </el-col>
          </el-row>
          <el-table size="small" border :data="baseCostManage.baseTable" style="width: 99%">
            <el-table-column prop="status" label="版本编号"></el-table-column>
            <el-table-column prop="status" label="版本状态"></el-table-column>
            <el-table-column prop="status" label="编制人"></el-table-column>
            <el-table-column prop="status" label="批准人"></el-table-column>
            <el-table-column prop="status" label="生效日期"></el-table-column>
            <el-table-column prop="status" label="失效日期"></el-table-column>
            <el-table-column prop="status" label="审批状态"></el-table-column>
            <el-table-column prop="status" label="说明"></el-table-column>

          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>


</template>

<script>
  export default {
    data() {
      return {

        value: '',

        baseCostManage: {
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
          formatOptions: [
            {
              label: '跨期',
              cities: []
            }, {
              label: '不跨期',
              cities: []
            }],
          formatProps: {
            value: 'label',
            children: ''
          },
          configurationOptions: [
            {
              label: '龙湖1',
              cities: []
            }, {
              label: '大明湖2',
              cities: []
            }],
          configurationProps: {
            value: 'cityLabel',
            children: ''
          },
          baseTable: [
            {
              status: 'ASD01202',
              approvalStatus: '已审批',
              takeEffect: '生效',
              approvalTime: '2018',
              cities: '嘉兴',
              format: '高层',
              configuration: 'p3',
              managementCaliber: '30000',
              managementFinancial: '2000',
              handler: 'wln',
              remakes: '无'
            },
            {
              status: 'ASD01202',
              approvalStatus: '已审批',
              takeEffect: '生效',
              approvalTime: '2018',
              cities: '嘉兴',
              format: '高层',
              configuration: 'p3',
              managementCaliber: '30000',
              managementFinancial: '2000',
              handler: 'wln',
              remakes: '无'
            }
          ], moduleTable: [
            {
              version: '1.0.2',
              status: '车辆',
              personnel: '啊实打实',
              apprOver: '试试',
              effectiveDate: '2017-01-01',
              formats: '--',
              approvalStatus: '已审批',
              remakes: '从自行车自行车'
            }
          ]
        }
      }
    },
    methods: {
      goVersion() {
        this.$router.push({ name: '编制说明' })
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
</style>
