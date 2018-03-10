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
  // findContracts: 'http://10.5.101.163:51001/admin/api/contract/selectCmContract',
  // findContracts: 'http://10.5.101.163:51001/admin/api/contract/selectVoList', // 预估变更列表查询
  // findContracts: 'http://10.5.108.91:51001/admin/api/contract/selectCmContractInfo', // 合同详情
  jumpContract: '/api/jumpContract',
  // ----------change-----------------
  findChanges: '/api/findChanges',
  obtainPayment: '/api/obtainPayment',
  // ----------payment-----------------
  findPayments: '/api/findPayments',
  findPayment: '/api/findPayment',
  // ----------demo---------------------
  getTreeTable: '/api/getTreeTable',
  // ----------specialItem---------------------
  getSpecialItem: '/api/getSpecialItem',
  getPlanningTreeTable: '/api/getPlanningTreeTable',
  saveSpecialItem: '/api/saveSpecialItem',
  // ------------investmentVersion-------------
  saveVersion: '/api/saveVersion',
  lookInvestmentVersion: '/api/lookInvestmentVersion',
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
  costFinancialApportionment: '/api/costFinancialApportionment', // 投模成本财务口径分摊查询接口
  costManageApportionment: '/api/costManageApportionment', // 投模成本管理口径分摊查询
  costProjectConfiguration: '/api/costProjectConfiguration',
  addCostProjectConfiguration: '/api/addCostProjectConfiguration',
  updateCostProjectConfiguration: '/api/updateCostProjectConfiguration',
  costLimitCoefficient: '/api/costLimitCoefficient',
  updateCostLimitCoefficient: '/api/updateCostLimitCoefficient',
  exportCostLimitCoefficient: '/api/exportCostLimitCoefficient',
  importCostLimitCoefficient: '/api/importCostLimitCoefficient',
  baseData: '/api/baseData', // 投模基本信息查询
  investmentAreaIndicator: '/api/investmentAreaIndicator', // 投模面积指标查询
  saveBaseData: '/api/saveBaseData', // 投模基本信息保存
  exportInveAreaIndicator: '/api/exportInveAreaIndicator', // 投模面积指标导出
  saveInveAreaIndicator: '/api/saveInveAreaIndicator', // 投模面积指标保存
  calculateAndSave: '/api/calculateAndSave', // 投模成本汇总计算并保存
  // ----------standardCost---------------------
  findStandardCost: '/api/findStandardCost', // 基准成本查询接口
  deleteStandardCost: '/api/deleteStandardCost', // 基准成本删除接口
  findStandardCostBase: '/api/findStandardCostBase', // 基准成本编制说明基础信息查询接口
  saveStandardCostBase: '/api/saveStandardCostBase', // 基准成本编制说明基础信息保存接口
  lookStandardCostProPlanTotalIndexBase: '/api/standardCostProPlanTotalIndexBase', // 基准成本编制说明项目规划指标总体指标基本信息查看详细接口
  lookStandardCostProPlanTotalIndex: '/api/standardCostProPlanTotalIndex', // 基准成本编制说明项目规划指标总体指标总体指标查看详细接口
  lookStandardCostProPlanTotalIndexMainPrice: '/api/standardCostProPlanTotalIndexMainPrice', // 基准成本编制说明项目规划指标总体指标主要材料价格（不含税）查看详细接口
  lookStandardMunicipalEarthDto: '/api/lookStandardMunicipalEarthDto', // 基准成本编制说明项目规划指标总体指标市政输入条件查看详细接口
  lookStandardViewIndicatorDto: '/api/lookStandardViewIndicatorDto', // 基准成本编制说明项目规划指标总体指标景观指标查看详细接口
  lookStandardEarthworkDto: '/api/lookStandardEarthworkDto', // 基准成本编制说明项目规划指标总体指标土方平衡查看详细接口
  lookCmprotypeAreaForDto: '/api/lookCmprotypeAreaForDto', // 基准成本编制说明项目规划指标业态面积查看详细接口
  exportCmprotypeAreaForDto: '/api/exportCmprotypeAreaForDto', // 基准成本编制说明项目规划指标业态面积导出接口
  lookProtypeAttributeDto: '/api/lookProtypeAttributeDto', // 基准成本编制说明项目规划指标业态属性查看详细接口
  exportProtypeAttributeDto: '/api/exportProtypeAttributeDto', // 基准成本编制说明项目规划指标业态属性导出接口
  exportProtypeConfigHierarchyDto: '/api/exportProtypeConfigHierarchyDto', // 基准成本编制说明业态配置标准层级选项、导出接口
  lookProductTypeDto: '/api/lookProductTypeDto', // 基准成本编制说明业态配置标准查看详细接口
  lookStandardProtypeBuild: '/api/standardProtypeBuild', // 基准成本编制说明业态建造标准查看详细接口
  exportStandardCollectHierarchy: '/api/exportStandardCollectHierarchy', // 基准成本编制说明成本汇总层级选项、导出接口
  lookStandardCollectPlan: '/api/lookStandardCollectPlan', // 基准成本编制说明成本汇总规划指标查看详细接口
  lookStandardCollect: '/api/lookStandardCollect', // 基准成本编制说明成本汇总查看详细接口
  lookStandardNotBuild: '/api/lookStandardNotBuild', // 基准成本编制说明基本成本非建安成本测算查看详细接口
  lookStandardCostBuildBaseEngineer: '/api/lookStandardCostBuildBaseEngineer', // 基准成本编制说明基本成本建安成本测算地基与基础工程查看详细接口
  exportStandardCostBuildBaseEngineer: '/api/exportStandardCostBuildBaseEngineer', // 基准成本编制说明基本成本建安成本测算地基与基础工程导出接口
  exportStandardCostBuildHeightHierarchy: '/api/exportStandardCostBuildHeightHierarchy', // 基准成本编制说明基本成本建安成本测算高层层级选项、导出接口
  lookStandardCostBuildHeight: '/api/lookStandardCostBuildHeight', // 基准成本编制说明基本成本建安成本测算高层查看详细接口
  getStandardCostBuildBungalowsHierarchy: '/api/getStandardCostBuildBungalowsHierarchy', // 基准成本编制说明基本成本建安成本测算洋房层级选项接口
  lookStandardCostBuildBungalows: '/api/lookStandardCostBuildBungalows', // 基准成本编制说明基本成本建安成本测算洋房查看详细接口
  getStandardCostBuildNoneGarageHierarchy: '/api/getStandardCostBuildNoneGarageHierarchy', // 基准成本编制说明基本成本建安成本测算非人防车库层级选项接口
  lookStandardCostBuildNoneGarage: '/api/lookStandardCostBuildNoneGarage', // 基准成本编制说明基本成本建安成本测算非人防车库查看详细接口
  lookStandardCostBuildGarageHierarchy: '/api/lookStandardCostBuildGarageHierarchy', // 基准成本编制说明基本成本建安成本测算人防车库层级选项接口
  lookStandardCostBuildGarage: '/api/lookStandardCostBuildGarage', // 基准成本编制说明基本成本建安成本测算人防车库查看详细接口
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
  lookStandardCostDataEngineeringCost: '/api/lookStandardCostDataEngineeringCost', // 基准成本编制说明数据库-前后期收费数据库工程相关费查看详细接口
  exportStandardCostDataBaseSupplement: '/api/exportStandardCostDataBaseSupplement', // 基准成本编制说明数据库-前后期收费数据库补充导出接口
  lookStandardCostDataBaseSupplement: '/api/lookStandardCostDataBaseSupplement', // 基准成本编制说明数据库-前后期收费数据库补充查看详细接口
  exportStandardCostDataBaseSpecialHierarchy: '/api/exportStandardCostDataBaseSpecialHierarchy', // 基准成本编制说明数据库-特殊事项清单层级选项、导出接口
  lookStandardCostDataBaseSpecialList: '/api/lookStandardCostDataBaseSpecialList', // 基准成本编制说明数据库-特殊事项清单查看详细接口
  saveStandardCostDataBaseSpecialList: '/api/saveStandardCostDataBaseSpecialList', // 基准成本编制说明数据库-特殊事项清单保存接口
  // -----------------targetCost---------------
  searchTargetCostCompanyName: '/api/searchTargetCostCompanyName', // 目标成本项目名称查询接口
  searchTargetCostStagingInformation: '/api/searchTargetCostStagingInformation', // 目标成本分期查询接口
  searchTargetCostInformation: '/api/searchTargetCostInformation', // 目标成本搜索按钮查询接口
  addTargetCostVersion: '/api/addTargetCostVersion', // 目标成本版本新增接口
  targetCostCorrelationCluster: '/api/targetCostCorrelationCluster', // 目标成本关联组团接口
  searchTargetCostSuccessMetrics: '/api/searchTargetCostSuccessMetrics', // 目标成本成功标尺查询接口
  searchTargetCostKeyIndex: '/api/searchTargetCostSuccessMetrics', // 目标成本关键指标变化查询接口
  targetCostBasicVersion: '/api/targetCostSuccessMetrics', // 基础成本版本信息
  examineBuildingBasicVersion: '/api/targetCostSuccessMetrics', // 版本信息楼栋信息查看详细接口
  examinePlanningOverallIndexBasicIndex: '/api/examinePlanningOverallIndexBasicIndex', // 项目规划指标总体指标基本信息、市政输入条件、景观指标、土方平衡查看详细接口
  examinePlanningOverallIndex: '/api/examinePlanningOverallIndex', // 项目规划指标总体指标总体指标查看详细接口
  examinePlanningOverallIndexMainPriceNo: '/api/examinePlanningOverallIndexMainPriceNo', // 目规划指标总体指标主要材料价格（不含税）查看详细接口
  examinePlanningOverallIndexFormatArea: '/api/examinePlanningOverallIndexFormatArea', // 项目规划指标业态面积查看详细接口
  examinePlanningOverallIndexFormatAttribute: '/api/examinePlanningOverallIndexFormatArea', // 目规划指标业态属性查看详细接口
  examineProjectConfigurationSchedule: '/api/examineProjectConfigurationSchedule', // 项目配置规划表查看详细接口
  examineProjectSpecialItemInventory: '/api/examineProjectSpecialItemInventory', // 项目特殊事项清单查看详细接口
  examineTargetCostSummary: '/api/examineTargetCostSummary', // 目标成本成本汇总表查看详细接口
  examineCostsCalculateAdjust: '/api/examineCostsCalculateAdjust', // 目标成本成本测算调整费项查看详细接口
  examineContractCalculateAdjust: '/api/examineTargetCostCalculateAdjust', // 目标成本成本测算调整合约规划查看详细、组团及楼栋分摊表查看详细接口
  examineCalculateAdjust: '/api/examineTargetCostCalculateAdjust', // 目标成本成本测算调整测算查看详细接口
  examineNoneFabricationCalculateAdjust: '/api/examineTargetCostCalculateAdjust', // 非建安成本测算查看详细接口
  examineFabricationBasicsCalculate: '/api/examineTargetCostCalculateAdjust', // 建安成本测算地基与基础工程、成本测算高层，非人防车库，人防车库层级选项，人防车库查看、成本测算洋房层级选项、成本测算洋房查看详细接口
  examineContractDisassemble: '/api/examineTargetCostCalculateAdjust', // 合约规划表中合约规划分解查看详细接口
  examineContract: '/api/examineContract', // 合约规划表中合约规划表查看详细接口
  examineFinanceApportion: '/api/examineFinanceApportion', // 财务口径分摊查看详细、管理口径分摊查看详细接口
  examineGroupBuildingApportion: '/api/examineGroupBuildingApportion', // 组团及楼栋分摊组团表查看详细接口
  examineGroupBuildingTable: '/api/examineGroupBuildingTable', // 组团及楼栋分摊组团表楼栋详细接口
  examineSuccessMetricsDiagram: '/api/examineSuccessMetricsDiagram', // 项目成本标尺项目成功标尺图表接口
  examineCostAdjustmentReason: '/api/examineCostAdjustmentReason', // 调整分析开发成本调整原因查看详细接口
  examineCostAdjustmentChange: '/api/examineCostAdjustmentChange', // 调整分析费项成本变化情况查看详细接口
  examineCostAdjustmentAreaChange: '/api/examineCostAdjustmentChange', // 调整分析面积规划指标变化情况查看详细/导出接口
  examineApproveDesignQuota: '/api/examineApproveDesignQuota', // 审核要点设计费限额查看详细接口
  examineApproveNegativeContract: '/api/examineApproveNegativeContract', // 审核要点负合约规划查看详细接口
  examineApproveTargetCharacteristic: '/api/examineApproveTargetCharacteristic', // 审核要点目标成本特征图表查看详细接口（2个：含土地费，不含土地费）
  examineApproveTargetPriceComparison: '/api/examineApproveTargetPriceComparison', // 审核要点目标成本含量及价格对比图表查看详细接口
  examineConstructionStandard: '/api/examineConstructionStandard' // 目标成本编制说明项目建造标准查看详细接口
}
