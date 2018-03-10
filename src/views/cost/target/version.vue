<template>
  <div>
    <el-row>
      <el-col :span="7" :offset="17" style="margin-bottom: 5px">
        <el-button>发起审批</el-button>
        <el-button @click="addTargetCostVersion(version)">保存</el-button>
        <el-button>审批流程</el-button>
      </el-col>
    </el-row>
    <el-collapse v-model="activeNames" >
      <el-collapse-item title="基本信息" name="1">
        <div class="divCollapse" >
          <el-row :gutter="20" >
            <el-col :span="8">
              <el-col :span="8"><p>项目分期</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.basic.projectfullname" placeholder="请输入内容" :disabled="isDisabled"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8"><p>目标版本</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.basic.versionname" placeholder="请输入内容" :disabled="isDisabled"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8"><p>城市名称</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.basic.cityname" placeholder="请输入内容" :disabled="isDisabled"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8"><p>行政区域</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.basic.themaname" placeholder="请输入内容" :disabled="isDisabled"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8"><p>项目总体配置定位</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.basic.overallconfiglocname" placeholder="请输入内容" :disabled="isDisabled"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8"><p>项目景观配置定位</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.basic.landscapeconfiglocname" placeholder="请输入内容" :disabled="isDisabled"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8"><p>场地类型</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.basic.sitetypename" placeholder="请输入内容" :disabled="isDisabled"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8"><p>抗震等级</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.basic.antiseismiclevelname" placeholder="请输入内容" :disabled="isDisabled"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8"><p>基本风压</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.basic.basicwindpressure" placeholder="请输入内容" :disabled="isDisabled"></el-input>
              </el-col>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeNames" >
      <el-collapse-item title="成本信息" name="2">
        <div class="divCollapse">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-col :span="10"><p>目标金额（含土地费）:</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.basic.costvallandsum" placeholder="请输入内容" :disabled="isDisabled"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="10"><p>目标金额（不含土地费）:</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.basic.costvalsum" placeholder="请输入内容" :disabled="isDisabled"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8"><p>其中商业费用:</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.basic.costvalbusinesssum" placeholder="请输入内容" :disabled="isDisabled"></el-input>
              </el-col>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-col :span="10"><p>预算金额（含土地费）:</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.basic.calculateMen" placeholder="请输入内容" :disabled="isDisabled"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="10"><p>预算金额（不含土地费）:</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.basic.budvallandsum" placeholder="请输入内容" :disabled="isDisabled"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8"><p>其中商业费用:</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.basic.budvalbusinesssum" placeholder="请输入内容" :disabled="isDisabled"></el-input>
              </el-col>
            </el-col>
          </el-row >
          <el-row :gutter="20">
            <el-col :span="8">
              <el-col :span="10"><p>测算人:</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.basic.budgetdate" placeholder="请输入内容" :disabled="isDisabled"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="10"><p>测算日期:</p></el-col>
              <el-col :span="14">
                <el-input v-model="version.basic.budgetdate" placeholder="请输入内容" :disabled="isDisabled"></el-input>
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
                :disabled="isDisabled"
                v-model="version.basic.budgetremark">
              </el-input>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
    </el-collapse  >
    <el-collapse v-model="activeNames"  >
      <el-collapse-item title="项目信息" name="3">
        <div class="divCollapse">
          <el-row :gutter="2" type="flex" justify="space-around">
            <el-col :span="11" class="investmentUpload":pull="5">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                list-type="picture-card"
                :on-remove="handleRemove"
                :on-preview="handlePictureCardPreview"
                :on-success="handleAvatarSuccess"
                :disabled="isDisabled"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="4">
      <template slot="title">
        <el-row :gutter="2" type="flex" justify="space-around">
          <el-col :span="1" style="margin: 0px;">
           <span>附件</span>
          </el-col>
          <el-col :span="19">
          </el-col>
          <el-col :span="2" style="margin: 3px;">
            <el-upload
              class="upload-demo"
              :show-file-list="false"
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
      </template>
      <div class="divCollapse" >
        <el-table style="margin-top: 8px"
            :data="version.enclosureTable"
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
                <el-button type="text" size="small" @click="deleteEnclosure(scope.row)">删除</el-button>
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
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        isDisabled: true,
        version: {
          basic: '',
          enclosureTable: [
            {
              upTime: '2018-01-01',
              fileType: 'txt',
              remakes: 'uww ',
              enclosure: 'dasd',
              operation: ''
            },
            {
              upTime: '2018-01-01',
              fileType: 'pdf',
              remakes: 'uww ',
              enclosure: 'sdasd',
              operation: ''
            }
          ]
        },
        activeNames: ['1', '2', '3', '4'],
        fileList3: [],
        imageUrl: ''
      }
    },
    methods: {
      ...mapActions(['getCostBasicVersion', 'addTargetCostVersion']),
      handleChange(file, fileList) {
        this.fileList3 = fileList.slice(-3)
      },
      deleteEnclosure(row) {
        this.enclosureTable.splice(this.enclosureTable.indexOf(row), 1)
      },
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isJPG) {
          this.$message.error('上传图片只能是 JPG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!')
        }
        return isJPG && isLt2M
      }
    },
    created() {
      this.isDisabled = this.$route.params.isDisabled === 'true'
      // 调取 基础数据信息接口
      this.getCostBasicVersion({ 'basicInformation': this.form }).then((data) => {
        // console.log(data)
      })
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
  .investmentUpload >>> .el-upload{
    width: 100%;
    height: 330px;
    line-height: 330px;
  }
</style>
