const getters = {
  app: state => state.app,
  user: state => state.user,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  dashboard: state => state.dashboard,
  $contract: state => state.$contract,
  $payment: state => state.$payment,
  cost: state => state.cost,
  $demo: state => state.$demo
}
export default getters
