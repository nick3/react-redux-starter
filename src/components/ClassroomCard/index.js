import React from 'react'
import { Paper, Avatar, IconButton } from 'material-ui'
import style from './ClassroomCard.scss'

const yeomanImage = require('../../images/yeoman.png')

class ClassroomCard extends React.Component {
  render() {
    return (
      <Paper
        className={style.classroomCard}
        style={{
          backgroundColor: '#41D2AE',
          color: 'white'
        }}
      >
        <Avatar
          src={yeomanImage}
          backgroundColor="white"
          size={120}
          style={{ border: '2px solid #fff' }}
        />
        <h1 className={style.teacherName}>{this.props.info.teacherName}</h1>
        <div className={style.schoolName}>
          <i className="material-icons">home</i>
          <span>{this.props.info.schoolName}</span>
        </div>
        <div className={style.collegeName}>
          <i className="material-icons">school</i>
          <span>{this.props.info.collegeName}</span>
        </div>
        <div className={style.teacherDesc}>
          <span>{this.props.info.teacherDesc}</span>
        </div>
        <IconButton className={style.editBtn}>
          <i className="material-icons">edit</i>
        </IconButton>
      </Paper>
    )
  }
}

ClassroomCard.propTypes = {
  info: React.PropTypes.object.isRequired
}
ClassroomCard.defaultProps = {
  info: {}
}

export default ClassroomCard
