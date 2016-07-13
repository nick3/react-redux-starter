require('normalize.css/normalize.css')
import style from 'styles/App.css'
import { Link } from 'react-router'

import React from 'react'

let yeomanImage = require('../images/yeoman.png')

class AppComponent extends React.Component {
  render() {
    return (
      <div className={style.index}>
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className={style.notice}>Please edit <code>src/components/Main.js</code> to get started!</div>
        <Link to="/demo">Demo</Link>
      </div>
    )
  }
}

AppComponent.defaultProps = {
}

export default AppComponent
