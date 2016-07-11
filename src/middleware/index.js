import promise from 'redux-promise'
import createLogger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'

const logger = createLogger()

export {
  logger,
  promise,
  routerMiddleware
}
