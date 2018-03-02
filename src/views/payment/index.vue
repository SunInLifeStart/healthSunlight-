<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-row>
        <el-col :span="5">
          <el-col :span="8">组织机构</el-col>
          <el-col :span="16">
            <el-input v-model="form.organiazation"></el-input>
          </el-col>
        </el-col>
        <el-col :span="5">
          <el-col :span="8">项目/分期</el-col>
          <el-col :span="16">
            <el-input></el-input>
          </el-col>
        </el-col>
        <el-col :span="5">
          <el-col :span="8">关键词</el-col>
          <el-col :span="16">
            <el-input></el-input>
          </el-col>
        </el-col>
        <el-col :span="5">
          <el-col :span="12">
            <el-input></el-input>
          </el-col>
        </el-col>
        <el-col :span="4">
          <el-button-group>
            <el-button icon="el-icon-search" @click="FindPayments"></el-button>
            <el-button>高级</el-button>
          </el-button-group>
        </el-col>
      </el-row>
    </el-form>
    <el-table
      stripe
      height="480"
      :data="$payment.payments"
      :default-sort="{prop: 'status', order: 'descending'}"
      v-loading="$payment.isFetchingPayments">
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column prop="status" label="状态" width="80"></el-table-column>
      <el-table-column prop="paymentType" label="付款类别"></el-table-column>
      <el-table-column prop="paymentTheme" label="付款主题" width="240"></el-table-column>
      <el-table-column prop="paymentNumber" label="付款编号" width="120"></el-table-column>
      <el-table-column prop="Title" label="合同名称" width="240"></el-table-column>
      <el-table-column prop="payer" label="付款单位"></el-table-column>
      <el-table-column prop="payee" label="收款单位"></el-table-column>
      <el-table-column prop="appliedAmount" label="申请金额"></el-table-column>
      <el-table-column prop="paymentAmount" label="支付金额"></el-table-column>
      <el-table-column prop="output" label="累计产值"></el-table-column>
      <el-table-column prop="applicationDivision" label="申请部门"></el-table-column>
      <el-table-column prop="proposer" label="申请人"></el-table-column>
      <el-table-column prop="applicationDate" label="申请日期"></el-table-column>
      <el-table-column prop="operation" label="操作" width="260">
        <template slot-scope="scope" class="row">
          <el-button
            plain
            @click.native.prevent="deleteRow(scope.$index, $payment.payments)"
            type="danger"
            size="small">
            删除
          </el-button>
          <el-button
            plain
            @click="submit(scope.$index)"
            type="success"
            size="small">
            提交审批
          </el-button>
          <el-button
            plain
            @click="showPayment(scope.row.id)"
            type="primary"
            size="small">
            详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="text-align:right; padding:32px 8px" v-if="$payment.pagination.total>$payment.pagination.pageSize">
        <el-pagination
        :current-page="$payment.pagination.pageIndex"
        :page-sizes="[10, 20, 50, 100, 200]"
        :page-size="$payment.pagination.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="$payment.pagination.total">
        </el-pagination>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      form: {
        organization: ''
      }
    }
  },
  computed: {
    ...mapGetters(['$payment', 'user'])
  },
  methods: {
    ...mapActions([
      'FindPayments'
    ]),
    showPayment(id) {
      this.$router.push({ name: '付款详情', params: { id }})
    },
    submit() {
      alert('提交审批')
    },
    deleteRow(index, rows) {
      rows.splice(index, 1)
    }
  }
}
</script>

<style scoped>

</style>
