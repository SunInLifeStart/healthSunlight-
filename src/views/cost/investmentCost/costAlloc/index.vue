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
      <el-col :span="8">
        <el-col :span="12">&nbsp</el-col>
        <el-col :span="12">
          <el-col :span="8"> <el-button size="mini" type="primary">导出</el-button></el-col>
          <el-col :span="8">
            <el-button size="mini" type="primary" @click="dialogVisible = true">引用</el-button>
          </el-col>
          <el-col :span="8"> <el-button size="mini" type="primary">保存并计算</el-button></el-col>
        </el-col>
      </el-col>
    </div>
    <el-table
      :data="tableData3"
      style="width: 100%"
      @header-click="toggleUnitTaxExclusive">
      <el-table-column
        prop="number"
        label="编码"
        width="150">
      </el-table-column>
      <el-table-column label="业态">
        <el-table-column
          prop="commercial"
          label="与投模业态一致"
          width="120">
        </el-table-column>
      </el-table-column>
      <el-table-column label="项目">
        <el-table-column
          prop="projectName"
          label="项目设置与投模保持一致"
          width="120">
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="estimateBased"
        label="估算基础"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="单位"
        width="100">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="单位(不含税)>>"
        width="120"
        v-if="!unitTaxExclusiveVisible">
        <el-table-column
          prop="zip"
          label="档1"
          width="120">
          <el-table-column
            prop="zip"
            label="P1"
            width="120">
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="zip"
        label="<<单位(不含税)"
        width="120"
        v-if="unitTaxExclusiveVisible">
        <el-table-column
          prop="zip"
          label="档1"
          width="120">
          <el-table-column
            prop="zip"
            label="P1"
            width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column
          prop="zip"
          label="修正系数1"
          width="120">
          <el-table-column
            prop="zip"
            label="1.04"
            width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column
          prop="zip"
          label="档2"
          width="120">
          <el-table-column
            prop="zip"
            label="P2"
            width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column
          prop="zip"
          label="修正系数2"
          width="120">
          <el-table-column
            prop="zip"
            label="1.04"
            width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column
          prop="zip"
          label="档3"
          width="120">
          <el-table-column
            prop="zip"
            label="P3"
            width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column
          prop="zip"
          label="修正系数3"
          width="120">
          <el-table-column
            prop="zip"
            label="1.04"
            width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column
          prop="zip"
          label="档4"
          width="120">
          <el-table-column
            prop="zip"
            label="P4"
            width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column
          prop="zip"
          label="修正系数4"
          width="120">
          <el-table-column
            prop="zip"
            label="1.04"
            width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column
          prop="zip"
          label="自定义"
          width="120">
          <el-table-column
            prop="zip"
            label="P3+"
            width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column
          prop="zip"
          label="修正系数5"
          width="120">
          <el-table-column
            prop="zip"
            label=""
            width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column
          prop="zip"
          label="自定义"
          width="120">
          <el-table-column
          prop="zip"
          label="P2+"
          width="120">
          </el-table-column>
        </el-table-column>
        <el-table-column
          prop="zip"
          label="修正系数6"
          width="120">
          <el-table-column
            prop="zip"
            label=""
            width="120">
          </el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
    <!--弹出框-->
    <el-dialog title="收货地址" :visible.sync="dialogVisible">
      <el-form ref="form" :model="form">
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="机组组织">
              <el-select v-model="form.contactName" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="城市名称">
              <el-select v-model="form.contactName" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="行政区域">
              <el-select v-model="form.contactName" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="地块名称">
              <el-input v-model="form.contactName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="地块编号">
              <el-input v-model="form.contactName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-button icon="el-icon-search" style="margin-top: 40px;"></el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-table
        :data="tableData3"
        style="width: 100%">
        <el-table-column
          type="index"
          label="序号">
        </el-table-column>
        <el-table-column
          label="创建时间"
          prop="product">
        </el-table-column>
        <el-table-column
          prop="estimateBased"
          label="城市">
        </el-table-column>
        <el-table-column
          prop="estimate"
          label="区域">
        </el-table-column>
        <el-table-column
          prop="unit"
          label="地块编号">
        </el-table-column>
        <el-table-column
          prop="unitPrice"
          label="地块名称">
        </el-table-column>
        <el-table-column
          prop="cost"
          label="金额">
        </el-table-column>
        <el-table-column
          prop="rentalAreaPrice"
          label="管理口径分摊">
        </el-table-column>
        <el-table-column
          prop="coveredAreaPrice"
          label="财务口径方">
        </el-table-column>
        <el-table-column
          prop="ticketsPercent"
          label="经办人">
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        name: 'costAlloc',
        tableData3: [{
          number: '1',
          rank: '1',
          commercial: '开发成本',
          projectName: '开发成本',
          estimateBased: ''
        }],
        value8: 0,
        form: {
          contactName: ''
        },
        dialogVisible: false,
        unitTaxExclusiveVisible: false,
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          }
        ]
      }
    },
    methods: {
      ...mapActions(['GetSpecialItem', 'CalculateCost', 'SaveSpecialItem']),
      toggleUnitTaxExclusive: function(column, event) {
        if (column && column.label.indexOf('单位(不含税)') > -1) {
          this.unitTaxExclusiveVisible = !this.unitTaxExclusiveVisible
        }
      }
    }
  }
</script>

<style scoped>
</style>
