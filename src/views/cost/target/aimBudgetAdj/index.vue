<!--<template>-->
<!--<div>-->
<!--<span style="float: left">层级选项</span>-->
<!--<div class="block" style="width: 400px;float: left; margin-left: 100px;">-->
<!--<el-slider v-model="value8" show-input :max="6" :min="1" show-stops></el-slider>-->
<!--</div>-->
<!--<el-button>导出</el-button>-->
<!--<el-button>保存</el-button>-->
<!--<el-button>发起审批</el-button>-->
<!--<div style="width: 300px;">-->
<!--<el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick"></el-tree>-->
<!--</div>-->

<!--<div style="width: 100%; height:230px;">-->
<!--费项<br/>-->
<!--<el-table :data="tableDataRight" height="200" border highlight-current-row style="width: 60%;float: left">-->
<!--<el-table-column prop="freeName" label="费项名称"></el-table-column>-->
<!--<el-table-column prop="lastTargetCost" label="上次目标成本"></el-table-column>-->
<!--<el-table-column prop="adjustmentAmount" label="累计调整金额"></el-table-column>-->
<!--<el-table-column prop="targetCost" label="本月目标成本"></el-table-column>-->
<!--</el-table>-->
<!--</div>-->
<!--<div style="width: 100%; height:230px;">-->
<!--合约规划<br/>-->
<!--<el-table :data="tableDataRight" height="200" border highlight-current-row style="width: 60%;float: left">-->
<!--<el-table-column type="index" label="序号"></el-table-column>-->
<!--<el-table-column prop="lastTargetCost" label="合约规划名称"></el-table-column>-->
<!--<el-table-column prop="adjustmentAmount" label="上次规划金额(A)"></el-table-column>-->
<!--<el-table-column prop="targetCost" label="本次规划(B>=D+E)"></el-table-column>-->
<!--<el-table-column prop="targetCost" label="分解校检"></el-table-column>-->
<!--<el-table-column prop="targetCost" label="调整金额(C=B-A)"></el-table-column>-->
<!--<el-table-column prop="targetCost" label="已发生(D)"></el-table-column>-->
<!--<el-table-column prop="targetCost" label="预估变更(E)"></el-table-column>-->
<!--<el-table-column prop="targetCost" label="待发生(F)"></el-table-column>-->
<!--<el-table-column prop="targetCost" label="预留金金额(H)"></el-table-column>-->
<!--</el-table>-->
<!--</div>-->
<!--<div style="width: 100%; height:230px;">-->
<!--测算<br/>-->
<!--<el-table :data="tableDataRight" height="200" border highlight-current-row style="width: 60%;float: left">-->
<!--<el-table-column prop="freeName" label="业态名称"></el-table-column>-->
<!--<el-table-column prop="lastTargetCost" label="测算项编码及名称"></el-table-column>-->
<!--<el-table-column prop="adjustmentAmount" label="原始指标(A)">-->
<!--<el-table-column prop="targetCost" label="说明"></el-table-column>-->
<!--<el-table-column prop="targetCost" label="数值"></el-table-column>-->
<!--</el-table-column>-->
<!--<el-table-column prop="adjustmentAmount" label="系数(B)">-->
<!--<el-table-column prop="targetCost" label="数值"></el-table-column>-->
<!--<el-table-column prop="targetCost" label="单位"></el-table-column>-->
<!--</el-table-column>-->
<!--<el-table-column prop="adjustmentAmount" label="工作量(C=A*B)">-->
<!--<el-table-column prop="targetCost" label="说明"></el-table-column>-->
<!--<el-table-column prop="targetCost" label="数值"></el-table-column>-->
<!--</el-table-column>-->
<!--<el-table-column prop="targetCost" label="单价(D)元"></el-table-column>-->
<!--<el-table-column prop="targetCost" label="合价(E=D*C)元"></el-table-column>-->
<!--</el-table>-->
<!--</div>-->
<!--</div>-->

<!--</template>-->
<template>
  <div>
    <span style="float: left">层级选项</span>
    <div class="block" style="width: 400px;float: left; margin-left: 100px;">
      <el-slider v-model="value8" show-input :max="6" :min="1" show-stops></el-slider>
    </div>
    <span>合约规划</span>
    <el-button>新增</el-button>
    <el-button>删除</el-button>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-table :data="tableDataRight" border highlight-current-row>
          <el-table-column prop="freeName" label="费用/合约规划"></el-table-column>
          <el-table-column prop="lastTargetCost" label="目标金额"></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="16">
        <el-col>合约规划</el-col>
        <el-table :data="tableDataRight" border highlight-current-row>
          <el-table-column type="index" label="序号"></el-table-column>
          <el-table-column prop="lastTargetCost" label="合约规划名称"></el-table-column>
          <el-table-column prop="lastTargetCost" label="上次规划金额（A）"></el-table-column>
          <el-table-column prop="lastTargetCost" label="本次规划（B>=D+E）"></el-table-column>
          <el-table-column prop="lastTargetCost" label="分解校验"></el-table-column>
          <el-table-column prop="lastTargetCost" label="调整金额（C=B-A）"></el-table-column>
          <el-table-column prop="lastTargetCost" label="分解校验"></el-table-column>
          <el-table-column prop="adjustmentAmount" label="已发生（D）"></el-table-column>
          <el-table-column prop="adjustmentAmount" label=" 预估变更（E）"></el-table-column>
          <el-table-column prop="adjustmentAmount" label=" 待发生（F）"></el-table-column>
          <el-table-column prop="adjustmentAmount" label=" 预留金余额(H)"></el-table-column>
        </el-table>
        <el-col>测算</el-col>
        <el-table :data="tableDataRight" border highlight-current-row>
          <el-table-column prop="lastTargetCost" label="业态名称"></el-table-column>
          <el-table-column prop="lastTargetCost" label="测算项编码及名称"></el-table-column>
          <el-table-column prop="adjustmentAmount" label="原始指标（A）">
            <el-table-column prop="targetCost" label="说明"></el-table-column>
            <el-table-column prop="targetCost" label="数值"></el-table-column>
          </el-table-column>
          <el-table-column prop="adjustmentAmount" label="系数B">
            <el-table-column prop="targetCost" label="数值"></el-table-column>
            <el-table-column prop="targetCost" label="单位"></el-table-column>
          </el-table-column>
          <el-table-column prop="adjustmentAmount" label="工作量（C=A*B）">
            <el-table-column prop="targetCost" label="数值"></el-table-column>
            <el-table-column prop="targetCost" label="单位"></el-table-column>
          </el-table-column>
          <el-table-column prop="lastTargetCost" label="单价（D）元"></el-table-column>
          <el-table-column prop="lastTargetCost" label="合价（E=D*C）元"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'budgetAdj',
    data() {
      return {
        tableDataRight: [{
          freeName: '建安及装修工程费',
          lastTargetCost: '840,000.00',
          adjustmentAmount: '840,000.00',
          targetCost: '840,000.00'
        }],
        value8: 0,
        data: [{
          label: '开发成本',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '土地费',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '前期工程费',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data)
      }
    }
  }
</script>

<style scoped>

</style>
