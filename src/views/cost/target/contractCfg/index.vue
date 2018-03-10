<template>
  <div>
    <div style="float:none">
      <el-row class="piecerow">
        <el-col :span="8" class="card_section">
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
        <el-col :span="2" :push="2"> <div style="padding-top: 20px">合约规划分解</div></el-col>
        <el-col :span="3" :push="11">
          <div style="padding-top: 15px">
            <el-button size="mini"plain>新增</el-button>
            <el-button size="mini"plain>保存</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row class="piecerow piecerow_bottom piecerow_text">
        <div style="width: 40%;position: absolute">
          <tree-table :data="items" :columns="columns" :type="'col'"  :evalFunc="func" :evalArgs="args"
                      :stripe="true" :showLevel='level' border>
          </tree-table>
        </div>
        <div style="width: 58%;float: right;">
          <el-table :data="disassembleTable" height="250" border highlight-current-row>
            <el-table-column type="index" label="序号"></el-table-column>
            <el-table-column prop="planingname" label="合约规划名称"></el-table-column>
            <el-table-column prop="contractname"  label="合同名称">
              <template slot-scope="scope">
                <el-button type="text"  @click="goContractDetail(scope.row)" >{{scope.row.contractname}}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="planingamt" label="合约规划金额(A>=B)"></el-table-column>
            <el-table-column prop="usedudgetamt" label="已使用合约金额(B)"></el-table-column>
          </el-table>
        </div>

      </el-row>

    </div>
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
            width: 300,
            fixed: 'left'
          }, {
            title: '目标金额',
            value: 'previousplaningamt',
            type: 'text',
            width: 300
          }
        ],
        items: [],
        args: [null, null, true, 'timeLine'],
        disassembleTable: []
      }
    },
    // 初始化页面时调用接口，填充页面数据
    created: function() {
      this.getContractTable().then((data) => {
        this.items = data
      })
      this.getContractCalculateDisassemble().then((data) => {
        this.disassembleTable = data
      })
    },
    methods: {
      ...mapActions([
        'getContractTable',
        'getContractCalculateDisassemble'
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
  /**
    项目地块图下边距
   */
  .piecerow_bottom {
    padding-bottom: 15px;
  }
  /**
    项目地块图和版本摘要
   */
  .piecerow {
    background-color: #feffff;
    margin-bottom: 10px;
    border-radius: 4px;
    color: #333;
    font-size: 14px;
  }
  /**
    层级选项分页样式
   */
  .paging{
    float: left;
    margin-top: 13px;
  }
  /**
    层级选项
   */
  .hierarchy{
    float: left;
    margin-top: 20px;
    margin-left: 10px;
    font-size: 14px;
  }
  /**
    保存按钮样式
   */
  .saveBtn{
    float: right;
    margin-right: 15px;
    margin-bottom: 5px;
    background-color: #7986a9;
    color: white;
  }
</style>
