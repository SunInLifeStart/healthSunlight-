<template>
  <div style="position: relative">
    <div style="position: absolute;top:4px;right:40px;z-index: 1;">
      <!--<el-button size="small">导入面积</el-button>-->
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="1"
        :on-exceed="handleExceed">
        <div :file-list="fileList"></div>
        <el-button size="small" type="primary">点击上传</el-button>
        <!--<div slot="tip" class="el-upload__tip">只能上传exel，且不超过10M</div>-->
      </el-upload>
      <el-button size="small">导出</el-button>
      <el-button size="small">保存</el-button>

    </div>
    <el-tabs type="border-card">
      <el-tab-pane label="总体指标">
        <div>
          <el-container>
            <el-main>
              <p>总体指标</p>
              <el-table border size="small" :data="productIndicator.totalIndex" style="width: 100%">
                <el-table-column prop="index" label="序号"></el-table-column>
                <el-table-column prop="" label="指标名称"></el-table-column>
                <el-table-column prop="number" label="数量"></el-table-column>
                <el-table-column prop="units" width="50" label="单位"></el-table-column>
                <el-table-column prop="" label="备注"></el-table-column>
              </el-table>
            </el-main>
            <el-aside width="550px">
              <p>主要材料价格（不含税）</p>
              <el-table border size="small" :data="productIndicator.mainContract" style="width: 100%">
                <el-table-column type="index" label="序号"></el-table-column>
                <el-table-column prop="projectPlan" label="项目"></el-table-column>
                <el-table-column prop="data" label="数据"></el-table-column>
                <el-table-column prop="units" label="单位"></el-table-column>
                <el-table-column prop="remakes" label="备注"></el-table-column>
              </el-table>
              <p>市政输入条件</p>
              <el-table border size="small" :data="productIndicator.civicismCondition" style="width: 100%">
                <el-table-column type="index" label="序号"></el-table-column>
                <el-table-column prop="utilities" label="水电气条件"></el-table-column>
                <el-table-column prop="data" label="数据"></el-table-column>
                <el-table-column prop="units" label="单位"></el-table-column>
                <el-table-column prop="remakes" label="备注"></el-table-column>
              </el-table>
              <p>景观指标</p>
              <el-table border size="small" :data="productIndicator.landscape" style="width: 100%">
                <el-table-column type="index" label="序号"></el-table-column>
                <el-table-column prop="scenery" label="景观指标"></el-table-column>
                <el-table-column prop="area" label="面积"></el-table-column>
                <el-table-column prop="units" label="单位"></el-table-column>
                <el-table-column prop="proportion" label="占比"></el-table-column>
                <el-table-column prop="remakes" label="备注"></el-table-column>
              </el-table>
              <p>土方平衡</p>
              <el-table border size="small" :data="productIndicator.earthworkBalance" style="width: 100%">
                <el-table-column type="index" label="序号"></el-table-column>
                <el-table-column prop="utilities" label="场内土方平衡情况"></el-table-column>
                <el-table-column prop="data" label="数据"></el-table-column>
                <el-table-column prop="units" label="单位"></el-table-column>
                <el-table-column prop="remakes" label="备注"></el-table-column>
              </el-table>
            </el-aside>
          </el-container>
        </div>
      </el-tab-pane>
      <el-tab-pane label="业态面积">
        <span style="float: left; margin-top: 10px;">层级选项:</span>
        <div class="block" style="width: 500px;float: left; margin-left: 100px;">
          <el-slider v-model="value8" show-input :max="6" :min="1" show-stops></el-slider>
        </div>
        <div style="width: 200px;float: left; margin-left: 100px; margin-top: 10px">
          <el-switch v-model="ruleForm.delivery"></el-switch>
          显示全部
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="costItem" label="产品户型" width="150"></el-table-column>
          <el-table-column prop="projectName" label="地上建筑面积" width="150"></el-table-column>
          <el-table-column prop="originalDescription" label="地下建筑面积"></el-table-column>
          <el-table-column prop="workAmount" label="地上赠送面积"></el-table-column>
          <el-table-column label="地下赠送面积"></el-table-column>
          <el-table-column prop="unit" width="250" label="总建筑面积"></el-table-column>
          <el-table-column prop="gardenHouse" align="center" label="地上实际建筑面积(m2)">
            <el-table-column prop="combinedPrice" label="地上建筑面积"></el-table-column>
            <el-table-column prop="combinedPrice" label="地上实际建筑"></el-table-column>
            <el-table-column prop="combinedPrice" label="小计"></el-table-column>
          </el-table-column>
        </el-table>
      </el-tab-pane
      <el-tab-pane label="业态属性">
        <span style="float: left; margin-top: 10px;">层级选项:</span>
        <div class="block" style="width: 500px;float: left; margin-left: 100px;">
          <el-slider v-model="value8" show-input :max="6" :min="1" show-stops></el-slider>
        </div>
        <div style="width: 200px;float: left; margin-left: 100px; margin-top: 10px">
          <el-switch v-model="ruleForm.delivery"></el-switch>
          显示全部
        </div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="costItem" label="产品户型" width="150"></el-table-column>
          <el-table-column prop="projectName" label="栋数" width="150"></el-table-column>
          <el-table-column prop="originalDescription" label="层数"></el-table-column>
          <el-table-column prop="workAmount" label="总层数"></el-table-column>
          <el-table-column prop="unit" width="250" label="单元数"></el-table-column>
          <el-table-column prop="gardenHouse" align="center" label="电梯数"></el-table-column>
          <el-table-column prop="combinedPrice" label="户数"></el-table-column>
          <el-table-column prop="combinedPrice" label="车库门数量"></el-table-column>
          <el-table-column prop="combinedPrice" label="基底面积"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import treeTable from '@/components/TreeTable'
  import treeToArray from '@/components/treeTable/customEval'

  export default {
    components: { treeTable },
    data() {
      return {
        fileList: [{ name: '', url: '' }],
        ruleForm: {
          delivery: false
        },
        productIndicator: {
          basicInfo: [
            {
              content: 'sss',
              price: '123',
              remakes: 'sdasd'
            }
          ],
          mainContract: [
            {
              projectPlan: '222',
              data: 'sda',
              units: 'sda',
              remakes: 'sdasd'
            }
          ],
          totalIndex: [
            {

              target: 'daasd',
              number: 100,
              units: '平',
              children: [
                {
                  target: '问问',
                  number: 100,
                  units: '平'
                }
              ]
            },
            {
              target: '啊实打实',
              number: 100,
              units: 'cm'
            }
          ],
          civicismCondition: [
            {
              utilities: 'YY',
              data: '啊实打实',
              units: 'M',
              remakes: '试试'
            },
            {
              utilities: 'YY',
              data: '啊实打实',
              units: 'M',
              remakes: '试试'
            }
          ],
          landscape: [
            {
              scenery: 'ss',
              area: 'dd',
              units: '%',
              proportion: '20',
              remakes: 'sssa'
            },
            {
              scenery: 'ss',
              area: 'dd',
              units: '%',
              proportion: '20',
              remakes: 'sssa'
            }
          ],
          earthworkBalance: [
            {
              utilities: 'YY',
              data: '啊实打实',
              units: 'M',
              remakes: '试试'
            },
            {
              utilities: 'YY',
              data: '啊实打实',
              units: 'M',
              remakes: '试试'
            }
          ]
        },
        cfg: {
          fixed: true,
          maxHeight: 400
        },
        func: treeToArray,

        args: [null, null, true, 'timeLine'],
        value8: 0,
        tableData: [{}]
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePreview(file) {
        console.log(file + '蜘蛛人')
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 $ { file.name }？`)
      },
      beforeAvatarUpload(file) {
        var testmsg = file.name.substring(file.name.lastIndexOf('.') + 1)
        const extension = testmsg === 'xls'
        const extension2 = testmsg === 'xlsx'
        const isLt2M = file.size / 1024 / 1024 < 10
        if (!extension && !extension2) {
          this.$message({
            message: '上传文件只能是 xls、xlsx格式!',
            type: 'warning'
          })
        }
        if (!isLt2M) {
          this.$message({
            message: '上传文件大小不能超过 10MB!',
            type: 'warning'
          })
        }
        return extension || extension2 && isLt2M
      }
    }
  }
</script>

<style scoped>

</style>
