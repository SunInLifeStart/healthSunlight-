<template>
  <div>
    <el-collapse accordion>
      <el-collapse-item title="基本信息" name="1">
        <el-row>
          <el-col :span="8">
            <el-col :span="6">票据类型</el-col>
            <el-col :span="14">
              <el-input v-model="version.edition" placeholder="请输入内容"></el-input>
            </el-col>
          </el-col>
          <el-col :span="8">
            <el-col :span="6">票据号</el-col>
            <el-col :span="14">
              <el-input v-model="version.shaft" placeholder="请输入内容"></el-input>
            </el-col>
          </el-col>
          <el-col :span="8">
            <el-col :span="6">发票代码</el-col>
            <el-col :span="14">
              <el-input v-model="version.calculateDate" placeholder="请输入内容"></el-input>
            </el-col>
          </el-col>
          <el-col :span="8">
            <el-col :span="6">开票日期</el-col>
            <el-col :span="14">
              <el-input v-model="version.calculateMen" placeholder="请输入内容"></el-input>
            </el-col>
          </el-col>
          <el-col :span="8">
            <el-col :span="6">校验码（后6位）</el-col>
            <el-col :span="14">
              <el-input v-model="version.calculateMen" placeholder="请输入内容"></el-input>
            </el-col>
          </el-col>
          <el-row>
            <el-col :span="2">说明：</el-col>
            <el-col :span="16">
              <el-input
                type="textarea"
                :rows="6"
                placeholder="请输入内容"
                v-model="version.direction">
              </el-input>
            </el-col>
          </el-row>
        </el-row>
      </el-collapse-item>
    </el-collapse>
    <el-collapse accordion>
      <el-collapse-item title="票据金额" name="1">
        <el-row>
          <el-col :span="8">
            <el-col :span="6">不含可抵扣税金额</el-col>
            <el-col :span="14">
              <el-input v-model="version.edition" placeholder="请输入内容"></el-input>
            </el-col>
          </el-col>
          <el-col :span="8">
            <el-col :span="6">可抵扣税率</el-col>
            <el-col :span="14">
              <el-input v-model="version.shaft" placeholder="请输入内容"></el-input>
            </el-col>
          </el-col>
          <el-col :span="8">
            <el-col :span="6">可抵扣税额</el-col>
            <el-col :span="14">
              <el-input v-model="version.calculateDate" placeholder="请输入内容"></el-input>
            </el-col>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-col :span="6">含可抵扣税金额</el-col>
            <el-col :span="14">
              <el-input v-model="version.calculateMen" placeholder="请输入内容"></el-input>
            </el-col>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
    <el-collapse accordion>
      <el-collapse-item title="附件" name="1">
        <el-table
          :data="version.informations"
          border
          style="width: 99%">
          <el-table-column
            width="180"
            type="index"
            label="附件类型">
          </el-table-column>
          <el-table-column
            prop="upTime"
            label="附件"
            width="180">
          </el-table-column>
          <el-table-column
            prop="fileType"
            label="备注">
          </el-table-column>
          <el-table-column
            prop="enclosure"
            label="操作">
          </el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        version: {
          edition: '调整版',
          shaft: 'V1',
          calculateDate: '2017-10-11',
          calculateMen: 'sadas',
          direction: '精装修工程各部品部类合约规划拆分，已签合同含量及单价按实调整。',
          informations: [
            {
              upTime: '2018-01-01',
              fileType: '网址',
              enclosure: 'www.baidu.com',
              remakes: '',
              operation: '删除|替换|下载'
            }
          ],
          building: {
            table: [
              {
                groupOn: '2',
                buildingNo: '11',
                format: '',
                coveredArea: '8000'
              }
            ]

          }
        }
      }
    }
  }
</script>

<style scoped>
  .el-main {

    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .el-aside {
    color: #333;
    width: 40%;
  }

  .el-col {
    margin-top: 8px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
