import * as path from 'path'

// 更改日志地址
export const CHANGELOG_URL = 'https://github.com/bszhct/cli/blob/master/CHANGELOG.md'
// 工程所在的根目录
export const ROOT_DIT = path.join(__dirname, '..')
// 缓存的根目录
export const CACHE_ADDRESS = `${ROOT_DIT}/_templates`
// 模板列表
export const TEMPLATES = [{
  name: '组件（React）',
  value: 'github:bszhct/template-component#master'
}, {
  name: '脚手架（React + Mobx）',
  value: 'github:bszhct/template-react#master'
}, {
  name: '脚手架（Node CLI）',
  value: 'github:bszhct/template-node#master'
}, {
  name: '组件 || 示例专用（Vue）',
  value: 'github:bszhct/template-vue-component#master'
}, {
  name: '组件库（Vue）',
  value: 'github:bszhct/template-vue-kit#master'
}, {
  name: 'eggjs + sequelize',
  value: 'github:bszhct/template-egg#master'
}]

// 需要动态写入的 package.json 信息
export const PKG_INFO = [{
  type: 'input',
  name: 'version',
  message: '请输入项目版本号',
  default: '1.0.0'
}, {
  type: 'input',
  name: 'description',
  message: '请填写项目描述',
  default: '项目描述'
}]
