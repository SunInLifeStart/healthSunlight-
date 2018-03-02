/**
 * 基准成本 api
 */
import fetch from './fetch'
import url from './url'

/**
 * 基准成本查询接口
 * @param keywords 入参
 * @returns promise
 */
export function findStandardCost(keywords) {
  return fetch({
    url: url.findStandardCost,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本删除接口
 * @param keywords 入参
 * @returns promise
 */
export function deleteStandardCost(keywords) {
  return fetch({
    url: url.deleteStandardCost,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明基础信息查询接口
 * @param keywords 入参
 * @returns promise
 */
export function findStandardCostBaseInfo(keywords) {
  return fetch({
    url: url.findStandardCostBaseInfo,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明基础信息保存接口
 * @param keywords 入参
 * @returns promise
 */
export function saveStandardCostBaseInfo(keywords) {
  return fetch({
    url: url.saveStandardCostBaseInfo,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明项目规划指标总体指标基本信息查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostProPlanTotalIndexBaseInfo(keywords) {
  return fetch({
    url: url.lookStandardCostProPlanTotalIndexBaseInfo,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明项目规划指标总体指标总体指标查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostProPlanTotalIndexInfo(keywords) {
  return fetch({
    url: url.lookStandardCostProPlanTotalIndexInfo,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明项目规划指标总体指标主要材料价格
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostProPlanTotalIndexMainPrice(keywords) {
  return fetch({
    url: url.lookStandardCostProPlanTotalIndexMainPrice,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明项目规划指标总体指标市政输入条件查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardMunicipalEarthDto(keywords) {
  return fetch({
    url: url.lookStandardMunicipalEarthDto,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明项目规划指标总体指标景观指标查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardViewIndicatorDto(keywords) {
  return fetch({
    url: url.lookStandardViewIndicatorDto,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明项目规划指标总体指标土方平衡查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardEarthworkDto(keywords) {
  return fetch({
    url: url.lookStandardEarthworkDto,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明项目规划指标业态面积查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookCmprotypeAreaForDto(keywords) {
  return fetch({
    url: url.lookCmprotypeAreaForDto,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明项目规划指标业态面积导出接口
 * @param keywords 入参
 * @returns promise
 */
export function exportCmprotypeAreaForDto(keywords) {
  return fetch({
    url: url.exportCmprotypeAreaForDto,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明项目规划指标业态属性查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookProtypeAttributeDtoList(keywords) {
  return fetch({
    url: url.lookProtypeAttributeDtoList,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明项目规划指标业态属性导出接口
 * @param keywords 入参
 * @returns promise
 */
export function exportProtypeAttributeDtoList(keywords) {
  return fetch({
    url: url.exportProtypeAttributeDtoList,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明业态配置标准层级选项、导出接口
 * @param keywords 入参
 * @returns promise
 */
export function exportProtypeConfigHierarchyDtoList(keywords) {
  return fetch({
    url: url.exportProtypeConfigHierarchyDtoList,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明业态配置标准查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookProductTypeDtoList(keywords) {
  return fetch({
    url: url.lookProductTypeDtoList,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明业态建造标准查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardProtypeBuildList(keywords) {
  return fetch({
    url: url.lookStandardProtypeBuildList,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明成本汇总层级选项、导出接口
 * @param keywords 入参
 * @returns promise
 */
export function exportStandardCollectHierarchy(keywords) {
  return fetch({
    url: url.exportStandardCollectHierarchy,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明成本汇总规划指标查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCollectPlanInfo(keywords) {
  return fetch({
    url: url.lookStandardCollectPlanInfo,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明成本汇总查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCollectInfo(keywords) {
  return fetch({
    url: url.lookStandardCollectInfo,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明基本成本非建安成本测算查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardNotBuildInfo(keywords) {
  return fetch({
    url: url.lookStandardNotBuildInfo,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明基本成本建安成本测算地基与基础工程查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostBuildBaseEngineerInfo(keywords) {
  return fetch({
    url: url.lookStandardCostBuildBaseEngineerInfo,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明基本成本建安成本测算地基与基础工程导出接口
 * @param keywords 入参
 * @returns promise
 */
export function exportStandardCostBuildBaseEngineerInfo(keywords) {
  return fetch({
    url: url.exportStandardCostBuildBaseEngineerInfo,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明基本成本建安成本测算高层层级选项、导出接口
 * @param keywords 入参
 * @returns promise
 */
export function exportStandardCostBuildHeightHierarchy(keywords) {
  return fetch({
    url: url.exportStandardCostBuildHeightHierarchy,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明基本成本建安成本测算高层查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostBuildHeightInfo(keywords) {
  return fetch({
    url: url.lookStandardCostBuildHeightInfo,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明基本成本建安成本测算洋房层级选项接口
 * @param keywords 入参
 * @returns promise
 */
export function getStandardCostBuildBungalowsHierarchy(keywords) {
  return fetch({
    url: url.getStandardCostBuildBungalowsHierarchy,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明基本成本建安成本测算洋房查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostBuildBungalowsInfo(keywords) {
  return fetch({
    url: url.lookStandardCostBuildBungalowsInfo,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明基本成本建安成本测算非人防车库层级选项接口
 * @param keywords 入参
 * @returns promise
 */
export function getStandardCostBuildNoneGarageHierarchy(keywords) {
  return fetch({
    url: url.getStandardCostBuildNoneGarageHierarchy,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明基本成本建安成本测算非人防车库查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostBuildNoneGarageInfo(keywords) {
  return fetch({
    url: url.lookStandardCostBuildNoneGarageInfo,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明基本成本建安成本测算人防车库层级选项接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostBuildGarageInfoHierarchy(keywords) {
  return fetch({
    url: url.lookStandardCostBuildGarageInfoHierarchy,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明基本成本建安成本测算人防车库查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostBuildGarageInfo(keywords) {
  return fetch({
    url: url.lookStandardCostBuildGarageInfo,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明报表-成本分摊表-财务/管理保存接口
 * @param keywords 入参
 * @returns promise
 */
export function saveStandardCostStatementShareFinance(keywords) {
  return fetch({
    url: url.saveStandardCostStatementShareFinance,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明报表-成本分摊表-财务/管理查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostStatementShareFinance(keywords) {
  return fetch({
    url: url.lookStandardCostStatementShareFinance,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明报表-建安合约规划导出接口
 * @param keywords 入参
 * @returns promise
 */
export function exportStandardCostStatementBuildContract(keywords) {
  return fetch({
    url: url.exportStandardCostStatementBuildContract,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明报表-建安合约规划查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostStatementBuildContract(keywords) {
  return fetch({
    url: url.lookStandardCostStatementBuildContract,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明数据库-设计费限额保存
 * @param keywords 入参
 * @returns promise
 */
export function saveStandardCostDataBaseLimit(keywords) {
  return fetch({
    url: url.saveStandardCostDataBaseLimit,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明数据库-设计费限额查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostDataBaseLimit(keywords) {
  return fetch({
    url: url.lookStandardCostDataBaseLimit,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明数据库-前后期收费数据库前期工程费导出接口
 * @param keywords 入参
 * @returns promise
 */
export function exportStandardCostDataBaseEarlier(keywords) {
  return fetch({
    url: url.exportStandardCostDataBaseEarlier,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明数据库-前后期收费数据库前期工程费查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostDataBaseEarlier(keywords) {
  return fetch({
    url: url.lookStandardCostDataBaseEarlier,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明数据库-前后期收费数据库配套设施费导出接口
 * @param keywords 入参
 * @returns promise
 */
export function exportStandardCostDataBaseAncillaryFacility(keywords) {
  return fetch({
    url: url.exportStandardCostDataBaseAncillaryFacility,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明数据库-前后期收费数据库配套设施费查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostDataBaseAncillaryFacility(keywords) {
  return fetch({
    url: url.lookStandardCostDataBaseAncillaryFacility,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明数据库-前后期收费数据库基础设施费导出接口
 * @param keywords 入参
 * @returns promise
 */
export function exportStandardCostDataBaseBaseFacility(keywords) {
  return fetch({
    url: url.exportStandardCostDataBaseBaseFacility,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明数据库-前后期收费数据库基础设施费查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostDataBaseBaseFacility(keywords) {
  return fetch({
    url: url.lookStandardCostDataBaseBaseFacility,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明数据库-前后期收费数据库工程相关费导出接口
 * @param keywords 入参
 * @returns promise
 */
export function exportStandardCostDataBaseEngineeringCost(keywords) {
  return fetch({
    url: url.exportStandardCostDataBaseEngineeringCost,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明数据库-前后期收费数据库工程相关费查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostDataBaseEngineeringCost(keywords) {
  return fetch({
    url: url.lookStandardCostDataBaseEngineeringCost,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明数据库-前后期收费数据库补充导出接口
 * @param keywords 入参
 * @returns promise
 */
export function exportStandardCostDataBaseSupplement(keywords) {
  return fetch({
    url: url.exportStandardCostDataBaseSupplement,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明数据库-前后期收费数据库补充查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostDataBaseSupplement(keywords) {
  return fetch({
    url: url.lookStandardCostDataBaseSupplement,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明数据库-特殊事项清单层级选项、导出接口
 * @param keywords 入参
 * @returns promise
 */
export function exportStandardCostDataBaseSpecialHierarchy(keywords) {
  return fetch({
    url: url.exportStandardCostDataBaseSpecialHierarchy,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明数据库-特殊事项清单查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostDataBaseSpecialHierarchy(keywords) {
  return fetch({
    url: url.lookStandardCostDataBaseSpecialHierarchy,
    method: 'post',
    data: keywords
  })
}
