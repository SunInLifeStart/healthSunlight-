<template>
  <div style="margin-left: 20px">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-row>
        <el-col :span="6" :offset="18">
          <el-button>发起审批</el-button>
          <el-button>导出</el-button>
          <el-button :disabled="isDisabled" @click="SaveStandardCostBase(baseCost)">保存</el-button>
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
                <el-input v-model="baseCost.cityname" :disabled="isDisabled"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6"><p>业态</p></el-col>
              <el-col :span="18">
                <el-select v-model="baseCost.producttypecode" placeholder="请选择" :disabled="isDisabled">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6"><p>配置</p></el-col>
              <el-col :span="18">
                <el-select v-model="baseCost.constructioncfg" placeholder="请选择" :disabled="isDisabled">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">
                <p>版本号</p>
              </el-col>
              <el-col :span="18">
                <el-input v-model="baseCost.version" :disabled="isDisabled"></el-input>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">
                <p>测算日期</p>
              </el-col>
              <el-col :span="18">
                <el-date-picker
                  v-if="!isDisabled"
                  v-model="baseCost.calculatedate"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
                <el-date-picker
                  v-else
                  disabled
                  v-model="baseCost.calculatedate"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="6">
                <p>测算人</p>
              </el-col>
              <el-col :span="18">
                <el-input v-model="baseCost.calculateperson" :disabled="isDisabled"></el-input>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="2"><p>版本说明</p></el-col>
              <el-col :span="22">
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 2, maxRows: 4}"
                  v-model="baseCost.versionremark"
                  :disabled="isDisabled"
                  placeholder="请输入内容">
                </el-input>
              </el-col>
            </el-col>
          </el-row>
        </div>

      </el-collapse-item>
      <el-collapse-item title="项目基本信息" name="2">
        <div class="border-top">
          <el-table :data="baseCost.cmSandardBaseinfoListVos" border width="100%" size="small">
            <el-table-column type="index" width="80" align="center" label="序号"></el-table-column>
            <el-table-column prop="contentinfo" label="内容" align="center" width="400"></el-table-column>
            <el-table-column prop="provalue" label="值" align="center" width="360"></el-table-column>
            <el-table-column prop="remark" width="440" align="center" label="备注"></el-table-column>
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
          <el-table :data="baseCost.cmStandardAnnexListVos" border width="100%" size="small">
            <el-table-column type="index" width="80" align="center" label="序号"></el-table-column>
            <el-table-column prop="uploaddate" width="220" align="upTime" label="上传时间"></el-table-column>
            <el-table-column prop="annextype" label="附件类型" align="center" width="220"></el-table-column>
            <el-table-column prop="annexname" label="附件名称" align="center" width="260"></el-table-column>
            <el-table-column prop="annesremark" width="260" align="center" label="备注"></el-table-column>
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
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        isDisabled: this.$route.params.isDisabled !== 'false',
        baseCost: {
          baseInfo: {}
        },
        activeNames: ['1'],
        options: [
          {
            value: '2',
            label: '北京'
          },
          {
            value: '1',
            label: '别墅'
          },
          {
            value: 'P2',
            label: '别墅'
          }
        ]
      }
    },
    created() {
      if (this.$route.params.standardCostId !== 'standardCostId') {
        this.FindStandardCostBase({ standardcostid: this.$route.params.standardCostId }).then(data => {
          this.baseCost = data
        })
      }
    },
    methods: {
      ...mapActions(['FindStandardCostBase', 'SaveStandardCostBase']),
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
