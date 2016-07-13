import baseConfig from './base'

const config = {
  appEnv: 'dev',  // feel free to remove the appEnv property here
  apiServer: '/v1/'
}

export default Object.freeze(Object.assign({}, baseConfig, config))
