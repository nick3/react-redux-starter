import React from 'react'
import { Paper, FlatButton, Badge } from 'material-ui'
import style from './header.scss'
import HomeButton from './HomeButton'
import UserBox from './UserBox'

class Header extends React.Component {
  render() {
    return (
      <Paper
        className={style.header}
        zDepth={1}
        rounded={false}
        transitionEnabled={false}
      >
        <HomeButton />
        <UserBox username="唐丽" />
        <div className={style.title}>{this.props.title}</div>
        <Badge
          className={style.topbarBtn}
          badgeContent={10}
          primary
          badgeStyle={{ top: -5, right: 0 }}
          style={{ padding: 0 }}
        >
          <FlatButton
            label="消息"
            href="https://github.com/callemall/material-ui"
            icon={<i className="material-icons">mail_outline</i>}
          />
        </Badge>
        <FlatButton
          className={style.topbarBtn}
          label="签到"
          href="https://github.com/callemall/material-ui"
          icon={<i className="material-icons">playlist_add_check</i>}
        />
        <FlatButton
          className={style.topbarBtn}
          label="答题管理"
          href="https://github.com/callemall/material-ui"
          icon={<i className="material-icons">edit</i>}
        />
        <FlatButton
          className={style.topbarBtn}
          label="课堂信息"
          href="https://github.com/callemall/material-ui"
          primary
          icon={<i className="material-icons">class</i>}
        />
      </Paper>
    )
  }
}
Header.propTypes = {
  title: React.PropTypes.string.isRequired
}
Header.defaultProps = {
}

export default Header
