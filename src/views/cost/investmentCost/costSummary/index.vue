<template>
  <div style="margin: 20px">
    <el-col :span="14">
      <div style="width: 60%;">
        <span>层级选项：</span>
        <div style=" margin-left: 100px;margin-top: -30px">
          <el-pagination
            background
            layout="pager"
            :current-change="GetSpecialItem()"
            :total="30">
          </el-pagination>
        </div>
      </div>
    </el-col>
    <div>
      <el-col :span="16"> &nbsp</el-col>
      <el-col :span="8">
        <el-col :span="12">&nbsp</el-col>
        <el-col :span="12">
          <el-col :span="8">
            <el-button size="mini" type="primary">导出</el-button>
          </el-col>
          <el-col :span="8">
            <el-button size="mini" type="primary">计算并保存</el-button>
          </el-col>
        </el-col>
      </el-col>
    </div>
    <el-table
      :data="tableData3"
      border
      style="width: 100%">
      <el-table-column
        type="index"
        label="序号">
      </el-table-column>
      <el-table-column
        label="项目"
        prop="product">
      </el-table-column>
      <el-table-column
        prop="estimateBased"
        label="估算基础">
      </el-table-column>
      <el-table-column
        prop="estimate"
        label="估算量">
      </el-table-column>
      <el-table-column
        prop="unit"
        label="单位">
      </el-table-column>
      <el-table-column
        prop="unitPrice"
        label="单价(元)">
      </el-table-column>
      <el-table-column
        prop="cost"
        label="合价(万元)">
      </el-table-column>
      <el-table-column
        prop="rentalAreaPrice"
        label="可租售产权面积单价（元）">
      </el-table-column>
      <el-table-column
        prop="coveredAreaPrice"
        label="建面单价（元）">
      </el-table-column>
      <el-table-column
        prop="ticketsPercent"
        label="取票率">
      </el-table-column>
      <el-table-column
        prop="synthesizePercent"
        label="综合进项税率">
      </el-table-column>
      <el-table-column
        prop="inputVAT"
        label="进项税额">
      </el-table-column>
      <el-table-column
        prop="remarks"
        label="备注">
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
  import { mapActions } from 'vuex'
  import treeTable from '@/components/TreeTable'
  import treeToArray from '@/components/treeTable/customEval'

  export default {
    components: { treeTable },
    name: 'costSummary',
    data() {
      return {
        func: treeToArray,
        cfg: {
          fixed: true,
          maxHeight: 400
        },
        args: [null, null, true, 'timeLine'],
        myStyle: { height: 250 },
        specialInformation: [
          {
            product: '1',
            estimateBased: '开发成本',
            estimate: '19,050',
            unit: '项',
            unitPrice: '1、高压线迁移费用差不多1000元/m',
            cost: '32E文',
            rentalAreaPrice: '223',
            coveredAreaPrice: '322223',
            ticketsPercent: '',
            synthesizePercent: '',
            inputVAT: '',
            remarks: '做差值',
            children: [
              {
                product: '1',
                estimateBased: '开发成本',
                estimate: '19,050',
                unit: '项',
                unitPrice: '1、高压线迁移费用差不多1000元/m',
                cost: '32E文',
                rentalAreaPrice: '223',
                coveredAreaPrice: '322223',
                ticketsPercent: '',
                synthesizePercent: '',
                inputVAT: '',
                remarks: '做差值'
              },
              {
                product: '1',
                estimateBased: '开发成本',
                estimate: '19,050',
                unit: '项',
                unitPrice: '1、高压线迁移费用差不多1000元/m',
                cost: '32E文',
                rentalAreaPrice: '223',
                coveredAreaPrice: '322223',
                ticketsPercent: '2',
                synthesizePercent: '233',
                inputVAT: '43',
                remarks: '做差值'
              }
            ]
          }
        ],
        value8: 0,
        tableData3: []
      }
    },
    methods: {
      ...mapActions(['GetSpecialItem', 'CalculateCost', 'SaveSpecialItem']),
      message(row) {
        this.$message.info(row.event)
      }
    }
  }
</script>

<style scoped>
</style>
