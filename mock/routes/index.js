
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
const standardCost = require('./standardCost')
const targetCost = require('./targetCost')

router.post(url.login, function * () {
  this.body = user.login
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
  .post(url.findStandardCostBaseInfo, function * () {
    this.body = standardCost.findStandardCostBaseInfo
  })
  // 基准成本编制说明基础信息保存接口
  .post(url.saveStandardCostBaseInfo, function * () {
    this.body = standardCost.saveStandardCostBaseInfo
  })
  // 基准成本编制说明项目规划指标总体指标基本信息查看详细接口
  .post(url.lookStandardCostProPlanTotalIndexBaseInfo, function * () {
    this.body = standardCost.lookStandardCostProPlanTotalIndexBaseInfo
  })
  // 基准成本编制说明项目规划指标总体指标总体指标查看详细接口
  .post(url.lookStandardCostProPlanTotalIndexInfo, function * () {
    this.body = standardCost.lookStandardCostProPlanTotalIndexInfo
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
  //基准成本编制说明项目规划指标业态面积导出接口
  .post(url.exportCmprotypeAreaForDto, function * () {
    this.body = standardCost.exportCmprotypeAreaForDto
  })
  // 基准成本编制说明项目规划指标业态属性查看详细接口
  .post(url.lookProtypeAttributeDtoList,function * () {
    this.body = standardCost.lookProtypeAttributeDtoList
  })
  // 基准成本编制说明项目规划指标业态属性导出接口
  .post(url.exportProtypeAttributeDtoList,function * () {
    this.body = standardCost.exportProtypeAttributeDtoList
  })
  // 基准成本编制说明业态配置标准层级选项、导出接口
  .post(url.exportProtypeConfigHierarchyDtoList,function * () {
    this.body = standardCost.exportProtypeConfigHierarchyDtoList
  })
  // 基准成本编制说明业态配置标准查看详细接口
  .post(url.lookProductTypeDtoList,function * () {
    this.body = standardCost.lookProductTypeDtoList
  })
  // 基准成本编制说明业态建造标准查看详细接口
  .post(url.lookStandardProtypeBuildList,function * () {
    this.body = standardCost.lookStandardProtypeBuildList
  })
  // 基准成本编制说明成本汇总层级选项、导出接口
  .post(url.exportStandardCollectHierarchy,function * () {
    this.body = standardCost.exportStandardCollectHierarchy
  })
  // 基准成本编制说明成本汇总规划指标查看详细接口
  .post(url.lookStandardCollectPlanInfo,function * () {
    this.body = standardCost.lookStandardCollectPlanInfo
  })
  // 基准成本编制说明成本汇总查看详细接口
  .post(url.lookStandardCollectInfo,function * () {
    this.body = standardCost.lookStandardCollectInfo
  })
  // 基准成本编制说明基本成本非建安成本测算查看详细接口
  .post(url.lookStandardNotBuildInfo,function * () {
    this.body = standardCost.lookStandardNotBuildInfo
  })
  // 基准成本编制说明基本成本建安成本测算地基与基础工程查看详细接口
  .post(url.lookStandardCostBuildBaseEngineerInfo,function * () {
    this.body = standardCost.lookStandardCostBuildBaseEngineerInfo
  })
  // 基准成本编制说明基本成本建安成本测算地基与基础工程导出接口
  .post(url.exportStandardCostBuildBaseEngineerInfo,function * () {
    this.body = standardCost.exportStandardCostBuildBaseEngineerInfo
  })
// -------------targetCost------------
  // 目标成本项目名称查询接口
  .post(url.searchTargetCostCompanyName,function * () {
    this.body = targetCost.targetCostCompanyName
  })
// 目标成本分期查询接口
  .post(url.searchTargetCostStagingInformation,function * () {
    this.body = targetCost.stagingInformation
  })
//目标成本信息
  .post(url.searchTargetCostInformation,function *() {
    this.body = targetCost.targetCostInformation
  })
  // 组团关联接口
  .post(url.targetCostCorrelationCluster,function *() {
    this.body = targetCost.targetCostCorrelationCluster
  })
  // 成功标尺查询接口
  .post(url.searchTargetCostSuccessMetrics,function *() {
    this.body = targetCost.targetCostSuccessMetrics
  })
  // 版本信息基础信息查看查询接口
  .post(url.targetCostBasicVersion,function *() {
    this.body = targetCost.targetCostBasicVersion
  })
  // 项目规划指标总体指标基本信息查看详细接口
  .post(url.examinePlanningOverallIndexBasicIndex,function *() {
    this.body = targetCost.targetCostBasicOverallIndex
  })
  // 目规划指标总体指标主要材料价格（不含税）查看详细接口
  .post(url.examinePlanningOverallIndexMainPriceNo,function *() {
    this.body = targetCost.examinePlanningOverallIndexMainPriceNo
  })
  // 项目规划指标业态面积查看详细接口
  .post(url.examinePlanningOverallIndexFormatArea,function *() {
    this.body = targetCost.examinePlanningOverallIndexFormatArea
  })
  // 目规划指标业态属性查看详细接口
  .post(url.examinePlanningOverallIndexFormatAttribute,function *() {
    this.body = targetCost.examinePlanningOverallIndexFormatAttribute
  })
  // 项目配置规划表查看详细接口
  .post(url.examineProjectConfigurationSchedule,function *() {
    this.body = targetCost.examineProjectConfigurationSchedule
  })
  // 项目特殊事项清单查看详细接口
  .post(url.examineProjectSpecialItemInventory,function *() {
    this.body = targetCost.examineProjectSpecialItemInventory
  })
  // 基准成本编制说明基本成本建安成本测算高层层级选项、导出接口
  .post(url.exportStandardCostBuildHeightHierarchy, function * () {
    this.body = standardCost.exportStandardCostBuildHeightHierarchy
  })
  // 基准成本编制说明基本成本建安成本测算高层查看详细接口
  .post(url.lookStandardCostBuildHeightInfo, function * () {
    this.body = standardCost.lookStandardCostBuildHeightInfo
  })
  // 基准成本编制说明基本成本建安成本测算洋房层级选项接口
  .post(url.getStandardCostBuildBungalowsHierarchy, function * () {
    this.body = standardCost.getStandardCostBuildBungalowsHierarchy
  })
   // 基准成本编制说明基本成本建安成本测算洋房查看详细接口
  .post(url.lookStandardCostBuildBungalowsInfo,function * () {
    this.body = standardCost.lookStandardCostBuildBungalowsInfo
  })
   // 基准成本编制说明基本成本建安成本测算非人防车库层级选项接口
  .post(url.getStandardCostBuildNoneGarageHierarchy,function * () {
    this.body = standardCost.getStandardCostBuildNoneGarageHierarchy
  })
   // 基准成本编制说明基本成本建安成本测算非人防车库查看详细接口
  .post(url.lookStandardCostBuildNoneGarageInfo,function * () {
    this.body = standardCost.lookStandardCostBuildNoneGarageInfo
  })
   // 基准成本编制说明基本成本建安成本测算人防车库层级选项接口
  .post(url.lookStandardCostBuildGarageInfoHierarchy,function * () {
    this.body = standardCost.lookStandardCostBuildGarageInfoHierarchy
  })
   // 基准成本编制说明基本成本建安成本测算人防车库查看详细接口
  .post(url.lookStandardCostBuildGarageInfo,function * () {
    this.body = standardCost.lookStandardCostBuildGarageInfo
  })
   // 基准成本编制说明报表-成本分摊表-财务/管理保存接口
  .post(url.saveStandardCostStatementShareFinance,function * () {
    this.body = standardCost.saveStandardCostStatementShareFinance
  })
   // 基准成本编制说明报表-成本分摊表-财务/管理查看详细接口
  .post(url.lookStandardCostStatementShareFinance,function * () {
    this.body = standardCost.lookStandardCostStatementShareFinance
  })
   // 基准成本编制说明报表-建安合约规划导出接口
  .post(url.exportStandardCostStatementBuildContract,function * () {
    this.body = standardCost.exportStandardCostStatementBuildContract
  })
   // 基准成本编制说明报表-建安合约规划查看详细接口
  .post(url.lookStandardCostStatementBuildContract,function * () {
    this.body = standardCost.lookStandardCostStatementBuildContract
  })
   // 基准成本编制说明数据库-设计费限额保存
  .post(url.saveStandardCostDataBaseLimit,function * () {
    this.body = standardCost.saveStandardCostDataBaseLimit
  })
   // 基准成本编制说明数据库-设计费限额查看详细接口
  .post(url.lookStandardCostDataBaseLimit,function * () {
    this.body = standardCost.lookStandardCostDataBaseLimit
  })
   // 基准成本编制说明数据库-前后期收费数据库前期工程费导出接口
  .post(url.exportStandardCostDataBaseEarlier,function * () {
    this.body = standardCost.exportStandardCostDataBaseEarlier
  })
   // 基准成本编制说明数据库-前后期收费数据库前期工程费查看详细接口
  .post(url.lookStandardCostDataBaseEarlier,function * () {
    this.body = standardCost.lookStandardCostDataBaseEarlier
  })
   // 基准成本编制说明数据库-前后期收费数据库配套设施费导出接口
  .post(url.exportStandardCostDataBaseAncillaryFacility,function * () {
    this.body = standardCost.exportStandardCostDataBaseAncillaryFacility
  })
   // 基准成本编制说明数据库-前后期收费数据库配套设施费查看详细接口
  .post(url.lookStandardCostDataBaseAncillaryFacility,function * () {
    this.body = standardCost.lookStandardCostDataBaseAncillaryFacility
  })
   // 基准成本编制说明数据库-前后期收费数据库基础设施费导出接口
  .post(url.exportStandardCostDataBaseBaseFacility,function * () {
    this.body = standardCost.exportStandardCostDataBaseBaseFacility
  })
   // 基准成本编制说明数据库-前后期收费数据库基础设施费查看详细接口
  .post(url.lookStandardCostDataBaseBaseFacility,function * () {
    this.body = standardCost.lookStandardCostDataBaseBaseFacility
  })
   // 基准成本编制说明数据库-前后期收费数据库工程相关费导出接口
  .post(url.exportStandardCostDataBaseEngineeringCost,function * () {
    this.body = standardCost.exportStandardCostDataBaseEngineeringCost
  })
   // 基准成本编制说明数据库-前后期收费数据库工程相关费查看详细接口
  .post(url.lookStandardCostDataBaseEngineeringCost,function * () {
    this.body = standardCost.lookStandardCostDataBaseEngineeringCost
  })
   // 基准成本编制说明数据库-前后期收费数据库补充导出接口
  .post(url.exportStandardCostDataBaseSupplement,function * () {
    this.body = standardCost.exportStandardCostDataBaseSupplement
  })
   // 基准成本编制说明数据库-前后期收费数据库补充查看详细接口
  .post(url.lookStandardCostDataBaseSupplement,function * () {
    this.body = standardCost.lookStandardCostDataBaseSupplement
  })
   // 基准成本编制说明数据库-特殊事项清单层级选项、导出接口
  .post(url.exportStandardCostDataBaseSpecialHierarchy,function * () {
    this.body = standardCost.exportStandardCostDataBaseSpecialHierarchy
  })
   // 基准成本编制说明数据库-特殊事项清单查看详细接口
  .post(url.lookStandardCostDataBaseSpecialHierarchy,function * () {
    this.body = standardCost.lookStandardCostDataBaseSpecialHierarchy
  })

module.exports = router
