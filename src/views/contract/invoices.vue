<template>
  <el-tabs type="border-card">
        <div class="row-operation">
           <el-button size="mini">确认</el-button>
        </div>
        <el-form  :model="keyword"  label-width="120px">
          <el-row :gutter="5">
            <el-col :span="6">
              <el-form-item label="发票类型">
                <el-select v-model="keyword.invoice">
                    <el-option label="类别1" value="001"></el-option>
                    <el-option label="类别2" value="002"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="发票号">
                <el-select v-model="keyword.project">
                  <el-option label="类别1" value="001"></el-option>
                  <el-option label="类别2" value="002"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="对方单位">
                  <el-input v-model="keyword.word" placeholder="请输入内容"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-button-group>
                <el-button icon="el-icon-search"></el-button>
              </el-button-group>
            </el-col>
          </el-row>
        </el-form>
        <div style="margin-top: 15px">
          <el-table
            :data="investmentCost.costTable"
            border
            @row-click="goVersion"
            style="width: 99%">
            <el-table-column
              type="index"
              label="序号"
            >
            </el-table-column>
            <el-table-column
              prop="status"
              label="状态"
            >
            </el-table-column>
            <el-table-column
              prop="approvalTime"
              label="发票类型">
            </el-table-column>
            <el-table-column
              prop="cities"
              label="发票号">
            </el-table-column>
            <el-table-column
              prop="district"
              label="开票时间">
            </el-table-column>
            <el-table-column
              prop="landParcelNub"
              label="对方单位">
            </el-table-column>
            <el-table-column
              prop="landParcelName"
              label="含税金额">
            </el-table-column>
            <el-table-column
              prop="product"
              label="累计付款金额（含税）">
            </el-table-column>
            <el-table-column
              prop="landParcelArea"
              label="未付款付款金额（含税）">
            </el-table-column>
          </el-table>
        </div>
        <!-- 已选择的发票 -->
          <el-col class="dev1_border"></el-col>
          <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #e2e7eb;margin-top:3%">
            <el-row>
              <el-col :span="10" style="margin-left: 1%">
                <span style="border-left: 2px solid #7986A9"></span>
                <span class="dev1_font">已选择的发票</span>
              </el-col>
              <el-col :span="13" style="text-align: right;margin-left: 2%">
                <el-button type="success" size="mini"><a :href="'#/contract/detail/' + 123 + '/payments/invoice'">新增</a></el-button>
                <el-button type="info" size="mini">导入</el-button>
                <el-button type="danger" size="mini">删除</el-button>
              </el-col>
            </el-row>
          </div>
          <div  class="dev_show" style="margin: 1% 0;">
            <el-table highlight-current-row  border
                :data="investmentCost.costTable"
                size="small" style="width: 98%;margin-left: 1%"
                :header-cell-style="{background:'#E8F4F9', color: '#7986a9',fontSize:'13px',height:'40px',padding:'6px 0',fontWeight:'500'}">
              <el-table-column  type="selection" width="55">  </el-table-column>
              <el-table-column type="index"  label="序号"  >  </el-table-column>
              <el-table-column prop="status" label="状态" >  </el-table-column>
              <el-table-column prop="approvalTime"  label="发票类型">  </el-table-column>
              <el-table-column prop="cities" label="发票号"> </el-table-column>
              <el-table-column prop="district"  label="开票时间"> </el-table-column>
              <el-table-column prop="landParcelNub"  label="对方单位">  </el-table-column>
              <el-table-column prop="landParcelName"  label="含税金额"> </el-table-column>
              <el-table-column prop="product" label="累计付款金额（含税）"></el-table-column>
              <el-table-column prop="landParcelArea" label="未付款付款金额（含税）"> </el-table-column>
            </el-table>
          </div>
        <!-- 其他可用发票 -->
        <el-collapse v-model="activeNames">
          <el-collapse-item title="其他可用发票" name="1">
               <el-col class="dev1_border"></el-col>
          <!-- <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #e2e7eb;margin-top:3%">
            <el-row>
              <el-col :span="10" style="margin-left: 1%">
                <span style="border-left: 2px solid #7986A9"></span>
                <span class="dev1_font">其他可用发票</span>
              </el-col>
            </el-row>
          </div> -->
          <el-form  :model="keyword"  label-width="120px" style="margin-top: 2%;">
              <el-row :gutter="5">
                <el-col :span="6">
                  <el-form-item label="发票类型">
                    <el-select v-model="keyword.invoice">
                        <el-option label="类别1" value="001"></el-option>
                        <el-option label="类别2" value="002"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="发票号">
                    <el-select v-model="keyword.project">
                      <el-option label="类别1" value="001"></el-option>
                      <el-option label="类别2" value="002"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="开票日期">
                      <el-date-picker
                          type="date"
                          placeholder="选择日期">
                      </el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-button-group>
                    <el-button icon="el-icon-search"></el-button>
                    <el-button>关联使用</el-button>
                  </el-button-group>
                </el-col>
              </el-row>
          </el-form>
          <div  class="dev_show" style="margin: 1% 0;">
            <el-table highlight-current-row  border
                :data="investmentCost.costTable"
                size="small" style="width: 98%;margin-left: 1%"
                :header-cell-style="{background:'#E8F4F9', color: '#7986a9',fontSize:'13px',height:'40px',padding:'6px 0',fontWeight:'500'}">
                <el-table-column  type="selection" width="55">  </el-table-column>
                <el-table-column   type="index"  label="序号" >  </el-table-column>
                <el-table-column  prop="approvalTime"  label="发票类型"> </el-table-column>
                <el-table-column  prop="cities"  label="发票号">   </el-table-column>
                <el-table-column  prop="cities"  label="发票代码">   </el-table-column>
                <el-table-column  prop="district"  label="开票日期"> </el-table-column> 
                <el-table-column  prop="district"  label="校验码（后6位）">  </el-table-column>
                <el-table-column  prop="landParcelNub"  label="票据金额（不含税）">  </el-table-column>
                <el-table-column  prop="landParcelName" label="税率"> </el-table-column>
                <el-table-column  prop="product"  label="票据税额"> </el-table-column>
                <el-table-column  prop="product" label="含税金额">  </el-table-column>
                <el-table-column  prop="landParcelArea"  label="未付款付款金额（含税）"></el-table-column>
            </el-table>
          </div>
          </el-collapse-item>
        </el-collapse>
         
  </el-tabs>
</template>

<script>
  export default {
    data() {
      return {
        activeNames: ['0'],
        keyword: {
          word: '',
          invoice: '',
          project: ''
        },
        investmentCost: {
          select: {
            options: [
              {
                label: '龙湖',
                cities: []
              }, {
                label: '大明湖',
                cities: []
              }],
            props: {
              value: 'label',
              children: ''
            },
            cityOptions: [
              {
                label: '北京',
                cities: []
              }, {
                label: '上海',
                cities: []
              }],
            cityProps: {
              value: 'cityLabel',
              children: ''
            },
            value: ''
          },
          costTable: [
            {
              status: '已审批',
              approvalTime: '2018-01-01',
              cities: '嘉兴',
              district: '秀洲区',
              landParcelNub: 'Jx-sa213',
              landParcelName: '大大阿瓦撒旦是',
              product: 'planA',
              landParcelArea: '2000',
              sum: '5000000',
              managementUnit: '2000',
              financialUnit: '1000',
              handler: 'wln',
              edition: 'V1',
              remarks: '玩儿啊'
            }
          ],
          value: 0
        },
        currentPage: 4,
        total: 400, // 总数
        sum: 1000000, // 金额
        acreage: 10000 // 面积
      }
    },
    methods: {
      goVersion() {
        this.$router.push({ name: 'InvestmentVersion' })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      }
    }
  }
</script>

<style scoped>
  .block {
    width: 40%;
  }
   .row-operation{
    padding-left: 95%;
    margin-bottom: 20px;
  }
</style>
