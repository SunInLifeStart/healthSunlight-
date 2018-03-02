<template>
  <div style="margin-left: 20px">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-row>
        <el-col :span="6" :offset="18">
          <el-button>发起审批</el-button>
          <el-button>导出</el-button>
          <el-button>保存</el-button>
        </el-col>
      </el-row>
      <el-collapse-item title="基本信息" name="1">
        <div class="border-top">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-col :span="6">
                <p>城市</p>
              </el-col>
              <el-col :span="18">
                <el-input></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6"><p>业态</p></el-col>
              <el-col :span="18">
                <el-select v-model="value" placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
                  </el-option>
                </el-select>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6"><p>配置</p></el-col>
              <el-col :span="18">
                <el-select v-model="value" placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
                  </el-option>
                </el-select>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">
                <p>版本号</p>
              </el-col>
              <el-col :span="18">
                <el-input></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">
                <p>测算日期</p>
              </el-col>
              <el-col :span="18">
                <el-input></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">
                <p>测算人</p>
              </el-col>
              <el-col :span="18">
                <el-input></el-input>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="2"><p>版本说明</p></el-col>
              <el-col :span="22">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 4}"
                  placeholder="请输入内容">
                </el-input>
              </el-col>
            </el-col>
          </el-row>
        </div>

      </el-collapse-item>
      <el-collapse-item title="项目基本信息" name="2">
        <div class="border-top">
          <el-table :data="tableData" border width="100%" size="small">
            <el-table-column type="index" width="80" align="center" label="序号"></el-table-column>
            <el-table-column prop="date" label="内容" align="center" width="400"></el-table-column>
            <el-table-column prop="" label="值" align="center" width="360"></el-table-column>
            <el-table-column prop="name" width="440" align="center" label="备注"></el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
      <el-collapse-item title="附件" name="3">
        <div class="border-top">
          <el-row>
            <el-col :span="4" :offset="20">
              <i class="el-icon-upload2" style="margin-right: 10px">上传</i>
              <i class="el-icon-upload2">批量下载</i>
            </el-col>
          </el-row>
          <el-table :data="tableData1" border width="100%" size="small">
            <el-table-column type="index" width="80" align="center" label="序号"></el-table-column>
            <el-table-column type="index" width="220" align="upTime" label="上传时间"></el-table-column>
            <el-table-column prop="dateType" label="附件类型" align="center" width="220"></el-table-column>
            <el-table-column prop="data" label="附件名称" align="center" width="260"></el-table-column>
            <el-table-column prop="remark" width="260" align="center" label="备注"></el-table-column>
            <el-table-column prop="operation" width="260" align="center" label="操作">
              <template slot-scope="scope">
                <el-button type="text" size="small">替换</el-button>
                <el-button type="text" size="small">删除</el-button>
                <el-button type="text" size="small">下载</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        weaveExplain: {
          edition: '调整版',
          shaft: 'V1',
          calculateDate: '2017-10-11',
          calculateMen: 'sadas',
          direction: '精装修工程各部品部类合约规划拆分，已签合同含量及单价按实调整。',
          information: [
            {
              upTime: '2018-01-01',
              fileType: '网址',
              enclosure: 'www.baidu.com',
              replace: '替换',
              remove: '删除',
              download: '下载'
            }
          ],
          buildingInformation: [
            {
              group: '1组团',
              buildingNo: '1',
              format: '高',
              coveredArea: '8000'
            }, {
              group: '2组团',
              buildingNo: '2',
              format: '高',
              coveredArea: '8000'
            }, {
              group: '3组团',
              buildingNo: '3',
              format: '高',
              coveredArea: '8000'
            }, {
              group: '4组团',
              buildingNo: '4',
              format: '高',
              coveredArea: '8000'
            }
          ]
        },
        activeNames: ['1'],
        options: [
          {
            value: 'w',
            label: '北京'
          }
        ],
        value: [],
        tableData: [
          {
            date: '项目景观配置定位',
            name: 'p3',
            province: '上海'
          },
          {
            date: '场地类型',
            name: 'san',
            province: '上海'
          },
          {
            date: '设防烈度',
            name: 'san',
            province: '上海'
          },
          {
            date: '基本风压(kN/m²)',
            name: 'san',
            province: '上海'
          }
        ],
        tableData1: [
          {
            upTime: '20160101',
            dateType: 'p3',
            data: '上海',
            remark: 'wu'
          }
        ]
      }
    },
    methods: {
      handleChange(val) {
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

  .border-top {
    border-top: black 1px solid;
  }

  .el-select {
    width: 100%;
  }

  .el-table {
    margin-top: 15px;
  }
</style>
