<template>
  <div class="piecerow_main">
    <el-row class="piecerow">
      <el-col :span="24">
        <div>
          <el-col :span="7" :offset="18" style="margin-bottom: 15px">
            <el-button plain size="small">保存</el-button>
            <el-button type="info" plain size="small">发起审批</el-button>
            <el-button plain size="small">审批过程</el-button>
          </el-col>
        </div>
      </el-col>
    </el-row>
    <el-row class="piecerow piecerow_bottom piecerow_text">
      <el-row :gutter="10" type="flex" justify="center">
        <el-col :span="7">
            <el-col :span="7" class="cast_vertical">城市名称：</el-col>
            <el-col :span="16">
              <el-input size="small"></el-input>
            </el-col>
        </el-col>
        <el-col :span="7">
          <el-col :span="7" class="cast_vertical">行政区域：</el-col>
          <el-col :span="16">
            <el-input size="small"></el-input>
          </el-col>
        </el-col>
        <el-col :span="7">
          <el-col :span="7" class="cast_vertical">投摸版本：</el-col>
          <el-col :span="16">
            <el-input size="small"></el-input>
          </el-col>
        </el-col>
        <el-col :span="1"></el-col>
      </el-row>
      <el-row :gutter="10" type="flex" justify="center">
        <el-col :span="7">
          <el-col :span="7" class="cast_vertical">地块编号：</el-col>
          <el-col :span="16">
            <el-input size="small"></el-input>
          </el-col>
        </el-col>
        <el-col :span="7">
          <el-col :span="7" class="cast_vertical">地块名称：</el-col>
          <el-col :span="16">
            <el-input size="small"></el-input>
          </el-col>
        </el-col>
        <el-col :span="7">
          <el-col :span="7" class="cast_vertical"></el-col>
          <el-col :span="16"></el-col>
        </el-col>
        <el-col :span="1"></el-col>
      </el-row>
      <el-row :gutter="10" type="flex" justify="center">
        <el-col :span="7">
          <el-col :span="7" class="cast_vertical">方案名称：</el-col>
          <el-col :span="16">
            <el-input size="small"></el-input>
          </el-col>
        </el-col>
        <el-col :span="7">
          <el-col :span="7" class="cast_vertical">测算人：</el-col>
          <el-col :span="16">
            <el-input size="small"></el-input>
          </el-col>
        </el-col>
        <el-col :span="7">
          <el-col :span="7" class="cast_vertical">测算日期：</el-col>
          <el-col :span="16">
            <template>
              <div class="block">
                <el-date-picker
                  type="date" size="small"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
            </template>
          </el-col>
        </el-col>
        <el-col :span="1"></el-col>
      </el-row>
      <el-row :gutter="10" type="flex" justify="center">
        <el-col :span="20">
          <el-col :span="5" class="cast_vertical">版本说明：</el-col>
          <el-col :span="19">
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入内容">
            </el-input>
          </el-col>
        </el-col>
        <el-col :span="13"></el-col>
      </el-row>
    </el-row>
    <el-row class="piecerow piecerow_bottom">
      <el-row :gutter="2" type="flex" justify="space-around">
        <el-col :span="11">
          <el-col :span="4" class="cast_vertical">项目地块图</el-col>
          <el-col :span="4"></el-col>
          <el-col :span="4" class="cast_vertical">图片上传：</el-col>
          <el-col :span="8">
            <el-input size="small"></el-input>
          </el-col>
          <el-col :span="2">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange"
              :file-list="fileList3">
              <el-button size="small" type="primary">点击上传</el-button>
              <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
            </el-upload>
          </el-col>
          <el-col :span="2">

          </el-col>
        </el-col>
        <el-col :span="11">
          <el-col :span="4" class="cast_vertical">版本摘要</el-col>
        </el-col>
      </el-row>
      <el-row :gutter="2" type="flex" justify="space-around">
        <el-col :span="11">
          <el-card :body-style="{ padding: '0px' }">
            <img src="static/images/loufang.png" class="image">
          </el-card>
        </el-col>
        <el-col :span="11">
          <el-table
            border
            stripe
            :row-style="rowClass"
            :data="investmentVersion.version">
            <el-table-column
              width="80"
              type="index"
              label="序号">
            </el-table-column>
            <el-table-column
              prop="itemName"
              label="项目"
              width="180">
            </el-table-column>
            <el-table-column
              prop="figure"
              label="数值">
            </el-table-column>
            <el-table-column
              prop="unit"
              label="单位">
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="piecerow piecerow_bottom" style="padding: 0px 20px 20px 20px;">
      <el-row :gutter="2" type="flex" justify="space-around">
        <el-col :span="1" style="margin: 14px;">
          附件
        </el-col>
        <el-col :span="19">
        </el-col>
        <el-col :span="2" style="margin: 3px;">

          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-change="handleChange"
            :file-list="fileList3">
            <el-button type="text" style="color: #99a9bf"><i class="el-icon-upload2"></i>上传附件</el-button>
            <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
          </el-upload>
        </el-col>
        <el-col :span="2" style="margin: 3px;">
          <el-button type="text" style="color: #99a9bf"><i class="el-icon-download"></i>一键下载</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="2" type="flex" justify="space-around">

        <template>
          <el-table
            :data="investmentVersion.informations"
            border
            style="width: 99%">
            <el-table-column
              prop="index"
              label="序号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="upTime"
              label="上传时间"
              width="180">
            </el-table-column>
            <el-table-column
              prop="fileType"
              label="附件类型">
            </el-table-column>
            <el-table-column
              prop="附件"
              label="附件">
            </el-table-column>
            <el-table-column
              prop=""
              label="备注">
            </el-table-column>
            <el-table-column
              label="操作" align="center">
              <template  slot-scope="scope">
                <el-button-group>
                  <el-button type="text" class="reg">替换</el-button>
                  <el-button type="text" class="reg">删除</el-button>
                  <el-button type="text">下载</el-button>
                </el-button-group>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-row>
    </el-row>
  </div>
</template>

<script>
  import ElRow from 'element-ui/packages/row/src/row'

  export default {
    components: { ElRow },
    data() {
      return {
        investmentVersion: {
          version: [
            {
              itemName: '总成本（不含土地费）',
              figure: '',
              unit: '万元'
            },
            {
              itemName: '特殊事项',
              figure: '',
              unit: '万元'
            },
            {
              itemName: '管理口径单方',
              figure: '',
              unit: '元/M2'
            },
            {
              itemName: '财务口径单方',
              figure: '',
              unit: '元/M2'
            },
            {
              itemName: '建安单方（建筑面积）',
              figure: '',
              unit: '元/M2'
            },
            {
              itemName: '修正系数',
              figure: '',
              unit: '%'
            }
          ],
          informations: [
            {
              upTime: '2018-01-01',
              fileType: '网址',
              enclosure: 'www.baidu.com',
              replace: '替换',
              remove: '删除',
              download: '下载'
            }
          ]

        },
        fileList3: []
      }
    },
    methods: {
      rowClass: function(row, index) {
        if (row.rowIndex % 2 === 0) {
          return { 'background-color': '#bed6ed' }
        } else {
          return { 'background-color': '#deeaf5' }
        }
      },
      handleChange(file, fileList) {
        this.fileList3 = fileList.slice(-3)
      }
    }
  }
</script>

<style scoped>
  .reg:after{
    content: "|";
    display: inline-block;
    margin: 0px 10px 0px 10px;
  }

  .piecerow_main {
    background-color: #edf2f7;
    padding: 10px 10px;
  }
  .cast_vertical {
    height:25px;
    line-height:31px;
    overflow:hidden;
  }
  .piecerow_bottom {
    padding-bottom: 15px;
  }
  .piecerow_text {
    text-align: right;
  }
  .piecerow {
    background-color: #feffff;
    margin-bottom: 10px;
    border-radius: 4px;
    color: #333;
    font-size: 14px;
  }
  /*.el-row {*/
    /*background-color: #feffff;*/
    /*margin-bottom: 10px;*/
    /*border-radius: 4px;*/
    /*color: #333;*/
    /*text-align: center;*/
  /*}*/
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

</style>
