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
              :current-change="GetSpecialItem()"
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
          <el-col :span="6"> <el-button size="mini" type="primary">保存</el-button></el-col>
          <el-col :span="8"> <el-button size="mini" type="primary">导出</el-button></el-col>
        </el-col>
      </el-col>
    </div>
    <div>
      <el-table
        border
        size="small"
        :data="areasInformation"
        stripe
        style="width: 100%">
        <el-table-column
          type="index"
          label="序号">
        </el-table-column>
        <el-table-column
          prop="product"
          label="项目">
        </el-table-column>
        <el-table-column
          prop="measurement"
          label="单位">
        </el-table-column>
        <el-table-column
          prop="total"
          label="合计">
        </el-table-column>
        <el-table-column
          prop="nperOne"
          label="1期">
        </el-table-column>
        <el-table-column
          prop="nperTwo"
          label="2期">
        </el-table-column>
        <el-table-column
          prop="nperThree"
          label="3期">
        </el-table-column>
        <el-table-column
          prop="nperOne"
          label="4期">
        </el-table-column>
        <el-table-column
          prop="nperTwo"
          label="5期">
        </el-table-column>
        <el-table-column
          prop="nperThree"
          label="6期">
        </el-table-column>
        <el-table-column
          prop="nperThree"
          label="8期">
        </el-table-column>
        <el-table-column
          prop="remarks"
          label="备注">
        </el-table-column>
      </el-table>
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
        func: treeToArray,
        tabPosition: 'left',
        dialogFormVisible: false,
        formLabelWidth: '120px',
        cfg: {
          fixed: true,
          maxHeight: 400
        },
        myStyle: { height: 250 },
        areasInformation: [
          {
            product: '总用地面积',
            measurement: 'M2',
            total: '19,050',
            nperOne: '22',
            nperTwo: '23',
            nperThree: '32',
            nperFour: '223',
            nperFive: '33',
            nperSix: '33',
            remarks: '备注',
            children: [
              {
                product: 'ww',
                measurement: 'wsw',
                total: 'wwdw',
                nperOne: 'wdw',
                nperTwo: 'aaa',
                nperThree: 'ddd',
                nperFour: 'xx',
                nperFive: 'zz',
                nperSix: 'cc',
                remarks: 'sssss'
              }
            ]
          },
          {
            product: '总用地面积',
            measurement: 'M2',
            total: '19,050',
            nperOne: '22',
            nperTwo: '23',
            nperThree: '32',
            nperFour: '223',
            nperFive: '33',
            nperSix: '33',
            remarks: '备注',
            children: [
              {
                product: 'ww',
                measurement: 'wsw',
                total: 'wwdw',
                nperOne: 'wdw',
                nperTwo: 'aaa',
                nperThree: 'ddd',
                nperFour: 'xx',
                nperFive: 'zz',
                nperSix: 'cc',
                remarks: 'sssss'
              }
            ]

          }
        ],
        args: [null, null, true, 'timeLine'],
        value: 0
      }
    },
    methods: {
      ...mapActions(['GetSpecialItem', 'CalculateCost', 'SaveSpecialItem']),
      areaImportBox() {
      },
      message(row) {
        this.$message.info(row.event)
      }
    }
  }
</script>

<style>
  .success-col {
    background: #f0f9eb;
  }
</style>
