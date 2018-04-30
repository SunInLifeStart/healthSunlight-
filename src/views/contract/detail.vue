<template>
  <div>
    <!--导航tab-->
    <div class="piecerow_main">
      <div class="piecerow">
        <el-tabs v-model="activeName" @tab-click="handleClick" style="background-color: #ffffff;">
          <el-tab-pane name="first" label="合同信息">
           <div slot="label">
             <div>合同信息</div>
           </div>
           <div class="dev1_border"></div>
           <!--基本信息-->
           <div style="background-color: #EEF2F6">
             <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #e9e9e9;background-color: #FFFFFF;border-top-left-radius: 4px;border-top-right-radius: 4px"
                  @click="basicInfo = !basicInfo">
              <el-row>
                <el-col :span="11" style="margin-left: 1%">
                  <span style="border-left: 2px solid #7986A9"></span>
                  <span class="dev1_font">基本信息</span>
                </el-col>
                <el-col :span="12" style="text-align: right;margin-left: 2%">
                  <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="basicInfo"></i>
                  <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!basicInfo"></i>
                </el-col>
              </el-row>
            </div>
          </div>
           <div v-show="basicInfo" class="dev_show">
            <el-form   label-width="140px" class="demo-ruleForm">
              <el-row :gutter="20">
                <el-col :span="7">
                  <el-form-item label="合同编号:" class="from-margin8">
                    <el-input v-model="$contract.jumpContract.ableamt" required prop="name" size="small" disabled></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="15" :offset="1"  class="selectClass">
                  <el-form-item label="合同名称:" prop="name" class="from-margin8">
                    <el-input v-model="$contract.jumpContract.contractname" size="small" disabled></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="7">
                  <el-form-item label="费项归属:" class="from-margin8">
                    <el-input v-model="$contract.jumpContract.contractcategory" size="small" disabled></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-form-item label="合同类别:" class="from-margin8">
                    <el-input v-model="$contract.jumpContract.contracttypeid" size="small" disabled></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-form-item label="形成方式:" class="from-margin8">
                    <el-input v-model="$contract.jumpContract.tendertype" size="small" disabled></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" class="selectClass">
                <el-col :span="7">
                  <el-form-item label="经办人:" prop="region" class="from-margin8">
                    <el-select disabled v-model="$contract.jumpContract.inchargesbyId" size="small" placeholder="请选择经办人" style="width: 100%">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-form-item label="经办部门:" prop="region" class="from-margin8">
                    <el-select disabled v-model="$contract.jumpContract.inchargesbydeptid" size="small" style="width: 100%" placeholder="请选择经办部门">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-form-item label="合同范本使用类型:" prop="region" class="from-margin8">
                    <el-select disabled v-model="basicInfos.type" size="small" placeholder="请选择计价模式" style="width: 100%;">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="7">
                  <el-form-item disabled label="签订日期:" class="from-margin8">
                    <el-input v-model="$contract.jumpContract.signingdate" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1" class="selectClass">
                  <el-form-item label="招标信息:" prop="region" class="from-margin8">
                    <el-select disabled v-model="$contract.jumpContract.region" size="small" placeholder="请选择招标信息" style="width: 100%;">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-form-item  label="是否主要合同:" prop="resource" class="from-margin8">
                    <el-radio-group disabled v-model="basicInfos.resource">
                      <el-radio label="是"></el-radio>
                      <el-radio label="否"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="15">
                  <el-form-item label="组团名:" class="from-margin8">
                    <el-input v-model="$contract.jumpContract.customerprojectname" size="small" disabled></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
           <div v-show="basicInfo" style="background-color: #EEF2F6">
            <div class="dev1_border1"></div>
          </div>
          <!--合同主体-->
           <div class="dev1_border"></div>
           <div style="background-color: #EEF2F6">
            <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #e9e9e9;
            background-color: #FFFFFF;border-top-left-radius: 4px;border-top-right-radius: 4px"
                 @click="contractMain = !contractMain">
              <el-row>
                <el-col :span="10" style="margin-left: 1%">
                  <span style="border-left: 2px solid #7986A9"></span>
                  <span class="dev1_font">合同主体</span>
                </el-col>
                <el-col :span="13" style="text-align: right;margin-left: 2%">
                  <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="contractMain"></i>
                  <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!contractMain"></i>
                </el-col>
              </el-row>
            </div>
          </div>
           <div v-show="contractMain" class="dev_show">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm selectClass">
              <el-row :gutter="20">
                <el-col :span="15">
                  <el-form-item label="我方单位:" prop="name" class="from-margin8">
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-form-item label="合同性质:" prop="region" class="from-margin8">
                    <el-select v-model="ruleForm.region" size="small" style="width: 100%" placeholder="请选择经办人">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" style="margin-top: 10px" >
                <el-col :span="15">
                  <el-form-item label="对方单位:" prop="name" class="from-margin8">
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <!--<el-col :span="7">-->
                  <!--<el-form-item label="合同性质:" prop="region" class="from-margin8">-->
                    <!--<el-select v-model="ruleForm.region" size="small" style="width: 100%" placeholder="请选择合同性质">-->
                      <!--<el-option label="区域一" value="shanghai"></el-option>-->
                      <!--<el-option label="区域二" value="beijing"></el-option>-->
                    <!--</el-select>-->
                  <!--</el-form-item>-->
                <!--</el-col>-->
              </el-row>
              <el-row :gutter="20" style="margin-top: 10px">
                <el-col :span="15">
                  <el-form-item label="分包单位:" prop="name" class="from-margin8">
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" style="margin-top: 10px">
                <el-col :span="15">
                  <el-form-item label="收款单位:" prop="name" class="from-margin8">
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
           <div v-show="contractMain" style="background-color: #EEF2F6">
            <div class="dev1_border1"></div>
          </div>
          <!--合同金额-->
           <div class="dev1_border"></div>
           <div style="background-color: #EEF2F6">
            <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #e9e9e9;
            background-color: #FFFFFF;border-top-left-radius: 4px;border-top-right-radius: 4px"
                 @click="contractMoney = !contractMoney">
              <el-row>
                <el-col :span="10" style="margin-left: 1%">
                  <span style="border-left: 2px solid #7986A9"></span>
                  <span class="dev1_font">合同金额</span>
                </el-col>
                <el-col :span="13" style="text-align: right;margin-left: 2%">
                  <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="contractMoney"></i>
                  <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!contractMoney"></i>
                </el-col>
              </el-row>
            </div>
          </div>
           <div v-show="contractMoney" class="dev_show">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm">
              <el-row :gutter="20">
                <el-col :span="7">
                  <el-form-item class="from-margin2">
                    <div slot="label">合同金额:<br>
                      <div class="dev1_span">不含可抵扣税<span style="color: red">(A)</span></div>
                    </div>
                    <!--<span class="dev1_z" style="left: -52%;">(不含可抵扣税)<span style="color: red">(A)</span></span>-->
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-form-item class="from-margin2">
                    <div slot="label">可抵扣税额:<br>
                      <div class="dev1_span"><span style="color: red">(B)</span></div>
                    </div>
                    <!--<span class="dev1_z" style="left: -12%;"><span style="color: red">(B)</span></span>-->
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-form-item class="from-margin2">
                    <div slot="label">合同金额(含税):<br>
                      <div class="dev1_span"><span style="color: red">(C=A+B)</span></div>
                    </div>
                    <!--<span class="dev1_z" style="left: -25%;"><span style="color: red">(C=A+B)</span></span>-->
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="7">
                  <el-form-item class="from-margin2">
                    <div slot="label">不计成本金额:<br>
                      <div class="dev1_span">计成本<span style="color: red">(D)</span></div>
                    </div>
                    <!--<span class="dev1_z" style="left: -12%;"><span style="color: red">(D)</span></span>-->
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                    <!--<el-date-picker type="date" placeholder="Pick a date" v-model="form.dateSigning"></el-date-picker>-->
                  </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-form-item class="from-margin2">
                    <!--label="有效签约金额:"-->
                    <div slot="label">有效签约金额:<br>
                      <div class="dev1_span">计成本<span style="color: red">(E=A-D)</span></div>
                    </div>
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <!--<el-col :span="7" class="selectClass">-->
                  <!--<el-form-item label="合同预留金:" prop="name" class="from-margin2">-->
                    <!--<el-input v-model="ruleForm.name" size="small"></el-input>-->
                    <!--&lt;!&ndash;<el-date-picker type="date" placeholder="Pick a date" v-model="form.dateSigning"></el-date-picker>&ndash;&gt;-->
                  <!--</el-form-item>-->
                <!--</el-col>-->
              </el-row>
              <el-row :gutter="20" class="selectClass">
                <el-col :span="7">
                  <el-form-item label="发票类型:" prop="name" class="from-margin8">
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-form-item class="from-margin8">
                    <div slot="label"><span style="color:red">*</span>可抵扣税税率(%):</div>
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="7" :offset="1">
                  <el-form-item label="币种:" prop="name" class="from-margin8">
                    <el-input v-model="ruleForm.name" size="small"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
           <div v-show="contractMoney" style="background-color: #EEF2F6">
            <div class="dev1_border1"></div>
          </div>
           <!--合约规划-->
           <div class="dev1_border"></div>
           <div style="background-color: #EEF2F6">
            <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #e9e9e9;
            background-color: #FFFFFF;border-top-left-radius: 4px;border-top-right-radius: 4px"
                 @click="contractPlan = !contractPlan">
              <el-row>
                <el-col :span="10" style="margin-left: 1%">
                  <span style="border-left: 2px solid #7986A9"></span>
                  <span class="dev1_font">合约规划</span>
                </el-col>
                <el-col :span="13" style="text-align: right;margin-left: 2%">
                  <!--<span style="font-size: 14px;color: #6d6f71;margin-right: 0"><i class="el-icon-plus"></i><span style="margin-left: 0.5%">增加</span></span>-->
                  <!--<span style="font-size: 14px;color: #6d6f71;"><i class="el-icon-delete" style="margin-left: 2%"></i><span style="margin-left: 0.5%">删除</span></span>-->
                  <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="contractPlan"></i>
                  <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!contractPlan"></i>
                </el-col>
              </el-row>
            </div>
          </div>
           <div v-show="contractPlan" class="dev_show">
            <el-table highlight-current-row :data="tableData" border
                      size="small" style="width: 98%;margin-left: 1%"
                      :row-class-name="tableRowClassName"
                      :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
                      :header-cell-style="{background:'#efefe0', 'text-align': 'center', color: '#a08e6e',fontSize:'13px',height:'40px',padding:'6px 0',fontWeight:'500'}">
              <el-table-column type="index" width="100px" label="序号" align="center"></el-table-column>
              <el-table-column prop="nameContract" label="所属项目" align="center"></el-table-column>
              <el-table-column prop="supplierUnit" label="所属费项" align="center"></el-table-column>
              <el-table-column prop="nameContract" label="合约规划名称" align="center"></el-table-column>
              <el-table-column prop="contractMoneyPlus" label="原合约规划金额(F)" align="center"></el-table-column>
              <el-table-column prop="appliedAmount" label="合对应金额(不含税)(G)" align="right"></el-table-column>
              <el-table-column prop="settlementAmount" label="预留金(H)" align="right"></el-table-column>
              <el-table-column prop="contractMoneyAfter" label="差额(I=F-G-H)" align="right"></el-table-column>
            </el-table>
          </div>
           <div v-show="contractPlan" style="background-color: #EEF2F6">
            <div class="dev1_border1"></div>
          </div>
           <!--其他说明-->
            <div class="dev1_border"></div>
            <div style="background-color: #EEF2F6">
              <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #e9e9e9;
            background-color: #FFFFFF;border-top-left-radius: 4px;border-top-right-radius: 4px"
                   @click="contractMoney = !contractMoney">
                <el-row>
                  <el-col :span="10" style="margin-left: 1%">
                    <span style="border-left: 2px solid #7986A9"></span>
                    <span class="dev1_font">其他说明</span>
                  </el-col>
                  <el-col :span="13" style="text-align: right;margin-left: 2%">
                    <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="otherExplain"></i>
                    <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="!otherExplain"></i>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div v-show="contractMoney" class="dev_show">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm">
                <el-row :gutter="20" class="selectClass">
                  <el-col :span="23" >
                    <el-form-item label="合同范围:">
                      <el-input style="width: 100%"
                                type="textarea" :rows="2" placeholder="请输入内容"
                                v-model="form.responsiblePerson">
                      </el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20" style="margin-top: 2%;">
                  <el-col :span="23"  style="margin-left:0%">
                    <el-form-item label="合约付款节点:">
                      <div class="first_last_radius" style="height: 20px;">
                        <div class="float_center"  style="background-color: #78B4C8;width:18%;">
                          30%
                          <div class="position_color">预付款</div>
                        </div>
                        <div class="float_center"  style="background-color: #A0C8C8;width:16%">
                          40%
                          <div class="position_color">进度款</div>
                        </div>
                        <div class="float_center"  style="background-color: #95A4D2;width:10%">
                          45%
                          <div class="position_color">俊备款</div>
                        </div>
                        <div class="float_center"  style="background-color: #84CDBA;width:16%">
                          75%
                          <div class="position_color">结算款</div>
                        </div>
                        <div class="float_center"  style="background-color: #80ADCA;width:40%;">
                          100%
                          <div class="position_color">质保金</div>
                        </div>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="20"  class="selectClass"  style="margin-top: 3%;">
                  <el-col :span="23" >
                    <el-form-item label="合约付款约定:">
                      <el-input style="width: 100%" type="textarea"  :rows="2" placeholder="请输入内容"
                                v-model="form.responsiblePerson"></el-input>
                    </el-form-item>
                    <div class="detail_dev2" style="margin-left:1%;">需说明首付款，过程付款，尾款的付款条件，时间及金额</div>
                  </el-col>
                </el-row>
                <el-row :gutter="20"  class="selectClass"  style="margin-top:1%;">
                  <el-col :span="23">
                    <el-form-item label="与目标成本:">
                      <el-input  style="width: 100%" type="textarea" :rows="2" placeholder="请输入内容"
                                v-model="form.responsiblePerson"></el-input>
                    </el-form-item>
                    <div class="detail_dev2"  style="margin-left:1%;">或非项目合同的费用预算，比较，如超标请说明原因</div>
                  </el-col>
                </el-row>
                <el-row :gutter="20"  class="selectClass"  style="margin-top:1%;">
                  <el-col :span="23" >
                    <el-form-item label="其他:">
                      <el-input  style="width: 100%" type="textarea" :rows="2" placeholder="请输入内容"
                                v-model="form.responsiblePerson"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
            <div v-show="contractMoney" style="background-color: #EEF2F6">
              <div class="dev1_border1"></div>
            </div>
           <!--付款方式-->
           <div class="dev1_border"></div>
           <div style="background-color: #EEF2F6">
            <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #e9e9e9;
            background-color: #FFFFFF;border-top-left-radius: 4px;border-top-right-radius: 4px"
                 @click="payWay = !payWay">
              <el-row>
                <el-col :span="10" style="margin-left: 1%">
                  <span style="border-left: 2px solid #7986A9"></span>
                  <span class="dev1_font">付款方式</span>
                </el-col>
                <el-col :span="13" style="text-align: right;margin-left: 2%">
                  <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="payWay"></i>
                  <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!payWay"></i>
                </el-col>
              </el-row>
            </div>
          </div>
           <el-collapse-transition>
             <div v-show="payWay" class="dev_show">
              <el-table highlight-current-row :data="$contract.jumpContract.paymentNoteList" border
                        size="small" style="width: 98%;margin-left: 1%"
                        :row-class-name="tableRowClassName"
                        :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
                        :header-cell-style="{background:'#efefe0', 'text-align': 'center', color: '#a08e6e',fontSize:'13px',height:'40px',padding:'6px 0',fontWeight:'500'}">
                <el-table-column prop="titlecn" align="center" label="付款方式名称"></el-table-column>
                <el-table-column prop="paypercent" align="center" label="付款比率(%)"></el-table-column>
              </el-table>
            </div>
           </el-collapse-transition>
           <div v-show="payWay" style="background-color: #EEF2F6">
            <div class="dev1_border1"></div>
          </div>
           <!--附件-->
           <div class="dev1_border"></div>
           <div style="background-color: #EEF2F6">
            <div style="width: 100%;line-height: 40px;border-bottom: 1px solid #e9e9e9;
            background-color: #FFFFFF;border-top-left-radius: 4px;border-top-right-radius: 4px" @click="accessory = !accessory">
              <el-row>
                <el-col :span="10" style="margin-left: 1%">
                  <span style="border-left: 2px solid #7986A9"></span>
                  <span class="dev1_font">附件</span>
                </el-col>
                <el-col :span="13" style="text-align: right;margin-left: 2%">
                  <i class="el-icon el-icon-download"></i><span style="margin-left: 1%"
                                                                class="dev1_font">一键下载</span>
                  <i class="el-icon el-icon-arrow-up" style="margin-left: 2%" v-if="accessory"></i>
                  <i class="el-icon el-icon-arrow-down" style="margin-left: 2%" v-if="!accessory"></i>
                </el-col>
              </el-row>
            </div>
          </div>
           <el-collapse-transition>
            <div v-show="accessory" class="dev_show">
              <el-table highlight-current-row :data="$contract.jumpContract.document" border
                        size="small" style="width: 98%;margin-left: 1%"
                        :row-class-name="tableRowClassName"
                        :cell-style="({row, column, rowIndex, columnIndex}) => (columnIndex === 3||columnIndex === 0)?{'text-align': 'center',padding: '3px'}:{padding: '3px'}"
                        :header-cell-style="{background:'#efefe0', 'text-align': 'center', color: '#a08e6e',fontSize:'13px',height:'40px',padding:'6px 0',fontWeight:'500'}">
                <el-table-column prop="documentname" align="center" label="附件类型"></el-table-column>
                <el-table-column prop="documenttypename" align="center" label="附件名称"></el-table-column>
                <el-table-column prop="employeename" align="center" label="上传人"></el-table-column>
                <el-table-column prop="createdate" align="center" label="上传时间"></el-table-column>
                <el-table-column prop="remark" align="center" label="备注"></el-table-column>
                <el-table-column prop="" align="center" label="操作"></el-table-column>
                <!--<el-table-column prop="outLineCanSee" align="center" label="所属费项" width="600"></el-table-column>-->
                <!--<el-table-column prop="statusAccounting" align="center" label="备注"></el-table-column>-->
                <el-table-column  align="center" label="操作">
                  <template slot-scope="scope">
                    <a style="color: #409EFF;">下载</a>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-collapse-transition>
           <div style="background-color: #EEF2F6">
            <div v-show="accessory" class="dev1_border1"></div>
          </div>
        </el-tab-pane>
          <el-tab-pane name="second" disabled>
          <div slot="label">
            <div>清单信息 </div>
          </div>
         </el-tab-pane>
          </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'contractInfo',
    data() {
      return {
        activeName: 'first',
        radio: '1',
        basicInfo: true,
        contractMain: true,
        contractMoney: true,
        contractPlan: true,
        otherExplain: true,
        payMethod: true,
        payWay: true,
        accessory: true,
        classA: true,
        classB: false,
        form: {
          organization: '',
          contactName: '',
          project: '',
          contractNum: '',
          statusAccounting: '',
          screen: '',
          freeTo: '',
          responsiblePerson: '',
          transactionDepartment: '',
          dateSigning: '',
          ourUnit: '',
          supplierUnit: ''
        },
        basicInfos: {
          contractNo: '',
          contractName: '',
          contractCodeName: '',
          contractTypeId: '',
          tenderType: '',
          inchargesbyId: '',
          inchargesbyDeptId: '',
          type: '',
          signingDate: '',
          region: '',
          resource: '',
          customerprojectname: ''
        },
        ruleForm: {
          name: '11',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ]
        },
        tableData: [
          {
            approvalStatus: '已审批',
            statusAccounting: '已结算',
            operation: '下载',
            outLineCanSee: '外网可见',
            nameContract: '西苑颐和园一期',
            supplierUnit: '龙湖地产代理合同',
            contractMoneyPlus: '1,843,500.00',
            contractMoneyAfter: '195,500.00',
            appliedAmount: '18,000,000.00',
            radioPayment: '100%',
            contractDate: '2018-4-30',
            settlementAmount: '1,418,000.00'
          },
          {
            approvalStatus: '已审批',
            statusAccounting: '已结算',
            operation: '下载',
            outLineCanSee: '外网可见',
            nameContract: '西苑颐和园一期',
            supplierUnit: '龙湖地产和原告代理合同',
            contractMoneyPlus: '2,318,000.00',
            contractMoneyAfter: '14,529,000.00',
            appliedAmount: '184,000.00',
            radioPayment: '100%',
            contractDate: '2018-4-30',
            settlementAmount: '1,833,000.00'
          },
          {
            approvalStatus: '已审批',
            statusAccounting: '已结算',
            operation: '下载',
            outLineCanSee: '外网不可见',
            nameContract: '西苑颐和园一期',
            supplierUnit: '龙湖地产颐和原著理合同',
            contractMoneyPlus: '145.258,000.00',
            contractMoneyAfter: '1.249,000.00',
            appliedAmount: '183.342,000.00',
            radioPayment: '100%',
            contractDate: '2018-4-30',
            settlementAmount: '183.325,000.00'
          }
        ],
        styleData: ['预付款 20%', '进度款 70%', '竣备款85%', '结算款 95%', '质保金 100%']
      }
    },
    computed: {
      ...mapGetters(['$contract'])
    },
    created() {
      this.JumpContract({ 'contractid': this.$route.params.id })
    },
    methods: {
      ...mapActions([
        'JumpContract'
      ]),
      handleClick(tab, event) {
        console.log(tab, event)
      },
      showChanges(id) {
        this.$router.push({ name: '预估变更', params: { id }})
      },
      showPayments(id) {
        this.$router.push({ name: '合同付款', params: { id }})
      },
      stepStyle(index, type) {
        switch (type) {
          case 'marginLeft':
            return {
              marginLeft: index !== 0 ? '-0.8%' : '0'
            }
          case 'background':
            return {
              background: index === 0 ? '#EE9877' : 'none'
            }
          case 'background1':
            return {
              background: index % 2 === 0 ? '#EE9877' : '#F3BE56'
            }
          case 'borderTopColor':
            return {
              borderTopColor: index % 2 === 0 ? '#EE9877' : '#F3BE56'
            }
          case 'borderBottomColor':
            return {
              borderBottomColor: index % 2 === 0 ? '#EE9877' : '#F3BE56'
            }
          case 'borderLeftColor':
            return {
              borderLeftColor: index % 2 === 0 ? '#EE9877' : '#F3BE56'
            }
          default:
            return {}
        }
      },
      tableRowClassName({ row, rowIndex }) {
        if (rowIndex % 2 === 1) {
          return 'interleave_row'
        }
        return ''
      }
    }
  }
</script>

<style scoped>
  .selectClass >>> .el-input__inner{
    border:1px solid #C2D9AB;
    background-color:#FCFFFA;
  }
  .detail_dev1 {
    width: 2px;
    background-color: rgb(65, 73, 82);
    height: 16px;
    margin-top: 8px;
  }

  .dev1_z {
    position: absolute;
    top: 64%;
    font-size: 8px;
    color: #606266;
  }

  .dev1_span {
    margin-top: -16%;
    font-size: 12px;
    color: #999;
  }

  .dev1_font {
    margin-left: 2%;
    color: #60696b;
    font-size: 14px;
  }

  .class-a {
    border-bottom: 3px solid #657398;
    text-align: center;
    width: 7%;
  }

  .detail_dev2 {
    font-size: 8px;
    color: #9a9fa4;
    margin-top: 1%;
    padding-left: 10.3%;
    padding-bottom: 1%;
  }

  .dev_show {
    background-color: #FFF;
    margin-top: 1%;
  }

  /*右三角*/
  .triangle-right {
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-left: 12px solid;
    border-bottom: 12px solid transparent;
  }

  /*右上三角*/
  .triangle-topright {
    width: 0;
    height: 0;
    border-top: 12px solid;
    border-left: 12px solid transparent;
  }

  /*右下三角*/
  .triangle-bottomright {
    width: 0;
    height: 0;
    border-bottom: 12px solid;
    border-left: 12px solid transparent;
  }

  .from-margin8 {
    margin-bottom: 18px
  }

  .from-margin2 {
    margin-bottom: -3%
  }

  .el-tabs__active-bar {
    max-width: 100px;
    /*margin-left: 6%;*/
    position: absolute;
    bottom: 2px;
    left: 7%;
    height: 2px;
    background-color: #7986a9;
    z-index: 1;
    -webkit-transition: -webkit-transform .3s cubic-bezier(.645, .045, .355, 1);
    transition: -webkit-transform .3s cubic-bezier(.645, .045, .355, 1);
    transition: transform .3s cubic-bezier(.645, .045, .355, 1);
    transition: transform .3s cubic-bezier(.645, .045, .355, 1), -webkit-transform .3s cubic-bezier(.645, .045, .355, 1);
    list-style: none;
  }

  .el-tabs__item {
    padding: 45px 20px;
    height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #393d46;
    position: relative;
  }
  .el-tabs__header {
    padding: 0;
    position: relative;
    margin: 0 0 0px;
  }

  .dev1_border {
    border: 6px solid #EEF2F6;
  }
  .dev1_border1 {
    border: 6px solid #FFFFFF;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .el-tabs__item.is-active {
    color: #7986a9;
  }
  .el-table .warning-row {
    background: #F5F7FA;
  }
  .float_center{
    position: relative;
    float: left;
    top: 10px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    color: white;
    width:20%
  }
  .position_color{
    width: 50%;
    position: absolute;
    left: 24%;
    top: 24px;
    color: rgb(0, 0, 0);
  }
  .first_last_radius :first-child{
    border-radius:8px 0 0 8px;
  }
  .first_last_radius :last-child{
    border-radius:0 8px 8px 0;
  }
  .piecerow_main {
    background-color:#edf2f7;
    padding: 10px 10px 0 10px;
  }
  /**
   标题的背景色，和高度
 */
  .piecerow >>> .el-tabs__item.is-active{
    color:#7986a9;
  }
  .piecerow >>> .el-tabs__active-bar{
    background-color: #7986a9;
  }
  .piecerow >>> .el-tabs__item.is-active:hover{
    color: #7986a9;
  }
  .piecerow >>> .el-tabs__nav{
    margin-left: 10px;
  }
  .piecerow >>> .el-tabs__header{
    margin: 0;
  }
</style>
<style>
  .el-table .interleave_row {
    background: #F5F7FA;
  }

  .el-table .success-row {
    background: #FAECD7;
  }
</style>
