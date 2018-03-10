<template>
  <div>
    <el-row class="row-bg">
      <el-col :span="8">
          <span>层级选项：</span>
          <div style=" margin-left: 100px;margin-top: -20px">
            <el-pagination
              background
              layout="pager"
              :current-page.sync="level"
              @current-change="changeLevel(level)"
              :total="30">
            </el-pagination>
          </div>
      </el-col>
    </el-row>
    <tree-table :data="investmentCost.financieApportionment.items" :columns="investmentCost.financieApportionment.columns" :type="'col'"  :evalFunc="func" :evalArgs="args"
                :stripe="true" :showLevel='level' border>
    </tree-table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import treeTable from '@/components/TreeTable'
  import treeToArray from '@/components/treeTable/customEval'

  export default {
    components: { treeTable },
    data() {
      return {
        level: 2,
        func: treeToArray,
        args: [null, null, true, 'timeLine']
      }
    },
    computed: {
      ...mapGetters(['investmentCost'])
    },
    methods: {
      changeLevel(_level) {
        this.level = _level
      }
    },
    created: function() {
      this.$store.dispatch('CostFinancialApportionment', { investmentcostid: this.$route.params.id, sharetype: '1' })
    }
  }
</script>

<style scoped>
  .row-bg{
    padding: 10px 5px;
  }
</style>
