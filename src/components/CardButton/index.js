import React from 'react'
import { RaisedButton } from 'material-ui'
import reactCSS, { hover } from 'reactcss'
// import style from './CardButton.scss'

const styles = reactCSS({
  default: {
    btn: {
      width: '300px',
      height: '400px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
      color: '#aaa',
      fontWeight: 'normal',
      fontSize: '140px',
      marginTop: '130px'
    }
  }
})

class CardButton extends React.Component {
  render() {
    return (
      <RaisedButton style={styles.btn}>
        <i style={styles.icon} className="material-icons">add</i>
      </RaisedButton>
    )
  }
}

CardButton.propTypes = {
}
CardButton.defaultProps = {
}

export default CardButton
