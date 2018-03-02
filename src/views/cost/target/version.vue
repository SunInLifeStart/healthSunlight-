<template>
  <div>
    <el-row>
      <el-col :span="7" :offset="17" style="margin-bottom: 5px">
        <el-button>发起审批</el-button>
        <el-button>保存</el-button>
        <el-button>审批流程</el-button>
      </el-col>
    </el-row>
    <el-collapse accordion >
      <el-collapse-item title="基本信息" name="1">
        <div class="divCollapse" >
          <el-row :gutter="20" >
            <el-col :span="8">
              <el-col :span="8"><p>项目分期</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.edition" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8"><p>目标版本</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.shaft" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8"><p>城市名称</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.calculateDate" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8"><p>行政区域</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.calculateMen" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8"><p>项目总体配置定位</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.calculateMen" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8"><p>项目景观配置定位</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.calculateMen" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8"><p>场地类型</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.calculateMen" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8"><p>抗震等级</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.calculateMen" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8"><p>基本风压</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.calculateMen" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse >
      <el-collapse-item title="成本信息" name="1">
        <div class="divCollapse">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-col :span="10"><p>目标金额（含土地费）:</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.edition" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="10"><p>目标金额（不含土地费）:</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.shaft" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8"><p>其中商业费用:</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.calculateDate" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-col :span="10"><p>预算金额（含土地费）:</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.calculateMen" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="10"><p>预算金额（不含土地费）:</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.calculateMen" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8"><p>其中商业费用:</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.calculateMen" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
          </el-row >
          <el-row :gutter="20">
            <el-col :span="8">
              <el-col :span="10"><p>测算人:</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.calculateMen" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="10"><p>测算日期:</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.calculateMen" placeholder="请输入内容"></el-input>
              </el-col>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="3"><p>测算说明：</p></el-col>
            <el-col :span="16">
              <el-input
                type="textarea"
                :rows="6"
                placeholder="请输入内容"
                v-model="version.direction">
              </el-input>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse >
      <el-collapse-item title="项目信息" name="1">
        <div class="divCollapse" >
          <div style="height: 200px;width: 90.8%;margin-left: 6%">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-card :body-style="{padding: '0px' }">
                  <img src="static/images/loufang.png" class="image" style="height: 364px">
                </el-card>
              </el-col>
              <el-col :span="12">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="static/images/shejitu.png" class="image" style="height: 364px">
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse >
      <el-collapse-item title="附件" name="1">
        <div class="divCollapse">
          <div style="width: 90.8%;margin-left: 6%;text-align: center">
            <el-row>
              <el-col :span="5" :offset="19" style="margin-bottom: 5px">
                <i class="el-icon-upload2">上传附件</i>
                <i class="el-icon-download" style="padding-left: 20px">一键下载</i>
              </el-col>
            </el-row>
            <el-table
              :data="version.informations"
              border>
              <el-table-column
                width="180"
                type="index"
                label="序号"
                align="center"
              >
              </el-table-column>
              <el-table-column
                prop="upTime"
                label="上传时间"
                align="center"
                width="180">
              </el-table-column>
              <el-table-column
                prop="fileType"
                align="center"
                label="附件类型">
              </el-table-column>
              <el-table-column
                prop="enclosure"
                align="center"
                label="附件">
              </el-table-column>
              <el-table-column
                prop="remakes"
                align="center"
                label="备注">
              </el-table-column>
              <el-table-column
                prop="operation"
                align="center"
                label="操作">
                <template slot-scope="scope">
                  <el-button type="text" size="small">替换</el-button>
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">下载</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>

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
              operation: ''
            },
            {
              upTime: '2018-01-01',
              fileType: '网址',
              enclosure: 'www.baidu.com',
              remakes: '',
              operation: ''
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
  .el-collapse{
    margin: 8px;
  }
  .divCollapse{
    text-align: right;border-top: solid 1px #ebeef5
  }
  .el-col-3{
    width: 14%;
  }
</style>
