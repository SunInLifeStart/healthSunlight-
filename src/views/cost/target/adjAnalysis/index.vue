<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="开发成本调整原因">
        <el-table
          :data="areasInformation"
          @cell-mouse-enter="handleEdit"
          @cell-mouse-leave="handleEdit"
          border
          style="width: 100%">
          <el-table-column
            type="index"
            label="序号"
            width="100">
          </el-table-column>
          <el-table-column
            prop="product"
            label="内容"
            width="180">
          </el-table-column>
          <el-table-column
            label="成本(万元)"
            width="180">
            <template slot-scope="scope">
              <span v-if="!scope.row.isEdit">{{scope.row.measurement}}</span>
              <el-input v-if="scope.row.isEdit"  v-model="scope.row.measurement" placeholder="请输入成本(万元)"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            label="备注">
            <template slot-scope="scope">
              <span v-if="!scope.row.isEdit">{{scope.row.remarks}}</span>
              <el-input v-if="scope.row.isEdit"  v-model="scope.row.remarks" placeholder="请输入备注"></el-input>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="费项成本变化情况">
        <span style="float: left">层级选项</span>
        <div class="block" style="width: 500px;float: left; margin-left: 100px;">
          <!--<el-slider-->
            <!--v-model="value8"-->
            <!--show-input-->
            <!--:max="3"-->
            <!--:min="0"-->
            <!--show-stops>-->
          <!--</el-slider>-->
          <el-pagination
            background
            small
            layout="pager"
            :page-size="1"
            :total="3">
          </el-pagination>
        </div>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="product"
            label="项目成本指标"
            width="180">
          </el-table-column>
          <el-table-column
            prop="measurement"
            label="单位"
            width="180">
          </el-table-column>
          <el-table-column
            prop="remarks"
            label="启动版1">
          </el-table-column>
          <el-table-column
            prop="remarks"
            label="施工图预算版1">
          </el-table-column>
          <!--<el-table-column-->
            <!--prop="remarks"-->
            <!--label="施工图预算版1">-->
          <!--</el-table-column>-->
          <!--<el-table-column-->
            <!--prop="remarks"-->
            <!--label="施工图预算版1">-->
          <!--</el-table-column>-->
          <el-table-column
            prop="remarks"
            label="上次调整金额(A)">
          </el-table-column>
          <el-table-column
            prop="remarks"
            label="上次调整金额(B)">
          </el-table-column>
           <el-table-column
            prop="remarks"
            label="差异(C=B-A)">
          </el-table-column>
          <el-table-column
            prop="remarks"
            label="差异说明">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="面积规划指标变化情况">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="product"
            label="项目成本指标"
            width="180">
          </el-table-column>
          <el-table-column
            prop="measurement"
            label="单位"
            width="180">
          </el-table-column>
          <el-table-column
            prop="remarks"
            label="启动版1">
          </el-table-column>
          <!--<el-table-column-->
            <!--prop="remarks"-->
            <!--label="施工图预算版1">-->
          <!--</el-table-column>-->
          <!--<el-table-column-->
            <!--prop="remarks"-->
            <!--label="施工图预算版1">-->
          <!--</el-table-column>-->
          <!--<el-table-column-->
            <!--prop="remarks"-->
            <!--label="施工图预算版1">-->
          <!--</el-table-column>-->
          <el-table-column
            prop="remarks"
            label="上次调整金额(A)">
          </el-table-column>
          <el-table-column
            prop="remarks"
            label="上次调整金额(B)">
          </el-table-column>
          <el-table-column
            prop="remarks"
            label="差异(C=B-A)">
          </el-table-column>
          <el-table-column
            prop="remarks"
            label="差异说明">
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane disabled>
        <span slot="label" class="label-slot">
          <el-button>新增</el-button>
          <el-button>保存</el-button>
        </span>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: 'adjAnalysis',
    data() {
      return {
        areasInformation: [
          {
            product: '合计',
            measurement: '-0.01',
            remarks: '19,050',
            isEdit: false,
            children: [
              {
                product: '面积变化',
                measurement: '0.00',
                remarks: '备注'
              }
            ]

          }
        ],
        value8: 0,
        tableData: []
      }
    },
    methods: {
      handleEdit(row) {
        row.isEdit = !row.isEdit
      }
    }
  }
</script>

<style scoped>
.label-slot{
  margin-left: 200%;
}
.label-slot button{
  padding: 8px;
}
</style>
