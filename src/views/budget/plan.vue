<template>
  <div>
    <div>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-col :span="1"></el-col>
          <el-col :span="6">
            <el-col :span="8">
              <div class="div-font">组织机构</div>
            </el-col>
            <el-col :span="16">
              <div>
                <el-cascader :options="options" :props="props"></el-cascader>
              </div>
            </el-col>
          </el-col>
          <el-col :span="1"></el-col>
          <el-col :span="4">
            <el-col :span="8">
              <div class="div-font">年度</div>
            </el-col>
            <el-col :span="16">
              <div class="block">
                <el-date-picker
                  v-model="value"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
            </el-col>
          </el-col>
          <el-col :span="2"></el-col>
          <el-col :span="2">
            <el-button style="margin-top: 10%">高级</el-button>
          </el-col>
          <el-col :span="2">
            <el-button style="margin-top: 10%">导出</el-button>
          </el-col>
        </el-col>
      </el-row>
    </div>
    <div v-for="budget in budgets">
      <el-card class="box-card">
        <div class="text item">
          <a :href="'#/payment/budget/plan/' + budget.id">{{budget.data}}<br>{{budget.status}}</a>
        </div>
      </el-card>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        budgets: [
          {
            id: '01',
            data: '2018年2月',
            status: '已确认'
          },
          {
            id: '02',
            data: '2018年1月',
            status: '已确认'
          },
          {
            id: '03',
            data: '2017年12月',
            status: '已确认'
          },
          {
            id: '04',
            data: '2017年11月',
            status: '已确认'
          }],
        options: [{
          label: '北京',
          cities: []
        }, {
          label: '上海',
          cities: []
        }],
        props: {
          value: 'label',
          children: ''
        },
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now()
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date())
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        },
        value: ''
      }
    }
  }
</script>

<style>
  .text {
    font-size: 20px;

  }

  .item {
    padding: 18px 0;
    text-align: center;
    color: white;

  }

  .box-card {
    border-radius: 5px;
    margin: 8px;
    width: 280px;
    float: left;
    background: #009FD6;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
    border-radius: 4px;
    margin-top: 8px;
  }

  .div {

  }

  .div-font {
    padding-top: 8px;
    font-size: 17px;
  }
</style>
