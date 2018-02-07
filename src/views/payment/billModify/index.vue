<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row :gutter="20">
        <el-col :span="6">
          <i class="el-icon-document"></i>
          基本信息
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="票据类型">
            <el-select v-model="form.ticketType">
              <el-option label="营业税普通发票" value="shanghai"></el-option>
              <el-option label="Zone two" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="票据号">
            <el-input v-model="form.ticketNum" placeholder="关于下发7-5地块正负零以上建筑"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="发票代码">
            <el-input v-model="form.ticketSize"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="开票日期">
            <el-date-picker type="date" placeholder="Pick a date" v-model="form.ticketTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="校检码后六位">
            <el-input v-model="form.text"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="说明">
            <el-input type="textarea" v-model="form.text"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row :gutter="20">
        <el-col :span="6">
          <i class="el-icon-document"></i>
          票据金额
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="不含可抵扣税金额">
            <el-input v-model="form.taxDeductionNo"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="可抵扣税率">
            <el-input v-model="form.taxRate"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="可抵扣税额">
            <el-input v-model="form.taxDeduction"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="含可抵扣税金额">
            <el-input v-model="form.taxDeductionYes"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-table
      highlight-current-row
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="accessoryType"
        label="附件类型"
        width="330">
      </el-table-column>
      <el-table-column
        prop="accessory"
        label="附件"
        width="400">
      </el-table-column>
      <el-table-column
        prop="remarks"
        label="备注"
        width="400">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small">
            下载
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'billModify',
  data() {
    return {
      form: {
        ticketType: '',
        ticketNum: '',
        ticketSize: '',
        ticketTime: '',
        text: '',
        taxDeductionNo: '',
        taxDeductionYes: '',
        taxDeduction: '',
        taxRate: ''
      },
      tableData: [
        {
          accessoryType: '文档1',
          accessory: '票据信息.pdf',
          remarks: ''
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
