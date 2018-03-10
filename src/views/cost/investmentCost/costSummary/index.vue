<template>
  <div style="margin: 20px">
    <el-col :span="14">
      <div style="width: 60%;">
        <span>层级选项：</span>
        <div style=" margin-left: 100px;margin-top: -30px">
          <el-pagination
            background
            layout="pager"
            :current-page.sync="level"
            @current-change="changeLevel(level)"
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
            <el-button size="mini" type="primary" @click="exportCost()">导出</el-button>
          </el-col>
          <el-col :span="8">
            <el-button size="mini" type="primary" @click="calculateAndSave()">计算并保存</el-button>
          </el-col>
        </el-col>
      </el-col>
    </div>
    <tree-table :data="investmentCost.costs.items" :columns="investmentCost.costs.columns" :type="'col'" :evalFunc="func" :evalArgs="args"
                :stripe="true" :showLevel='level' border>
    </tree-table>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'
  import treeTable from '@/components/TreeTable'
  import treeToArray from '@/components/treeTable/customEval'
  import { exportCost, calculateAndSave } from 'api/investmentCost'

  export default {
    components: { treeTable },
    name: 'costSummary',
    data() {
      return {
        level: 1,
        func: treeToArray,
        args: [null, null, true, 'timeLine']
      }
    },
    computed: {
      ...mapGetters(['investmentCost'])
    },
    methods: {
      // 行选中回调，判断是否可以增加
      handleCurrentChange(val) {
        this.selectValue = val
        this.addBtnFlag = true
        this.delBtnFlag = true
        if (this.selectValue && this.selectValue.addFlag) {
          this.delBtnFlag = false
          this.addBtnFlag = false
        } else {
          if (val && val.level === 1) {
            console.log('第一层不可添加')
          } else {
            this.findIndex(this.data, val)
          }
        }
      },
      // 改变层级
      changeLevel(_level) {
        this.level = _level
      },
      // 成本汇总导出
      exportCost,
      // 成本汇总计算并保存
      calculateAndSave
    },
    created: function() {
      // 初始化成本汇总
      console.log('成本汇总')
      this.$store.dispatch('Costs', this.$route.params.id)
    }
  }
</script>

<style scoped>
</style>
