/**
 * 配置所有接口路径
 */
module.exports = {
  // ----------user---------------------
  login: '/api/login',
  user: '/api/user',
  // ----------dashboard----------------
  headlines: '/api/headlines',
  news: '/api/news',
  events: '/api/events',
  // ----------contract-----------------
  findContracts: '/api/findContracts',
  // ----------payment-----------------
  findPayments: '/api/findPayments',
  findPayment: '/api/findPayment',
  // ----------demo---------------------
  getTreeTable: '/api/getTreeTable',
  // ----------specialItem---------------------
  getSpecialItem: '/api/getSpecialItem',
  saveSpecialItem: '/api/saveSpecialItem',
  // ------------investmentCost-------------
  getHomePage: '/api/getHomePage',
  costVersion: '/api/costVersion',
  updateCostVersion: '/api/updateCostVersion',
  addCostVersion: '/api/updateCostVersion',
  costVersionSummary: '/api/costVersionSummary',
  deleteHomePage: '/api/deleteHomePage',
  costBase: '/api/costBase',
  addCostBase: '/api/addCostBase',
  updateCostBase: '/api/updateCostBase',
  costSpecialMatter: '/api/costSpecialMatter',
  addCostSpecialMatter: '/api/addCostSpecialMatter',
  updateCostSpecialMatter: '/api/updateCostSpecialMatter',
  deleteCostSpecialMatter: '/api/deleteCostSpecialMatter',
  costs: '/api/costs',
  updateCost: '/api/updateCost',
  addCost: '/api/addCost',
  exportCost: '/api/exportCost',
  costMaterialAllocations: '/api/costMaterialAllocations',
  updateCostMaterialAllocation: '/api/updateCostMaterialAllocation',
  addCostMaterialAllocation: '/api/addCostMaterialAllocation',
  costFinancialApportionment: '/api/costFinancialApportionment',
  costProjectConfiguration: '/api/costProjectConfiguration',
  addCostProjectConfiguration: '/api/addCostProjectConfiguration',
  updateCostProjectConfiguration: '/api/updateCostProjectConfiguration',
  costLimitCoefficient: '/api/costLimitCoefficient',
  updateCostLimitCoefficient: '/api/updateCostLimitCoefficient',
  exportCostLimitCoefficient: '/api/exportCostLimitCoefficient',
  importCostLimitCoefficient: '/api/importCostLimitCoefficient',
  // ----------standardCost---------------------
  findStandardCost: '/api/findStandardCost', // 基准成本查询接口
  deleteStandardCost: '/api/deleteStandardCost', // 基准成本删除接口
  findStandardCostBaseInfo: '/api/findStandardCostBaseInfo', // 基准成本编制说明基础信息查询接口
  saveStandardCostBaseInfo: '/api/saveStandardCostBaseInfo', // 基准成本编制说明基础信息保存接口
  lookStandardCostProPlanTotalIndexBaseInfo: '/api/standardCostProPlanTotalIndexBaseInfo', // 基准成本编制说明项目规划指标总体指标基本信息查看详细接口
  lookStandardCostProPlanTotalIndexInfo: '/api/standardCostProPlanTotalIndexInfo', // 基准成本编制说明项目规划指标总体指标总体指标查看详细接口
  lookStandardCostProPlanTotalIndexMainPrice: '/api/standardCostProPlanTotalIndexMainPrice', // 基准成本编制说明项目规划指标总体指标主要材料价格（不含税）查看详细接口
  lookStandardMunicipalEarthDto: '/api/lookStandardMunicipalEarthDto', // 基准成本编制说明项目规划指标总体指标市政输入条件查看详细接口
  lookStandardViewIndicatorDto: '/api/lookStandardViewIndicatorDto', // 基准成本编制说明项目规划指标总体指标景观指标查看详细接口
  lookStandardEarthworkDto: '/api/lookStandardEarthworkDto', // 基准成本编制说明项目规划指标总体指标土方平衡查看详细接口
  lookCmprotypeAreaForDto: '/api/lookCmprotypeAreaForDto', // 基准成本编制说明项目规划指标业态面积查看详细接口
  exportCmprotypeAreaForDto: '/api/exportCmprotypeAreaForDto', // 基准成本编制说明项目规划指标业态面积导出接口
  lookProtypeAttributeDtoList: '/api/lookProtypeAttributeDtoList', // 基准成本编制说明项目规划指标业态属性查看详细接口
  exportProtypeAttributeDtoList: '/api/exportProtypeAttributeDtoList', // 基准成本编制说明项目规划指标业态属性导出接口
  exportProtypeConfigHierarchyDtoList: '/api/exportProtypeConfigHierarchyDtoList', // 基准成本编制说明业态配置标准层级选项、导出接口
  lookProductTypeDtoList: '/api/lookProductTypeDtoList', // 基准成本编制说明业态配置标准查看详细接口
  lookStandardProtypeBuildList: '/api/standardProtypeBuildList', // 基准成本编制说明业态建造标准查看详细接口
  exportStandardCollectHierarchy: '/api/exportStandardCollectHierarchy', // 基准成本编制说明成本汇总层级选项、导出接口
  lookStandardCollectPlanInfo: '/api/lookStandardCollectPlanInfo', // 基准成本编制说明成本汇总规划指标查看详细接口
  lookStandardCollectInfo: '/api/lookStandardCollectInfo', // 基准成本编制说明成本汇总查看详细接口
  lookStandardNotBuildInfo: '/api/lookStandardNotBuildInfo', // 基准成本编制说明基本成本非建安成本测算查看详细接口
  lookStandardCostBuildBaseEngineerInfo: '/api/lookStandardCostBuildBaseEngineerInfo', // 基准成本编制说明基本成本建安成本测算地基与基础工程查看详细接口
  exportStandardCostBuildBaseEngineerInfo: '/api/exportStandardCostBuildBaseEngineerInfo', // 基准成本编制说明基本成本建安成本测算地基与基础工程导出接口
 // -----------------targetCost---------------
  searchTargetCostCompanyName: '/api/searchTargetCostCompanyName', // 目标成本项目名称查询接口
  searchTargetCostStagingInformation: '/api/searchTargetCostStagingInformation', // 目标成本分期查询接口
  searchTargetCostInformation: '/api/searchTargetCostInformation', // 目标成本搜索按钮查询接口
  addTargetCostVersion: '/api/addTargetCostVersion', // 目标成本版本新增接口
  targetCostCorrelationCluster: '/api/targetCostCorrelationCluster', // 目标成本关联组团接口
  searchTargetCostSuccessMetrics: '/api/searchTargetCostSuccessMetrics', // 目标成本成功标尺查询接口
  targetCostBasicVersion: '/api/targetCostSuccessMetrics', // 基础成本版本信息
  examinePlanningOverallIndexBasicIndex: '/api/examinePlanningOverallIndexBasicIndex', // 项目规划指标总体指标基本信息查看详细接口
  examinePlanningOverallIndexMainPriceNo: '/api/examinePlanningOverallIndexMainPriceNo', // 目规划指标总体指标主要材料价格（不含税）查看详细接口
  examinePlanningOverallIndexFormatArea: '/api/examinePlanningOverallIndexFormatArea', // 项目规划指标业态面积查看详细接口
  examinePlanningOverallIndexFormatAttribute: '/api/examinePlanningOverallIndexFormatArea', // 目规划指标业态属性查看详细接口
  examineProjectConfigurationSchedule: '/api/examineProjectConfigurationSchedule', // 项目配置规划表查看详细接口
  examineProjectSpecialItemInventory: '/api/examineProjectSpecialItemInventory', // 项目特殊事项清单查看详细接口
  exportStandardCostBuildHeightHierarchy: '/api/exportStandardCostBuildHeightHierarchy', // 基准成本编制说明基本成本建安成本测算高层层级选项、导出接口
  lookStandardCostBuildHeightInfo: '/api/lookStandardCostBuildHeightInfo', // 基准成本编制说明基本成本建安成本测算高层查看详细接口
  getStandardCostBuildBungalowsHierarchy: '/api/getStandardCostBuildBungalowsHierarchy', // 基准成本编制说明基本成本建安成本测算洋房层级选项接口
  lookStandardCostBuildBungalowsInfo: '/api/lookStandardCostBuildBungalowsInfo', // 基准成本编制说明基本成本建安成本测算洋房查看详细接口
  getStandardCostBuildNoneGarageHierarchy: '/api/getStandardCostBuildNoneGarageHierarchy', // 基准成本编制说明基本成本建安成本测算非人防车库层级选项接口
  lookStandardCostBuildNoneGarageInfo: '/api/lookStandardCostBuildNoneGarageInfo', // 基准成本编制说明基本成本建安成本测算非人防车库查看详细接口
  lookStandardCostBuildGarageInfoHierarchy: '/api/lookStandardCostBuildGarageInfoHierarchy', // 基准成本编制说明基本成本建安成本测算人防车库层级选项接口
  lookStandardCostBuildGarageInfo: '/api/lookStandardCostBuildGarageInfo', // 基准成本编制说明基本成本建安成本测算人防车库查看详细接口
  saveStandardCostStatementShareFinance: '/api/saveStandardCostStatementShareFinance', // 基准成本编制说明报表-成本分摊表-财务/管理保存接口
  lookStandardCostStatementShareFinance: '/api/lookStandardCostStatementShareFinance', // 基准成本编制说明报表-成本分摊表-财务/管理查看详细接口
  exportStandardCostStatementBuildContract: '/api/exportStandardCostStatementBuildContract', // 基准成本编制说明报表-建安合约规划导出接口
  lookStandardCostStatementBuildContract: '/api/lookStandardCostStatementBuildContract', // 基准成本编制说明报表-建安合约规划查看详细接口
  saveStandardCostDataBaseLimit: '/api/saveStandardCostDataBaseLimit', // 基准成本编制说明数据库-设计费限额保存
  lookStandardCostDataBaseLimit: '/api/lookStandardCostDataBaseLimit', // 基准成本编制说明数据库-设计费限额查看详细接口
  exportStandardCostDataBaseEarlier: '/api/exportStandardCostDataBaseEarlier', // 基准成本编制说明数据库-前后期收费数据库前期工程费导出接口
  lookStandardCostDataBaseEarlier: '/api/lookStandardCostDataBaseEarlier', // 基准成本编制说明数据库-前后期收费数据库前期工程费查看详细接口
  exportStandardCostDataBaseAncillaryFacility: '/api/exportStandardCostDataBaseAncillaryFacility', // 基准成本编制说明数据库-前后期收费数据库配套设施费导出接口
  lookStandardCostDataBaseAncillaryFacility: '/api/lookStandardCostDataBaseAncillaryFacility', // 基准成本编制说明数据库-前后期收费数据库配套设施费查看详细接口
  exportStandardCostDataBaseBaseFacility: '/api/exportStandardCostDataBaseBaseFacility', // 基准成本编制说明数据库-前后期收费数据库基础设施费导出接口
  lookStandardCostDataBaseBaseFacility: '/api/lookStandardCostDataBaseBaseFacility', // 基准成本编制说明数据库-前后期收费数据库基础设施费查看详细接口
  exportStandardCostDataBaseEngineeringCost: '/api/exportStandardCostDataBaseEngineeringCost', // 基准成本编制说明数据库-前后期收费数据库工程相关费导出接口
  lookStandardCostDataBaseEngineeringCost: '/api/lookStandardCostDataBaseEngineeringCost', // 基准成本编制说明数据库-前后期收费数据库工程相关费查看详细接口
  exportStandardCostDataBaseSupplement: '/api/exportStandardCostDataBaseSupplement', // 基准成本编制说明数据库-前后期收费数据库补充导出接口
  lookStandardCostDataBaseSupplement: '/api/lookStandardCostDataBaseSupplement', // 基准成本编制说明数据库-前后期收费数据库补充查看详细接口
  exportStandardCostDataBaseSpecialHierarchy: '/api/exportStandardCostDataBaseSpecialHierarchy', // 基准成本编制说明数据库-特殊事项清单层级选项、导出接口
  lookStandardCostDataBaseSpecialHierarchy: '/api/lookStandardCostDataBaseSpecialHierarchy' // 基准成本编制说明数据库-特殊事项清单查看详细接口
}
