export default {
  logo: (state, getters) => getters['app/logo'],
  loginLogo: (state, getters) => getters['app/loginLogo'],
  copyright: (state, getters) => getters['app/copyright'],
  workflow: state => state.app.workflow,
  companyInfo: state => state.app.companyInfo,
  scope: state => state.auth.scope,
  auth: state => state.auth,
  userInfo: state => state.auth.info,
  capability: state => state.auth.capability,
  permission: state => state.auth.permission,
  scopeResource: state => state.auth.scopeResource,
  windows: state => state.window.windows,
  common: state => state.common,
  dialogs: state => state.dialog.dialogs,
  sidePages: state => state.sidePage.sidePages,
  isAdminMode: (state, getters) => getters['auth/isAdminMode'],
  isDomainMode: (state, getters) => getters['auth/isDomainMode'],
  l3PermissionEnable: (state, getters) => getters['auth/l3PermissionEnable'],
  currentScopeResource: (state, getters) => getters['auth/currentScopeResource'],
}
