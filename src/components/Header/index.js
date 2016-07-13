import React from 'react'
import { AppBar } from 'material-ui'

class Header extends React.Component {
  render() {
    return (
      <AppBar
        title={this.props.title}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    )
  }
}
Header.propTypes = {
  title: React.PropTypes.string.isRequired
}
Header.defaultProps = {
}

export default Header
