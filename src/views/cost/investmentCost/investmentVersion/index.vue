<template>
  <div class="piecerow_main">
    <el-row class="piecerow">
        <el-col :span="24"  style="margin-bottom: 10px;">
          <div class="topBtn">
            <el-button plain size="small" @click="saveVersion(investmentVersion)" class="saveBtn">保存</el-button>
            <el-button type="info" plain size="small">发起审批</el-button>
            <el-button plain size="small">审批过程</el-button>
          </div>
        </el-col>
    </el-row>
    <el-row class="piecerow piecerow_bottom piecerow_text">
      <el-form  label-width="120px" class="demo-ruleForm">
        <el-row :gutter="2" type="flex" justify="space-around">
          <el-col :span="11">
            <el-col :span="4" class="cast_vertical">基本信息</el-col>
          </el-col>
          <el-col :span="11">
          </el-col>
        </el-row>
        <div class="zoneLine"></div>
        <el-row :gutter="20">
          <el-col :span="7">
            <el-form-item label="城市名称:">
              <el-input v-model="investmentVersion.form.cityId"  size="small" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7" :offset="1">
            <el-form-item label="行政区域:">
              <el-select v-model="investmentVersion.form.area"  size="small" placeholder="请选择">
                <el-option
                  v-for="area in investmentVersion.areas"
                  :key="area.value"
                  :label="area.label"
                  :value="area.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="7" :offset="1">
            <el-form-item label="投摸版本:">
              <el-input v-model="investmentVersion.form.versionName"  size="small" disabled></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="7">
            <el-form-item label="地块编号:">
              <el-select v-model="investmentVersion.form.landCode"  size="small" placeholder="请选择">
                <el-option
                  v-for="landCode in investmentVersion.landCodes"
                  :key="landCode.value"
                  :label="landCode.label"
                  :value="landCode.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="7" :offset="1">
            <el-form-item label="地块名称:">
              <el-input v-model="investmentVersion.form.landName"  size="small" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7" :offset="1">
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="7">
            <el-form-item label="方案名称:">
              <el-select v-model="investmentVersion.form.planName"  size="small" placeholder="请选择">
                <el-option
                  v-for="planName in investmentVersion.planNames"
                  :key="planName.value"
                  :label="planName.label"
                  :value="planName.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="7" :offset="1">
            <el-form-item label="测算人:">
              <el-input v-model="investmentVersion.form.createUserId"  size="small" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7" :offset="1" class="dataPickerClass">
            <el-form-item label="测算日期:">
              <template>
                <div class="block">
                  <el-date-picker
                    type="date"
                    size="small"
                    disabled
                    v-model="investmentVersion.form.aclculateDATE"
                    placeholder="选择日期">
                  </el-date-picker>
                </div>
              </template>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="23">
            <el-form-item label="版本说明:">
              <el-input
                type="textarea"
                :rows="4"
                v-model="investmentVersion.form.versionRemark"
                placeholder="请输入内容"
                :maxlength="10">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-row>
    <el-row class="piecerow piecerow_bottom">
      <el-row :gutter="2" type="flex" justify="space-around">
        <el-col :span="11">
          <el-col :span="4" class="cast_vertical">项目地块图</el-col>
          <el-col :span="4"></el-col>
          <el-col :span="8">
          </el-col>
          <el-col :span="2">
          </el-col>
          <el-col :span="2">
          </el-col>
        </el-col>
        <el-col :span="11">
          <el-col :span="4" class="cast_vertical">版本摘要</el-col>
        </el-col>
      </el-row>
      <el-row :gutter="2" type="flex" justify="space-around">
        <el-col :span="11" class="investmentUpload">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            list-type="picture-card"
            :on-remove="handleRemove"
            :on-preview="handlePictureCardPreview"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
        <el-col :span="11"  class="trHeight">
          <el-table
            border
            stripe
            size="small"
            highlight-current-row
            :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
            :header-cell-style="{background:'#efefe0', 'text-align': 'center', color: '#a08e6e',fontSize:'13px',padding:'3px 0',fontWeight:'500'}"
            :data="investmentVersion.version">
            <el-table-column
              prop="cluster"
              width="180"
              label="组团">
            </el-table-column>
            <el-table-column
              width="100"
              type="index"
              :show-overflow-tooltip="true"
              label="编号">
            </el-table-column>
            <el-table-column
              prop="operation"
              label="业态">
            </el-table-column>
            <el-table-column
              prop="architectureArea"
              label="建筑面积">
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="piecerow piecerow_bottom">
      <el-row :gutter="20" type="flex" justify="space-around">
        <el-col :span="1" style="margin: 14px;">
          附件
        </el-col>
        <el-col :span="19">
        </el-col>
        <el-col :span="2" style="padding-left: 35px">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-change="handleChange"
            :file-list="investmentVersion.fileList3">
            <el-button type="text" class="loadBtn"><i class="el-icon-upload2">&nbsp;</i>上传附件</el-button>
          </el-upload>
        </el-col>
        <el-col :span="2">
          <el-button type="text" class="loadBtn"><i class="el-icon-download"></i>一键下载</el-button>
        </el-col>
      </el-row>
      <div class="zoneLine"></div>
      <el-row :gutter="20" type="flex" justify="space-around" style="margin:10px 20px 0 20px" class="trHeight">
        <template>
          <el-table
            :data="investmentVersion.informations"
            border
            size="small"
            stripe
            :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
            :header-cell-style="{background:'#efefe0', 'text-align': 'center', color: '#a08e6e',fontSize:'13px',padding:'3px 0',fontWeight:'500'}"
            style="width: 99%">
            <el-table-column
              type="index"
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
                <el-button-group class="button_group">
                  <el-button type="text" class="reg" @click="updateAccessory">替换</el-button>
                  <el-button type="text" class="reg" @click.native.prevent="delAccessory(scope.$index)">删除</el-button>
                  <el-button type="text" @click="downloadAccessory">下载</el-button>
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
  import { mapActions, mapGetters } from 'vuex'
  import ElRow from 'element-ui/packages/row/src/row'

  export default {
    components: { ElRow },
    data() {
      return {
        dialogImageUrl: '',
        imageUrl: '',
        dialogVisible: false
      }
    },
    methods: {
      ...mapActions(['SaveVersion', 'LookInvestmentVersion']),
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      },
      handleChange(file, fileList) {
        this.fileList3 = fileList.slice(-3)
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
      },
      // 上传
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/png'
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 png 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isJPG && isLt2M
      },
      // 删除附件
      delAccessory(rowIndex) {
        this.investmentVersion.informations.splice(rowIndex, 1)
      },
      // 替换附件
      updateAccessory() {
      },
      // 下载附件
      downloadAccessory() {
      },
      saveVersion(investmentVersion) {
        this.SaveVersion({ 'searchInvestment': this.investmentVersion }).then((result) => {
          if (result.code === 200) {
            this.$message({
              message: '保存成功',
              type: 'success'
            })
          } else {
            this.$message({
              message: '保存失败',
              type: 'error'
            })
          }
        })
      }
    },
    computed: {
      ...mapGetters([
        'investmentVersion'
      ])
    },
    created: function() {
      // 初始化投模版本信息详情
      this.LookInvestmentVersion({ investmentcostid: this.$route.params.id })
    }
  }
</script>

<style scoped>
  /*// 保存按钮样式*/
  .saveBtn{
    background-color: #7986a9;
    color: white
  }
  .topBtn{
    float: right;
    padding-right: 4.222%
  }
  /**
  设置标题的高度
  */
  .trHeight >>> th{
    height: 40px;
  }
  /**
  分区线
  */
  .zoneLine{
    border: 1px solid #e9e9e9;
    border-left-style: none;
    border-top-style: none;
    border-right-style: none;
  }
  .loadBtn{
    color: #99a9bf;
    font-size: 13px
  }
  .el-select{
    width: 100%;
  }
  /**
  表格中的按钮默认样式修改
  */
  .button_group .el-button{
    padding: 0 0;
    font-size: 12px;
  }
  /**
    按钮后面放歌符号|
   */
  .reg:after{
    content: "|";
    display: inline-block;
    margin: 0px 10px 0px 10px;
  }
  /**
    项目地块图和版本摘要
   */
  .piecerow_main {
    background-color: #edf2f7;
    padding: 10px 10px;
  }
  /**
    版本摘要
   */
  .cast_vertical {
    height:25px;
    line-height:20px;
    overflow:hidden;
  }
  /**
    项目地块图下边距
   */
  .piecerow_bottom {
    padding-bottom: 15px;
  }
  /**
    项目地块图和版本摘要
   */
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
  /**
    上传组件样式
   */
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 100%;
    height: 330px;
    display: block;
  }
  /**
    日期组件样式
   */
  .dataPickerClass .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 100%;
  }
  /**
    上传组件样式
   */
  .investmentUpload >>> .el-upload{
    width: 100%;
    height: 330px;
    line-height: 330px;
  }
  /**
    取消form下面边距
   */
  .el-form-item{
    margin-bottom: 0;
  }
  /**
    取消input右侧内边距
   */
  .demo-ruleForm >>> .el-input--suffix .el-input__inner{
    padding-right: 0;
  }
</style>
