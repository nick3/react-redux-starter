import React from 'react'
import { Avatar } from 'material-ui'
import style from './header.scss'

const yeomanImage = require('../../images/yeoman.png')

class UserBox extends React.Component {
  render() {
    return (
      <div className={style.userBox}>
        <Avatar
          src={yeomanImage}
          size={32}
        />
        <a className={style.username}>{this.props.username}</a>
        <span>早上好</span>
      </div>
    )
  }
}

UserBox.propTypes = {
  username: React.PropTypes.string.isRequired
}
UserBox.defaultProps = {
  username: '用户'
}

export default UserBox
