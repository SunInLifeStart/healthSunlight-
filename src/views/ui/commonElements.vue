<template>
  <div>
    <el-row :gutter="20" style="padding: 8px">
      <el-col :span="12">
        <div style="text-align: center">常用配色</div>
        <el-col :span="24">
          <div>主色</div>
        </el-col>
        <el-col :span="8" class="margin-top2">
          <div class="dev-1" style="background-color: #7986a9">主色#7986a9</div>
        </el-col>

        <el-col :span="24" class="margin-top2">
          <div>辅助色</div>
        </el-col>
        <el-col :span="8" class="margin-top2">
          <div class="dev-1" style="background-color:#67C23A">成功#67C23A</div>
        </el-col>
        <el-col :span="8" class="margin-top2">
          <div class="dev-1" style="background-color: #E6A23C">警告#67C23A</div>
        </el-col>
        <el-col :span="8" class="margin-top2">
          <div class="dev-1" style="background-color: #F56C6C">危险#F56C6C</div>
        </el-col>
        <el-col :span="8" class="margin-top2">
          <div class="dev-1" style="background-color: #909399">信息#909399</div>
        </el-col>
        <el-col :span="8" class="margin-top2">
          <div class="dev-1" style="background-color: #eef1f6">背景色#eef1f6</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>中性色</div>
        </el-col>
        <el-col :span="8" class="margin-top2">
          <div class="dev-1" style="background-color:#303133">文字#303133</div>
        </el-col>
        <el-col :span="8" class="margin-top2">
          <div class="dev-1" style="background-color: #606266">常规文字#606266</div>
        </el-col>
        <el-col :span="8" class="margin-top2">
          <div class="dev-1" style="background-color: #909399">次要文字#909399</div>
        </el-col>
        <el-col :span="8" class="margin-top2">
          <div class="dev-1" style="background-color: #C0C4CC">占位文字#C0C4CC</div>
        </el-col>
        <el-col :span="8" class="margin-top2">
          <div class="dev-1" style="background-color: #DCDFE6">一级边框#C0C4CC</div>
        </el-col>
        <el-col :span="8" class="margin-top2">
          <div class="dev-1" style="background-color: #E4E7ED">二级边框#E4E7ED</div>
        </el-col>
        <el-col :span="8" class="margin-top2">
          <div class="dev-1" style="background-color: #EBEEF5;color: #606266">三级边框#EBEEF5</div>
        </el-col>
        <el-col :span="8" class="margin-top2">
          <div class="dev-1" style="background-color: #F2F6FC;color: #606266">四级边框#F2F6FC</div>
        </el-col>

        <el-col :span="24" class="margin-top2">
          <div style="text-align: center">常用按钮</div>
        </el-col>
        <!--<el-col :span="24" class="margin-top2">-->
          <!--<el-button>默认按钮</el-button>-->
          <!--<el-button type="primary">主要按钮</el-button>-->
          <!--<el-button type="success">成功按钮</el-button>-->
          <!--<el-button type="info">信息按钮</el-button>-->
          <!--<el-button type="warning">警告按钮</el-button>-->
          <!--<el-button type="danger" class="margin-top2 margin-left0">危险按钮</el-button>-->
        <!--</el-col>-->
        <el-col :span="24" class="margin-top2">
          <el-button plain>朴素按钮</el-button>
          <el-button type="primary" plain>主要按钮</el-button>
          <el-button type="success" plain>成功按钮</el-button>
          <el-button type="info" plain>信息按钮</el-button>
          <el-button type="warning" plain>警告按钮</el-button>
          <el-button type="danger" plain class="margin-top2 margin-left0">危险按钮</el-button>
        </el-col>
        <!--<el-col :span="24" class="margin-top2">-->
          <!--<el-button round>圆形按钮</el-button>-->
          <!--<el-button type="primary" round>主要按钮</el-button>-->
          <!--<el-button type="success" round>成功按钮</el-button>-->
          <!--<el-button type="info" round>信息按钮</el-button>-->
          <!--<el-button type="warning" round>警告按钮</el-button>-->
          <!--<el-button type="danger" round class="margin-top2 margin-left0">危险按钮</el-button>-->
        <!--</el-col>-->
        <el-col :span="24" class="margin-top2">
          <div>禁用状态</div>
        </el-col>
        <!--<el-col class="margin-top2 ">-->
          <!--<el-button disabled>默认按钮</el-button>-->
          <!--<el-button type="primary" disabled>主要按钮</el-button>-->
          <!--<el-button type="success" disabled>成功按钮</el-button>-->
          <!--<el-button type="info" disabled>信息按钮</el-button>-->
          <!--<el-button type="warning" disabled>警告按钮</el-button>-->
          <!--<el-button type="danger" disabled class="margin-top2 margin-left0">危险按钮</el-button>-->
        <!--</el-col>-->
        <el-col  class="margin-top2">
          <el-button plain disabled>朴素按钮</el-button>
          <el-button type="primary" plain disabled>主要按钮</el-button>
          <el-button type="success" plain disabled>成功按钮</el-button>
          <el-button type="info" plain disabled>信息按钮</el-button>
          <el-button type="warning" plain disabled>警告按钮</el-button>
          <el-button type="danger" plain disabled class="margin-top2 margin-left0">危险按钮</el-button>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>文字按钮</div>
        </el-col>
        <el-col>
          <el-button type="text">文字按钮</el-button>
          <el-button type="text" disabled>文字按钮</el-button>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>图标按钮</div>
        </el-col>
        <el-col>
          <el-button type="primary" icon="el-icon-edit"></el-button>
          <el-button type="primary" icon="el-icon-share"></el-button>
          <el-button type="primary" icon="el-icon-delete"></el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>按钮组</div>
        </el-col>
        <el-col>
          <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-button-group>
          <el-button-group>
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
          </el-button-group>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>加载中</div>
        </el-col>
        <el-col>
          <el-button type="primary" :loading="true">加载中</el-button>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>不同尺寸按钮</div>
        </el-col>
        <el-col class="margin-top2">
          <el-button>默认按钮</el-button>
          <el-button size="medium">中等按钮</el-button>
          <el-button size="small">小型按钮</el-button>
          <el-button size="mini">超小按钮</el-button>
        </el-col>
        <el-col class="margin-top2">
          <el-button round>默认按钮</el-button>
          <el-button size="medium" round>中等按钮</el-button>
          <el-button size="small" round>小型按钮</el-button>
          <el-button size="mini" round>超小按钮</el-button>
        </el-col>

        <el-col :span="12" style="margin-top: 6%">
          <div>上传</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-col>
        </el-col>
        <!--<el-col :span="12" style="margin-top: 6%">-->
          <!--<div>Transfer 标签</div>-->
        <!--</el-col>-->
        <!--<el-col :span="24" class="margin-top2">-->
          <!--<el-col>-->
            <!--<el-tag>标签一</el-tag>-->
            <!--<el-tag type="success">标签二</el-tag>-->
            <!--<el-tag type="info">标签三</el-tag>-->
            <!--<el-tag type="warning">标签四</el-tag>-->
            <!--<el-tag type="danger">标签五</el-tag>-->
          <!--</el-col>-->
        <!--</el-col>-->
        <!--<el-col :span="12" style="margin-top: 6%">-->
          <!--<div>可编辑 标签</div>-->
        <!--</el-col>-->
        <!--<el-col :span="24" class="margin-top2">-->
          <!--<el-col>-->
            <!--<el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false"-->
                    <!--@close="handleClose(tag)">{{tag}}-->
            <!--</el-tag>-->
            <!--<el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small"-->
                      <!--@keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>-->
            <!--<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>-->
          <!--</el-col>-->
        <!--</el-col>-->
        <el-col :span="24" style="margin-top: 6%">
          <div>滑块选择器</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col>
            <el-slider v-model="value9" show-input></el-slider>
          </el-col>
        </el-col>
        <el-col :span="12" style="margin-top: 6%">
          <div>进度条</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress><br>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress> <br>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress> <br>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress> <br>


          </el-col>
        </el-col>

        <el-col :span="12" style="margin-top: 6%">
          <div>步骤条</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
        <el-steps :active="1">
          <el-step title="审批 1" icon="el-icon-edit"></el-step>
          <el-step title="审批 2" icon="el-icon-tickets"></el-step>
          <el-step title="审批 3" icon="el-icon-date"></el-step>
          <el-step title="审批 3" icon="el-icon-edit-outline"></el-step>
          <el-step title="审批 3" icon="el-icon-view"></el-step>
        </el-steps>
        </el-col>



        <el-col :span="12" style="margin-top: 6%">
          <div>环形进度条</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col>
            <el-progress type="circle" :percentage="0"></el-progress>
            <el-progress type="circle" :percentage="80"></el-progress>
            <el-progress type="circle" :percentage="100" status="success"></el-progress>
            <el-progress type="circle" :percentage="50" status="exception"></el-progress>
          </el-col>
        </el-col>

        <el-col :span="12" style="margin-top: 6%">
        <el-col class="block">
          <span class="demonstration">分页</span>
          <el-col style="margin-top: 6%">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
          </el-col>
        </el-col>
        </el-col>

      </el-col>

      <!--右面-->
      <el-col :span="12">
        <div style="text-align: center">图标</div>
        <el-col :span="24">
          <div>常用图标</div>
        </el-col>
        <el-col :span="24" style="font-size: 32px;" class="margin-top2">
          <i class="el-icon-edit"></i>
          <i class="el-icon-share"></i>
          <i class="el-icon-delete"></i>
          <i class="el-icon-info"></i>
          <i class="el-icon-error"></i>
          <i class="el-icon-success"></i>
          <i class="el-icon-warning"></i>
          <i class="el-icon-question"></i>
          <i class="el-icon-back"></i>
          <i class="el-icon-arrow-left"></i>
          <i class="el-icon-arrow-down"></i>
          <i class="el-icon-arrow-right"></i>
          <i class="el-icon-arrow-up"></i>
          <i class="el-icon-caret-left"></i>
          <i class="el-icon-caret-bottom"></i>
          <i class="el-icon-caret-top"></i>
          <i class="el-icon-caret-right"></i>
          <i class="el-icon-d-arrow-left"></i>
          <i class="el-icon-d-arrow-right"></i>
          <i class="el-icon-minus"></i>
          <i class="el-icon-plus"></i>
          <i class="el-icon-remove-outline"></i>
          <i class="el-icon-circle-plus-outline"></i>
          <i class="el-icon-close"></i>
          <i class="el-icon-check"></i>
          <i class="el-icon-circle-close"></i>
          <i class="el-icon-circle-check"></i>
          <i class="el-icon-circle-close-outline"></i>
          <i class="el-icon-circle-check-outline"></i>
          <i class="el-icon-zoom-out"></i>
          <i class="el-icon-zoom-in"></i>
          <i class="el-icon-d-caret"></i>
          <i class="el-icon-sort"></i>
          <i class="el-icon-sort-down"></i>
          <i class="el-icon-sort-up"></i>
          <i class="el-icon-tickets"></i>
          <i class="el-icon-document"></i>
          <i class="el-icon-goods"></i>
          <i class="el-icon-sold-out"></i>
          <i class="el-icon-news"></i>
          <i class="el-icon-message"></i>
          <i class="el-icon-date"></i>
          <i class="el-icon-printer"></i>
          <i class="el-icon-time"></i>
          <i class="el-icon-bell"></i>
          <i class="el-icon-mobile-phone"></i>
          <i class="el-icon-service"></i>
          <i class="el-icon-view"></i>
          <i class="el-icon-menu"></i>
          <i class="l-icon-more"></i>
          <i class="el-icon-more-outline"></i>
          <i class="el-icon-star-on"></i>
          <i class="el-icon-star-off"></i>
          <i class="el-icon-location"></i>
          <i class="el-icon-location-outline"></i>
          <i class="el-icon-phone"></i>
          <i class="el-icon-phone-outline"></i>
          <i class="el-icon-picture"></i>
          <i class="el-icon-picture-outline"></i>
          <i class="el-icon-delete"></i>
          <i class="el-icon-search"></i>
          <i class="el-icon-edit"></i>
          <i class="el-icon-edit-outline"></i>
          <i class="el-icon-rank"></i>
          <i class="el-icon-refresh"></i>
          <i class="el-icon-share"></i>
          <i class="el-icon-setting"></i>
          <i class="el-icon-upload"></i>
          <i class="el-icon-upload2"></i>
          <i class="el-icon-download"></i>
          <i class="el-icon-loading"></i>
        </el-col>
        <el-col :span="24" style="font-size: 32px;color: #409EFF;margin-top: 8%" class="margin-top2">
          <i class="el-icon-edit"></i>
          <i class="el-icon-share"></i>
          <i class="el-icon-delete"></i>
          <i class="el-icon-info"></i>
          <i class="el-icon-error"></i>
          <i class="el-icon-success"></i>
          <i class="el-icon-warning"></i>
          <i class="el-icon-question"></i>
          <i class="el-icon-back"></i>
          <i class="el-icon-arrow-left"></i>
          <i class="el-icon-arrow-down"></i>
          <i class="el-icon-arrow-right"></i>
          <i class="el-icon-arrow-up"></i>
          <i class="el-icon-caret-left"></i>
          <i class="el-icon-caret-bottom"></i>
          <i class="el-icon-caret-top"></i>
          <i class="el-icon-caret-right"></i>
          <i class="el-icon-d-arrow-left"></i>
          <i class="el-icon-d-arrow-right"></i>
          <i class="el-icon-minus"></i>
          <i class="el-icon-plus"></i>
          <i class="el-icon-remove-outline"></i>
          <i class="el-icon-circle-plus-outline"></i>
          <i class="el-icon-close"></i>
          <i class="el-icon-check"></i>
          <i class="el-icon-circle-close"></i>
          <i class="el-icon-circle-check"></i>
          <i class="el-icon-circle-close-outline"></i>
          <i class="el-icon-circle-check-outline"></i>
          <i class="el-icon-zoom-out"></i>
          <i class="el-icon-zoom-in"></i>
          <i class="el-icon-d-caret"></i>
          <i class="el-icon-sort"></i>
          <i class="el-icon-sort-down"></i>
          <i class="el-icon-sort-up"></i>
          <i class="el-icon-tickets"></i>
          <i class="el-icon-document"></i>
          <i class="el-icon-goods"></i>
          <i class="el-icon-sold-out"></i>
          <i class="el-icon-news"></i>
          <i class="el-icon-message"></i>
          <i class="el-icon-date"></i>
          <i class="el-icon-printer"></i>
          <i class="el-icon-time"></i>
          <i class="el-icon-bell"></i>
          <i class="el-icon-mobile-phone"></i>
          <i class="el-icon-service"></i>
          <i class="el-icon-view"></i>
          <i class="el-icon-menu"></i>
          <i class="l-icon-more"></i>
          <i class="el-icon-more-outline"></i>
          <i class="el-icon-star-on"></i>
          <i class="el-icon-star-off"></i>
          <i class="el-icon-location"></i>
          <i class="el-icon-location-outline"></i>
          <i class="el-icon-phone"></i>
          <i class="el-icon-phone-outline"></i>
          <i class="el-icon-picture"></i>
          <i class="el-icon-picture-outline"></i>
          <i class="el-icon-delete"></i>
          <i class="el-icon-search"></i>
          <i class="el-icon-edit"></i>
          <i class="el-icon-edit-outline"></i>
          <i class="el-icon-rank"></i>
          <i class="el-icon-refresh"></i>
          <i class="el-icon-share"></i>
          <i class="el-icon-setting"></i>
          <i class="el-icon-upload"></i>
          <i class="el-icon-upload2"></i>
          <i class="el-icon-download"></i>
          <i class="el-icon-loading"></i>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div style="text-align: center">单选框</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col class="margin-top2">
            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>禁用状态</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col class="margin-top2">
            <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
            <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>单选框组</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col class="margin-top2">
            <el-radio-group v-model="radio2">
              <el-radio :label="3">备选项</el-radio>
              <el-radio :label="6">备选项</el-radio>
              <el-radio :label="9">备选项</el-radio>
            </el-radio-group>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>按钮样式</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col class="margin-top2">
            <el-radio-group v-model="radio3">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>带有边框</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col class="margin-top2">
            <el-radio v-model="radio7" label="1" border>备选项1</el-radio>
            <el-radio v-model="radio7" label="2" border>备选项2</el-radio>
          </el-col>
        </el-col>


        <el-col :span="24" class="margin-top2">
          <div style="text-align: center">多选框</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col class="margin-top2">
            <el-checkbox v-model="checked">备选项1</el-checkbox>
            <el-checkbox v-model="checked1">备选项2</el-checkbox>
            <el-checkbox v-model="checked2">备选项3</el-checkbox>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>禁用状态</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col class="margin-top2">
            <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
            <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>多选框组</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col class="margin-top2">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="复选框 A"></el-checkbox>
              <el-checkbox label="复选框 B"></el-checkbox>
              <el-checkbox label="复选框 C"></el-checkbox>
              <el-checkbox label="禁用" disabled></el-checkbox>
              <el-checkbox label="选中且禁用" disabled></el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>按钮样式</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col class="margin-top2">
            <el-checkbox-group v-model="checkboxGroup1">
              <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>带边框</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col class="margin-top2">
            <el-checkbox v-model="checked3" label="备选项1" border></el-checkbox>
            <el-checkbox v-model="checked4" label="备选项2" border></el-checkbox>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div style="text-align: center">输入框</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col class="margin-top2">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>禁用状态</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col class="margin-top2">
            <el-input placeholder="请输入内容" v-model="input1" :disabled="true"></el-input>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>可清空输入框</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col class="margin-top2">
            <el-input placeholder="请输入内容" v-model="input10" clearable></el-input>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>带图标输入框</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col :span="12" class="margin-top2">
            <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input2"></el-input>
          </el-col>
          <el-col :span="12" class="margin-top2">
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21"></el-input>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>文本输入域</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col class="margin-top2">
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div style="text-align: center">下拉框</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col class="margin-top2">
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>含禁用项</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col class="">
            <el-select v-model="value2" placeholder="请选择">
              <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"
                         :disabled="item.disabled"></el-option>
            </el-select>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>禁用状态</div>
        </el-col>
        <el-col :span="24" class="">
          <el-col class="margin-top2">
            <el-select v-model="value" disabled placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>可清空单选</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col>
            <el-select v-model="value" clearable placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>多选</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col>
            <el-select v-model="value5" multiple placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>分组</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col>
            <el-select v-model="value7" placeholder="请选择">
              <el-option-group v-for="group in options3" :key="group.label" :label="group.label">
                <el-option v-for="item in group.options" :key="item.value" :label="item.label"
                           :value="item.value"></el-option>
              </el-option-group>
            </el-select>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>可搜索</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col>
            <el-select v-model="value8" filterable placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-col>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <div>级联选择器</div>
        </el-col>
        <el-col :span="24" class="margin-top2">
          <el-col>
            <el-cascader :options="optionsj" v-model="selectedOptions" @change="handleChange"></el-cascader>
          </el-col>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>







<script>
  export default {
    name: 'contractInfo',
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        activeName: 'first',
        radio: '1',
        radio1: '选中且禁用',
        radio2: 3,
        radio3: '上海',
        radio4: '上海',
        radio5: '上海',
        radio6: '上海',
        radio7: '1',
        checked: true,
        checked1: false,
        checked2: true,
        checkList: ['选中且禁用', '复选框 A'],
        cities: ['上海', '北京', '广州', '深圳'],
        checkboxGroup1: ['上海'],
        checked3: true,
        checked4: false,
        input: '',
        input1: '',
        input10: '',
        input2: '',
        input21: '',
        textarea: '',
        value9: 0,
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: '',
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        value2: '',
        value5: [],
        options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        value7: '',
        value8: '',
        optionsj: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        selectedOptions: [],
        selectedOptions2: []
      }
    },
    methods: {
      handleSizeChange(val) {
      },
      handleCurrentChange(val) {
      },
      handleClick(tab, event) {
        console.log(tab, event)
      },
      handleChange(value) {
        console.log(value)
      },
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePreview(file) {
        console.log(file)
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${file.name}？`)
      },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      },

      showInput() {
        this.inputVisible = true
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus()
        })
      },

      handleInputConfirm() {
        var inputValue = this.inputValue
        if (inputValue) {
          this.dynamicTags.push(inputValue)
        }
        this.inputVisible = false
        this.inputValue = ''
      }
    }
  }
</script>

<style scoped>
  .dev-1 {
    height: 48px;
    color: #FFF;
    text-align: center;
    padding: 16px;
    border-radius: 5px;
    font-size: 14px;
  }

  .margin-top2 {
    margin-top: 2%;
  }

  .margin-left0 {
    margin-left: 0;
  }

  .el-tag + .el-tag {
    margin-left: 10px;
  }

  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
