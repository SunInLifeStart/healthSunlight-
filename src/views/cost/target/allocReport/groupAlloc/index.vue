<template>
  <div>
    <div style="float:none">
      <el-row class="piecerow">
        <el-col :span="8">
          <div style="width: 60%;">
            <div class="hierarchy">层级选项：</div>
            <div class="paging">
              <el-pagination
                background
                small
                layout="pager"
                :current-page.sync="level"
                @current-change="changeLevel(level)"
                :total="50">
              </el-pagination>
            </div>
          </div>
        </el-col>
        <el-col :span="2" > <div style="padding-top: 20px">合约规划分解</div></el-col>
        <el-col :span="3" :push="11">
          <div style="padding-top: 15px">
            <el-button size="mini"plain>导出</el-button>
            <el-button size="mini"plain>保存</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-container>
      <el-aside width="600px">
        <div style="margin-top: 20px">
          <tree-table :data="items" :columns="columns" :type="'col'"  :evalFunc="func" :evalArgs="args"
                      :stripe="true" :showLevel='level' border>
          </tree-table>
        </div>
      </el-aside>
      <el-main>
        <el-table
          size="small"
          border
          :data="table"
          style="width: 100%">
          <el-table-column
            prop=""
            label="1组团">
            <el-table-column
              prop="groupTowerOne"
              label="1#楼">
            </el-table-column>
            <el-table-column
              prop="groupTowerTwo"
              label="2#楼">
            </el-table-column>
            <el-table-column
              prop="groupTowerThree"
              label="3#楼">
            </el-table-column>
            <el-table-column
              prop="groupTowerFour"
              label="4#楼">
            </el-table-column>
            <el-table-column
              prop="groupTowerFive"
              label="5#楼">
            </el-table-column>
          </el-table-column>
          <el-table-column
            prop=""
            label="合计">

          </el-table-column>
          <el-table-column
            prop=""
            label="2组团">
            <el-table-column
              prop="groupTowerSix"
              label="6#楼">
            </el-table-column>
            <el-table-column
              prop="groupTowerSeven"
              label="7#楼">
            </el-table-column>
            <el-table-column
              prop="groupTowerEight"
              label="8#楼">
            </el-table-column>
            <el-table-column
              prop="groupTowerNine"
              label="9#楼">
            </el-table-column>
            <el-table-column
              prop="groupTowerTen"
              label="10#楼">
            </el-table-column>
          </el-table-column>

        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import treeTable from '@/components/TreeTable'
  import treeToArray from '@/components/treeTable/customEval'
  export default {
    components: { treeTable },
    data() {
      return {
        level: 2, // 层级选项
        func: treeToArray,
        columns: [
          {
            title: '费项/合约规划',
            value: 'planingname',
            type: 'text',
            width: 200,
            fixed: 'left'
          },
          {
            title: '目标金额',
            value: 'previousplaningamt',
            type: 'text',
            width: 200
          },
          {
            title: '分摊方式',
            value: '',
            type: 'select',
            width: 200,
            options: [
              {
                value: '1',
                label: '建筑面积分摊'
              },
              {
                value: '2',
                label: '可售面积分摊'
              },
              {
                value: '3',
                label: '实建面积分摊'
              }
            ]
          }
        ],
        items: [],
        args: [null, null, true, 'timeLine'],
        table: [

        ]
      }
    },
    created: function() {
      // 获取合约规划表
      this.getGroupBuildingApportion().then((data) => {
        this.items = data
      })
      // 楼栋表信息
      this.getGroupBuildingTable().then((data) => {
        this.table = data
      })
    },
    methods: {
      ...mapActions([
        'getGroupBuildingApportion',
        'getGroupBuildingTable'
      ]),
      goContractDetail(id) {
        this.$router.push({ name: '合同信息', params: { id }})
      },
      // 层级选项控制
      changeLevel(level) {
        this.level = level
      }
    }
  }
</script>

<style scoped>
  .piecerow {
    background-color: #feffff;
    margin-bottom: 10px;
    border-radius: 4px;
    color: #333;
    font-size: 14px;
  }
  .paging{
       float: left;
       margin-top: 13px;
  }
  .hierarchy{
    float: left;
    margin-top: 20px;
    margin-left: 10px;
    font-size: 14px;
  }
</style>
