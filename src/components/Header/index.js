import React from 'react'
import { AppBar } from 'material-ui'

class Header extends React.Component {
  render() {
    return (
      <AppBar
        title={this.props.title}
        iconClassNameRight="muidocs-icon-navigation-expand-more">
      </AppBar>
    )
  }
}

Header.defaultProps = {
}

export default Header
