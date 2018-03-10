const getters = {
  app: state => state.app,
  user: state => state.user,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  $dashboard: state => state.$dashboard,
  $contract: state => state.$contract,
  $payment: state => state.$payment,
  $cost: state => state.$cost,
  $demo: state => state.$demo,
  investmentCost: state => state.$cost.investmentCost,
  investmentVersion: state => state.$cost.investmentCost.investmentVersion,
  specialItem: state => state.$cost.investmentCost.specialItem,
  targetCost: state => state.$cost.targetCost // 目标成本
}
export default getters
