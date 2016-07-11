import { createStore, applyMiddleware } from 'redux'
import { logger, promise } from '../middleware'
import rootReducer from '../reducers'
import config from 'config'

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const middlewares = [promise]
  if (config.appEnv === 'dev') {
    middlewares.push(logger)
  }
  const createStoreWithMiddleware = applyMiddleware(
    ...middlewares
  )(create)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
