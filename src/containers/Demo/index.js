/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Header from 'components/Header'
import ClassroomCard from 'components/ClassroomCard'
import CardButton from 'components/CardButton'
import style from './demo.scss'

// import classnames from 'classnames'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#41D2AE',
    accent1Color: '#EE4341',
  }
})

/* Populated by react-webpack-redux:reducer */
class Demo extends Component {
  getClassroomCards(classes) {
    return classes.map(classInfo => (
      <ClassroomCard class={style.classroomCard} key={classInfo.classId} info={classInfo} />
    ))
  }

  render() {
    const { classes } = this.props

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header title="Demo" />
          <div className={style.container}>
            {this.getClassroomCards(classes)}
            <CardButton class="foo" />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
Demo.propTypes = {
  classes: PropTypes.array,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const classInfo = {
    classId: 1,
    teacherName: '唐丽',
    schoolName: '华中科技大学',
    collegeName: '电子信息与通信学院',
    teacherDesc: '副教授，IEEE协会高级会员'
  }
  const props = {
    classes: [classInfo]
  }
  return props
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {}
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}
export default connect(mapStateToProps, mapDispatchToProps)(Demo)
