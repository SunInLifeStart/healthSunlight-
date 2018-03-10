<template>
  <div>
    <div style="margin: 15px;">
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
      <el-col :span="2">
            <el-checkbox label="显示全部" name="type"></el-checkbox>
      </el-col>
    </div>
    <div>
      <el-col :span="8">
        <el-col :span="20" justify="center">
          <el-col :span="8">
            <el-button size="mini" type="primary" @click="dialogFormVisible = true">导入面积</el-button>

            <el-dialog title="面积导入" :visible.sync="dialogFormVisible">

              <el-tabs :tab-position="tabPosition" style="height: 200px;">
                <el-tab-pane label="从投模引入面积">
                  从投模引入面积
                </el-tab-pane>
                <el-tab-pane label="从龙湖通引入面积">
                  从龙湖通引入面积
                </el-tab-pane>
                <el-tab-pane label="手动Excle导入">
                  手动Excle导入
                </el-tab-pane>
              </el-tabs>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
              </div>
            </el-dialog>
          </el-col>
          <el-col :span="6"> <el-button size="mini" type="primary" @click="SaveInveAreaIndicator($cost.investmentCost.areaIndicator)">保存</el-button></el-col>
          <el-col :span="8"> <el-button size="mini" type="primary" @click="exportInveAreaIndicator()">导出</el-button></el-col>
        </el-col>
      </el-col>
    </div>
    <div>
      <tree-table :data="$cost.investmentCost.areaIndicator.items" :columns="$cost.investmentCost.areaIndicator.columns" :type="'col'"  :evalFunc="func" :evalArgs="args"
                  :stripe="true" :selection-change="AreaIndicatorTotal($cost.investmentCost.areaIndicator)" :showLevel='level' border>
      </tree-table>
    </div>
  </div>

</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  import treeTable from '@/components/TreeTable'
  import treeToArray from '@/components/treeTable/customEval'
  import { exportInveAreaIndicator } from 'api/investmentCost'

  export default {
    components: { treeTable },
    data() {
      return {
        tabPosition: 'left',
        dialogFormVisible: false,
        args: [null, null, true, 'timeLine'],
        level: 2,
        func: treeToArray
      }
    },
    computed: {
      ...mapGetters(['$cost'])
    },
    methods: {
      ...mapActions(['AreaIndicatorTotal', 'SaveInveAreaIndicator']),
      areaImportBox() {
      },
      message(row) {
        this.$message.info(row.event)
      },
      /**
       * 改变层级
       * @param level
       */
      changeLevel(level) {
        this.level = level
      },
      exportInveAreaIndicator: exportInveAreaIndicator
    },
    created: function() {
      this.$store.dispatch('FindAreaIndicator', {})
    }
  }
</script>

<style>
  .success-col {
    background: #f0f9eb;
  }
</style>
