<template>
  <div>
    <el-row>
      <el-col :span="16" class="card_section">
        <el-col :span="4" style="line-height: 2;font-size: 14px">层级选项：</el-col>
        <el-col :span="18" style="margin-left: -9%">
          <el-pagination background layout="pager" :current-page.sync="level" @current-change="changeLevel(level)"
                         :total="30"></el-pagination>
        </el-col>
      </el-col>
      <el-col :span="8">
        <el-col :span="10" :offset="14">
          <el-button size="mini" class="addBtn">保存</el-button>
        </el-col>
      </el-col>
    </el-row>
    <!--<el-table :data="tableData" border size="small" style="width: 100%">-->
    <!--<el-table-column prop="index" label="" width="50"></el-table-column>-->
    <!--<el-table-column prop="project" label="" width="50"></el-table-column>-->
    <!--<el-table-column prop="superHeight" label="超高层(>100m)"></el-table-column>-->
    <!--<el-table-column prop="maxHeight" label="高层(18层以上，但<100m)"></el-table-column>-->
    <!--<el-table-column prop="smallHeight" label="小高层(10-18层)"></el-table-column>-->
    <!--<el-table-column prop="gardenHouse" label="花园洋房(9层以下)"></el-table-column>-->
    <!--<el-table-column prop="gardenHouse" label="叠拼别墅"></el-table-column>-->
    <!--<el-table-column prop="rowHouse" label="联排别墅"></el-table-column>-->
    <!--<el-table-column prop="detachedVilla" label="独栋别墅"></el-table-column>-->
    <!--<el-table-column label="廉（公）租房/经济适用房"></el-table-column>-->
    <!--<el-table-column label="限价房/自住型商品房"></el-table-column>-->
    <!--<el-table-column label="SOHO/酒店式公寓（100米以内）"></el-table-column>-->
    <!--<el-table-column label="SOHO/酒店式公寓（超高层）"></el-table-column>-->
    <!--</el-table>-->
    <tree-table :data="data" :columns="columns" :type="'col'" :evalFunc="func" :evalArgs="args"
                :stripe="true" :showLevel='level' border>
    </tree-table>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import treeTable from '@/components/TreeTable'
  import treeToArray from '@/components/treeTable/customEval'

  export default {
    components: { treeTable },
    name: 'productBuild',
    data() {
      return {
        value8: 0,
        level: 1,
        tableData: [{}],
        data: [{}],
        name1: '',
        name2: '',
        columns: [
          {
            title: '',
            value: 'costcode',
            type: 'text',
            width: 200,
            fixed: 'left'
          },
          {
            title: '',
            value: 'costcodename',
            type: 'text',
            width: 200
          }, {
            title: '超高层（>100m）',
            value: 'protypecode',
            type: 'input',
            width: 200,
            colClass: 'bg_lightBlue'
          }, {
            title: this.name1,
            value: 'specialunit',
            type: 'text',
            width: 300
          }, {
            title: this.name2,
            value: 'calculationRule',
            type: 'text',
            width: 200
          }, {
            title: '花园洋房(9层以下)',
            value: 'budgetCost',
            type: 'text',
            width: 200
          }, {
            title: '叠拼别墅',
            value: 'budgetUnitPrice',
            type: 'input',
            width: 200,
            colClass: 'bg_lightBlue'
          }, {
            title: '联排别墅',
            value: 'actualCost',
            type: 'text',
            width: 200
          }, {
            title: '独栋别墅',
            value: 'remark',
            type: 'input',
            width: 200,
            colClass: 'bg_lightBlue'
          }
        ],
        func: treeToArray,
        args: [null, null, true, 'timeLine']
      }
    },
    created: function() {
      this.LookStandardProtypeBuild().then((data) => {
        this.data = data.cmStandardProtypeBuildVoList
        for (let i = 0; i < data.producttype.length; i++) {
          this.columns.push(
            {
              title: data.producttype[i].producttypename,
              value: data.producttype[i].producttypecode,
              type: 'text',
              width: 200,
              colClass: 'bg_lightBlue'
            }
          )
        }
      })
    },
    methods: {
      ...mapActions(['LookStandardProtypeBuild']),
      // 层级选项控制
      changeLevel(level) {
        this.level = level
      }
    }
  }
</script>

<style scoped>
</style>
