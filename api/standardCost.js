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
export function findStandardCostBase(keywords) {
  return fetch({
    url: url.findStandardCostBase,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明基础信息保存接口
 * @param keywords 入参
 * @returns promise
 */
export function saveStandardCostBase(keywords) {
  return fetch({
    url: url.saveStandardCostBase,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明项目规划指标总体指标基本信息查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostProPlanTotalIndexBase(keywords) {
  return fetch({
    url: url.lookStandardCostProPlanTotalIndexBase,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明项目规划指标总体指标总体指标查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostProPlanTotalIndex(keywords) {
  return fetch({
    url: url.lookStandardCostProPlanTotalIndex,
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
export function lookProtypeAttributeDto(keywords) {
  return fetch({
    url: url.lookProtypeAttributeDto,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明项目规划指标业态属性导出接口
 * @param keywords 入参
 * @returns promise
 */
export function exportProtypeAttributeDto(keywords) {
  return fetch({
    url: url.exportProtypeAttributeDto,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明业态配置标准层级选项、导出接口
 * @param keywords 入参
 * @returns promise
 */
export function exportProtypeConfigHierarchyDto(keywords) {
  return fetch({
    url: url.exportProtypeConfigHierarchyDto,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明业态配置标准查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookProductTypeDto(keywords) {
  return fetch({
    url: url.lookProductTypeDto,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明业态建造标准查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardProtypeBuild(keywords) {
  return fetch({
    url: url.lookStandardProtypeBuild,
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
export function lookStandardCollectPlan(keywords) {
  return fetch({
    url: url.lookStandardCollectPlan,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明成本汇总查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCollect(keywords) {
  return fetch({
    url: url.lookStandardCollect,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明基本成本非建安成本测算查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardNotBuild(keywords) {
  return fetch({
    url: url.lookStandardNotBuild,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明基本成本建安成本测算地基与基础工程查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostBuildBaseEngineer(keywords) {
  return fetch({
    url: url.lookStandardCostBuildBaseEngineer,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明基本成本建安成本测算地基与基础工程导出接口
 * @param keywords 入参
 * @returns promise
 */
export function exportStandardCostBuildBaseEngineer(keywords) {
  return fetch({
    url: url.exportStandardCostBuildBaseEngineer,
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
export function lookStandardCostBuildHeight(keywords) {
  return fetch({
    url: url.lookStandardCostBuildHeight,
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
export function lookStandardCostBuildBungalows(keywords) {
  return fetch({
    url: url.lookStandardCostBuildBungalows,
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
export function lookStandardCostBuildNoneGarage(keywords) {
  return fetch({
    url: url.lookStandardCostBuildNoneGarage,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明基本成本建安成本测算人防车库层级选项接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostBuildGarageHierarchy(keywords) {
  return fetch({
    url: url.lookStandardCostBuildGarageHierarchy,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明基本成本建安成本测算人防车库查看详细接口
 * @param keywords 入参
 * @returns promise
 */
export function lookStandardCostBuildGarage(keywords) {
  return fetch({
    url: url.lookStandardCostBuildGarage,
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
export function lookStandardCostDataEngineeringCost(keywords) {
  return fetch({
    url: url.lookStandardCostDataEngineeringCost,
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
export function lookStandardCostDataBaseSpecialList(keywords) {
  return fetch({
    url: url.lookStandardCostDataBaseSpecialList,
    method: 'post',
    data: keywords
  })
}

/**
 * 基准成本编制说明数据库-特殊事项清单保存接口
 * @param keywords 入参
 * @returns promise
 */
export function saveStandardCostDataBaseSpecialList(keywords) {
  return fetch({
    url: url.saveStandardCostDataBaseSpecialList,
    method: 'post',
    data: keywords
  })
}
