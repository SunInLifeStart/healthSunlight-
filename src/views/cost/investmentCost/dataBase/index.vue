<template>
  <div class="dataBase">
    <el-row class="row-bg">
      <el-col :span="2" :offset="22">
          <el-button size="mini" type="primary" class="pull-right" @click="SaveBaseData($cost.investmentCost.baseData)">保存</el-button>
      </el-col>
    </el-row>
    <div>
      <el-row>
        <el-col :span="12">
          <el-row>
            <el-col><h5>一&nbsp&nbsp 项目基本信息</h5></el-col>
          </el-row>
          <el-table
            :data="$cost.investmentCost.baseData.basicInformation"
            size="small"
            border
            :cell-class-name="setEditableStyle"
            :header-cell-class-name="'table-header-bg'"
            style="width: 99%">
            <el-table-column
              width="180"
              type="index"
              label="序号"
            >
            </el-table-column>
            <el-table-column
              prop="content"
              label="内容"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="值">
              <template slot-scope="scope">
                <el-tooltip content="基准限额以城市为单位" placement="top">
                  <el-select v-model="scope.row.configureScenery" clearable placeholder="请选择">
                    <el-option
                      v-for="item in scope.row.configure"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column
              prop="remarks"
              label="备注">
              <template slot-scope="scope">
                <el-input v-model="scope.row.remarks"></el-input>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="12">
          <el-row>
            <el-col><h5>三&nbsp&nbsp 主要材料价格</h5></el-col>
          </el-row>
          <el-table
            :data="$cost.investmentCost.baseData.materials"
            size="small"
            :cell-class-name="setEditableStyle"
            :header-cell-class-name="'table-header-bg'"
            border
            style="width: 99%">
            <el-table-column
              width="180"
              type="index"
              label="序号"
            >
            </el-table-column>
            <el-table-column
              prop="projectDeploy"
              label="项目配置"
              width="180">
            </el-table-column>
            <el-table-column
              prop="datum"
              label="数据">
              <template slot-scope="scope">
                <el-input v-model="scope.row.datum"></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="unit"
              label="单位">
            </el-table-column>
            <el-table-column
              prop="remarks"
              label="备注">
              <template slot-scope="scope">
                <el-input v-model="scope.row.remarks"></el-input>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>

    </div>
    <div>
      <el-row>
        <el-col :span="24"><h5>二&nbsp&nbsp 项目配置</h5></el-col>
      </el-row>
      <el-table
        :data="$cost.investmentCost.baseData.projectConfiguration"
        :span-method="objectSpanMethod"
        size="small"
        :cell-class-name="setEditableStyle"
        :header-cell-class-name="'table-header-bg'"
        border
        style="width: 99%">
        <el-table-column
          prop="classify"
          label="分类"
          width="180">
        </el-table-column>
        <el-table-column
          prop="format"
          label="业态"
          width="180">
        </el-table-column>
        <el-table-column
          prop="constructionDeploy"
          label="建安配置">
          <template slot-scope="scope">
            <el-select v-model="scope.row.constructionDeploy" clearable placeholder="请选择">
              <el-option
                v-for="item in $cost.investmentCost.baseData.configure"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          label="赠送率"
          prop="givingPercentage">
          <template slot-scope="scope">
            <el-input v-model="scope.row.givingPercentage"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          prop="clothBoundDeploy"
          label="精装配置">
          <template slot-scope="scope">
            <el-select v-model="scope.row.clothBoundDeploy" clearable placeholder="请选择">
              <el-option
                v-for="item in scope.row.clothBoundDeploy"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          prop="clothBound"
          label="精装单方">
          <template slot-scope="scope">
            <el-input v-model="scope.row.clothBound"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          prop="sceneryDeploy"
          label="景观配置">
          <template slot-scope="scope">
            <el-select v-model="scope.row.sceneryDeploy" clearable placeholder="请选择">
              <el-option
                v-for="item in $cost.investmentCost.baseData.configureScenery"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters(['$cost'])
    },
    methods: {
      ...mapActions(['SaveBaseData']),
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            }
          } else {
            return {
              rowspan: 0,
              colspan: 0
            }
          }
        }
      },
      setEditableStyle({ column }) {
        // 根据字段设置可编辑的td 的背景
        if (column.property === 'givingPercentage' || column.property === 'clothBound' || column.property === 'remarks' || column.property === 'datum') {
          return 'editable-bg'
        }
      }
    },
    created: function() {
      this.$store.dispatch('FindBaseData', {})
    }
  }
</script>

<style scoped>
  .dataBase >>> .el-input__inner{
    background: transparent;
    border:none;
  }
  .row-bg{
    padding: 10px 5px;
  }
  .pull-right{
    float: right;
  }
</style>
