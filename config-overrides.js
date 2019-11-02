// module.exports = function overrides(config, env) {
//   return config
// }
const {override, fixBabelImports} = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  })
)