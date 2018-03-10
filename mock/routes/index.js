/**
 * 路由配置模块
 * @module routes
 */

const router = require('koa-router')()
const _ = require('lodash')
const url = require('../../api/url')

const user = require('./user')
const dashboard = require('./dashboard')
const contract = require('./contract')
const payment = require('./payment')
const treeTable = require('./treeTable')
const getSpecialItem = require('./specialItem')
const investmentCost = require('./investmentCost')
const investmentVersion = require('./investmentVersion')
const standardCost = require('./standardCost')
const targetCost = require('./targetCost')
const indicator = require('./indicator')

router.post(url.login, function * () {
  this.body = user.login
})
  // 目标成本总体指标treeTable数据
  .post(url.getPlanningTreeTable,function *() {
    this.body = indicator.planingData
  })
  .post(url.getSpecialItem, function * () {
    this.body = getSpecialItem.data
  })
  .post(url.saveSpecialItem, function * () {
    this.body = getSpecialItem.data
  })
  .post(url.getTreeTable, function * () {
    this.body = treeTable.data
  })
  .post(url.user, function * () {
    this.body = user.getUserInfo
  })
  // -------------dashboard------------
  .post(url.headlines, function * () {
    this.body = dashboard.headlines
  })
  .post(url.news, function * () {
    this.body = dashboard.news
  })
  .post(url.events, function * () {
    this.body = dashboard.events
  })
  // -------------contract------------
  .post(url.findContracts, function * () {
    this.body = contract.contracts
  })
  .post(url.jumpContract, function * () {
    this.body = contract.contract
  })
  .post(url.obtainPayment, function * () {
    this.body = contract.contractPayment
  })
  // -------------payment------------
  .post(url.findPayments, function * () {
    this.body = payment.payments
  })
  .post(url.findPayment, function * () {
    this.body = payment.payment
  })
  // ------------investmentCost-------------
  .post(url.getHomePage, function * () {
    this.body = investmentCost.homePageData
  })
  .post(url.saveVersion, function * () {
    this.body = investmentVersion.saveVersion
  })
  .post(url.costVersion, function * () {
    this.body = investmentCost.investmentVersion
  })
  .post(url.updateCostVersion, function * () {
    this.body = investmentCost.updateOrAddInvestmentVersion
  })
  .post(url.costVersionSummary, function * () {
    this.body = investmentCost.investmentVersionSummary
  })
  .post(url.deleteHomePage, function * () {
    this.body = investmentCost.deleteHomePage
  })
  .post(url.costBase, function * () {
    this.body = investmentCost.costBase
  })
  .post(url.addCostBase, function * () {
    this.body = investmentCost.costBaseResult
  })
  .post(url.updateCostBase, function * () {
    this.body = investmentCost.costBaseResult
  })
  .post(url.costSpecialMatter, function * () {
    this.body = investmentCost.costSpecialMatter
  })
  .post(url.addCostSpecialMatter, function * () {
    this.body = investmentCost.costSpecialMatterResult
  })
  .post(url.updateCostSpecialMatter, function * () {
    this.body = investmentCost.costSpecialMatterResult
  })
  .post(url.deleteCostSpecialMatter, function * () {
    this.body = investmentCost.costSpecialMatterResult
  })
  .post(url.costs, function * () {
    this.body = investmentCost.costs
  })
  .post(url.updateCost, function * () {
    this.body = investmentCost.costResult
  })
  .post(url.addCost, function * () {
    this.body = investmentCost.costResult
  })
  .post(url.exportCost, function * () {
    this.body = investmentCost.costResult
  })
  .post(url.costMaterialAllocations, function * () {
    this.body = investmentCost.costMaterialAllocations
  })
  .post(url.updateCostMaterialAllocation, function * () {
    this.body = investmentCost.costResult
  })
  .post(url.addCostMaterialAllocation, function * () {
    this.body = investmentCost.costResult
  })
  .post(url.costFinancialApportionment, function * () {
    this.body = investmentCost.costFinancialApportionment
  })
  .post(url.costProjectConfiguration, function * () {
    this.body = investmentCost.costProjectConfiguration
  })
  .post(url.addCostProjectConfiguration, function * () {
    this.body = investmentCost.costProjectConfigurationResult
  })
  .post(url.updateCostProjectConfiguration, function * () {
    this.body = investmentCost.costProjectConfigurationResult
  })
  .post(url.costLimitCoefficient, function * () {
    this.body = investmentCost.costLimitCoefficient
  })
  .post(url.updateCostLimitCoefficient, function * () {
    this.body = investmentCost.costLimitCoefficientResult
  })
  .post(url.exportCostLimitCoefficient, function * () {
    this.body = investmentCost.costLimitCoefficientResult
  })
  .post(url.importCostLimitCoefficient, function * () {
    this.body = investmentCost.importCostLimitCoefficient
  })
  // 投模成本版本信息详情
  .post(url.lookInvestmentVersion, function * () {
    this.body = investmentCost.lookInvestmentVersion
  })
  // 投模基本信息
  .post(url.baseData, function * () {
    this.body = investmentCost.baseData
  })
  // 投模面积指标查询
  .post(url.investmentAreaIndicator, function * () {
    this.body = investmentCost.investmentAreaIndicator
  })
  // 投模基本信息保存
  .post(url.saveBaseData, function * () {
    this.body = investmentCost.saveBaseData
  })
  // 投模面积指标导出
  .post(url.exportInveAreaIndicator, function * () {
    this.body = investmentCost.exportInveAreaIndicator
  })
  // 投模面积指标保存
  .post(url.saveInveAreaIndicator, function * () {
    this.body = investmentCost.saveInveAreaIndicator
  })
  // 投模成本汇总计算并保存
  .post(url.calculateAndSave, function * () {
    this.body = investmentCost.calculateAndSave
  })
  // 投模成本管理口径分摊查询
  .post(url.costManageApportionment, function * () {
    this.body = investmentCost.costManageApportionment
  })
// -------------standardCost------------
  // 基准成本查询接口
  .post(url.findStandardCost, function * () {
    this.body = standardCost.findStandardCost
  })
  // 基准成本删除接口
  .post(url.deleteStandardCost, function * () {
    this.body = standardCost.deleteStandardCost
  })
  // 基准成本编制说明基础信息查询接口
  .post(url.findStandardCostBase, function * () {
    this.body = standardCost.findStandardCostBase
  })
  // 基准成本编制说明基础信息保存接口
  .post(url.saveStandardCostBase, function * () {
    this.body = standardCost.saveStandardCostBase
  })
  // 基准成本编制说明项目规划指标总体指标基本信息查看详细接口
  .post(url.lookStandardCostProPlanTotalIndexBase, function * () {
    this.body = standardCost.lookStandardCostProPlanTotalIndexBase
  })
  // 基准成本编制说明项目规划指标总体指标总体指标查看详细接口
  .post(url.lookStandardCostProPlanTotalIndex, function * () {
    this.body = standardCost.lookStandardCostProPlanTotalIndex
  })
  // 基准成本编制说明项目规划指标总体指标主要材料价格
  .post(url.lookStandardCostProPlanTotalIndexMainPrice, function * () {
    this.body = standardCost.lookStandardCostProPlanTotalIndexMainPrice
  })
  // 基准成本编制说明项目规划指标总体指标市政输入条件查看详细接口
  .post(url.lookStandardMunicipalEarthDto, function * () {
    this.body = standardCost.lookStandardMunicipalEarthDto
  })
  // 基准成本编制说明项目规划指标总体指标景观指标查看详细接口
  .post(url.lookStandardViewIndicatorDto, function * () {
    this.body = standardCost.lookStandardViewIndicatorDto
  })
  // 基准成本编制说明项目规划指标总体指标土方平衡查看详细接口
  .post(url.lookStandardEarthworkDto, function * () {
    this.body = standardCost.lookStandardEarthworkDto
  })
  // 基准成本编制说明项目规划指标业态面积查看详细接口
  .post(url.lookCmprotypeAreaForDto, function * () {
    this.body = standardCost.lookCmprotypeAreaForDto
  })
  // 基准成本编制说明项目规划指标业态面积导出接口
  .post(url.exportCmprotypeAreaForDto, function * () {
    this.body = standardCost.exportCmprotypeAreaForDto
  })
  // 基准成本编制说明项目规划指标业态属性查看详细接口
  .post(url.lookProtypeAttributeDto, function * () {
    this.body = standardCost.lookProtypeAttributeDto
  })
  // 基准成本编制说明项目规划指标业态属性导出接口
  .post(url.exportProtypeAttributeDto, function * () {
    this.body = standardCost.exportProtypeAttributeDto
  })
  // 基准成本编制说明业态配置标准层级选项、导出接口
  .post(url.exportProtypeConfigHierarchyDto, function * () {
    this.body = standardCost.exportProtypeConfigHierarchyDto
  })
  // 基准成本编制说明业态配置标准查看详细接口
  .post(url.lookProductTypeDto, function * () {
    this.body = standardCost.lookProductTypeDto
  })
  // 基准成本编制说明业态建造标准查看详细接口
  .post(url.lookStandardProtypeBuild, function * () {
    this.body = standardCost.lookStandardProtypeBuild
  })
  // 基准成本编制说明成本汇总层级选项、导出接口
  .post(url.exportStandardCollectHierarchy, function * () {
    this.body = standardCost.exportStandardCollectHierarchy
  })
  // 基准成本编制说明成本汇总规划指标查看详细接口
  .post(url.lookStandardCollectPlan, function * () {
    this.body = standardCost.lookStandardCollectPlan
  })
  // 基准成本编制说明成本汇总查看详细接口
  .post(url.lookStandardCollect, function * () {
    this.body = standardCost.lookStandardCollect
  })
  // 基准成本编制说明基本成本非建安成本测算查看详细接口
  .post(url.lookStandardNotBuild, function * () {
    this.body = standardCost.lookStandardNotBuild
  })
  // 基准成本编制说明基本成本建安成本测算地基与基础工程查看详细接口
  .post(url.lookStandardCostBuildBaseEngineer, function * () {
    this.body = standardCost.lookStandardCostBuildBaseEngineer
  })
  // 基准成本编制说明基本成本建安成本测算地基与基础工程导出接口
  .post(url.exportStandardCostBuildBaseEngineer, function * () {
    this.body = standardCost.exportStandardCostBuildBaseEngineer
  })
  // 基准成本编制说明基本成本建安成本测算高层层级选项、导出接口
  .post(url.exportStandardCostBuildHeightHierarchy, function * () {
    this.body = standardCost.exportStandardCostBuildHeightHierarchy
  })
  // 基准成本编制说明基本成本建安成本测算高层查看详细接口
  .post(url.lookStandardCostBuildHeight, function * () {
    this.body = standardCost.lookStandardCostBuildHeight
  })
  // 基准成本编制说明基本成本建安成本测算洋房层级选项接口
  .post(url.getStandardCostBuildBungalowsHierarchy, function * () {
    this.body = standardCost.getStandardCostBuildBungalowsHierarchy
  })
  // 基准成本编制说明基本成本建安成本测算洋房查看详细接口
  .post(url.lookStandardCostBuildBungalows, function * () {
    this.body = standardCost.lookStandardCostBuildBungalows
  })
  // 基准成本编制说明基本成本建安成本测算非人防车库层级选项接口
  .post(url.getStandardCostBuildNoneGarageHierarchy, function * () {
    this.body = standardCost.getStandardCostBuildNoneGarageHierarchy
  })
  // 基准成本编制说明基本成本建安成本测算非人防车库查看详细接口
  .post(url.lookStandardCostBuildNoneGarage, function * () {
    this.body = standardCost.lookStandardCostBuildNoneGarage
  })
  // 基准成本编制说明基本成本建安成本测算人防车库层级选项接口
  .post(url.lookStandardCostBuildGarageHierarchy, function * () {
    this.body = standardCost.lookStandardCostBuildGarageHierarchy
  })
  // 基准成本编制说明基本成本建安成本测算人防车库查看详细接口
  .post(url.lookStandardCostBuildGarage, function * () {
    this.body = standardCost.lookStandardCostBuildGarage
  })
  // 基准成本编制说明报表-成本分摊表-财务/管理保存接口
  .post(url.saveStandardCostStatementShareFinance, function * () {
    this.body = standardCost.saveStandardCostStatementShareFinance
  })
  // 基准成本编制说明报表-成本分摊表-财务/管理查看详细接口
  .post(url.lookStandardCostStatementShareFinance, function * () {
    this.body = standardCost.lookStandardCostStatementShareFinance
  })
  // 基准成本编制说明报表-建安合约规划导出接口
  .post(url.exportStandardCostStatementBuildContract, function * () {
    this.body = standardCost.exportStandardCostStatementBuildContract
  })
  // 基准成本编制说明报表-建安合约规划查看详细接口
  .post(url.lookStandardCostStatementBuildContract, function * () {
    this.body = standardCost.lookStandardCostStatementBuildContract
  })
  // 基准成本编制说明数据库-设计费限额保存
  .post(url.saveStandardCostDataBaseLimit, function * () {
    this.body = standardCost.saveStandardCostDataBaseLimit
  })
  // 基准成本编制说明数据库-设计费限额查看详细接口
  .post(url.lookStandardCostDataBaseLimit, function * () {
    this.body = standardCost.lookStandardCostDataBaseLimit
  })
  // 基准成本编制说明数据库-前后期收费数据库前期工程费导出接口
  .post(url.exportStandardCostDataBaseEarlier, function * () {
    this.body = standardCost.exportStandardCostDataBaseEarlier
  })
  // 基准成本编制说明数据库-前后期收费数据库前期工程费查看详细接口
  .post(url.lookStandardCostDataBaseEarlier, function * () {
    this.body = standardCost.lookStandardCostDataBaseEarlier
  })
  // 基准成本编制说明数据库-前后期收费数据库配套设施费导出接口
  .post(url.exportStandardCostDataBaseAncillaryFacility, function * () {
    this.body = standardCost.exportStandardCostDataBaseAncillaryFacility
  })
  // 基准成本编制说明数据库-前后期收费数据库配套设施费查看详细接口
  .post(url.lookStandardCostDataBaseAncillaryFacility, function * () {
    this.body = standardCost.lookStandardCostDataBaseAncillaryFacility
  })
  // 基准成本编制说明数据库-前后期收费数据库基础设施费导出接口
  .post(url.exportStandardCostDataBaseBaseFacility, function * () {
    this.body = standardCost.exportStandardCostDataBaseBaseFacility
  })
  // 基准成本编制说明数据库-前后期收费数据库基础设施费查看详细接口
  .post(url.lookStandardCostDataBaseBaseFacility, function * () {
    this.body = standardCost.lookStandardCostDataBaseBaseFacility
  })
  // 基准成本编制说明数据库-前后期收费数据库工程相关费导出接口
  .post(url.exportStandardCostDataBaseEngineeringCost, function * () {
    this.body = standardCost.exportStandardCostDataBaseEngineeringCost
  })
  // 基准成本编制说明数据库-前后期收费数据库工程相关费查看详细接口
  .post(url.lookStandardCostDataEngineeringCost, function * () {
    this.body = standardCost.lookStandardCostDataEngineeringCost
  })
  // 基准成本编制说明数据库-前后期收费数据库补充导出接口
  .post(url.exportStandardCostDataBaseSupplement, function * () {
    this.body = standardCost.exportStandardCostDataBaseSupplement
  })
  // 基准成本编制说明数据库-前后期收费数据库补充查看详细接口
  .post(url.lookStandardCostDataBaseSupplement, function * () {
    this.body = standardCost.lookStandardCostDataBaseSupplement
  })
  // 基准成本编制说明数据库-特殊事项清单层级选项、导出接口
  .post(url.exportStandardCostDataBaseSpecialHierarchy, function * () {
    this.body = standardCost.exportStandardCostDataBaseSpecialHierarchy
  })
  // 基准成本编制说明数据库-特殊事项清单查看详细接口
  .post(url.lookStandardCostDataBaseSpecialList, function * () {
    this.body = standardCost.lookStandardCostDataBaseSpecialList
  })
  // 基准成本编制说明数据库-特殊事项清单保存接口
  .post(url.saveStandardCostDataBaseSpecialList, function * () {
    this.body = standardCost.saveStandardCostDataBaseSpecialList
  })
// -------------targetCost------------
  // 目标成本项目名称查询接口
  .post(url.searchTargetCostCompanyName, function * () {
    this.body = targetCost.targetCostCompanyName
  })
// 目标成本分期查询接口
  .post(url.searchTargetCostStagingInformation, function * () {
    this.body = targetCost.stagingInformation
  })
// 目标成本信息
  .post(url.searchTargetCostInformation, function * () {
    this.body = targetCost.targetCostInformation
  })
  // 组团关联接口
  .post(url.targetCostCorrelationCluster, function * () {
    this.body = targetCost.targetCostCorrelationCluster
  })
  // 成功标尺查询接口
  .post(url.searchTargetCostSuccessMetrics, function * () {
    this.body = targetCost.targetCostSuccessMetrics
  })
  // 目标成本关键指标变化查询接口
  .post(url.searchTargetCostKeyIndex, function * () {
    this.body = targetCost.searchTargetCostKeyIndex
  })
  // 版本信息基础信息新增接口
  .post(url.addTargetCostVersion, function * () {
    this.body = targetCost.addTargetCostVersion
  })
  // 版本信息基础信息查看查询接口
  .post(url.targetCostBasicVersion, function * () {
    this.body = targetCost.targetCostBasicVersion
  })
  // 版本信息楼栋信息查看详细接口
  .post(url.examineBuildingBasicVersion, function * () {
    this.body = targetCost.examineBuildingBasicVersion
  })
  // 项目规划指标总体指标基本信息查看详细接口
  .post(url.examinePlanningOverallIndexBasicIndex, function * () {
    this.body = targetCost.targetCostBasicOverallIndex
  })
  // 目规划指标总体指标主要材料价格（不含税）查看详细接口
  .post(url.examinePlanningOverallIndexMainPriceNo, function * () {
    this.body = targetCost.examinePlanningOverallIndexMainPriceNo
  })
  // 项目规划指标业态面积查看详细接口
  .post(url.examinePlanningOverallIndexFormatArea,function *() {
    this.body = indicator.areaTreeTable
  })
  // 目规划指标业态属性查看详细接口
  .post(url.examinePlanningOverallIndexFormatAttribute,function *() {
    this.body = indicator.attributeTreeTable
  })
  // 项目配置规划表查看详细接口
  .post(url.examineProjectConfigurationSchedule, function * () {
    this.body = targetCost.examineProjectConfigurationSchedule
  })
  // 项目特殊事项清单查看详细接口
  .post(url.examineProjectSpecialItemInventory, function * () {
    this.body = targetCost.examineProjectSpecialItemInventory
  })
  // 项目规划指标总体指标基本信息、市政输入条件、景观指标、土方平衡查看详细接口
  .post(url.examinePlanningOverallIndex, function * () {
    this.body = targetCost.examinePlanningOverallIndex
  })
  // 目标成本成本汇总表查看详细接口
  .post(url.examineTargetCostSummary, function * () {
    this.body = targetCost.examineTargetCostSummary
  })
  // 明目标成本成本测算调整费项查看详细接口
  .post(url.examineCostsCalculateAdjust, function * () {
    this.body = targetCost.examineCostsCalculateAdjust
  })
  // 目标成本成本测算调整合约规划查看详细、组团及楼栋分摊表查看详细接口
  .post(url.examineContractCalculateAdjust, function * () {
    this.body = targetCost.examineContractCalculateAdjust
  })
  // 目标成本成本测算调整测算查看详细接口

  .post(url.examineCalculateAdjust, function * () {
    this.body = targetCost.examineCalculateAdjust
  })
  // 非建安成本测算查看详细接口
  .post(url.examineNoneFabricationCalculateAdjust, function * () {
    this.body = targetCost.examineNoneFabricationCalculateAdjust
  })
  // 建安成本测算地基与基础工程、成本测算高层，非人防车库，人防车库层级选项，人防车库查看、成本测算洋房层级选项、成本测算洋房查看详细接口
  .post(url.examineFabricationBasicsCalculate, function * () {
    this.body = targetCost.examineFabricationBasicsCalculate
  })
  // 合约规划表中合约规划分解查看详细接口
  .post(url.examineContractDisassemble, function * () {
    this.body = targetCost.examineContractDisassemble
  })
  // 财务口径分摊查看详细、管理口径分摊查看详细接口
  .post(url.examineFinanceApportion, function * () {
    this.body = targetCost.examineFinanceApportion
  })
  // 组团及楼栋分摊组团表查看详细接口
  .post(url.examineGroupBuildingApportion, function * () {
    this.body = targetCost.examineGroupBuildingApportion
  })
  // 组团及楼栋分摊组团表查看详细接口
  .post(url.examineGroupBuildingTable, function * () {
    this.body = targetCost.examineGroupBuildingTable
  })
  // 项目成本标尺项目成功标尺图表接口
  .post(url.examineSuccessMetricsDiagram, function * () {
    this.body = targetCost.examineSuccessMetricsDiagram
  })
  // 调整分析开发成本调整原因查看详细接口
  .post(url.examineCostAdjustmentReason, function * () {
    this.body = targetCost.examineCostAdjustmentReason
  })
  // 调整分析费项成本变化情况查看详细接口
  .post(url.examineCostAdjustmentChange, function * () {
    this.body = targetCost.examineCostAdjustmentChange
  })
  // 调整分析面积规划指标变化情况查看详细/导出接口
  .post(url.examineCostAdjustmentAreaChange, function * () {
    this.body = targetCost.examineCostAdjustmentAreaChange
  })
  // 审核要点设计费限额查看详细接口
  .post(url.examineApproveDesignQuota, function * () {
    this.body = targetCost.examineApproveDesignQuota
  })
  // 审核要点负合约规划查看详细接口
  .post(url.examineApproveNegativeContract, function * () {
    this.body = targetCost.examineApproveNegativeContract
  })
  // 审核要点目标成本特征图表查看详细接口（2个：含土地费，不含土地费）
  .post(url.examineApproveTargetCharacteristic, function * () {
    this.body = targetCost.examineApproveTargetCharacteristic
  })
  // 审核要点目标成本含量及价格对比图表查看详细接口
  .post(url.examineApproveTargetPriceComparison, function * () {
    this.body = targetCost.examineApproveTargetPriceComparison
  })
  .post(url.examineConstructionStandard,function *() {
    this.body = targetCost.constructionStandard
  })
module.exports = router
