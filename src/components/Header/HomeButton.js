import React from 'react'
import { IconButton } from 'material-ui'
import reactCSS, { hover } from 'reactcss'
import AlarmIcon from 'react-material-icons/icons/action/alarm'

const styles = reactCSS({
  default: {
    btn: {
      width: '60px',
      height: '60px',
      border: 'none',
      minWidth: '60px',
      borderRadius: '0px',
      backgroundColor: '#333'
    }
  },
  hover: {
    btn: {
      backgroundColor: '#fff'
    }
  }
})

class HomeButton extends React.Component {
  render() {
    return (
      <IconButton
        style={styles.btn}
      >
        <AlarmIcon color="#fff" />
      </IconButton>
    )
  }
}

HomeButton.defaultProps = {
}

export default hover(HomeButton)
