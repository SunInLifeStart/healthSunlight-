<template>
  <div class="app-container">
    <el-row>
      <el-col :span="12">变更签证-关于阳台推拉门外侧防水恢复事宜</el-col>
      <el-col :span="8" :offset="4">
        <el-button>通过</el-button>
        <el-button>协商</el-button>
        <el-button>驳回</el-button>
        <i class="el-icon-error" style="margin-left: 25px">关闭</i>
      </el-col>
    </el-row>
    <el-tabs>
      <el-tab-pane label="业务信息">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="基本信息" name="1">
            <el-row class="border-four-edges">
              <el-col :span="11">
                <el-col :span="12" class="textRight">
                  文档编号:
                </el-col>
                <el-col :span="12" class="textLeft">
                  KHKLJIOLJIGKKP“P111”
                </el-col>
              </el-col>
              <el-col :span="13">
                <el-col :span="12" class="textRight">
                  主题:
                </el-col>
                <el-col :span="12" class="textLeft">
                  关于阳台推拉门外侧防水恢复事宜
                </el-col>
              </el-col>

              <el-col :span="11">
                <el-col :span="12" class="textRight">
                  专业:
                </el-col>
                <el-col :span="12" class="textLeft">
                  精装
                </el-col>
              </el-col>
              <el-col :span="13">
                <el-col :span="12" class="textRight">
                  预估金额:
                </el-col>
                <el-col :span="12" class="textLeft">
                  0.00
                </el-col>
              </el-col>

              <el-col :span="11">
                <el-col :span="12" class="textRight">
                  不计成本预算金额:
                </el-col>
                <el-col :span="12" class="textLeft">
                  0.00
                </el-col>
              </el-col>
              <el-col :span="13">
                <el-col :span="12" class="textRight">
                  有效预估金额:
                </el-col>
                <el-col :span="12" class="textLeft">
                  0.00
                </el-col>
              </el-col>

              <el-col :span="11">
                <el-col :span="12" class="textRight">
                  与报规、验收及商品销售合同核对:
                </el-col>
                <el-col :span="12" class="textLeft">
                  否
                </el-col>
              </el-col>
              <el-col :span="13">
                &nbsp;
              </el-col>
              <el-col :span="6" class="textRight">
                变更原因:
              </el-col>
              <el-col :span="18">
                因为所以因为所以因为所以因为所以因为所以因为所以因为所以因为所以因为所以因为所以因为所以因为所以因为所以
              </el-col>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="变更事项" name="2">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="index"
                label="序号"
                width="200">
              </el-table-column>
              <el-table-column
                prop="name"
                label="变更内容">
              </el-table-column>
            </el-table>
          </el-collapse-item>
          <el-collapse-item title="变更金额" name="3">
            <el-row class="border-four-edges">
              <el-col :span="4"><div class="grid-content bg-purple textRight">预估金额</div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple-light textLeft">0.00</div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple textRight">不计成本预估金额</div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple-light textLeft">0.00</div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple textRight">有效预估金额</div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple-light textLeft">0.00</div></el-col>
            </el-row>
          </el-collapse-item>
          <el-collapse-item title="下发单信息" name="4">
            <el-table
              style="width: 100%">
              <el-table-column
                prop="index"
                label="下发单编号"
                width="200">
              </el-table-column>
              <el-table-column
                prop="name"
                label="合同名称">
              </el-table-column>
              <el-table-column
                prop=""
                label="施工单位">
              </el-table-column>
              <el-table-column
                prop=""
                label="费用承担单位">
              </el-table-column>
              <el-table-column
                prop=""
                label="预计实施时间">
              </el-table-column>
              <el-table-column
                prop=""
                label="预计完成时间">
              </el-table-column>
              <el-table-column
                prop=""
                label="变更事项">
              </el-table-column>
              <el-table-column
                prop=""
                label="经办工程师">
              </el-table-column>
            </el-table>
          </el-collapse-item>
          <el-collapse-item title="审核要点" name="5">
            <el-table
              style="width: 100%">
              <el-table-column
                prop=""
                label="合同/合同规划名称"
                width="200">
              </el-table-column>
              <el-table-column
                prop="name"
                label="乙方单位">
              </el-table-column>
              <el-table-column
                prop=""
                label="合约规划金额">
              </el-table-column>
              <el-table-column
                prop=""
                label="合同对应金额">
              </el-table-column>
              <el-table-column
                prop=""
                label="变更对应金额">
              </el-table-column>
              <el-table-column
                prop=""
                label="总预留金额">
              </el-table-column>
            </el-table>
          </el-collapse-item>
          <el-collapse-item title="附件" name="6">
            <el-table
              style="width: 100%">
              <el-table-column
                prop=""
                label="附件类型"
                width="200">
              </el-table-column>
              <el-table-column
                prop="name"
                label="附件">
              </el-table-column>
              <el-table-column
                prop=""
                label="备注">
              </el-table-column>
              <el-table-column
                prop=""
                label="操作">
              </el-table-column>
            </el-table>
          </el-collapse-item>
        </el-collapse>
      </el-tab-pane>
      <el-tab-pane label="审批流程">
         <el-button size="mini" icon="el-icon-circle-plus-outline">增加审批人/会签人</el-button>
         <p>审批流程</p>
          <el-steps :active="1">
            <el-step title="发起" icon="el-icon-edit"></el-step>
            <el-step title="会签" icon="el-icon-news"></el-step>
            <el-step title="审批1" icon="el-icon-picture"></el-step>
            <el-step title="审批2" icon="el-icon-picture"></el-step>
            <el-step title="审批3" icon="el-icon-picture"></el-step>
          </el-steps>
          <el-table
            :data="tableData6"
            :span-method="objectSpanMethod"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
              prop="id"
              label="序号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="step"
              label="步骤">
            </el-table-column>
            <el-table-column
              prop="name"
              label="审批人">
            </el-table-column>
            <el-table-column
              prop="action"
              label="动作">
            </el-table-column>
            <el-table-column
              prop="opinion"
              label="意见">
            </el-table-column>
             <el-table-column
              prop="date"
              label="时间">
            </el-table-column> <el-table-column
              prop="enclosure"
              label="附件">
            </el-table-column>
          </el-table>
          <el-collapse v-model="activeNames">
            <el-collapse-item title="历史审批记录" name="1">
              <el-table
                :data="tableData6"
                border
                style="width: 100%; margin-top: 20px">
                <el-table-column
                  prop="id"
                  label="序号"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="step"
                  label="步骤">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="审批人">
                </el-table-column>
                <el-table-column
                  prop="action"
                  label="动作">
                </el-table-column>
                <el-table-column
                  prop="opinion"
                  label="意见">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="时间">
                </el-table-column> <el-table-column
                  prop="enclosure"
                  label="附件">
                </el-table-column>
              </el-table>
            </el-collapse-item>
          </el-collapse>
          <p>用印记录</p>
           <el-table
            :data="tableData6"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
              prop="id"
              label="用印人"
              width="180">
            </el-table-column>
            <el-table-column
              prop="step"
              label="用印时间">
            </el-table-column>
            <el-table-column
              prop="name"
              label="用印人">
            </el-table-column>
            <el-table-column
              prop="action"
              label="说明">
            </el-table-column>
          </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: 'initiateApproval',
    data() {
      return {
        tableData: [{
          name: '王小虎'
        }],
        activeNames: [''],
        tableData6: [{
          id: '1',
          step: '发起',
          name: '王小虎',
          action: '发起',
          opinion: 'OK',
          date: '2018/1/11 17:30',
          enclosure: ''
        }, {
          id: '2',
          step: '发起',
          name: '王小虎',
          action: '发起',
          opinion: 'OK',
          date: '2018/1/11 17:30',
          enclosure: ''
        }, {
          id: '3',
          step: '发起',
          name: '王小虎',
          action: '发起',
          opinion: 'OK',
          date: '2018/1/11 17:30',
          enclosure: ''
        }, {
          id: '4',
          step: '发起',
          name: '王小虎',
          action: '发起',
          opinion: 'OK',
          date: '2018/1/11 17:30',
          enclosure: ''
        }, {
          id: '5',
          step: '发起',
          name: '王小虎',
          action: '发起',
          opinion: 'OK',
          date: '2018/1/11 17:30',
          enclosure: ''
        }]
      }
    },
    methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2]
          } else if (columnIndex === 1) {
            return [0, 0]
          }
        }
      },
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 2) {
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
      }
    }
  }
  
</script>

<style scoped>
  .textRight{
    text-align: right;
  }
  .textLeft{
    text-align: left;
  }
  .border-four-edges{
    border: 1px solid #ddd;
  }
  .bg-purple {
    background: #F5F5F5;
  }
  .bg-purple-light {
    background: #fff;
  }
  .grid-content {
    height:36px;
    line-height: 36px;
    border-radius: 4px;
  }

</style>
