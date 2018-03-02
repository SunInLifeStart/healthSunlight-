<template>
  <div>
    <div style="margin: 15px;">
      <el-col :span="16"> &nbsp</el-col>
      <el-col :span="8">
        <el-col :span="12">&nbsp</el-col>
        <el-col :span="12">
          <!--<el-col :span="8"> <el-button size="mini" type="primary">导出</el-button></el-col>-->
          <el-col :span="8"> <el-button size="mini" type="primary">保存</el-button></el-col>
          <!--<el-col :span="8"> <el-button size="mini" type="primary">发起审批</el-button></el-col>-->
        </el-col>
      </el-col>
    </div>
      <div>
      <el-row>
        <el-col :span="24"><h5>一&nbsp&nbsp 项目基本信息</h5></el-col>
      </el-row>
      <el-table
        :data="dataBase.basicInformation"
        size="small"
        border
        style="width: 99%">
        <el-table-column
          width="180"
          type="index"
          label="序号"
        >
        </el-table-column>
        <el-table-column
          prop="content"
          label="内容"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="值">
          <template slot-scope="scope">
            <el-select v-model="scope.row.configure" clearable placeholder="请选择">
              <el-option
                v-for="item in dataBase.configure"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
          <template slot-scope="scope">
            <el-select v-model="scope.row.configureScenery" clearable placeholder="请选择">
              <el-option
                v-for="item in dataBase.configureScenery"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          prop="remarks"
          label="备注">
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-row>
        <el-col :span="24"><h5>二&nbsp&nbsp 项目配置</h5></el-col>
      </el-row>
      <el-table
        :data="dataBase.projectConfiguration "
        size="small"
        border
        style="width: 99%">
        <el-table-column
          prop="classify"
          label="分类"
          width="180">
        </el-table-column>
        <el-table-column
          prop="format"
          label="业态"
          width="180">
        </el-table-column>
        <el-table-column
          prop="constructionDeploy"
          label="建安配置">
          <template slot-scope="scope">
            <el-select v-model="scope.row.constructionDeploy" clearable placeholder="请选择">
              <el-option
                v-for="item in dataBase.configure"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          prop="givingPercentage"
          label="赠送率">
        </el-table-column>
        <el-table-column
          prop="clothBoundDeploy"
          label="精装配置">
          <template slot-scope="scope">
            <el-select v-model="scope.row.clothBoundDeploy" clearable placeholder="请选择">
              <el-option
                v-for="item in dataBase.configureFine"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          prop="clothBound"
          label="精装单方">
        </el-table-column>
        <el-table-column
          prop="sceneryDeploy"
          label="景观配置">
          <template slot-scope="scope">
            <el-select v-model="scope.row.sceneryDeploy" clearable placeholder="请选择">
              <el-option
                v-for="item in dataBase.configureScenery"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-row>
        <el-col :span="24"><h5>主要材料价格</h5></el-col>
      </el-row>
      <el-table
        :data="dataBase.materials"
        size="small"
        border
        style="width: 99%">
        <el-table-column
          width="180"
          type="index"
          label="序号"
        >
        </el-table-column>
        <el-table-column
          prop="projectDeploy"
          label="项目配置"
          width="180">
        </el-table-column>
        <el-table-column
          prop="datum"
          label="数据">
        </el-table-column>
        <el-table-column
          prop="unit"
          label="单位">
        </el-table-column>
        <el-table-column
          prop="remarks"
          label="备注">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataBase: {
          configure: [
            {
              value: 'P1',
              label: 'P1'
            },
            {
              value: 'P2',
              label: 'P2'
            },
            {
              value: 'P3',
              label: 'P3'
            },
            {
              value: 'P4',
              label: 'P4'
            },
            {
              value: 'P3+',
              label: 'P3+'
            },
            {
              value: 'P2+',
              label: 'P2+'
            }
          ],
          configureFine: [
            {
              value: 'D1',
              label: 'D1'
            },
            {
              value: 'D2',
              label: 'D2'
            },
            {
              value: 'D3',
              label: 'D3'
            },
            {
              value: 'D4',
              label: 'D4'
            },
            {
              value: 'D2+',
              label: 'D2+'
            },
            {
              value: 'D3+',
              label: 'D3+'
            }
          ],
          configureScenery: [
            {
              value: 'S1',
              label: 'S1'
            },
            {
              value: 'S2',
              label: 'S2'
            },
            {
              value: 'S3',
              label: 'S3'
            },
            {
              value: 'S4',
              label: 'S4'
            },
            {
              value: 'S2+',
              label: 'S2+'
            },
            {
              value: 'S3+',
              label: 'S3+'
            }
          ],
          basicInformation: [
            {
              content: '城市',
              value: '北京',
              remarks: '基准限额以城市为单位'
            }, {
              content: '区域',
              value: '海淀',
              remarks: '基准限额以城市为单位'
            }
          ],
          projectConfiguration: [
            {
              classify: 'w',
              format: 'ww',
              constructionDeploy: 'ddd',
              clothBoundDeploy: 'fds',
              givingPercentage: '123',
              sceneryDeploy: 'sda',
              clothBound: '222'
            }, {
              classify: 'w',
              format: 'ww',
              constructionDeploy: 'ddd',
              clothBoundDeploy: 'fds',
              givingPercentage: '123',
              sceneryDeploy: 'sda',
              clothBound: '222'
            }
          ],
          materials: [
            {
              projectDeploy: '钢筋基准价格',
              datum: '4000',
              unit: 'CNBJLONG',
              remarks: '无'
            }, {
              projectDeploy: '砼基准价格',
              datum: '2000',
              unit: 'CNBJLONG',
              remarks: '无'
            }
          ]
        }
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>
