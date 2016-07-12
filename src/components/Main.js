require('normalize.css/normalize.css')
require('styles/App.css')
import { Link } from 'react-router'

import React from 'react'

let yeomanImage = require('../images/yeoman.png')

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <Link to="/demo">Demo</Link>
      </div>
    )
  }
}

AppComponent.defaultProps = {
}

export default AppComponent
